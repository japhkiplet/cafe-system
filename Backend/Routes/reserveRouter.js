
import { getAvailableTables } from "../Controllers/reserveController.js"


const routes = (app) => {
    //people routes
    app.route('/available-tables')
        .get( getAvailableTables)
}

export default routes;