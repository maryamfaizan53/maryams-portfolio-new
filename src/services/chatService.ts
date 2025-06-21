
const GEMINI_API_KEY = "AIzaSyAGLAjT5r-12r070xiq7EQzX_Cn3YB7-8k";
const GEMINI_MODEL = "gemini-1.5-flash";

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are Maryam Faizan's personal AI assistant. You help clients learn about Maryam's skills, experience, and services. 

About Maryam Faizan:
- Expert AI/ML Engineer and Full-Stack Developer
- Specializes in React, Node.js, Python, TensorFlow, PyTorch
- Experience with LLMs, Computer Vision, NLP
- Builds scalable web applications and AI solutions
- Available for freelance projects and consultations
- Professional, innovative, and client-focused
- Passionate about turning complex problems into elegant solutions

Respond as her helpful assistant in a friendly, professional tone. Keep responses concise but informative. If asked about specific projects or pricing, suggest they contact Maryam directly through the contact form.

User question: ${message}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0]?.content?.parts[0]?.text || "I'm sorry, I couldn't process that request. Please try again.";
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I'm experiencing some technical difficulties. Please use the contact form to reach Maryam directly.";
  }
};
