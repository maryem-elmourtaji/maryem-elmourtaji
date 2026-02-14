import React from 'react';

const PageContent = () => {
  return (
    <div className="page">
      <h2>Available Tables</h2>
      <div className="card">
        <p>Table 1 - <span className="table-status available">Available</span></p>
      </div>
      <div className="card">
        <p>Table 2 - <span className="table-status unavailable">Unavailable</span></p>
      </div>

      <form>
        <h2>Book a Table</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <input type="number" placeholder="Number of Guests" required />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default PageContent;
