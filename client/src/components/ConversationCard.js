import React, { useState } from 'react';
import ResultCard from './ResultCard';
import SentimentBadge from './SentimentBadge';

const ConversationCard = ({ conversation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card" style={{ marginBottom: '24px' }}>
      <div className="flex-between" style={{ marginBottom: '16px' }}>
        <div>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Analyzed on: {new Date(conversation.createdAt).toLocaleString()}
          </span>
        </div>
        <SentimentBadge sentiment={conversation.sentiment} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          className="btn btn-outline" 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ width: '100%', justifyContent: 'space-between' }}
        >
          {isExpanded ? 'Hide Original Text' : 'View Original Text'}
          <svg style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        
        {isExpanded && (
          <div style={{ padding: '16px', backgroundColor: 'var(--neutral-bg)', marginTop: '12px', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
            {conversation.text}
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
        <ResultCard result={conversation} hideTitle={true} />
      </div>
    </div>
  );
};

export default ConversationCard;
