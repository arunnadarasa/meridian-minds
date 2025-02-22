
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, userType } = await req.json();

    // Different system prompts based on user type
    const systemPrompts = {
      patient: "You are a helpful medical assistant. Provide clear, patient-friendly information about medications and general health advice. Never provide medical diagnosis or prescriptions.",
      doctor: "You are a medical knowledge assistant. Help with medical terminology, drug interactions, and treatment guidelines. Cite medical sources when possible.",
      pharmacy: "You are a pharmacy assistant. Help with medication information, dosing guidelines, and drug interactions. Provide accurate pharmaceutical information.",
    };

    // Get AI response from ElevenLabs
    const response = await fetch('https://api.elevenlabs.io/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': Deno.env.get('ELEVENLABS_API_KEY') || '',
      },
      body: JSON.stringify({
        text: message,
        character_id: "medical_assistant",
        history: {
          messages: [
            {
              role: "system",
              content: systemPrompts[userType as keyof typeof systemPrompts]
            }
          ]
        },
        voice_id: "EXAVITQu4vr4xnSDxMaL", // Using Sarah's voice
        model_id: "eleven_multilingual_v2",
      }),
    });

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("ElevenLabs response:", data);

    return new Response(JSON.stringify({ response: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in chat function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
