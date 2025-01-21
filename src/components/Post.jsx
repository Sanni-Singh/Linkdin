import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../slices/userSlices";
const Post = ({name ,id, desc ,imgUrl,photoUrl}) => {
  const [follow , setFollow] = useState(false);
  const [like , setLike] = useState(false);
  const likeCnt = Math.ceil(Math.random()* 1000)
  const commentVal = useRef();
  const dispatch = useDispatch();
  const submitComment=()=>{
    dispatch(updateComment(commentVal.current.value));
    commentVal.current.value="";
    
  }
  const userData = localStorage.getItem('userData');
  const data = JSON.parse(userData);
  
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col md:w-[550px] w-[100%] gap-4">
        <div className="flex justify-between items-center px-4">
          <div className="flex gap-3 items-center">
            <img src={imgUrl} alt="" className="w-[40px] h-[40px] rounded-[50%]"/>
            <div className="flex flex-col ">
              <p className="font-bold">{name}</p>
              <p>xyz@Company</p>
            </div>
          </div>
          <div onClick={()=> setFollow(!follow)} className="flex items-center gap-2 hover:bg-gray-200 p-2 text-blue-800 cursor-pointer">
            {!follow ? <FaPlus /> : <FaCheck/>}
            {/* <FaPlus /> */}
            <p>{follow ? "Folllowing" : "Follow"}</p>
          </div>
        </div>
        <p className="px-4">{desc}</p>
        <div>
          {photoUrl && <img className="w-[100%] h-[300px]" src={photoUrl} alt="" />}
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
            <div className="flex">
              <BiLike style={{backgroundColor:"blue", borderRadius:"50%" , padding:"2px",color:"red"}}/>
              <FaHandHoldingHeart style={{backgroundColor:"pink", borderRadius:"50%" , padding:"2px"}}/>
              <FaHeart style={{backgroundColor:"red", borderRadius:"50%" , padding:"2px",color:"white"}}/>
            </div>
            <p className="text-gray-500">{like ? `You,xyz and ${likeCnt} others`:`xyz and ${likeCnt} others`}</p>
            </div>
            <div className="sm:flex hidden gap-2 text-gray-500">
                <p>{12} comments</p>
                <p>1 share</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div onClick={()=> setLike(!like)} className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-2 px-5">
            <AiFillLike style={{fontSize:"20px",color:like&&"blue"}}/>
            <p className="hidden sm:flex">Like</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-2 px-5">
            <FaComments style={{fontSize:"20px"}}/>
            <p className="hidden sm:flex">Comments</p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-2 px-5">
            <BiRepost style={{fontSize:"20px"}}/>
            <p className="hidden sm:flex">Re-Post</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-2 px-5">
            <FaShare style={{fontSize:"20px"}}/>
            <p className="hidden sm:flex">Share</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img src={imgUrl} alt="" className="w-[40px] h-[40px] rounded-[50%]"/>
            <input ref={commentVal} onKeyPress={(e)=> {
              if(e.key === 'Enter') submitComment();
            }} className="border border-gray-300 rounded-xl px-3 w-[80%] outline-none" type="text" placeholder="Add a comments.." />
        </div>
        <div className="flex  gap-2">
        <img src={imgUrl}alt="" className="w-[30px] h-[30px] rounded-[50%]"/>
        <div className="flex flex-col gap-2">
          <div>
            <p className="font-bold">Sanni Kumar</p>
            <p className="text-[13px] text-gray-700">Frontent Developer @xyz-Company</p>
          </div>
          <p>I m Interested</p>
          <div className="flex gap-4">
            <p>Like</p>
            <p>Reply</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Post