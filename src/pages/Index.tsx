
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, MessageSquare, User, Mic } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [userName, setUserName] = useState("Mark");
  const [userInput, setUserInput] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const { data: prescriptionsData, error } = await supabase
          .from("prescriptions")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPrescriptions(prescriptionsData || []);
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  const handleVoiceInput = () => {
    // Voice input functionality will be implemented later
    console.log("Voice input clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-100 to-medical-200">
      <nav className="glass-morphism fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold text-medical-700">Meridian Minds</div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-medical-100 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-medical-600" />
          </button>
          <button className="p-2 hover:bg-medical-100 rounded-full transition-colors">
            <MessageSquare className="w-6 h-6 text-medical-600" />
          </button>
          <button className="p-2 hover:bg-medical-100 rounded-full transition-colors">
            <User className="w-6 h-6 text-medical-600" />
          </button>
        </div>
      </nav>

      <main className="container pt-24 pb-16 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Prescriptions and Notifications */}
          <div className="space-y-6">
            {/* Prescriptions Carousel */}
            <Card className="glass-morphism p-6">
              <h2 className="text-2xl font-bold mb-4 text-medical-700">PRESCRIPTIONS</h2>
              <div className="space-y-4">
                {isLoading ? (
                  <p className="text-medical-600">Loading prescriptions...</p>
                ) : prescriptions.length > 0 ? (
                  prescriptions.map((prescription: any) => (
                    <div key={prescription.id} className="p-4 bg-white rounded-lg shadow">
                      <p className="font-medium">Prescription ID: {prescription.prescription_id}</p>
                      <p>Name: {prescription.name}</p>
                      <p>Dosage: {prescription.dosage}</p>
                      <p>Status: {prescription.status}</p>
                      <p className="text-sm text-medical-600">
                        Created: {new Date(prescription.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-medical-600">No prescriptions found</p>
                )}
              </div>
            </Card>

            {/* Pickups and Notifications */}
            <Card className="glass-morphism p-6">
              <Tabs defaultValue="pickups">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pickups">PICKUPS</TabsTrigger>
                  <TabsTrigger value="notifications">NOTIFICATIONS</TabsTrigger>
                </TabsList>
                <TabsContent value="pickups" className="mt-4">
                  <div className="space-y-2">
                    <p className="font-medium">Feb 29th - Prescription</p>
                    <p className="text-medical-600">Ready for pickup</p>
                  </div>
                </TabsContent>
                <TabsContent value="notifications" className="mt-4">
                  <div className="space-y-2">
                    <p className="font-medium">YOUR ORDER HAS PROCESSED</p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Column - Chat Interface */}
          <div className="space-y-6">
            {/* Input Area */}
            <Card className="glass-morphism p-6">
              <div className="flex items-center gap-4">
                <Input
                  placeholder={`Hello... ${userName}.. type here or talk`}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleVoiceInput}
                  className="rounded-full"
                >
                  <Mic className="h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* Output Area */}
            <Card className="glass-morphism p-6 min-h-[400px]">
              <h2 className="text-2xl font-bold mb-4 text-center">OUTPUT HERE</h2>
              <div className="flex items-center justify-center h-64">
                <img 
                  src="/lovable-uploads/cdf15c5b-5bef-4bad-a743-88c20f9a492f.png" 
                  alt="Meridian Minds Logo" 
                  className="max-w-[200px] opacity-50"
                />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
