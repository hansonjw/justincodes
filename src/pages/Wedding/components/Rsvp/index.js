import React, { useState } from 'react';

function RSVP() {
  const [form, setForm] = useState({ name: '', contact: '', guests: 1, passphrase: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
        setForm({ name: '', contact: '', guests: 1, passphrase: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h3>RSVP</h3>
      <div className="mb-3 row align-items-center">
        <label className="col-md-4 col-form-label text-md-end" htmlFor="rsvp-name">Name:</label>
        <div className="col-md-8">
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
        <label className="col-md-4 col-form-label text-md-end" htmlFor="rsvp-contact">Contact (email or phone):</label>
        <div className="col-md-8">
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
        <label className="col-md-4 col-form-label text-md-end" htmlFor="rsvp-guests">Number of Guests:</label>
        <div className="col-md-8">
          <input
            id="rsvp-guests"
            className="form-control"
            name="guests"
            type="number"
            min="1"
            value={form.guests}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <label className="col-md-4 col-form-label text-md-end" htmlFor="rsvp-passphrase">
          Pass Phrase
          <div className="form-text">(please enter the "pass phrase" exactly as it appears on the invitation):</div>
        </label>
        <div className="col-md-8">
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
        <div className="offset-md-4 col-md-8">
          <button type="submit" className="btn btn-primary w-100" disabled={status === 'loading'}>
            {status === 'loading' ? 'Submitting...' : 'Submit'}
          </button>
          {status === 'success' && <p className="text-success mt-2">Success! We are thrilled you are coming, see you in September!</p>}
          {status === 'error' && <p className="text-danger mt-2">There was an error. Please try again.</p>}
        </div>
      </div>
    </form>
  );
}

export default RSVP;
