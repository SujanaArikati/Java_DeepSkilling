
import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Here are the available flight details:</p>
      <ul>
        <li>✈️ Chennai to Delhi - 10:00 AM</li>
        <li>✈️ Bangalore to Mumbai - 12:30 PM</li>
        <li>✈️ Hyderabad to Kolkata - 4:00 PM</li>
      </ul>
      <p><strong>Please login to book tickets.</strong></p>
    </div>
  );
}

export default GuestPage;
