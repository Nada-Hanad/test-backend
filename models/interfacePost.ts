export interface Post {
  _id?: number;
  caption: String;
  photo: String;
  tag: String;
  date: String;
  time: String;
  state: 'scheduled' | 'draft' | 'published';
  changed: boolean;
}
