import React, { useState } from 'react';

const ApiTest = () => {
  const [testResult, setTestResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testApi = async () => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    console.log('API Key exists:', !!apiKey);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/3175?api_key=${apiKey}`
      );
      const data = await response.json();

      setTestResult(JSON.stringify(data, null, 2));
      console.log('API Test Result:', data);
    } catch (error) {
      setTestResult(`Error: ${error.message}`);
      console.error('API Test Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        background: '#333',
        margin: '20px',
        borderRadius: '5px',
      }}
    >
      <h3>API Test</h3>
      <button onClick={testApi} disabled={loading}>
        {loading ? 'Testing...' : 'Test TMDB API'}
      </button>

      <pre
        style={{
          background: '#222',
          padding: '10px',
          marginTop: '10px',
          fontSize: '12px',
          maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        {testResult || 'Click button to test API'}
      </pre>
    </div>
  );
};

export default ApiTest;
