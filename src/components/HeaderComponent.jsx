import { IoIosSearch } from "react-icons/io";
import { IoHomeSharp , IoBagRemove } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth,signOut } from "firebase/auth";
const HeaderComponent = ()=> {
    const [searchToggle , setSearchToggle] = useState(true);
    const navigate = useNavigate();
    const [signOuter , setSignOuter] = useState(false);
    const signOutUser =async()=>{
        const auth = getAuth();
        await signOut(auth);
        setSignOuter(false);
        localStorage.removeItem("userData")
        navigate("/");

    }
    
    
  return (
    <div className="w-[100%] bg-white z-50 fixed top-0 left-0">
        <div className="xl:w-[80%] w-[100%] m-auto flex justify-between sm:px-6">
            <div className="flex px-2 py-2 gap-4">
                <img className="w-[40px]" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className="flex items-center gap-1 px-2 md:bg-gray-200  rounded">
                    {searchToggle ? <IoIosSearch onClick={()=> setSearchToggle(!searchToggle)} style={{fontSize:"25px"}}/> : <RxCross2 onClick={()=> setSearchToggle(!searchToggle)} style={{fontSize:"25px"}}/>}
                    <input type="text" placeholder="Search... " className=" md:flex outline-none hidden p-2 bg-gray-200 " />
                    { !searchToggle && <input type="text" className="w-[100%] sm:hidden flex px-3 py-2 border border-black" placeholder="Search" name="" id="" />}
                </div>
            </div>
            { searchToggle && <div className="flex sm:gap-8 gap-3">
                <div className="sm:flex hidden  flex-col justify-center items-center text-gray-700 hover:text-black cursor-pointer">
                    <IoHomeSharp style={{fontSize:"25px"}}/>
                    <p className="md:flex hidden text-[13px] ">Home</p>
                </div>
                <div className="sm:flex hidden  flex-col justify-center items-center text-gray-700 hover:text-black cursor-pointer">
                    <BsPeopleFill style={{fontSize:"25px"}}/>
                    <p className="md:flex hidden text-[13px] text-gray-700 ">My Network</p>
                </div>
                <div className="sm:flex hidden  flex-col justify-center items-center text-gray-700 hover:text-black cursor-pointer">
                    <IoBagRemove style={{fontSize:"25px"}}/>
                    <p className="md:flex hidden text-[13px] text-gray-700">Jobs</p>
                </div>
                <div className="flex  flex-col justify-center items-center text-gray-700 hover:text-black cursor-pointer">
                    <AiFillMessage style={{fontSize:"25px"}}/>
                    <p className="md:flex hidden text-[13px] text-gray-700">Messaging</p>
                </div>
                <div className="sm:flex hidden  flex-col justify-center items-center text-gray-700 hover:text-black cursor-pointer">
                    <IoNotifications style={{fontSize:"25px"}}/>
                    <p className="md:flex hidden text-[13px] text-gray-700">Notifications</p>
                </div>
                <div onClick={()=> setSignOuter(!signOuter)} className="flex gap-0  flex-col justify-center items-center ">
                    <FaUserCircle style={{fontSize:"25px"}}/>
                    <div className=" relative">
                        <div className="flex items-center md:flex hidden">
                        <p className=" text-[13px] text-gray-700">me</p>
                        <IoMdArrowDropdown style={{fontSize:"25px", paddingTop:"3px"}}/>
                        </div>
                        <button onClick={signOutUser} className={`border  absolute top-[10px] md:left-[-10px] sm:left-[-50px] left-[-80px] bg-blue-800 text-white  w-[80px] border-blue-700 px-2  py-1 rounded-2xl ${signOuter ? "flex" : "hidden"}` }>Sign out</button>
                    </div>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default HeaderComponent