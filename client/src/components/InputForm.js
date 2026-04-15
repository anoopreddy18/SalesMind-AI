import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const InputForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="input-group">
        <label className="input-label" htmlFor="sales-text">
          Raw Transcript
        </label>
        <textarea 
          id="sales-text"
          className="modern-input"
          placeholder={"Sales rep: Hi! We can help with that...\nCustomer: I'm not sure if it fits our budget...\nSales rep: Let me walk you through our ROI..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isLoading}
        />
      </div>
      
      <div className="form-actions">
        <button 
          className="btn btn-primary" 
          type="submit" 
          disabled={isLoading || !text.trim()}
        >
          {isLoading ? (
            <>
              <LoadingSpinner /> Analyzing...
            </>
          ) : (
            'Analyze Conversation'
          )}
        </button>
        
        <button 
          className="btn btn-outline" 
          type="button" 
          onClick={handleClear}
          disabled={isLoading || !text.trim()}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default InputForm;
