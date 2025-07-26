import React from 'react';
import  './App.css';
import officeImg from './office.jpg'; // Make sure you have this image in src folder

function App() {
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Hyderabad"
  };

  // Set class based on rent
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      {/* Heading */}
      <h1>Office Space , at Affordable Range</h1>

      {/* Image */}
      <img
        src={officeImg}
        alt="Office Space"
        width="25%"
        height="25%"
        style={{ margin: '10px 0' }}
      />

      {/* Office Details */}
      <h2>Name: {ItemName.Name}</h2>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;

