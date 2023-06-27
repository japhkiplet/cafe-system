import sql from 'mssql';
import config from '../data/config.js';

// // Get all comments
export const getComments = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("select * from comments");
        res.status(200).json(result.recordset);
        
    } catch (error) {
        res.status(201).json({ error: 'an error occurred while creating the comment' });
    } finally {
        sql.close(); 
    }
};

// // Get a single comment
export const getComment = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("commentId", sql.Int, id)
            .query("select * from comments where id = @commentId");
        res.status(200).json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving comment' });
    } finally {
        sql.close();
    }
};

// // Create a new comment
export const createComment = async (req, res) => {
    try {
        // console.log('create comment')
        const { description } = req.body;
        // console.log(description);
        let pool = await sql.connect(config.sql);
        let insertComment = await pool.request()
            .input("description", sql.VarChar, description)
            .query("insert into comments (description) values (@description)"); 
        res.status(201).json({ message: 'comment created successfully',data:insertComment });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the comment' });
    } finally {
        sql.close();  
    }
};
// // Update a comment
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("commentId", sql.Int, id)
            .input("commentDescription", sql.VarChar, description)
            .query("UPDATE comments SET description = @commentDescription WHERE id = @commentId");
        res.status(200).json({ message: 'comment updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the comment' });
    } finally {
        sql.close();
    }
};
// // Delete a comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM comments WHERE id = ${id}`;
        res.status(200).json({ message: 'comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the comment' });
    } finally {
        sql.close();
    }
};
