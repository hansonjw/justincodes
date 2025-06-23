import React, { useState } from 'react';
import aihImage from '../../assets/images/aih.jpeg';

function RSVP() {
  const [form, setForm] = useState({ name: '', contact: '', guests: 1, passphrase: '', attendance: 'Accept' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };

    // If attendance is changed to "Decline", set guests to 0.
    // If changed back to "Accept", reset guests to 1.
    if (name === 'attendance') {
        if (value === 'Decline') {
            newForm.guests = 0;
        } else {
            newForm.guests = 1;
        }
    }
    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://6agdwiu7k5.execute-api.us-east-2.amazonaws.com/prod/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ name: '', contact: '', guests: 1, passphrase: '', attendance: 'Accept' });
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
             <h5>Kindly reply by: <span style={{ fontWeight: 'bold' }}>August 3, 2025</span></h5>
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
                    <label className="col-md-6 col-form-label text-md-end" htmlFor="rsvp-guests">Number of Attendees:</label>
                    <div className="col-md-6">
                      <input
                        id="rsvp-guests"
                        className="form-control"
                        name="guests"
                        type="number"
                        min="0"
                        value={form.guests}
                        onChange={handleChange}
                        required
                        disabled={form.attendance === 'Decline'}
                      />
                    </div>
                  </div>
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
                      {status === 'success' && <p className="text-success mt-2">Success!</p>}
                      {status === 'error' && <p className="text-danger mt-2">There was an error. Please try again.</p>}
                    </div>
                  </div>
                </form>
              </div>
             <div className="col-md-6">
               <div className="wedding-image-container">
                   <img src={aihImage} className="card-img-top"/>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}

export default RSVP;
