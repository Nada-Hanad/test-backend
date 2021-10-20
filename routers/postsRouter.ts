import { Router } from 'express';
import {
  addPost,
  deletePost,
  getPostByID,
  getPosts
} from '../controllers/postsController';

const initRouter = (router: Router) => {
  router.route('/posts').get(getPosts).post(addPost);
  router.route('/posts/:id').get(getPostByID).delete(deletePost);
};

export default initRouter;
