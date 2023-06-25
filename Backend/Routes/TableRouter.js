import { loginRequired } from "../Controllers/UserController.js";
import { createReservation, deleteReservation, getAllReservations, getReservation, updateReservation } from "../Controllers/tableController.js";



const routes = (app) => {
    //people routes
    app.route('/reservation')
        .get(loginRequired, getAllReservations)
        .post(loginRequired,createReservation );

    app.route('/reservation/:id')
        .put(updateReservation)
        .get(getReservation )
        .delete( deleteReservation);

        


  


};
export default routes;