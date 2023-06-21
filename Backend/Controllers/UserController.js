import sql from 'mssql';
import config from '../data/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};


export const register = async (req, res) => {
    const { username, password, email } = req.body;
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('username', sql.VarChar, username)
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM Users WHERE username = @username OR email = @email');
        const user = result.recordset[0];
        if (user) {
            res.status(409).json({error:'user already exist'});
        } else {
            await pool.request()
                .input('username', sql.VarChar, username)
                .input('password_hash', sql.VarChar, hashedPassword)
                .input('email', sql.VarChar, email)
                .input('registration_date', sql.Date, new Date())
                .input('last_login_date', sql.Date, new Date())
                
                .query('INSERT INTO users (username, password_hash, email,registration_date,last_login_date) VALUES (@username, @password_hash, @email,@registration_date,@last_login_date)');
            res.status(200).send({ message: 'User created successfully' });
        }

    } catch (error) {
        res.status(500).json( error.message);
    } finally {
        sql.close();
    }

};

export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    let pool = await sql.connect(config.sql);
    // console.log(pool)
    const result = await pool.request()
        .input('email', sql.VarChar, email)
        .query('SELECT * FROM Users WHERE email = @email');
    // console.log(result.recordset[0])
    const user = result.recordset[0];
    console.log(user)
    if (!user) {
        res.status(401).json({ error: 'Authentication failed. Wrong credentials.' });
    } else {
        console.log(password, user.password_hash)
        if (!bcrypt.compareSync(password, user.password_hash)) {
            res.status(401).json({ error: 'Authentication failed. Wrong credentials.' });
        } else {
            const token = `JWT ${jwt.sign({ username: user.username, email: user.email }, config.jwt_secret)}`;
            res.status(200).json({ email: user.email, password: user.password_hash,token: token });
        }
    }

};

const pool = new sql.ConnectionPool(config.sql);
await pool.connect();

//getting all persons
export const getAllUsers = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const persons = await pool.request()
    .query("SELECT * FROM Users");
    res.status(200).json(persons.recordset);
  } catch (error) {
    res.status(201).json( error);
  } finally {
    sql.close();
  }
};

const checkUserIdExists = async (user_id) => {
  // returns true if a number exists and false if it doesn't
  try {
    const user = await pool
      .request()
      .input("user_id", sql.Int, user_id)
      .query("SELECT * FROM Users WHERE user_id = @user_id");
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

console.log(await checkUserIdExists("1"));

//creating a new user

export const createUser = async (req, res) => {
  try {
    const { username, email, password } =
      req.body;
    if (await checkUserIdExists(user_id)) {
      res.status(409).json({ message: "user_id already exists" });
      return;
    } else {
      const createUser = pool
        .request()
        .input("username", sql.VarChar, username)
        .input("email", sql.VarChar, email)
        .input("password_hash", sql.VarChar, password)
        .query(
          "INSERT INTO Users VALUES (@username,  @email, @password_hash)"
        );
      res.status(200).json({ message: "New user added successfully" });
    }
  } catch (e) {
    res.status(400).json( message);
  } finally {
    sql.close();
  }
};

//get a user
export const getUser = async (req, res) => {
    try {
        const { user_id ,username} = req.params;
        let pool = await sql.connect(config.sql)
        const result = await pool.request()
            .input('user_id', sql.Int, user_id)
            .input('username', sql.VarChar, username)
            .query("select * from Users where user_id =@user_id")
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close()
    }

}

// update a user details
export const updateUser = async (req, res) => {
    try {
        const { user_id, username } = req.params;
        let pool = await sql.connect(config.sql)
         await pool.request()
            .input('user_id', sql.Int, user_id)
            .input('username', sql.VarChar, username)
            .query("update Users set username=@username where user_id=@user_id")
        res.status(200).json({ message: 'user updated successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}

//delete a user
export const deleteUser = async (req, res) => {
    try {
        const {  user_id } = req.params;
        let pool = await sql.connect(config.sql)
        await pool.request()         
            .query(`delete from Users where user_id=${user_id}`)
        res.status(200).json({ message: 'user deleted successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}