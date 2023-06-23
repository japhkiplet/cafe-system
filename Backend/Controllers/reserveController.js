import sql from 'mssql';
import config from '../data/config.js';

const pool = new sql.ConnectionPool(config.sql);
await pool.connect();

export const getAvailableTables = async (req, res) => {
    try {
        const result = await pool.request()
        .query('SELECT tableId, tableNumber FROM reserve');
      const tableNumbers = []
     result.recordset.forEach(table=>{
      tableNumbers.push({tableNumber: table.tableNumber})
     })
    res.json({tables: tableNumbers})
        // Send the available tables as the response
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching available tables.' });
      } finally {
        // Close the SQL connection pool
        sql.close();
      }
  };