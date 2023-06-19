import './Booking.css'

const Booking = () => {
  return (
    <div className="table">
        <div className="table-header">
            <h1>Book a table</h1>
        </div>

        <div class="details">
            <div className="detail-left">
                <div className="form-group">
                   <input type="text" placeholder='username' /> 
                </div>
                <div className="form-group">
                    <input type="tel" name='usrtel' placeholder='tel' />
                    
                </div>
                <div className="form-group">
                    <input type="date" placeholder='bday' />
                </div>
            </div>



            <div className="detail-right">

                <div className="form-group">
                    <input type="text" placeholder='email' />
                </div>
                <div className="form-group">
                    <input type="number" placeholder='No of people' />
                </div>
                <div className="form-group">
                    <input type="time" name='user-time' placeholder='time'/>
                </div>
            </div>

            </div>
            <div className="detail-bottom">
                <div className="form-group">
                    
                </div>
            </div>
        
    </div>
  )
}

export default Booking