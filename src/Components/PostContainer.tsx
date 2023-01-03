import React, {useEffect, useState} from 'react';
import {PostApi} from "../services/PostService";
import PostItem from "./PostItem"

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, isLoading, error, refetch} = PostApi.useFetchAllPostsQuery(limit);

    useEffect(() => {
        setTimeout(() => setLimit(3), 2000)
    },[])

    return (<div>
            {error && <div>"dfgdfg"</div>}
            {isLoading && <div>Loading....</div>}
            <button onClick={()=>refetch()}
            >refetch</button>
            {posts && posts.map((post) => {
                return <PostItem post={post} key={post.id}/>
            })}
        </div>
    );
};

export default PostContainer;