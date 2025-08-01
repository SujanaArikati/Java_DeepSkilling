
import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You are now logged in. Select your flight to book a ticket:</p>
      <ul>
        <li>🛫 Chennai to Delhi <button>Book</button></li>
        <li>🛫 Bangalore to Mumbai <button>Book</button></li>
        <li>🛫 Hyderabad to Kolkata <button>Book</button></li>
      </ul>
    </div>
  );
}

export default UserPage;
