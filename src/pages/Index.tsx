
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, MessageSquare, User } from "lucide-react";

const Index = () => {
  const [userName] = useState("Mike");

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-100 to-medical-200">
      <nav className="glass-morphism fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold text-medical-700">MediBot</div>
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
        <header className="mb-12">
          <div className="glass-card rounded-2xl p-8 animate-fade-up">
            <h1 className="text-4xl font-bold mb-2 text-medical-900">
              Hi, {userName}
            </h1>
            <p className="text-medical-600">
              Welcome to your dashboard! Here you can manage your prescriptions and track your medications.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-morphism p-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-xl font-semibold mb-4 text-medical-700">Active Prescriptions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-medical-100 rounded-lg">
                <p className="text-sm text-medical-600">No active prescriptions</p>
              </div>
            </div>
          </Card>

          <Card className="glass-morphism p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl font-semibold mb-4 text-medical-700">Medication Schedule</h2>
            <div className="space-y-4">
              <div className="p-4 bg-medical-100 rounded-lg">
                <p className="text-sm text-medical-600">No scheduled medications</p>
              </div>
            </div>
          </Card>

          <Card className="glass-morphism p-6 md:col-span-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-xl font-semibold mb-4 text-medical-700">Recent Activity</h2>
            <div className="space-y-4">
              <div className="p-4 bg-medical-100 rounded-lg">
                <p className="text-sm text-medical-600">No recent activity</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
