import { useSelector } from 'react-redux'
import AsideProfile from './AsideProfile'
import HeaderComponent from './HeaderComponent'
import Post from './Post'
import PostSection from './PostSection'
import TrendinghAside from './TrendinghAside'
import { useEffect, useId } from 'react'
import { useNavigate } from 'react-router-dom'

const  MainComponent = ()=> {
  const allPost = useSelector((store)=> store.UserData.allPost);
  const navigate = useNavigate()
  const data = localStorage.getItem('userData');
    // const userRes = JSON.parse(data);
    const userRes = JSON.parse(data);
    console.log(userRes);
    useEffect(()=>{
      if(!userRes?.isLogIn){
        navigate("/")
        console.log(userRes);
    }
    },[])
  
  return (
    <div className='w-[100%] bg-[#F4F2EE] relative'>
        <HeaderComponent/>
        <div className='lg:w-[80%] w-[98%] pt-[80px] m-auto flex md:flex-row flex-col gap-8'>
            <AsideProfile/>
            <div className='flex flex-col gap-4  h-[100%]'>
              <PostSection/>
              {allPost.map((ele)=><Post 
              key={ele.id}
              name={ele.userName}
              desc={ele.desc}
              photoImg = {ele.photoUrl}
              id={ele.id}
              /> )}
              
            </div>
            <TrendinghAside/>
        </div>
    </div>
  )
}

export default MainComponent