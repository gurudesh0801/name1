import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    collegeName: "",
    mobile: "",
    email: "",
    className: "",
    city: "",
    state: "",
    country: "",
    captcha: "",
    terms: false,
    day1Event: "",
    day2Event: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };
  const navigate = useNavigate();
  const goto = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="register-container">
      <p
        onClick={goto}
        style={{ cursor: "pointer", textAlign: "end", color: "black" }}
      >
        Home
      </p>
      <h1>Registration Form</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>College Name:</label>
          <input
            type="text"
            name="collegeName"
            placeholder="Enter your college name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email ID:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email ID"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Class:</label>
            <input
              type="text"
              name="className"
              placeholder="Enter your class"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Select Day 1 Event:</label>
            <select
              name="day1Event"
              value={formData.day1Event}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Event for Day 1 --</option>
              <option value="Event 1">Event 1</option>
              <option value="Event 2">Event 2</option>
              <option value="Event 3">Event 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Day 2 Event:</label>
            <select
              name="day2Event"
              value={formData.day2Event}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Event for Day 2 --</option>
              <option value="Event 1">Event 1</option>
              <option value="Event 2">Event 2</option>
              <option value="Event 3">Event 3</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              placeholder="Enter state"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              placeholder="Enter country"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Upload Image:</label>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Enter Captcha:</label>
            <input
              type="text"
              name="captcha"
              placeholder="Enter captcha"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="terms"
            onChange={handleChange}
            required
          />
          <label>I accept the terms and conditions</label>
        </div>

        <div className="form-submit">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
