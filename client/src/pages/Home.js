import React, { useState } from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ResultCard from '../components/ResultCard';
import { analyzeConversation } from '../services/api';

const Home = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (text) => {
    setIsLoading(true);
    setError('');
    
    try {
      const data = await analyzeConversation(text);
      setResult(data);
    } catch (err) {
      setError('Connection Error: Please ensure the SalesMind AI backend server is running.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header 
        title="Analyze Conversation" 
        subtitle="Paste a transcript of your sales interaction to automatically generate insights."
      />
      
      <div className="page-content">
        {error && (
          <div className="highlight-red" style={{ marginBottom: '24px' }}>
            {error}
          </div>
        )}
        
        <div className={result ? "grid-2" : ""} style={{ maxWidth: result ? '1200px' : '700px', margin: result ? '0' : '0 auto' }}>
          
          <div className="analyze-input-col">
            <InputForm onSubmit={handleAnalyze} isLoading={isLoading} />
          </div>

          {result && (
            <div className="analyze-result-col">
              <ResultCard result={result} hideTitle={false} />
            </div>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Home;
