import React, { useState } from 'react';

const VillaInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    checkin: '',
    checkout: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email.';
    }
    if (!formData.guests.trim()) newErrors.guests = 'Number of guests is required.';
    if (!formData.checkin) newErrors.checkin = 'Check-in date is required.';
    if (!formData.checkout) newErrors.checkout = 'Check-out date is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        guests: '',
        checkin: '',
        checkout: '',
        message: '',
      });
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-4 text-[#421da9]">Book Your Stay</h3>
      {submitted && <p className="text-green-600 mb-4">Thank you! We'll get in touch shortly.</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            className="w-full border px-4 py-2 rounded"
            value={formData.guests}
            onChange={handleChange}
          />
          {errors.guests && <p className="text-sm text-red-500 mt-1">{errors.guests}</p>}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="text-sm block mb-1">Check-In</label>
            <input
              type="date"
              name="checkin"
              className="w-full border px-4 py-2 rounded"
              value={formData.checkin}
              onChange={handleChange}
            />
            {errors.checkin && <p className="text-sm text-red-500 mt-1">{errors.checkin}</p>}
          </div>
          <div className="flex-1">
            <label className="text-sm block mb-1">Check-Out</label>
            <input
              type="date"
              name="checkout"
              className="w-full border px-4 py-2 rounded"
              value={formData.checkout}
              onChange={handleChange}
            />
            {errors.checkout && <p className="text-sm text-red-500 mt-1">{errors.checkout}</p>}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            rows="2"
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="!bg-[#1173c9] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VillaInquiryForm;
