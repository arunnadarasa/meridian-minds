import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface UserData {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  phone_number: string;
}

interface Prescription {
  prescription_id: string;
  name: string;
  dosage: string;
  description: string;
}

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState<string | null>(null);
  const [prescription, setPrescription] = useState<Prescription>({
    prescription_id: "",
    name: "",
    dosage: "",
    description: "",
  });
  const [userData, setUserData] = useState<UserData>({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
  });

  useEffect(() => {
    const checkSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }
      setUserId(user.id);
      
      try {
        // Check if user has already completed profile
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('first_name, last_name, date_of_birth, phone_number')
          .eq('id', user.id)
          .maybeSingle();

        if (profileError) throw profileError;

        if (profileData?.first_name) {
          navigate("/");
          return;
        }

        // Fetch prescription data if it exists
        const { data: prescriptionData } = await supabase
          .from('prescriptions')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (prescriptionData) {
          setPrescription(prescriptionData);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch profile data",
        });
        navigate("/auth");
      }
    };

    checkSession();
  }, [navigate, toast]);

  const handlePrescriptionConfirm = async () => {
    if (!userId) return;

    try {
      const { error } = await supabase
        .from('prescriptions')
        .upsert({
          user_id: userId,
          ...prescription,
          status: 'Active'
        });

      if (error) throw error;

      setStep(2);
      toast({
        title: "Prescription confirmed",
        description: "Let's complete your profile",
      });
    } catch (error) {
      console.error('Error confirming prescription:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to confirm prescription details",
      });
    }
  };

  const handleUserDataSubmit = async () => {
    if (!userId) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          ...userData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "Profile completed!",
        description: "Welcome to MediBot",
      });
      navigate("/");
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update profile",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7FD] py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-[#9b87f5]">
              {step === 1 ? "Confirm Your Prescription" : "Complete Your Profile"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prescription_id">Prescription ID</Label>
                  <Input
                    id="prescription_id"
                    value={prescription.prescription_id}
                    onChange={(e) => setPrescription(prev => ({
                      ...prev,
                      prescription_id: e.target.value
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Medication Name</Label>
                  <Input
                    id="name"
                    value={prescription.name}
                    onChange={(e) => setPrescription(prev => ({
                      ...prev,
                      name: e.target.value
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    value={prescription.dosage}
                    onChange={(e) => setPrescription(prev => ({
                      ...prev,
                      dosage: e.target.value
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={prescription.description}
                    onChange={(e) => setPrescription(prev => ({
                      ...prev,
                      description: e.target.value
                    }))}
                  />
                </div>
                <Button 
                  className="w-full bg-[#9b87f5] hover:bg-[#8b77e5]"
                  onClick={handlePrescriptionConfirm}
                >
                  Confirm Prescription
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    value={userData.first_name}
                    onChange={(e) => setUserData(prev => ({
                      ...prev,
                      first_name: e.target.value
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    value={userData.last_name}
                    onChange={(e) => setUserData(prev => ({
                      ...prev,
                      last_name: e.target.value
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date_of_birth">Date of Birth</Label>
                  <Input
                    id="date_of_birth"
                    type="date"
                    value={userData.date_of_birth}
                    onChange={(e) => setUserData(prev => ({
                      ...prev,
                      date_of_birth: e.target.value
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone_number">Phone Number</Label>
                  <Input
                    id="phone_number"
                    value={userData.phone_number}
                    onChange={(e) => setUserData(prev => ({
                      ...prev,
                      phone_number: e.target.value
                    }))}
                  />
                </div>
                <Button 
                  className="w-full bg-[#9b87f5] hover:bg-[#8b77e5]"
                  onClick={handleUserDataSubmit}
                >
                  Complete Profile
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
