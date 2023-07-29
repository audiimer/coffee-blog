import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import "./index.css";
import Register from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div>
      <Header />
      {
        currentForm === 'login'? <div className="test"><Login onFormSwitch={toggleForm}/></div> : <div className="test"><Register onFormSwitch={toggleForm}/></div>
      }

      <Footer />
    </div>
  );
}

export default App;
