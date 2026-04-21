import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ConversationCard from '../components/ConversationCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { getConversations } from '../services/api';

const History = () => {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSentiment, setFilterSentiment] = useState('all');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getConversations();
        setConversations(data);
      } catch (err) {
        setError('Failed to load past conversations.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const filteredConversations = conversations.filter(conv => {
    // Check search term
    const matchSearch = conv.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check sentiment
    if (filterSentiment === 'all') return matchSearch;
    const sent = (conv.sentiment || '').toLowerCase();
    const matchSentiment = sent.includes(filterSentiment);
    
    return matchSearch && matchSentiment;
  });

  return (
    <>
      <Header 
        title="History" 
        subtitle="Search and review your past sales conversation analyses."
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

        {!isLoading && !error && (
          <>
            <div className="card" style={{ marginBottom: '24px', padding: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <input
                    type="text"
                    className="modern-input"
                    placeholder="Search past conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ height: '40px', padding: '8px 16px' }}
                  />
                </div>
                <div>
                  <select 
                    className="modern-input" 
                    style={{ height: '40px', padding: '8px 16px', minWidth: '150px' }}
                    value={filterSentiment}
                    onChange={(e) => setFilterSentiment(e.target.value)}
                  >
                    <option value="all">All Sentiments</option>
                    <option value="positive">Positive</option>
                    <option value="negative">Negative</option>
                    <option value="neutral">Neutral</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              {filteredConversations.length > 0 ? (
                filteredConversations.map(conv => (
                  <ConversationCard key={conv._id} conversation={conv} />
                ))
              ) : (
                <div className="empty-state" style={{ marginTop: '32px' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <h3>No matching conversations found</h3>
                  <p>Try clearing your search filters.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default History;
