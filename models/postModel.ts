import mongoose, { Model, Schema } from 'mongoose';
import { Post } from './interfacePost';

const PostSchema: Schema<Post> = new Schema({
  height: String,
  race: String,
  gender: String,
  birth: String,
  spouse: String,
  death: String,
  realm: String,
  hair: String,
  name: String,
  wikiUrl: String
});
const PostModel = mongoose.model<Post>('posts', PostSchema);
export default PostModel;
