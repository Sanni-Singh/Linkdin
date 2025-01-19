import { TiInfo } from "react-icons/ti";
import { IoGridSharp } from "react-icons/io5";
import { RiGridFill } from "react-icons/ri";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { SiGriddotai } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
let arr = [
    {
        icon:IoGridSharp,
        text:"Tango",
        p:"Harmonize the grid",
        color:"red"
    },
    {
        icon:RiGridFill,
        text:"Queens",
        p:"Crown each region",
        color:"orange"
    },
    {
        icon:BsFillGrid1X2Fill,
        text:"PinPoint",
        p:"Guess the Category",
        color:"green"

    },
    {
        icon:SiGriddotai,
        text:"CrossClimb",
        p:"Unlock a trivia ladder",
        color:"blue"
    }
]
let foot=["About","Accessbility","help","cneter","privicy & term","Ad choice" , "Advertising","Business Services","Get the Linkdin App" ,"more"]
const TrendinghAside = () => {
  return (
    <div className="  w-[300px]  flex-col gap-2 hidden xl:flex">
        <div className="bg-white pt-4 border border-gray-300 rounded-xl">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between px-4 items-center">
                    <p className="text-xl font-bold">Trending Now</p>
                    <TiInfo/>
                </div>
                <p className="text-gray-600 px-4">curated by LinkdIn News</p>
            </div>
            <div className="hover:bg-gray-200 p-1 cursor-pointer">
                <p className="font-bold text-sm px-4">Israel Hamas reach ceasefire deal</p>
                <p className="text-gray-500 px-4">2h ago , 1,368 readers</p>
            </div>
            <div className="hover:bg-gray-200 p-1 cursor-pointer">
                <p className="font-bold text-sm px-4">Sector with best salary</p>
                <p className="text-gray-500 px-4">2h ago , 221 readers</p>
            </div>
            <div className="hover:bg-gray-200 p-1 cursor-pointer">
                <p className="font-bold text-sm px-4">Cost concerns hit study abroad</p>
                <p className="text-gray-500 px-4">1h ago , 170 readers</p>
            </div>
            <div className="hover:bg-gray-200 p-1 cursor-pointer">
                <p className="font-bold text-sm px-4">general counsels take centre stage</p>
                <p className="text-gray-500 px-4">1h ago , 101 readers</p>
            </div>
            <div className="hover:bg-gray-200 p-1 cursor-pointer">
                <p className="font-bold text-sm px-4">VCs bet on smart appliancs</p>
                <p className="text-gray-500 px-4">1h ago</p>
            </div>
            <p className="text-xl text-gray-600 px-4">Today’s puzzles</p>
            {
                arr.map((ele,idx)=> (
                    <div key={idx} className="flex justify-between hover:bg-gray-300 cursor-pointer py-2 items-center px-4">
                        <div className="flex gap-2 items-center">
                            <ele.icon style={{color:ele.color, fontSize:"35px"}}/>
                            <div>
                                <p className="text-bold">{ele.text}</p>
                                <p className="text-gray-400">{ele.p}</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight style={{fontSize:"30px"}}/>
                    </div>
                ))
            }
            
            
        </div>
        <div className="w-[100%] overflow-hidden">
            <img className="w-[100%] rounded-lg" src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />
        </div>
        
        <div className="flex flex-wrap justify-center items-center px-4 gap-2   text-gray-500">
            {foot.map((ele,idx)=> <a className="hover:text-blue-900" key={idx} href="">{ele}</a>)}
        </div>
    </div>
  )
}

export default TrendinghAside