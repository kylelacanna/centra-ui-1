import React from 'react';
import "../styles/ContactForm.css";
export function ContactForm(props) {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  return (
    <div className="container-parent">
      <h2 className="mb-3">Contact Us!</h2>
      <form onSubmit={onSubmit}>
        <div className="inputGroup">
          <label className="form-label" htmlFor="name-first-label">
            First Name
          </label>
          <input className="form-control" type="text" id="name-first-input" required />
          <label className="form-label" htmlFor="name-last-label">
            Last Name
          </label>
          <input className="form-control" type="text" id="name-last-input" required />
        </div>
        <div className="general-info-fields">
        <label className="form-label" htmlFor="service-dropdown-label">
            Requested Service
          </label>
          <select id="services-options">
        <option value="lead-gen">Lead Generation</option>
        <option value="ad-manage">Ad Management/Optimization</option>
        <option value="creative">Creative Marketing Services</option>
        <option value="other">Other</option>
      </select>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
          <label className="form-label" htmlFor="monthly-budget-label">
            Estimated Monthly Budget
          </label>
          <input className="form-control" type="number" id="budget-input" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
</div>
  );
}