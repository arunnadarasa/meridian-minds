import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PlusCircle, FileText, PenLine, Send, Bot } from "lucide-react";

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
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [isAiTyping, setIsAiTyping] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: userData } = await supabase
          .from('users')
          .select('user_type')
          .eq('id', user.id)
          .single();
        
        setUserId(user.id);
        setUserType(userData?.user_type || null);
        
        let query = supabase.from('prescription').select('*');
        
        if (userData?.user_type === 'patient') {
          query = query.eq('user_id', user.id);
        } else if (userData?.user_type === 'doctor') {
          query = query.eq('doctor_id', user.id);
        } else if (userData?.user_type === 'pharmacy') {
          query = query.eq('pharmacy_id', user.id);
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
      setLoading(false);
    };

    fetchUserData();
  }, [toast]);

  const handleSendMessage = async () => {
    if (!message.trim() || !userType) return;

    const userMessage = message;
    setMessage("");
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsAiTyping(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-ai', {
        body: { message: userMessage, userType },
      });

      if (error) throw error;

      setChatMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get AI response. Please try again.",
      });
    } finally {
      setIsAiTyping(false);
    }
  };

  const renderPatientView = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">My Prescriptions</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{prescription.name}</span>
                <span className="text-sm px-2 py-1 bg-medical-100 rounded-full">
                  {prescription.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Dosage: {prescription.dosage}</p>
              {prescription.description && (
                <p className="text-sm text-gray-600 mt-2">{prescription.description}</p>
              )}
              <p className="text-xs text-gray-400 mt-4">
                Prescribed on: {new Date(prescription.created_at).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderDoctorView = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Prescriptions Management</h2>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          New Prescription
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{prescription.name}</span>
                <Button variant="ghost" size="icon">
                  <PenLine className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Dosage: {prescription.dosage}</p>
              <p className="text-sm text-gray-600 mt-2">Status: {prescription.status}</p>
              {prescription.description && (
                <p className="text-sm text-gray-600 mt-2">{prescription.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPharmacyView = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Prescription Queue</h2>
        <div className="flex gap-2">
          <Input placeholder="Search prescriptions..." className="w-64" />
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{prescription.name}</span>
                <span className="text-sm px-2 py-1 bg-medical-100 rounded-full">
                  {prescription.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Dosage: {prescription.dosage}</p>
              {prescription.description && (
                <p className="text-sm text-gray-600 mt-2">{prescription.description}</p>
              )}
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">Reject</Button>
                <Button size="sm">Dispense</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderChat = () => (
    <div className={`fixed bottom-4 right-4 w-96 transition-all duration-300 ${isChatOpen ? 'translate-y-0' : 'translate-y-[calc(100%-3.5rem)]'}`}>
      <Card className="shadow-xl">
        <CardHeader className="cursor-pointer" onClick={() => setIsChatOpen(!isChatOpen)}>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Medical Assistant
          </CardTitle>
        </CardHeader>
        {isChatOpen && (
          <CardContent>
            <div className="h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isAiTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                      Typing...
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Ask a question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} disabled={!message.trim() || isAiTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {userType === 'patient' && renderPatientView()}
      {userType === 'doctor' && renderDoctorView()}
      {userType === 'pharmacy' && renderPharmacyView()}
      {renderChat()}
    </div>
  );
};

export default Index;
