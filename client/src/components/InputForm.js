import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const InputForm = ({ text, setText, onSubmit, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= 2000) {
      setText(newText);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="input-group" style={{ marginBottom: '8px' }}>
        <label className="input-label" htmlFor="sales-text">
          Raw Transcript
        </label>
        <textarea 
          id="sales-text"
          className="modern-input"
          placeholder={"Sales rep: Hi! We can help with that...\nCustomer: I'm not sure if it fits our budget...\nSales rep: Let me walk you through our ROI..."}
          value={text}
          onChange={handleTextChange}
          disabled={isLoading}
          maxLength={2000}
        />
        <div className="character-counter">
          {text.length}/2000 characters
        </div>
      </div>
      
      <div className="form-actions" style={{ marginTop: '16px' }}>
        <button 
          className="btn btn-primary" 
          type="submit" 
          disabled={isLoading || !text.trim()}
          style={{ width: '100%' }}
        >
          {isLoading ? (
            <>
              <LoadingSpinner /> Analyzing...
            </>
          ) : (
            'Analyze Conversation'
          )}
        </button>
      </div>
    </form>
  );
};

export default InputForm;
