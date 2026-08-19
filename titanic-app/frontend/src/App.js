import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    Pclass: '',
    Sex: '',
    Age: '',
    SibSp: '',
    Parch: '',
    Fare: '',
    Embarked: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/predict',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setResult(res.data.survived ? 'Survived' : 'Did Not Survive');
    } catch (err) {
      alert('Error: ' + err.message);
      console.error("Prediction error:", err);
    }
  };

  return (
    <div className="container">
      <h2>Titanic Survival Prediction</h2>
      <form onSubmit={handleSubmit}>
        <label>Pclass:
          <select name="Pclass" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
          </select>
        </label>

        <label>Sex:
          <select name="Sex" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </label>

        <label>Age:
          <input type="number" name="Age" step="0.1" onChange={handleChange} required />
        </label>

        <label>Siblings/Spouses (SibSp):
          <input type="number" name="SibSp" onChange={handleChange} required />
        </label>

        <label>Parents/Children (Parch):
          <input type="number" name="Parch" onChange={handleChange} required />
        </label>

        <label>Fare:
          <input type="number" name="Fare" step="0.01" onChange={handleChange} required />
        </label>

        <label>Embarked:
          <select name="Embarked" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="0">Cherbourg</option>
            <option value="1">Queenstown</option>
            <option value="2">Southampton</option>
          </select>
        </label>

        <button type="submit">Predict</button>
      </form>

      {result && <h3 className="result">Result: {result}</h3>}
    </div>
  );
}

export default App;
