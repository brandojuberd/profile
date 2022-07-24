export interface SanityStoryNode {
  _createdAt: Date;
  _id: string;
  body: {
    _key: string;
    style: string;
    _type: string;
    children: {
      _key: string;
      text: string;
      marks: string;
      _type: string;
    }[];
  }[];
  title: string;
}
