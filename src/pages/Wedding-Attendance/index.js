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
      
      if (response.status === 401) {
        setError('Wrong passphrase');
      } else if (response.ok) {
        const data = await response.json();
        setObjects(data.objects);
      } else {
        setError('Server error. Please try again.');
      }
    } catch (err) {
      setError('Wrong passphrase');
    }
    setLoading(false);
  };

  const downloadCSV = () => {
    if (!objects || objects.length === 0) return;

    // Create CSV header
    const headers = ['Name', 'Contact', 'Guest Count', 'Attendance', 'Guest Name'];
    
    // Create CSV rows
    const csvRows = [headers.join(',')];
    
    objects.forEach(obj => {
      const data = obj.Data;
      const guests = Array.isArray(data.guests) ? data.guests : [];
      
      if (guests.length === 0) {
        // One row with N/A for guest
        const row = [
          `"${data.name || ''}"`,
          `"${data.contact || ''}"`,
          data.count || '',
          `"${data.attendance || ''}"`,
          'N/A'
        ];
        csvRows.push(row.join(','));
      } else {
        // One row for each guest
        guests.forEach(guest => {
          const row = [
            `"${data.name || ''}"`,
            `"${data.contact || ''}"`,
            data.count || '',
            `"${data.attendance || ''}"`,
            `"${guest}"`
          ];
          csvRows.push(row.join(','));
        });
      }
    });

    // Create and download file
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'wedding-rsvps.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAcceptCSV = () => {
    if (!objects || objects.length === 0) return;

    const acceptObjects = objects.filter(obj => obj.Data.attendance === 'Accept');
    if (acceptObjects.length === 0) return;

    // Create CSV header
    const headers = ['Name', 'Contact', 'Guest Count', 'Attendance', 'Guest Name'];
    
    // Create CSV rows
    const csvRows = [headers.join(',')];
    
    acceptObjects.forEach(obj => {
      const data = obj.Data;
      const guests = Array.isArray(data.guests) ? data.guests : [];
      
      if (guests.length === 0) {
        const row = [
          `"${data.name || ''}"`,
          `"${data.contact || ''}"`,
          data.count || '',
          `"${data.attendance || ''}"`,
          'N/A'
        ];
        csvRows.push(row.join(','));
      } else {
        guests.forEach(guest => {
          const row = [
            `"${data.name || ''}"`,
            `"${data.contact || ''}"`,
            data.count || '',
            `"${data.attendance || ''}"`,
            `"${guest}"`
          ];
          csvRows.push(row.join(','));
        });
      }
    });

    // Create and download file
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'wedding-accepts.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadOtherCSV = () => {
    if (!objects || objects.length === 0) return;

    const otherObjects = objects.filter(obj => obj.Data.attendance !== 'Accept');
    if (otherObjects.length === 0) return;

    // Create CSV header
    const headers = ['Name', 'Contact', 'Guest Count', 'Attendance', 'Guest Name'];
    
    // Create CSV rows
    const csvRows = [headers.join(',')];
    
    otherObjects.forEach(obj => {
      const data = obj.Data;
      const guests = Array.isArray(data.guests) ? data.guests : [];
      
      if (guests.length === 0) {
        const row = [
          `"${data.name || ''}"`,
          `"${data.contact || ''}"`,
          data.count || '',
          `"${data.attendance || ''}"`,
          'N/A'
        ];
        csvRows.push(row.join(','));
      } else {
        guests.forEach(guest => {
          const row = [
            `"${data.name || ''}"`,
            `"${data.contact || ''}"`,
            data.count || '',
            `"${data.attendance || ''}"`,
            `"${guest}"`
          ];
          csvRows.push(row.join(','));
        });
      }
    });

    // Create and download file
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'wedding-other-responses.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <h4>RSVPs ({Array.isArray(objects) ? objects.length : 'Loading...'} responses)</h4>
          {Array.isArray(objects) && objects.length > 0 ? (
            <>
              {/* Accept Table */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5>Accepting ({objects.filter(obj => obj.Data.attendance === 'Accept').length})</h5>
                  <button 
                    onClick={downloadAcceptCSV} 
                    className="btn btn-success btn-sm"
                    disabled={objects.filter(obj => obj.Data.attendance === 'Accept').length === 0}
                  >
                    Download Accepts
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Guest Count</th>
                        <th>Attendance</th>
                        <th>Guest Names</th>
                      </tr>
                    </thead>
                    <tbody>
                      {objects
                        .filter(obj => obj.Data.attendance === 'Accept')
                        .map((obj, idx) => {
                          const data = obj.Data;
                          const guests = Array.isArray(data.guests) ? data.guests : [];
                          
                          if (guests.length === 0) {
                            return (
                              <tr key={`accept-${idx}`}>
                                <td>{data.name || 'N/A'}</td>
                                <td>{data.contact || 'N/A'}</td>
                                <td>{data.count || 0}</td>
                                <td>{data.attendance || 'N/A'}</td>
                                <td>N/A</td>
                              </tr>
                            );
                          } else {
                            return guests.map((guest, guestIdx) => (
                              <tr key={`accept-${idx}-${guestIdx}`}>
                                <td>{guestIdx === 0 ? (data.name || 'N/A') : ''}</td>
                                <td>{guestIdx === 0 ? (data.contact || 'N/A') : ''}</td>
                                <td>{guestIdx === 0 ? (data.count || 0) : ''}</td>
                                <td>{guestIdx === 0 ? (data.attendance || 'N/A') : ''}</td>
                                <td>{guest}</td>
                              </tr>
                            ));
                          }
                        })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Responses Table */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5>Other Responses ({objects.filter(obj => obj.Data.attendance !== 'Accept').length})</h5>
                  <button 
                    onClick={downloadOtherCSV} 
                    className="btn btn-warning btn-sm"
                    disabled={objects.filter(obj => obj.Data.attendance !== 'Accept').length === 0}
                  >
                    Download Others
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Guest Count</th>
                        <th>Attendance</th>
                        <th>Guest Names</th>
                      </tr>
                    </thead>
                    <tbody>
                      {objects
                        .filter(obj => obj.Data.attendance !== 'Accept')
                        .map((obj, idx) => {
                          const data = obj.Data;
                          const guests = Array.isArray(data.guests) ? data.guests : [];
                          
                          if (guests.length === 0) {
                            return (
                              <tr key={`other-${idx}`}>
                                <td>{data.name || 'N/A'}</td>
                                <td>{data.contact || 'N/A'}</td>
                                <td>{data.count || 0}</td>
                                <td>{data.attendance || 'N/A'}</td>
                                <td>N/A</td>
                              </tr>
                            );
                          } else {
                            return guests.map((guest, guestIdx) => (
                              <tr key={`other-${idx}-${guestIdx}`}>
                                <td>{guestIdx === 0 ? (data.name || 'N/A') : ''}</td>
                                <td>{guestIdx === 0 ? (data.contact || 'N/A') : ''}</td>
                                <td>{guestIdx === 0 ? (data.count || 0) : ''}</td>
                                <td>{guestIdx === 0 ? (data.attendance || 'N/A') : ''}</td>
                                <td>{guest}</td>
                              </tr>
                            ));
                          }
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="alert alert-info">
              No RSVP responses found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WeddingAttendance; 