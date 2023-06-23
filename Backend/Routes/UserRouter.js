import {   getAllUsers, createUser, updateUser, getUser, deleteUser, loginRequired, register,login } from '../Controllers/UserController.js';


const routes = (app) => {
    //people routes
    app.route('/users')
        .get(loginRequired, getAllUsers)
        .post(loginRequired, createUser);

    app.route('/users/:id')
        .put( updateUser)
        .get( getUser)
        .delete( deleteUser);

        // auth routes
    app.route('/auth/register')
    .post(register);

    app.route('/auth/login')
    .post(login);


  


};
export default routes;