import React from "react";

export default function ClaimForm() {
  return (
    <form className="claim-form">
      <h2>Claim Form</h2>
      <div className="form-grid">
        <input type="text" placeholder="First Name *" />
        <input type="text" placeholder="Last Name *" />
        <input type="tel" placeholder="Phone Number *" />
        <input type="email" placeholder="Email ID *" />
        <div className="input-with-icon">
          <input type="date" />
          <span className="icon">📅</span>
        </div>
        <input type="text" placeholder="Job Title *" />
        <div className="input-with-icon">
          <input type="date" />
          <span className="icon">📅</span>
        </div>
        <input type="text" placeholder="Type of Diagnosis *" />
      </div>
      <textarea placeholder="Tell us your story (optional)"></textarea>

      <label className="checkbox">
        <input type="checkbox" /> I agree to the privacy policy and disclaimer and give my express written
        consent to be contacted regarding case options. I understand that I may be contacted using automated dialing equipment.
        Messages and data rates may apply. My consent does not require purchase. This is legal advertising.
      </label>

      <label className="checkbox">
        <input type="checkbox" /> Please check this box to verify you’re a person.
      </label>

      <button type="submit" className="submit-btn">Start your claim now</button>
    </form>
  );
}
