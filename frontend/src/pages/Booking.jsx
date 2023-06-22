import axios from 'axios';
import './Booking.css';
import { useState, useEffect } from 'react';

const Booking = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [availableTables, setAvailableTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await fetch('http://localhost:8081/available-tables');
        const data = await response.json();
        setAvailableTables(data.tables);
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching available tables. Please try again.');
      }
    };

    fetchTables();
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the booking data to backend 
    const bookingData = {
      name,
      contact,
      tableNumber,
      date,
      time,
      numberOfPeople
    };

    
      axios.post("http://localhost:8081/reservation", data)
        .then((data) => {
          if (data.token) {
            navigate("/");
          }
        })
        .catch((e) => {
          alert(e);
        });
      
    
    // fetch('http//localhost:8081/reservation', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(bookingData)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data); 
    //     alert('Table booking successful!');
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     // alert('An error occurred while processing the booking. Please try again.');
    //   });
  };

  return (
    <div className="table">
      <div className="table-header">
        <h1>Book a table</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="details">
          <div className="detail-left">
            <div className="form-group">
              <input
                type="text"
                name=""
                required
                placeholder="username"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name=""
                required
                placeholder="Tel"
                value={contact}
                onChange={e => setContact(e.target.value)}
              />
            </div>
            <div className="form-group">
                <select>
                  <option value="">Select a table</option>
                  {availableTables.map(table => (
                    <option key={table.tableId} value={table.tableNumber}>
                      {table.tableNumber}
                    </option>
                  ))}
                </select>
            </div>
          </div>

        {/* //details to right */}
          <div className="detail-right">
            <div className="form-group">
              <input
                type="date"
                name=""
                required
                placeholder="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="time"
                name=""
                required
                placeholder="time"
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name=""
                required
                placeholder="No of people"
                value={numberOfPeople}
                onChange={e => setNumberOfPeople(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="detail-bottom">
          <div className="form-group1">
            <button type="submit">Book Table</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
