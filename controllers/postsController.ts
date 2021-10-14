import { Request, Response } from 'express';
import PostModel from '../models/postModel';

export const getPosts = (req: Request, res: Response) => {
  PostModel.find()
    .then((data) => res.json(data))
    .catch((e) => res.json(e));
};
export const addPost = (req: Request, res: Response) => {
  const post = req.body;

  PostModel.find(post).then((e) => {
    if (e.length != 0) {
      res.json('Posts cannot have the same data!');
    } else {
      const newPost = new PostModel(post);
      newPost
        .save()
        .then((data) => res.json(data))
        .catch((e) => res.json(e));
    }
  });
};

export const deletePost = (req: Request, res: Response) => {
  PostModel.findByIdAndDelete(req.params.id)
    .then((data) => res.json({ message: 'Deleted Successfully' }))
    .catch((err) => res.json(err));
};
