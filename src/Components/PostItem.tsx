import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IPostItemProps {
  post: IPost;
}



const PostItem: FC<IPostItemProps> = ({post}) => {
    return (<div>{post.id} - {post.title}</div>
  );
};

export default PostItem;