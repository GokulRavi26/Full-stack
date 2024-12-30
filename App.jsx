import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="slam-container">
      <form className="slam-form">
        <h1 className="slam-title">Slambook</h1>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <input id="nickname" type="text" placeholder="Enter your nickname" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input id="address" type="text" placeholder="Enter your address" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" type="tel" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label htmlFor="memories">Memories:</label>
          <textarea id="memories" placeholder="Write your memories"></textarea>
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" /> Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Favorite Actors:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="actors" value="Thalapathy Vijay" /> Suriya
            </label>
            <label>
              <input type="checkbox" name="actors" value="Thala Ajith" /> Vadivel
            </label>
            
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="school">School:</label>
          <select id="school">
            <option value="">Select your school</option>
            <option value="School1">KRP</option>
            <option value="School2">PSG</option>
            <option value="School3">SPK</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
