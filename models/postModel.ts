import mongoose, { Model, Schema } from 'mongoose';
import { Post } from './interfacePost';

const PostSchema: Schema<Post> = new Schema({
  caption: String,
  tag: String,
  date: String,
  time: String,
  state: {
    type: String,
    enum: ['scheduled', 'draft', 'published'],
    required: true,
    default: 'draft'
  }
});
const PostModel = mongoose.model<Post>('posts', PostSchema);
export default PostModel;
