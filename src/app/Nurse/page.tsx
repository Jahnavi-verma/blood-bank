'use client';
import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts'; // For pie charts
import './Dashboard.css'; // Import the CSS file
import BlurText from "./BlurText";

const Dashboard: React.FC = () => {
  const [requestType, setRequestType] = useState<'emergency' | 'surgery'>('emergency');
  const [bloodType, setBloodType] = useState('');
  const [amount, setAmount] = useState('');
  const [nurseId, setNurseId] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Sample data for blood types (amount available out of 100 units for demo)
  const bloodData = [
    { type: 'A+', available: 45 },
    { type: 'A-', available: 30 },
    { type: 'B+', available: 50 },
    { type: 'B-', available: 25 },
    { type: 'AB+', available: 20 },
    { type: 'AB-', available: 15 },
    { type: 'O+', available: 60 },
    { type: 'O-', available: 35 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    setIsFormOpen(false); // Close form after submit
  };

  // Function to handle mouse move for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
  };
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


  return (
    <div className="dashboard">
      {/* Side Navigation Dock */}
      <div className="side-dock">
        <div className="dock-item" onClick={() => setIsFormOpen(!isFormOpen)}>
          <span>📋</span> {/* Icon for Request */}
        </div>
      </div>
      <h1>
      <BlurText
        className="blur-text"
        text="Welcome to the Nurse Dashboard!"
        delay={150}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
      />
      </h1>
      <div className="content">
        <div className="charts">
          {bloodData.map((data, index) => (
            <div
              key={index}
              className="chart-container spotlight-card"
              onMouseMove={handleMouseMove}
            >
              <h3>{data.type}</h3>
              <div className="chart-3d-wrapper">
                <PieChart width={100} height={100}>
                  <Pie
                    data={[
                      { name: 'Available', value: data.available },
                      { name: 'Unavailable', value: 100 - data.available },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    <Cell fill="#f00f0f" /> {/* Available */}
                    <Cell fill="#00563e" /> {/* Unavailable */}
                  </Pie>
                </PieChart>
              </div>
              <div className="amount-tooltip">{data.available} units</div>
            </div>
          ))}
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="form-modal">
            <div className="form-section">
              <h2>Request Blood</h2>
              <form onSubmit={handleSubmit}>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="emergency"
                      checked={requestType === 'emergency'}
                      onChange={(e) => setRequestType(e.target.value as 'emergency')}
                    />
                    Emergency
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="surgery"
                      checked={requestType === 'surgery'}
                      onChange={(e) => setRequestType(e.target.value as 'surgery')}
                    />
                    Surgery
                  </label>
                </div>
                <label>
                  Blood Type:
                  <select value={bloodType} onChange={(e) => setBloodType(e.target.value)} required>
                    <option value="">Select</option>
                    {bloodData.map((data) => (
                      <option key={data.type} value={data.type}>{data.type}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Amount:
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Nurse ID:
                  <input
                    type="text"
                    value={nurseId}
                    onChange={(e) => setNurseId(e.target.value)}
                    required
                  />
                </label>
                <button type="submit">Submit Request</button>
                <button type="button" onClick={() => setIsFormOpen(false)}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;