import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchUsers1 = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e:any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(

    'user/fetchAll',
    async (_, ThunkAPI)=>{
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            return response.data;
        }catch (e){
           return ThunkAPI.rejectWithValue("something went wrong!")
        }

    }
)