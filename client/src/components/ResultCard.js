import React, { useState } from 'react';
import SentimentBadge from './SentimentBadge';

const ResultCard = ({ result, hideTitle = false }) => {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const handleCopy = () => {
    const textToCopy = `
Sentiment: ${result.sentiment}
Summary: ${result.summary}
Insights: ${result.insights}
Objections: ${result.objections}
Suggestions: ${result.suggestions}
    `.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Convert plain text bullet points (e.g. "- point") to an array of items
  const formatList = (text) => {
    if (!text) return null;
    const items = text.split('\n').filter(i => i.trim().length > 0);
    return (
      <ul>
        {items.map((item, idx) => {
          const cleanItem = item.replace(/[-*]/g, "").trim();
          return cleanItem ? <li key={idx}>{cleanItem}</li> : null;
        })}
      </ul>
    );
  };

  return (
    <div className={hideTitle ? "" : "card"} style={hideTitle ? {} : { marginTop: '24px' }}>

      <div className="flex-between" style={{ marginBottom: '24px' }}>
        {!hideTitle && <h3 style={{ margin: 0, fontSize: '1.25rem' }}>AI Report</h3>}
        {hideTitle && <div></div> /* filler if title is hidden */}

        <button className="btn btn-outline" onClick={handleCopy} style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>

      <div className="result-section">
        <div className="result-section-title">Sentiment</div>
        <div className="result-section-content">
          <SentimentBadge sentiment={result.sentiment} />
        </div>
      </div>

      <div className="result-section">
        <div className="result-section-title">Summary</div>
        <div className="result-section-content" style={{ lineHeight: '1.6' }}>
          {result.summary || 'No summary generated.'}
        </div>
      </div>

      <div className="result-section">
        <div className="result-section-title">Key Insights</div>
        <div className="result-section-content">
          {formatList(result.insights) || <p>No insights detected.</p>}
        </div>
      </div>

      <div className="result-section">
        <div className="result-section-title">Customer Objections</div>
        <div className="result-section-content highlight-red">
          {formatList(result.objections) || <p>No major objections.</p>}
        </div>
      </div>

      <div className="result-section">
        <div className="result-section-title">Actionable Suggestions</div>
        <div className="result-section-content highlight-green">
          {formatList(result.suggestions) || <p>Keep up the good work!</p>}
        </div>
      </div>

    </div>
  );
};

export default ResultCard;
