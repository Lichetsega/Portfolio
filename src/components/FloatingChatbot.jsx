import React, { useState, useRef, useEffect } from 'react';
import { aiKnowledgeBase, samplePrompts } from '../data/portfolioData';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi there! I'm Li's Virtual Assistant. Ask me about Liche's AI engineering at insa, Agentic RAG projects, tech stack, or full-time availability!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const getAnswer = (q) => {
    const query = q.toLowerCase();
    if (query.includes('insa') || query.includes('internship') || query.includes('experience') || query.includes('work')) {
      return aiKnowledgeBase.insa;
    }
    if (query.includes('rag') || query.includes('agent') || query.includes('retrieval') || query.includes('vector') || query.includes('chromadb')) {
      return aiKnowledgeBase.rag;
    }
    if (query.includes('voice') || query.includes('gemini') || query.includes('assistant') || query.includes('websocket')) {
      return aiKnowledgeBase.assistant;
    }
    if (query.includes('backend') || query.includes('database') || query.includes('stack') || query.includes('fastapi') || query.includes('postgres')) {
      return aiKnowledgeBase.backend;
    }
    if (query.includes('jimma') || query.includes('university') || query.includes('education') || query.includes('degree')) {
      return aiKnowledgeBase.education;
    }
    if (query.includes('contact') || query.includes('hire') || query.includes('available') || query.includes('email') || query.includes('telegram')) {
      return aiKnowledgeBase.availability;
    }
    if (query.includes('project') || query.includes('ethiopia') || query.includes('code')) {
      return aiKnowledgeBase.projects;
    }
    return aiKnowledgeBase.default;
  };

  const handleSendMessage = (textToSend) => {
    const q = (textToSend || inputValue).trim();
    if (!q) return;

    const newMsgs = [...messages, { role: 'user', text: q }];
    setMessages(newMsgs);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getAnswer(q);
      setMessages([...newMsgs, { role: 'bot', text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="floating-chatbot-container">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="chatbot-window card-glass" role="dialog" aria-label="Li's AI Virtual Assistant">
          {/* Header */}
          <div className="chatbot-window-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                  <rect x="3" y="8" width="18" height="12" rx="4" />
                  <circle cx="8" cy="14" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="14" r="1.5" fill="currentColor" />
                  <path d="M9 18h6" />
                </svg>
              </div>
              <div>
                <div className="chatbot-header-title">Li's AI Assistant</div>
                <div className="chatbot-header-sub">
                  <span className="pulse-indicator-small"></span>
                  <span>Online • AI Knowledge Engine</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close-btn"
              aria-label="Close assistant window"
            >
              ✕
            </button>
          </div>

          {/* Quick Starter Chips */}
          <div className="chatbot-chips-bar">
            {samplePrompts.slice(0, 3).map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt.query)}
                className="chatbot-quick-chip"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Message Transcript */}
          <div className="chatbot-messages-scroll">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`chatbot-msg-bubble ${m.role === 'user' ? 'user-bubble' : 'bot-bubble'}`}
              >
                {m.text}
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-msg-bubble bot-bubble typing-dots">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="chatbot-input-form"
          >
            <input
              type="text"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chatbot-text-input"
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Send">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button Cluster */}
      <div className="chatbot-fab-cluster">
        {/* Floating Callout Tooltip */}
        {!isOpen && showTooltip && (
          <div
            className="chatbot-callout-pill"
            onClick={() => {
              setIsOpen(true);
              setShowTooltip(false);
            }}
          >
            <span className="pulse-indicator-small"></span>
            <span>Chat with Li's Assistant</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="callout-dismiss-btn"
              title="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        {/* Circular Action Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setShowTooltip(false);
          }}
          className={`chatbot-fab-btn ${isOpen ? 'active-open' : ''}`}
          aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
          title={isOpen ? "Close AI Assistant" : "Chat with Li's Assistant"}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <>
              {/* Cute Bot Icon with Headset */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="6" width="16" height="12" rx="4" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <circle cx="12" cy="2" r="1" fill="currentColor" />
                <circle cx="9" cy="12" r="1.5" fill="currentColor" />
                <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                <path d="M9 15c.67.67 1.33 1 3 1s2.33-.33 3-1" />
                <path d="M2 12h2M20 12h2" />
              </svg>
              {/* Live Emerald Pulse Dot */}
              <span className="fab-online-dot"></span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
