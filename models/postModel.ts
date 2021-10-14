import mongoose, { Model, Schema } from 'mongoose';
import { Post } from './interfacePost';

const PostSchema: Schema<Post> = new Schema({
  caption: String,
  title: String,
  details: String
});
const PostModel = mongoose.model<Post>('posts', PostSchema);
export default PostModel;
