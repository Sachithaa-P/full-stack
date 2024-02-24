import React, { useState, useEffect } from 'react';

function Viewfeed() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Simulated feedback data
    const feedbackData = [
      { id: 1, customerName: 'John Doe', serviceName: 'Cleaning', rating: 4, comment: 'Great service!' },
      { id: 2, customerName: 'Jane Smith', serviceName: 'Transportation', rating: 5, comment: 'Very satisfied!' },
      { id: 3, customerName: 'Alice Johnson', serviceName: 'Cooking', rating: 3, comment: 'Could be better.' },
    ];

    setFeedbackList(feedbackData);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: 'blue' }}>Customer Feedback</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {feedbackList.map(feedback => (
          <div key={feedback.id} style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px', marginRight: '10px' }}>
            <h2 style={{ marginBottom: '5px', color: 'green' }}>{feedback.customerName}</h2>
            <p><strong>Service:</strong> {feedback.serviceName}</p>
            <p><strong>Rating:</strong> {feedback.rating}</p>
            <p><strong>Comment:</strong> {feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewfeed;
