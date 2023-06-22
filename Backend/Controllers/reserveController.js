import sql from 'mssql';
import config from '../data/config.js';

const pool = new sql.ConnectionPool(config.sql);
await pool.connect();

export const getAvailableTables = async (req, res) => {
    try {
        const result = await pool.request()
        .query('SELECT tableId, tableNumber FROM reserve');

        const availableTables = Array.from({ length: 120 }, (_, index) => ({
            tableId: index + 1,
            tableNumber: `Table ${index + 1}`
          }));
    
        // Send the available tables as the response
        res.json({ tables: availableTables });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching available tables.' });
      } finally {
        // Close the SQL connection pool
        sql.close();
      }
  };