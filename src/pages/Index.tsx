import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, MessageSquare, User, Mic } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Conversation } from "@11labs/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const clientTools = {
  getCustomerDetails: async () => {
    // Fetch customer details (e.g., from an API)
    const customerData = {
      id: 123,
      name: "Alice",
      subscription: "Pro"
    };
    // Return data directly to the agent.
    return customerData;
  }
};

// UNCOMMENT THIS TO HAVE THE WORKING CONVERSATION
// Start the conversation with client tools configured.
//const conversation = await Conversation.startSession({ 
//  agentId: '8pkVgwjpCRqjsfbGte5P',
//  clientTools
//});

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
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

    const checkSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth/login");
        toast({
          variant: "destructive",
          title: "Authentication required",
          description: "Please log in to continue"
        });
        return;
      }
    };

    checkSession();
    fetchPrescriptions();
  }, [navigate, toast]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error logging out",
        description: error.message
      });
      return;
    }
    toast({
      title: "Logged out successfully",
      description: "See you soon!"
    });
    navigate("/auth/login");
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 hover:bg-medical-100 rounded-full transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <main className="container pt-24 pb-16 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
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
                    <p className="font-medium">Feb 28th - Prescription</p>
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
        </div>
      </main>
      <elevenlabs-convai agent-id="8pkVgwjpCRqjsfbGte5P"></elevenlabs-convai>
    </div>
  );
};

export default Index;
