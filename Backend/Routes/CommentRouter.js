import { loginRequired } from "../Controllers/UserController.js";
import { createComment, deleteComment, getComment, getComments, updateComment } from "../Controllers/commentController.js";


const routes = (app) => {
    //comment routes
    app.route('/comments')
        .get( getComments)
        .post(createComment);

    app.route('/comments/:id')
        .put(updateComment)
        .get(getComment)
        .delete(deleteComment);

    
}


export default routes;