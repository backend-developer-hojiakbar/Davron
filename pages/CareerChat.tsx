
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { geminiService } from '../services/geminiService';
import { useGlobal } from '../GlobalContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const CareerChat: React.FC = () => {
  const { lang } = useGlobal();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      { role: 'model', text: lang === 'UZ' ? "Assalomu alaykum! Men IMKON sun'iy intellekt maslahatchisiman. Yevropada karera boshlash bo'yicha qanday savollaringiz bor?" : lang === 'RU' ? "Здравствуйте! Я ИИ-консультант IMKON. Какие у вас вопросы по поводу начала карьеры в Европе?" : "Hello! I am IMKON's AI advisor. What questions do you have about starting a career in Europe?" }
    ]);
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await geminiService.chatWithAdvisor(userMsg, [], lang);
    setMessages(prev => [...prev, { role: 'model', text: response || 'Error' }]);
    setIsLoading(false);
  };

  return (
    <div className="pt-24 pb-12 bg-slate-900 min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto w-full px-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-6">
          <Link to="/jobs" className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Vakansiyalarga qaytish</span>
          </Link>
          <div className="flex items-center space-x-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">AI Advisor Live</span>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-[32px] border border-slate-700/50 flex flex-col flex-grow overflow-hidden shadow-2xl">
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] flex items-start space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-slate-700 border border-slate-600'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div className={`p-4 rounded-[24px] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-700/50 text-slate-200 border border-slate-600/30'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-indigo-400 animate-pulse" />
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-2xl flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-700/50 bg-slate-800/80">
            <div className="relative max-w-3xl mx-auto">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Savolingizni yozing..."
                className="w-full bg-slate-900 border border-slate-700 text-white pl-6 pr-16 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerChat;