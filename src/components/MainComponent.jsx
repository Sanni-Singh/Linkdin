import { useSelector } from 'react-redux'
import AsideProfile from './AsideProfile'
import HeaderComponent from './HeaderComponent'
import Post from './Post'
import PostSection from './PostSection'
import TrendinghAside from './TrendinghAside'
import { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { fireStore } from '../utils/firebase'

const  MainComponent = ()=> {
  const navigate = useNavigate()
  const [arr,setArr] = useState([])
  const data = localStorage.getItem('userData');
    const userRes = JSON.parse(data);
    useEffect(()=>{
      if(!userRes?.isLogIn){
        navigate("/")
    }
    },[])

    useEffect(()=>{
      const getItem = async ()=>{
          const postArr =await getDocs(collection(fireStore,'postArr'));
          const postToShow = postArr.docs.map(post => ({...post.data()}))
          setArr(postToShow)
      }
      getItem();
      
  },[])
  console.log(arr);
  
  
  return (
    <div className='w-[100%] bg-[#F4F2EE] relative'>
        <HeaderComponent/>
        <div className='lg:w-[80%] w-[98%] pt-[80px] m-auto flex md:flex-row flex-col gap-8'>
            <AsideProfile/>
            <div className='flex flex-col gap-4  h-[100%]'>
              <PostSection/>
              {arr.map((ele)=><Post 
              key={ele.id}
              name={ele.name}
              id={ele.id}
              desc={ele.desc}
              imgUrl ={ele.imgUrl}
              photoUrl={ele.photoUrl}
              /> )}
              
            </div>
            <TrendinghAside/>
        </div>
    </div>
  )
}

export default MainComponent