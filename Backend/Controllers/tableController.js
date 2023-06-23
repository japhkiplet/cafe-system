import sql from 'mssql';
import config from '../data/config.js';
import moment from 'moment';



const pool = new sql.ConnectionPool(config.sql);
await pool.connect();

//getting all reservations
export const getAllReservations = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const persons = await pool.request()
    .query("SELECT * FROM Reservation");
    res.status(200).json(persons.recordset);
  } catch (error) {
    res.status(201).json( error);
  } finally {
    sql.close();
  }
};

const checkReservationIdExists = async (reservation_id) => {
  // returns true if a number exists and false if it doesn't
  try {
    const user = await pool
      .request()
      .input("reservation_id", sql.Int, reservation_id)
      .query("SELECT * FROM Reservation WHERE reservation_id = @reservation_id");
    console.log(user.recordset);
    if (user.recordset.length == 0) {
      return false;
    } else {
      return true;
    }
  } finally {
    sql.close();
  }
};

console.log(await checkReservationIdExists("1"));

//creating a new reservation


export const createReservation = async (req, res) => {
  const unbookedTablesQuery = `
  SELECT tableNumber
  FROM reserve
  WHERE tableNumber NOT IN (
    SELECT tableNumber
    FROM reservation
  )
`;
  try {
    const { name, date, tableNumber, time ,numberOfPeople,contact} = req.body;
    const unbookedTablesResult = await pool.request().query(unbookedTablesQuery);
    const unbookedTables = unbookedTablesResult.recordset;
    
  // console.log(tableNumber)  

     await pool.request()
     .input("username", sql.VarChar, name)
     .input("reservation_date", sql.Date, date)
     .input("tableNumber", sql.VarChar, tableNumber)
     .input("reservation_time", sql.VarChar, time)
     .input("No_of_people", sql.Int, numberOfPeople)
     .input("tel", sql.VarChar, contact)    
      .query(
        "INSERT INTO Reservation(username, reservation_date, tableNumber, reservation_time, no_of_people,tel) VALUES (@username,  @reservation_date, @tableNumber,@reservation_time,  @No_of_people ,@tel)"
      );

    res.status(200).json({ message: "Reservation made successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  } finally {
    sql.close();
  }
};


//get a reservation
export const getReservation = async (req, res) => {
    try {
        const { reservation_id ,username} = req.params;
        let pool = await sql.connect(config.sql)
        const result = await pool.request()
            .input('reservation_id', sql.Int, reservation_id)
            .input('username', sql.VarChar, username)
            .query("select * from Reservation where username =@username")
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close()
    }

}

// update a reservation details
export const updateReservation = async (req, res) => {
    try {
        const { reservation_id, name,tableNumber,time,date } = req.params;
        let pool = await sql.connect(config.sql)
         await pool.request()
            .input('reservation_id', sql.Int, reservation_id)
            .input('username', sql.VarChar, name)
            .input('tableNumber', sql.VarChar, tableNumber)
            .input('reservation_time', sql.Time, time)
            .input('reservation_date', sql.Date, date)
            .query("update Reservation set username=@username, tableNumber=@tableNumber, reservation_time=@reservation_time, reservation_date=@reservation_date where reservation_id=@reservation_id")
        res.status(200).json({ message: 'reservation updated successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}

//delete  Reservation
export const deleteReservation = async (req, res) => {
    try {
        const {  name } = req.params;
        let pool = await sql.connect(config.sql)
        await pool.request()         
            .query(`delete from Reservation where username=${name}`)
        res.status(200).json({ message: 'reservation deleted successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}