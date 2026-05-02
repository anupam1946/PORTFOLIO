import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const SYSTEM_PROMPT = `You are a professional AI assistant for Anupam Pratap Singh K.C's portfolio website. Your job is to answer questions from visitors about Anupam's skills, experience, projects, services, and availability.

Here is everything you need to know about Anupam:

PERSONAL INFO:
- Full Name: Anupam Pratap Singh K.C
- Title: Full Stack Developer & UI Designer
- Location: Bhairahawa, Nepal
- Email: anupamchettri67@gmail.com
- Degree: BSc. CSIT Graduate, Tribhuvan University, 2024
- GPA: 3.6/4.0
- College: Himalayan Whitehouse College

BIO:
Anupam is a passionate full stack developer and UI/UX enthusiast who graduated with BSc. CSIT in 2024. He loves building elegant, performant web experiences. He specializes in modern web applications using React, Node.js, and cloud technologies. Beyond coding, he is passionate about UI/UX design, photography, and reading about emerging tech trends.

SKILLS:
- Frontend: React, TypeScript, Next.js, Tailwind CSS, GSAP
- Backend: Node.js, Express, Python, Django, REST APIs
- Database: PostgreSQL, MongoDB, MySQL, Firebase, Redis
- Tools: Git, Docker, AWS, Figma, Linux

EXPERIENCE:
1. Junior Frontend Developer at TechNova Solutions, Kathmandu (Jan 2024 – Present)
   - Building and maintaining client-facing React applications
   - Improved app performance by 40% through code splitting and lazy loading

2. Web Development Intern at Digital Craft Studios, Kathmandu (Jun 2023 – Dec 2023)
   - Developed responsive web pages using HTML, CSS, JavaScript
   - Built a CMS dashboard that reduced content update time by 60%

3. Freelance Developer (2022 – 2023)
   - Delivered 10+ freelance projects including e-commerce sites, landing pages, portfolios

PROJECTS:
1. NepMarket – Full-stack e-commerce platform for Nepali businesses with eSewa/Khalti payment integration, React, Node.js, PostgreSQL
2. MindSpace – Mental health journaling PWA with mood tracking, Firebase, React
3. CodeCollab – Real-time collaborative code editor with Socket.io, WebRTC, 20+ languages
4. WeatherNP – Nepal weather dashboard covering all 77 districts, OpenWeather API, D3.js
5. TaskFlow – Notion-inspired project management tool, Next.js, Prisma, PostgreSQL
6. CryptoTrace – Crypto portfolio tracker with live prices, CoinGecko API, Recharts

SERVICES OFFERED:
- Full stack web application development
- Frontend development with React and Next.js
- UI/UX design and implementation
- E-commerce website development
- REST API development with Node.js
- Database design and management
- Website performance optimization
- Freelance projects and consulting

AVAILABILITY:
- Currently available for freelance projects and full-time opportunities
- Open to remote work internationally
- Typically responds within 24 hours
- Contact: anupamchettri67@gmail.com

SOCIAL LINKS:
- GitHub: https://github.com/anupam1946/
- LinkedIn: https://linkedin.com/in/anupam-chettri-3b1617323/

IMPORTANT INSTRUCTIONS:
- Answer only questions related to Anupam's portfolio, skills, services, projects, experience, and availability
- Be professional, friendly, and concise
- If someone asks about pricing, say rates depend on project scope and to contact Anupam directly via email
- If someone asks something completely unrelated to Anupam or web development, politely redirect them
- Keep answers short and clear — 2 to 4 sentences max unless more detail is needed
- Always encourage visitors to reach out via the contact form or email for serious inquiries
- Speak about Anupam in third person (he/his)`;

const SUGGESTED_QUESTIONS = [
  "What services does Anupam offer?",
  "What tech stack does he use?",
  "Is he available for freelance?",
  "Tell me about his projects",
];

export default function Chatbot() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Anupam's AI assistant. I can answer any questions about his skills, projects, services, or availability. How can I help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && chatRef.current) {
      gsap.fromTo(
        chatRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" },
      );
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    const userMessage = { role: "user", content: userText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      /* Build Gemini contents array — skip the first assistant greeting
         since Gemini requires conversations to start with 'user' role   */
      const history = updatedMessages
        .slice(1) // skip greeting
        .map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history,
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      const data = await res.json();

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.candidates[0].content.parts[0].text,
          },
        ]);
      } else {
        throw new Error("Empty response");
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble right now. Please reach out to Anupam directly at anupamchettri67@gmail.com",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const bg = isDark ? "bg-zinc-900" : "bg-white";
  const border = isDark ? "border-white/10" : "border-zinc-200";
  const inputBg = isDark
    ? "bg-zinc-800 border-white/10 text-white placeholder-zinc-500"
    : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400";

  return (
    <>
      {/* ── Floating button ── */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-2xl shadow-indigo-500/40 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
          <span className="absolute inset-0 rounded-2xl bg-indigo-500 animate-ping opacity-20" />
        </button>
      )}

      {/* ── Chat window ── */}
      {isOpen && (
        <div
          ref={chatRef}
          className={`fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl border shadow-2xl ${bg} ${border} overflow-hidden transition-all duration-300 ${
            isMinimized ? "w-72 h-14" : "w-80 sm:w-96 h-[530px]"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-indigo-500 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-none">
                  Anupam's Assistant
                </p>
                <p className="text-indigo-200 text-xs mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online · Powered by Gemini
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized((v) => !v)}
                className="w-7 h-7 rounded-lg hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Minimize2 size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-white ${
                        msg.role === "assistant"
                          ? "bg-indigo-500"
                          : "bg-zinc-600"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <Bot size={14} />
                      ) : (
                        <User size={14} />
                      )}
                    </div>
                    <div
                      className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === "assistant"
                          ? isDark
                            ? "bg-zinc-800 text-zinc-200 rounded-tl-sm"
                            : "bg-zinc-100 text-zinc-800 rounded-tl-sm"
                          : "bg-indigo-500 text-white rounded-tr-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {loading && (
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500 shrink-0 flex items-center justify-center">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl rounded-tl-sm ${isDark ? "bg-zinc-800" : "bg-zinc-100"}`}
                    >
                      <div className="flex gap-1 items-center h-4">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested questions — only on first message */}
              {messages.length === 1 && (
                <div className={`px-4 pb-3 border-t ${border}`}>
                  <p
                    className={`text-xs mb-2 mt-3 font-mono uppercase tracking-wider ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                  >
                    Suggested
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className={`text-left text-xs px-3 py-2 rounded-xl border transition-colors ${
                          isDark
                            ? "border-white/5 hover:border-indigo-500/40 text-zinc-400 hover:text-indigo-400 bg-zinc-800/50"
                            : "border-zinc-200 hover:border-indigo-300 text-zinc-600 hover:text-indigo-600 bg-zinc-50"
                        }`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className={`p-3 border-t ${border} shrink-0`}>
                <div className="flex gap-2 items-end">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    rows={1}
                    disabled={loading}
                    className={`flex-1 px-3.5 py-2.5 rounded-xl border text-sm outline-none resize-none transition-all focus:border-indigo-500/50 disabled:opacity-50 ${inputBg}`}
                    style={{ maxHeight: "80px" }}
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || loading}
                    className="w-9 h-9 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-105"
                  >
                    <Send size={15} />
                  </button>
                </div>
                <p
                  className={`text-center text-[10px] mt-2 font-mono ${isDark ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  Powered by Gemini AI · Free
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
