import axios from 'axios';
import './Booking.css';
import { useState, useEffect } from 'react';
import { useContext } from "react";
import  { Context } from '../context/Context'
import { ApiDomain } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [availableTables, setAvailableTables] = useState([]);

  

 
    const fetchTables = async () => {
      
        const response = await axios.get(`${ApiDomain}/available-tables`, {
          method: "GET",
          headers: {
             "Authorization": `${user.token}`

          }
        });
        setAvailableTables(response.data.tables);
     }
     useEffect(()=>{
      fetchTables()
     }, [])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Send the booking data to backend 
    const bookingData = {
      name,
      email,
      contact,
      tableNumber,
      date,
      time,
      numberOfPeople
    };

    console.log(bookingData)
      axios.post(`${ApiDomain}/reservation`, bookingData , 
      { headers: { "Authorization": `${user.token}` } })

      .then((response) => {
        response.data.message && alert(response.data.message)
        navigate('/contact')

    })
    .catch(({ response }) => {
        alert(response.data.error)
    });
      
    
   
  };
 

  

  return (
    <div className="table">
      <div className="table-header">
        <h1>Book a table</h1>
      </div>
      <form className='book_form' onSubmit={handleSubmit}>
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
                type="email"
                name=""
                required
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                <select onChange={e =>setTableNumber(e.target.value)}>
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
