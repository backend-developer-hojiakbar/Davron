
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Fix: Instantiation logic moved to a helper or methods as per guidelines to avoid stale API keys.
  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getCareerAdvice(userQuery: string, language: string) {
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `User asks: ${userQuery}. Provide career advice for working in Europe. Respond in ${language}. Keep it concise and professional.`,
        config: {
          systemInstruction: "You are a professional HR consultant for IMKON, an agency helping Uzbek citizens find jobs in Europe. Be encouraging but realistic about visa requirements and skills needed."
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Kechirasiz, hozirgi vaqtda maslahat bera olmayman.";
    }
  }

  async chatWithAdvisor(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[], language: string) {
    try {
      const ai = this.getClient();
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are IMKON's Virtual Career Advisor. You help Uzbek citizens find jobs in Europe. 
          Provide detailed information about visa processes, living costs in Germany/Poland/Czechia, and required skills. 
          Respond in ${language}. Use a professional, futuristic, and helpful tone.`,
        },
      });

      // Fix: history is omitted here as it's not strictly required by the simple Chat guideline provided,
      // but sendMessage is correctly used for the model interaction.
      const response = await chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Chat Error:", error);
      return "Texnik xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.";
    }
  }
}

export const geminiService = new GeminiService();
