import dotenv from 'dotenv'
import assert from 'assert'


dotenv.config();

const{port,sqlServer,sqlUser,sqlPwd,sqlDb,JWT_SECRET} = process.env



assert(port,'port is required');



const config ={
    port: port,
    sql:{
        user: sqlUser,
        password: sqlPwd,
        server: sqlServer,
        database: sqlDb,
        options: {
            encryt: true,
            trustServerCertificate: false
        }

    },
    jwt_secret: JWT_SECRET
}
export default config;