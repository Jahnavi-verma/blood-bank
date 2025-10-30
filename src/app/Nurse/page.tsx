'use client';
import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell } from 'recharts'; // For pie charts
import './Dashboard.css'; // Import the CSS file

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
    console.log({ requestType, bloodType, amount, nurseId });
    alert('Blood request submitted!');
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

  return (
    <div className="dashboard">
      {/* Orb Background */}
      <div className="orb-background">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      {/* Side Navigation Dock */}
      <div className="side-dock">
        <div className="dock-item" onClick={() => setIsFormOpen(!isFormOpen)}>
          <span>📋</span> {/* Icon for Request */}
        </div>
      </div>

      <h1>Welcome Nurse!</h1>
      <div className="content">
        <div className="charts">
          {bloodData.map((data, index) => (
            <div
              key={index}
              className="chart-container spotlight-card"
              onMouseMove={handleMouseMove}
            >
              <h3>{data.type}</h3>
              <div className="pie-chart-3d">
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
                    <Cell fill="#660001" /> {/* Available */}
                    <Cell fill="#1B1810" /> {/* Unavailable */}
                  </Pie>
                </PieChart>
              </div>
              <p>{data.available} units</p>
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