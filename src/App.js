import React from "react";
import InfoSection from "./components/InfoSection";
import ClaimForm from "./components/ClaimForm";
import "./styles.css";

function App() {
  return (
    <div className="App">
     <div className="container">
      <div className="content">
        <InfoSection />
        <ClaimForm />
      </div>
    </div>
    </div>
  );
}

export default App;
