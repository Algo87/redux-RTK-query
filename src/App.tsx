import React, {useEffect} from 'react';
import './App.css';
import {userSlice} from "./store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreater";
import PostContainer from "./Components/PostContainer";
import PostContainer2 from "./Components/PostContainer2";

function App() {
//   const dispatch = useAppDispatch();
// const {users, error, isLoading}=useAppSelector(state=>state.userReducer);
//
// useEffect(()=>{
//   dispatch(fetchUsers())
// },[])

    return (
        <div className="App">
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <div>{error}</div>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}
            <div style={{display: "flex"}}>
                <PostContainer/>
                <PostContainer2/>
            </div>

        </div>
    );
}

export default App;
