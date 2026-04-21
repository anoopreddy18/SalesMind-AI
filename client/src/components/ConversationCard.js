import React, { useState } from 'react';
import ResultCard from './ResultCard';
import SentimentBadge from './SentimentBadge';

const ConversationCard = ({ conversation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate a short preview of the text
  const previewText = conversation.text.length > 80 
    ? conversation.text.substring(0, 80) + '...'
    : conversation.text;

  return (
    <div className="card" style={{ marginBottom: '16px', padding: '16px' }}>
      <div 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', gap: '16px' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
            <SentimentBadge sentiment={conversation.sentiment} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
              {new Date(conversation.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {previewText}
          </div>
        </div>

        <button className="btn btn-outline" style={{ padding: '8px' }}>
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>

      {isExpanded && (
        <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
          <div style={{ padding: '16px', backgroundColor: 'var(--neutral-bg)', marginBottom: '20px', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
            <strong>Original Text:</strong>
            <br />
            {conversation.text}
          </div>
          
          <ResultCard result={conversation} hideTitle={true} />
        </div>
      )}
    </div>
  );
};

export default ConversationCard;
