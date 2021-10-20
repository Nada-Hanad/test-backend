import { Request, Response } from 'express';
import PostModel from '../models/postModel';

export const getPosts = (req: Request, res: Response) => {
  PostModel.find()
    .then((data) => res.json(data))
    .catch((e) => res.json(e));
};
export const getPostByID = (req: Request, res: Response) => {
  const { id } = req.params;
  PostModel.findById(id)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};
export const addPost = (req: Request, res: Response) => {
  const post = req.body;

  PostModel.find(post).then((e) => {
    if (e.length != 0) {
      res.sendStatus(400).json({
        error: 'Posts cannot have the same data'
      });
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
    .catch((err) =>
      res.sendStatus(400).json({
        error: 'Unable to delete!'
      })
    );
};
