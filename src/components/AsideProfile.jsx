
import { FaChessQueen } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
const AsideProfile = () => {
    const userData = localStorage.getItem('userData');
    const datas = JSON.parse(userData);
    
  return (
    <div className="flex flex-col gap-4 md:w-[250px] w-[100%]">
        <div className="relative border overflow-hidden flex flex-col bg-white gap-4 border-gray-300   rounded-md">
            <img className="w-[100%]  h-[100px]" src={"https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg"} alt="" />
            <img className="w-[70px] h-[70px] m-auto mt-[-50px] rounded-[50%]" src={datas.imageUrl} alt="" />
            <div className="flex flex-col items-center">
                <p className="font-bold text-xl">{datas.displayName}</p>
                <p>Frontent Developer</p>
            </div>
            <hr className="border border-gray-300"/>
            <div className="md:flex hidden flex-col gap-1 ">
               <div className="flex justify-between px-2 hover:bg-gray-300 cursor-pointer py-1">
                    <p className="text-gray-600">Profile viwers</p>
                    <p className="text-blue-600">335</p>
               </div>
               <div className="md:flex hidden justify-between px-2 hover:bg-gray-300 cursor-pointer py-1">
                    <p className="text-gray-600">Post impressions</p>
                    <p className="text-blue-600">335</p>
               </div>
            </div>
            <div className="hover:bg-gray-300  cursor-pointer md:flex hidden flex-col gap-2">
            <hr className="border border-gray-300"/>
            <p className="text-sm px-2 text-gray-600">Job search smarter ans stand out</p>
                <div className="flex gap-2 px-2 items-center">
                    <FaChessQueen style={{color:"red"}}/>
                    <p className="text-[12px] font-bold">try Premium for 0</p>
                </div>
            <hr className="border border-gray-300"/>
            </div>
            <div className="md:flex hidden hover:bg-gray-300 cursor-pointer p-2 items-center px-2 gap-2">
                <FaSave/>
                <p>Saved items</p>
            </div>
        </div>
        <div className="bg-white w-[250px] bborder-gray-300 border rounded-md md:flex hidden flex-col gap-1">
            <p className="px-2 hover:bg-gray-300 py-1 cursor-pointer text-blue-600">Groups</p>
            <div className="flex hover:bg-gray-300 cursor-pointer justify-between px-2 py-1">
                <p className="text-blue-600">Events</p>
                <GoPlus/>
            </div>
            <div className="md:flex hidden hover:bg-gray-300 cursor-pointer justify-center items-center py-2">
            <hr className=" border"/>
                <p className="text-gray-600">Discover more</p>
            </div>
        </div>
    </div>
  )
}

export default AsideProfile