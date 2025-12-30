import React from "react";
import "../components/Attendance.css";
import logo from "../logo.png";

export default function ClassStatus() {
  return (
    <div className="attendance-page">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Logbook" className="logo" />
        <nav className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#attendance">Attendence list</a>
        </nav>
      </header>

      <div className="content-wrapper">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="time-table-section">
            <h2>Time Table</h2>
          </div>

          <div className="absentees-section">
            <h2>Absentees</h2>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div className="controls">
            <select className="class-select">
              <option>Select class</option>
            </select>

            <button className="edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}