import { FaImage } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { useState } from "react";
import AddingPost from "./AddingPost";
const PostSection = () => {
    const [post,setPost] = useState(false)
    if(post) return <AddingPost setPost={setPost}/>
  return (
    <div className="md:w-[550px] w-[100%] border border-gray-300 rounded-xl flex flex-col gap-3 p-4 h-[100%] bg-white ">
        <div className="flex gap-2">
            <img className="w-[50px] h-[50px] rounded-[50%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7wUje_rFblJ1IX16lC9-0WiyDl2jbl7re9vS9H77MLeDXiX6yUaZ6McVKReSERcbSsk&usqp=CAU" alt="" />
            <input onClick={()=>setPost(true)} className="border px-8 bg-gray-100  w-[80%] rounded-3xl outline-none border-gray-400" placeholder="Start A Post..." type="text" name="" id="" />
        </div>
        <div className="flex justify-around">
            <div onClick={()=>setPost(true)} className="flex gap-2 items-center hover:bg-gray-200 p-3 cursor-pointer">
                <FaImage style={{color:"green" , fontSize:"25px"}}/>
                <p className="font-bold hidden sm:flex">Media</p>
            </div>
            <div onClick={()=>setPost(true)} className="flex gap-2 items-center hover:bg-gray-200 p-3 cursor-pointer">
                <FaRegCalendarAlt style={{color:"orange" , fontSize:"25px"}}/>
                <p className="font-bold hidden sm:flex">Event</p>
            </div>
            <div onClick={()=>setPost(true)} className="flex gap-2 items-center hover:bg-gray-200 p-3 cursor-pointer text-[12px]">
                <RiArticleFill style={{color:"red" , fontSize:"25px"}}/>
                <p className="font-bold hidden sm:flex">Write article</p>
            </div>
        </div>
    </div>
  )
}

export default PostSection