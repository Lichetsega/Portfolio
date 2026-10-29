import React, { useState, useRef, useEffect } from 'react';
import { aiKnowledgeBase, samplePrompts } from '../data/portfolioData';

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hello! I am Liche's interactive neural agent. Feel free to ask about her Agentic RAG systems, 6-month AI engineering at INSA, backend architectures, or job availability!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const transcriptEndRef = useRef(null);

  const scrollToBottom = () => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getAgentAnswer = (query) => {
    const q = query.toLowerCase();
    if (q.includes('insa') || q.includes('internship') || q.includes('experience') || q.includes('work')) {
      return aiKnowledgeBase.insa;
    }
    if (q.includes('rag') || q.includes('agent') || q.includes('retrieval') || q.includes('vector') || q.includes('chromadb')) {
      return aiKnowledgeBase.rag;
    }
    if (q.includes('voice') || q.includes('gemini') || q.includes('assistant') || q.includes('websocket')) {
      return aiKnowledgeBase.assistant;
    }
    if (q.includes('backend') || q.includes('database') || q.includes('stack') || q.includes('fastapi') || q.includes('postgres')) {
      return aiKnowledgeBase.backend;
    }
    if (q.includes('jimma') || q.includes('university') || q.includes('education') || q.includes('degree')) {
      return aiKnowledgeBase.education;
    }
    if (q.includes('contact') || q.includes('hire') || q.includes('available') || q.includes('email') || q.includes('telegram')) {
      return aiKnowledgeBase.availability;
    }
    if (q.includes('project') || q.includes('portfolio') || q.includes('ethiopia') || q.includes('code')) {
      return aiKnowledgeBase.projects;
    }
    return aiKnowledgeBase.default;
  };

  const handleSend = (textToSend) => {
    const q = (textToSend || inputValue).trim();
    if (!q) return;

    // Append user message
    const newMessages = [...messages, { role: 'user', text: q }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    // Simulate agent routing & response latency
    setTimeout(() => {
      const response = getAgentAnswer(q);
      setMessages([...newMessages, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 450);
  };

  const handleClear = () => {
    setMessages([
      {
        role: 'bot',
        text: "Transcript reset. Ask me anything regarding Liche's projects, experience, or tech stack!"
      }
    ]);
  };

  return (
    <section className="section" id="assistant">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Interactive AI Demo</span>
          </div>
          <h2 className="section-title">Query Li's Agent Simulator</h2>
          <p className="section-subtitle">
            Experience intent routing logic inspired by <strong>Li's AI Voice Assistant</strong> & <strong>Visit Ethiopia Agentic RAG</strong>.
          </p>
        </div>

        <div className="card-glass ai-sim-box">
          {/* Topbar */}
          <div className="ai-sim-topbar">
            <div className="ai-agent-status">
              <span className="pulse-indicator"></span>
              <span>Neural Agent: Online • Fast Latency</span>
            </div>

            <button
              onClick={handleClear}
              className="btn-ghost btn-sm"
              style={{ fontSize: '0.8rem', cursor: 'pointer', border: 'none' }}
              title="Clear transcript"
            >
              Clear Chat
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="ai-chips-group">
            {samplePrompts.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSend(item.query)}
                className="ai-chip-prompt"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Chat Transcript Area */}
          <div className="chat-transcript-area">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-bubble-row ${msg.role === 'user' ? 'user-row' : ''}`}
              >
                <div
                  className={`chat-avatar-indicator ${
                    msg.role === 'user' ? 'user-avatar' : 'bot-avatar'
                  }`}
                >
                  {msg.role === 'user' ? 'YOU' : 'LT'}
                </div>

                <div
                  className={`chat-bubble-content ${
                    msg.role === 'user' ? 'user-bubble' : 'bot-bubble'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-row">
                <div className="chat-avatar-indicator bot-avatar">LT</div>
                <div className="chat-bubble-content bot-bubble" style={{ color: 'var(--text-muted)' }}>
                  <span>Synthesizing answer...</span>
                </div>
              </div>
            )}

            <div ref={transcriptEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="chat-input-row"
          >
            <input
              type="text"
              placeholder="Ask about Liche's AI architecture, INSA experience, or tech stack..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chat-input-field"
            />
            <button type="submit" className="btn btn-primary" aria-label="Send Message">
              <span>Send</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
