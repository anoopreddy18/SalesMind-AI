import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ConversationCard from '../components/ConversationCard';
import StatCard from '../components/StatCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { getConversations } from '../services/api';

const Dashboard = () => {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getConversations();
        setConversations(data);
      } catch (err) {
        setError('Failed to load past conversations. Is the SalesMind AI backend available?');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  // Compute stats
  const totalConvs = conversations.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let neutralCount = 0;

  conversations.forEach(conv => {
    const sent = (conv.sentiment || '').toLowerCase();
    if (sent.includes('positive')) positiveCount++;
    else if (sent.includes('negative')) negativeCount++;
    else neutralCount++;
  });

  return (
    <>
      <Header 
        title="Sales History Overview" 
        subtitle="Track your AI analyzed sales conversations over time."
      />
      
      <div className="page-content">
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <LoadingSpinner />
          </div>
        )}

        {error && (
          <div className="highlight-red">
            {error}
          </div>
        )}

        {!isLoading && !error && conversations.length > 0 && (
          <>
            <div className="grid-4" style={{ marginBottom: '32px' }}>
              <StatCard label="Total Analyzed" value={totalConvs} />
              <StatCard label="Positive Outcomes" value={positiveCount} />
              <StatCard label="Negative Outcomes" value={negativeCount} />
              <StatCard label="Neutral Outcomes" value={neutralCount} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-main)' }}>
                Recent Conversations
              </h3>
              {conversations.map(conv => (
                <ConversationCard key={conv._id} conversation={conv} />
              ))}
            </div>
          </>
        )}

        {!isLoading && !error && conversations.length === 0 && (
          <div className="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            <h3>No Conversations Yet</h3>
            <p>You haven't analyzed any sales calls. Head to the Analyze tab to get started.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
