import { useState } from "react";

const Order = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation on form inputs
    if (!name || !contact || !tableNumber || !date || !time || !numberOfPeople) {
      alert('Please fill in all fields.');
      return;
    }

    // Send the booking data to your backend API for processing
    const bookingData = {
      name,
      contact,
      tableNumber,
      date,
      time,
      numberOfPeople
    };

    // Replace `YOUR_API_ENDPOINT` with your actual API endpoint
  //   fetch('YOUR_API_ENDPOINT', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(bookingData)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the response from the API
  //       console.log(data); // You can customize this based on your requirements
  //       alert('Table booking successful!');
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       alert('An error occurred while processing the booking. Please try again.');
  //     });
  };

  return (
    <div>
      <h2>Table Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="" value={name} onChange={e => setName(e.target.value)} />

        <label>Contact:</label>
        <input type="text" name="" value={contact} onChange={e => setContact(e.target.value)} />

        <label>Table Number:</label>
        <input type="text" name="" value={tableNumber} onChange={e => setTableNumber(e.target.value)} />

        <label>Date:</label>
        <input type="date" name="" value={date} onChange={e => setDate(e.target.value)} />

        <label>Time:</label>
        <input type="time" name="" value={time} onChange={e => setTime(e.target.value)} />

        <label>Number of People:</label>
        <input type="number" name="" value={numberOfPeople} onChange={e => setNumberOfPeople(e.target.value)} />

        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};


export default Order