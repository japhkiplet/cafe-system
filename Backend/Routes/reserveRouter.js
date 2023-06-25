
import { loginRequired } from "../Controllers/UserController.js";
import { getAvailableTables } from "../Controllers/reserveController.js"


const routes = (app) => {
    //people routes
    app.route('/available-tables')
        .get(loginRequired, getAvailableTables)
}

export default routes;