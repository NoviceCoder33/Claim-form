import React, { useState } from "react";

export default function ClaimForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    jobTitle: '',
    diagnosisDate: '',
    diagnosisType: '',
    story: '',
    agree: false,
    verify: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree || !formData.verify) {
      alert("Please check the required consent boxes.");
      return;
    }
    alert("Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <form className="claim-form" onSubmit={handleSubmit}>
      <h2>Claim Form</h2>
      <div className="form-grid">
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name *" required />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email ID *" required type="email" />
        
        <div className="input-with-icon">
          <input name="dob" value={formData.dob} onChange={handleChange} type="date" required />
          <span className="icon">📅</span>
        </div>
        <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title *" required />
        
        <div className="input-with-icon">
          <input name="diagnosisDate" value={formData.diagnosisDate} onChange={handleChange} type="date" required />
          <span className="icon">📅</span>
        </div>
        <input name="diagnosisType" value={formData.diagnosisType} onChange={handleChange} placeholder="Type of Diagnosis *" required />
      </div>

      <textarea name="story" value={formData.story} onChange={handleChange} placeholder="Tell us your story (optional)" rows="4" />

      <label className="checkbox">
        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
        I agree to the privacy policy and disclaimer and give my express written consent to be contacted regarding my case options.
      </label>

      <label className="checkbox">
        <input type="checkbox" name="verify" checked={formData.verify} onChange={handleChange} />
        Please check this box to verify you’re a person.
      </label>

      <button type="submit" className="submit-btn">Start your claim now</button>
    </form>
  );
}
