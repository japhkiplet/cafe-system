import  express  from "express";
import config from "./data/config.js";
import jwt from 'jsonwebtoken';
import userRouter from './Routes/UserRouter.js'
import tableRouter from './Routes/TableRouter.js'
import reserveRouter from './Routes/reserveRouter.js'
import { getAllUsers } from "./Controllers/UserController.js";
import cors from 'cors'





const app= express()



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//jwt middleware
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

//routes
userRouter(app);
tableRouter(app);
reserveRouter(app)




app.get('/',(reg,res)=>{
    res.send("hello buddy😎")
})
app.get('/users', getAllUsers)
app.listen(config.port,()=>{
    console.log(`server is running on ${config.url}`)
})