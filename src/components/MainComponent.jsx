import { useSelector } from 'react-redux'
import AsideProfile from './AsideProfile'
import HeaderComponent from './HeaderComponent'
import Post from './Post'
import PostSection from './PostSection'
import TrendinghAside from './TrendinghAside'
import { useId } from 'react'

const  MainComponent = ()=> {
  const allPost = useSelector((store)=> store.UserData.allPost);
  // console.log(allPost);
  // const id = useId();
  
  
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