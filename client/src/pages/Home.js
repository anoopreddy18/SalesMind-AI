import React, { useState } from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ResultCard from '../components/ResultCard';
import SkeletonUI from '../components/SkeletonUI';
import { analyzeConversation } from '../services/api';

const SAMPLE_TEXT = `Sales rep: Hi, thanks for taking the time to speak with me today.
Customer: No problem. I'm looking for a new CRM solution, but I'm worried about the implementation time and cost.
Sales rep: I completely understand. A lot of our clients had those same concerns. Our platform is designed to deploy within 48 hours, and we provide dedicated onboarding. Based on your team size, ROI is typically seen within the first quarter.
Customer: That sounds good, but what about the pricing?
Sales rep: We actually have a very flexible pricing tier. Let me show you how it aligns with your budget.`;

const Home = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (textToAnalyze) => {
    setIsLoading(true);
    setError('');
    // Clear previous results to show skeleton properly if retrying
    setResult(null);
    
    try {
      const data = await analyzeConversation(textToAnalyze);
      setResult(data);
    } catch (err) {
      setError('Connection Error: Please ensure the SalesMind AI backend server is running.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTrySample = () => {
    setText(SAMPLE_TEXT);
  };

  const handleClear = () => {
    setText('');
    setResult(null);
  };

  return (
    <>
      <Header 
        title="Analyze Conversation" 
        subtitle="Paste a transcript of your sales interaction to automatically generate insights."
      >
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-outline" onClick={handleTrySample} disabled={isLoading}>
            Try Sample
          </button>
          <button className="btn btn-outline" onClick={handleClear} disabled={isLoading || (!text && !result)}>
            Clear Input
          </button>
        </div>
      </Header>
      
      <div className="page-content">
        {error && (
          <div className="highlight-red" style={{ marginBottom: '24px' }}>
            {error}
          </div>
        )}
        
        <div className={(result || isLoading) ? "grid-2" : ""} style={{ maxWidth: (result || isLoading) ? '1200px' : '700px', margin: (result || isLoading) ? '0' : '0 auto', transition: 'var(--transition)' }}>
          
          <div className="analyze-input-col">
            <InputForm text={text} setText={setText} onSubmit={handleAnalyze} isLoading={isLoading} />
          </div>

          {(isLoading || result) && (
            <div className="analyze-result-col">
              {isLoading ? <SkeletonUI /> : <ResultCard result={result} hideTitle={false} />}
            </div>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Home;
