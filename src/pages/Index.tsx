
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PlusCircle, FileText, PenLine, Bell, MessageCircle, User } from "lucide-react";

interface Prescription {
  id: string;
  prescription_id: string;
  name: string;
  dosage: string;
  status: string;
  description?: string;
  info?: string;
  created_at: string;
}

const Index = () => {
  const { toast } = useToast();
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [userType, setUserType] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('user_type, preferred_name')
            .eq('id', user.id)
            .single();

          if (profileError) {
            console.error('Error fetching profile:', profileError);
            toast({
              variant: "destructive",
              title: "Error",
              description: "Failed to fetch user profile",
            });
            return;
          }

          setUserId(user.id);
          setUserType(profileData?.user_type || null);
          setUserName(profileData?.preferred_name || user.email?.split('@')[0] || "User");

          let query = supabase.from('prescriptions').select('*');
          if (profileData?.user_type === 'patient') {
            query = query.eq('user_id', user.id);
          }

          const { data: prescriptionData, error } = await query;
          if (error) {
            toast({
              variant: "destructive",
              title: "Error",
              description: "Failed to fetch prescriptions",
            });
          } else {
            setPrescriptions(prescriptionData || []);
          }
        }
      } catch (error) {
        console.error('Error:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch user data",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7FD]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-[#9b87f5] text-2xl font-bold">MediBot</h1>
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <Card className="mb-8 bg-white shadow-lg">
          <CardContent className="pt-6">
            <h2 className="text-4xl font-bold text-[#221F26] mb-2">Hi, {userName}</h2>
            <p className="text-[#9b87f5]">
              Welcome to your dashboard! Here you can manage your prescriptions and track your medications.
            </p>
          </CardContent>
        </Card>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Active Prescriptions */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-[#9b87f5]">Active Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                {prescriptions.filter(p => p.status === 'Active').length === 0 
                  ? "No active prescriptions"
                  : `${prescriptions.filter(p => p.status === 'Active').length} active prescriptions`}
              </p>
            </CardContent>
          </Card>

          {/* Medication Schedule */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-[#9b87f5]">Medication Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">No scheduled medications</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-[#9b87f5]">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">No recent activity</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
