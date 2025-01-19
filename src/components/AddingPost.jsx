import { RxCross1 } from "react-icons/rx";
import { FaImage } from "react-icons/fa6";
import { useId, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../slices/userSlices";
const AddingPost = ({ setPost}) => {
    const dispatch = useDispatch();
    // const userData = useSelector((store)=> store.userData.user);
    const [fileState , setFileState] = useState("");
    const closePostTab = ()=>{
        setPost(false);
    };
    const id = useId();
    const postSubmit = ()=>{
        if(postVal.current.value === "")return;
        const postObj = {
            userName:"userData.displayName",
            desc:postVal.current.value,
            photoUrl:fileState,
            id:id,
            comment:[],
        }
        dispatch(updatePost(postObj))
        console.log(postVal.current.value);
        setPost(false);
        
    };
    const fileValue=(e)=>{
        const file = e.target.files[0]
        const filePath = URL.createObjectURL(file)
        console.log(filePath);
        setFileState(filePath)
        
    }
    const postVal = useRef();
    const [chooseImg,setchooseImg] = useState(false);
  return (
    <div className="w-[100%] fixed  h-screen top-0 pt-20 left-0 z-[900] backdrop-blur-sm">
        <div className="sm:w-[500px] w-[95%]  top-[100px] m-auto bg-gray-300 flex flex-col gap-6 p-4">
        <div className="flex justify-between px-4">
            <div className="flex gap-2 items-center">
                <img className="sm:w-[50px] w-[30px] h-[30px] sm:h-[50px] rounded-[50%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7wUje_rFblJ1IX16lC9-0WiyDl2jbl7re9vS9H77MLeDXiX6yUaZ6McVKReSERcbSsk&usqp=CAU" alt="" />
                <div>
                    <p className="sm:text-xl font-bold">Sanni Kumar</p>
                    <p className="sm:text-lg text-sm">Post to Anyone</p>
                </div>
            </div>
            <div onClick={closePostTab} className="sm:border sm:text-xl text-sm  border-gray-800 flex items-center justify-center px-3 py-3 rounded-[50%]">
                <RxCross1 style={{}}/>
            </div>
        </div>
        <div>
            <textarea ref={postVal} className=" outline-none  w-[100%] h-[200px] p-4" name="" id="" placeholder="What do you want to talk abhout ?"></textarea>
        </div>
        <div>
        {chooseImg && <input accept="image/*" onChange={fileValue} type="file" name="" id="" />}
        {fileState && <img className="w-[100%] h-[10rem]" src={fileState}  alt="" />}
        </div>
        <div className="flex items-center justify-between">
            <div className="cursor-pointer">
            <FaImage onClick={()=> setchooseImg(!chooseImg)} style={{fontSize:"30px"}}/>
            </div>
            <div>
                <button onClick={postSubmit} className="bg-blue-800 px-3 py-1 text-white font-bold text-xl rounded-xl ">Post</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddingPost