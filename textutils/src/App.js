import './App.css';
import React, { useState } from 'react'
import Navbar from './Compenents/Navbar';
import Textform from './Compenents/Textform'
import About from './Compenents/About';
import Alert from './Compenents/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode turned on", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showalert("Light mode turned on", "success")
    }
  }



  return (
    <>
      <Router>
        <Navbar title="Home" about="About me" mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>

            <Route path="/" element={<Textform mode={mode} heading="Enter the text to preview" showalert={showalert} />}/>
            <Route path="/about" element={<About />}/>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
