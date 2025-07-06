import React, { useState } from 'react';

function WeddingAttendance() {
  const [passphrase, setPassphrase] = useState('');
  const [objects, setObjects] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setObjects(null);
    setLoading(true);
    try {
      const response = await fetch('https://6agdwiu7k5.execute-api.us-east-2.amazonaws.com/prod/wedding-attendees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${passphrase}`
        },
        body: JSON.stringify({})
      });
      if (response.ok) {
        const data = await response.json();
        setObjects(data.objects); // Use 'objects' from the response
      } else {
        setError('Incorrect passphrase or server error.');
      }
    } catch (err) {
      setError('Network error.');
    }
    setLoading(false);
  };

  return (
    <div className="container py-4">
      <h2>Wedding Attendance (Admin)</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="password"
          value={passphrase}
          onChange={e => setPassphrase(e.target.value)}
          placeholder="Enter passphrase"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'View RSVPs'}
        </button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
      {objects && (
        <div>
          <h4>RSVPs:</h4>
          <ul>
            {objects.map((obj, idx) => (
              <li key={idx}>
                <strong>{obj.Key}</strong>
                <pre>{JSON.stringify(obj.Data, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeddingAttendance; 