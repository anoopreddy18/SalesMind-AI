import React from 'react';

const SkeletonUI = () => {
  return (
    <div className="card grid-result" style={{ marginTop: '24px' }}>
      <div className="flex-between" style={{ marginBottom: '24px', gridColumn: '1 / -1' }}>
        <h3 className="skeleton skeleton-title" style={{ margin: 0, width: '120px', height: '24px' }}></h3>
        <div className="skeleton skeleton-title" style={{ width: '100px', height: '28px', borderRadius: '4px' }}></div>
      </div>

      <div className="result-section">
        <div className="result-section-title skeleton skeleton-text" style={{ width: '80px', height: '14px', marginBottom: '12px' }}></div>
        <div className="skeleton" style={{ width: '90px', height: '28px', borderRadius: '9999px' }}></div>
      </div>

      <div className="result-section">
        <div className="result-section-title skeleton skeleton-text" style={{ width: '80px', height: '14px', marginBottom: '12px' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '100%', height: '16px', marginBottom: '6px' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '90%', height: '16px', marginBottom: '6px' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '95%', height: '16px' }}></div>
      </div>

      <div className="result-section">
        <div className="result-section-title skeleton skeleton-text" style={{ width: '100px', height: '14px', marginBottom: '12px' }}></div>
        <div style={{ paddingLeft: '20px' }}>
          <div className="skeleton skeleton-text" style={{ width: '80%', height: '14px', marginBottom: '8px' }}></div>
          <div className="skeleton skeleton-text" style={{ width: '85%', height: '14px', marginBottom: '8px' }}></div>
          <div className="skeleton skeleton-text" style={{ width: '75%', height: '14px' }}></div>
        </div>
      </div>

      <div className="result-section">
        <div className="result-section-title skeleton skeleton-text" style={{ width: '130px', height: '14px', marginBottom: '12px' }}></div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div className="skeleton" style={{ width: '80px', height: '26px', borderRadius: '4px' }}></div>
          <div className="skeleton" style={{ width: '110px', height: '26px', borderRadius: '4px' }}></div>
          <div className="skeleton" style={{ width: '90px', height: '26px', borderRadius: '4px' }}></div>
        </div>
      </div>

      <div className="result-section" style={{ gridColumn: '1 / -1' }}>
        <div className="result-section-title skeleton skeleton-text" style={{ width: '150px', height: '14px', marginBottom: '12px' }}></div>
        <div className="skeleton" style={{ width: '100%', height: '80px', borderRadius: '6px' }}></div>
      </div>
    </div>
  );
};

export default SkeletonUI;
