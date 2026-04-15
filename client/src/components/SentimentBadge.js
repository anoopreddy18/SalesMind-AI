import React from 'react';

const SentimentBadge = ({ sentiment }) => {
  // Normalize the text so we can easily check it
  const text = (sentiment || '').toLowerCase().trim();
  
  let type = 'neutral';
  if (text.includes('positive')) {
    type = 'positive';
  } else if (text.includes('negative')) {
    type = 'negative';
  }

  return (
    <span className={`badge badge-${type}`}>
      {sentiment || 'Neutral'}
    </span>
  );
};

export default SentimentBadge;
