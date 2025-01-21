import { createSlice } from "@reduxjs/toolkit";
import { useId } from "react";

const iniData = {
    user:{
        displayName :"",
        email:"",
        uid:"",
        isLogIn:false,
        imageUrl:""
    },
    allPost:[
        {
            userName:"Sanni Kumar",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta eligendi ipsam distinctio quo architecto",
            photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7wUje_rFblJ1IX16lC9-0WiyDl2jbl7re9vS9H77MLeDXiX6yUaZ6McVKReSERcbSsk&usqp=CAU",
            id:"12345",
            comment:[]
        }
    ],

}
const UserSlices = createSlice({
    name:"UserDetails",
    initialState: iniData,
    reducers:{
        updateUserDetails:(state , action)=>{
            state.user = action.payload;
        },
        updatePost:(state,action)=>{
            state.allPost.unshift(action.payload)
        },
        updateComment:(state,action)=>{
            // state.allPost.comment.usShi(action.payload)
            // console.log(state);
            
        }
    }
})
export const {updateUserDetails,updatePost,updateComment} = UserSlices.actions;
export default UserSlices.reducer;