import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
    <Navbar/>
    <div className='d-flex justify-content-center mt-5'>
    <div className="card animate__animated animate__fadeIn">
        <div className='card-body'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};


