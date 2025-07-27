import React, { useState } from 'react';
import aihImage from '../../assets/images/aih.jpeg';

function RSVP() {
  const [form, setForm] = useState({ name: '', contact: '', count: 1, passphrase: '', attendance: 'Accept', guests: [''] });
  const [status, setStatus] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newForm = { ...form, [name]: value };

    // If attendance is changed to "Decline", set count to 0 and clear guests.
    // If changed back to "Accept", reset count to 1 and guests to one empty string.
    if (name === 'attendance') {
      if (value === 'Decline') {
        newForm.count = 0;
        newForm.guests = [];
      } else {
        newForm.count = 1;
        newForm.guests = [''];
      }
    }
    // If count changes, update guests array length
    if (name === 'count') {
      const newCount = parseInt(value, 10) || 0;
      let guests = [...form.guests];
      if (newCount > guests.length) {
        guests = guests.concat(Array(newCount - guests.length).fill(''));
      } else {
        guests = guests.slice(0, newCount);
      }
      newForm.count = newCount;
      newForm.guests = guests;
    }
    setForm(newForm);
  };

  const handleGuestNameChange = (idx, value) => {
    const guests = [...form.guests];
    guests[idx] = value;
    setForm({ ...form, guests });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setSuccessMessage(null);
    try {
      const response = await fetch('https://6agdwiu7k5.execute-api.us-east-2.amazonaws.com/prod/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        if (form.attendance === 'Accept') {
          setSuccessMessage(`Thank you, we have you down for ${form.count} attendee${form.count > 1 ? 's' : ''}. See you in September!`);
        } else {
          setSuccessMessage("Sorry you won't be able to attend, but thank you for letting us know.");
        }
        setStatus('success');
        setForm({ name: '', contact: '', count: 1, passphrase: '', attendance: 'Accept', guests: [''] });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card border-0">
           <div className="row m-2">
             <h2>RSVP</h2>
             <h5>Kindly reply by: <span style={{ fontWeight: 'bold' }}>August 10, 2025</span></h5>
             <div className="col-md-6">
                <form onSubmit={handleSubmit} className="rsvp-form">
                  <div className="mb-3 row align-items-center">
                    <label className="col-md-6 col-form-label text-md-end" htmlFor="rsvp-name">Name:</label>
                    <div className="col-md-6">
                      <input
                        id="rsvp-name"
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label className="col-md-6 col-form-label text-md-end" htmlFor="rsvp-contact">Contact (email or phone):</label>
                    <div className="col-md-6">
                      <input
                        id="rsvp-contact"
                        className="form-control"
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label className="col-md-6 col-form-label text-md-end" htmlFor="rsvp-attendance">Will you be attending?</label>
                    <div className="col-md-6">
                      <select
                        id="rsvp-attendance"
                        className="form-select"
                        name="attendance"
                        value={form.attendance}
                        onChange={handleChange}
                        required
                      >
                        <option value="Accept">Joyfully Accept</option>
                        <option value="Decline">Regretfully Decline</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label className="col-md-6 col-form-label text-md-end" htmlFor="rsvp-count">Number of Attendees:</label>
                    <div className="col-md-6">
                      <select
                        id="rsvp-count"
                        className="form-select"
                        name="count"
                        value={form.count}
                        onChange={handleChange}
                        required
                        disabled={form.attendance === 'Decline'}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  {form.attendance === 'Accept' && form.count > 0 && (
                    <div className="mb-3 row align-items-center">
                      <label className="col-md-6 col-form-label text-md-end">Guest Names:</label>
                      <div className="col-md-6">
                        {form.guests.map((guest, idx) => (
                          <input
                            key={idx}
                            className="form-control mb-2"
                            type="text"
                            placeholder={`Guest ${idx + 1} Name`}
                            value={guest}
                            onChange={e => handleGuestNameChange(idx, e.target.value)}
                            required
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mb-3 row align-items-center">
                    <label className="col-md-6 col-form-label text-md-end" htmlFor="rsvp-passphrase">
                      Pass Phrase
                      <div className="form-text">(please enter the "pass phrase" exactly as it appears on the invitation):</div>
                    </label>
                    <div className="col-md-6">
                      <input
                        id="rsvp-passphrase"
                        className="form-control"
                        name="passphrase"
                        type="password"
                        value={form.passphrase}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="offset-md-6 col-md-6">
                      <button type="submit" className="btn btn-rsvp-submit w-100" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Submitting...' : 'Submit'}
                      </button>
                      {successMessage && <p className="text-success mt-2">{successMessage}</p>}
                      {status === 'error' && <p className="text-danger mt-2">There was an error. Please try again.</p>}
                    </div>
                  </div>
                </form>
              </div>
             <div className="col-md-6">
               <div className="wedding-image-container">
                   <img src={aihImage} className="card-img-top" alt="AIH"/>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}

export default RSVP;
