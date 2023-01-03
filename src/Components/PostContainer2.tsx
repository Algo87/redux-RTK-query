import React from 'react';
import {PostApi} from "../services/PostService";
import PostItem from "./PostItem"

const PostContainer2 = () => {
    const {data: posts, isLoading, error} = PostApi.useFetchAllPostsQuery(10);

    return (<div>
            {error && <div>"dfgdfg"</div>}
            {isLoading && <div>Loading....</div>}
            {posts && posts.map((post) => {
            return <PostItem post={post} key={post.id}/>
        })}
        </div>
    );
};

export default PostContainer2;