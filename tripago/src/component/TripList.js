import { useState } from 'react';

export default function TripList() {
  const [trips, setTrips] = useState([]);

  console.log(trips);

  fetch('http://localhost:3000/trips')
    .then((response) => response.json())
    .then((trips) => console.log(trips));

  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
}
