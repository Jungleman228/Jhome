import React, { useState } from 'react';
import axios from 'axios';

const DeepSeekChat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');

    try {
      // Отправляем запрос на наш бэкенд
      const response = await axios.post('http://localhost:3001/api/chat', {
        messages: updatedMessages,
      });

      const aiMessage = response.data.choices[0].message;
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Ошибка:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Извините, произошла ошибка при соединении с сервером.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', top: '200px', padding: '20px' }}>
      <div style={{ 
        height: '400px', 
        overflowY: 'auto', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        padding: '15px', 
        marginBottom: '15px',
        backgroundColor: '#f9f9f9'
      }}>
        {messages.length === 0 ? (
          <div style={{ color: '#666', textAlign: 'center', marginTop: '50%' }}>
            Начните диалог с DeepSeek AI
          </div>
        ) : (
          messages.map((msg, index) => (
            <div 
              key={index} 
              style={{ 
                margin: '10px 0',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: msg.role === 'user' ? '#e3f2fd' : '#ffffff',
                border: '1px solid #eee',
                wordBreak: 'break-word'
              }}
            >
              <strong>{msg.role === 'user' ? 'Вы' : 'AI'}:</strong> 
              <div style={{ marginTop: '5px' }}>{msg.content}</div>
            </div>
          ))
        )}
        {isLoading && (
          <div style={{ textAlign: 'center', color: '#666', margin: '10px 0' }}>
            ИИ думает...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите ваш вопрос..."
          style={{ 
            flex: 1, 
            padding: '12px', 
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px'
          }}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{ 
            padding: '12px 20px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            opacity: isLoading ? 0.7 : 1
          }}
        >
          {isLoading ? '...' : 'Отправить'}
        </button>
      </form>
    </div>
  );
};

export default DeepSeekChat;
