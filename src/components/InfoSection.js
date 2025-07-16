import React from "react";

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="review-card">
        <div className="review-left">
          <h1>Free <br /> Case <br /> Review</h1>
          <ul className="features-list">
            <li>100% Confidential</li>
            <li>No Win, No Fee</li>
            <li>Free Case Evaluation</li>
          </ul>
        </div>
        <div className="review-right">
          <div className="badge-circle">ONLY 6 SLOTS LEFT</div>
          <p className="support-text">We are here to help!</p>
          <button className="contact-button">Contact us <span>&gt;</span></button>
        </div>
      </div>

      <div className="meso-alert">
        <h2>Have you or a loved one been affected by Mesothelioma?</h2>
        <p>
          As a woman, you’ve carried the weight of care, love, and resilience. Now it’s time someone stands with you.
        </p>
        <ul>
          <li>Secondary Asbestos exposure is common</li>
          <li>Middiagnosis delays are more frequent in women</li>
          <li>Women have won significant legal settlements</li>
        </ul>
      </div>
    </div>
  );
}
