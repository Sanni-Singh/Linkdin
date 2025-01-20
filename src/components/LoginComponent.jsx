import { signInWithPopup } from 'firebase/auth'
import google from '../assets/img/google.png'
import login from '../assets/img/login.svg'
import { auth, googleAuthProvider } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserDetails } from '../slices/userSlices'
import { useEffect } from 'react'
const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = localStorage.getItem('userData');
    const userRes = JSON.parse(data);
        console.log(userRes);
        useEffect(()=>{
          if(userRes?.isLogIn){
            navigate("/home")
        }
        },[])
    const loginFn = async()=>{

        try{
            const res = await signInWithPopup(auth, googleAuthProvider);
            const userDetails = {
                displayName :res.user.displayName,
                email:res.user.email,
                uid:res.user?.uid,
                isLogIn:true,
            }
            localStorage.setItem("userData" , JSON.stringify(userDetails));
            dispatch(updateUserDetails(userDetails))

            navigate("/home");
            
        }
        catch(err){
            console.log(err);
            
        }
    }
  return (
    <div className='w-[100%] h-[100vh] overflow-hidden'>
        <div className='flex flex-col  lg:gap-12 md:gap-8 gap-3'>
            <div className='flex sm:w-[70%] w-[95%] m-auto justify-between p-4'>
                {/* <img className='w-[200px] h-[100px] border border-red-900' src={linkdin} alt="" /> */}
                <div className='flex items-center'>
                <p className='text-blue-700 sm:text-4xl text-2xl font-bold'>Linkd</p>
                <img className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                </div>
                <div className='flex gap-12 items-center'>
                    <button className='sm:text-2xl text-xl sm:flex hidden'>Join now</button>
                    <button className='sm:text-2xl text-xl border border-blue-700 py-2 px-5 text-blue-700 rounded-3xl'>Sign in</button>
                </div>
            </div>
            <div className='flex w-[100%] sm:flex-row flex-col justify-center items-center gap-0'>
                <div className='sm:w-[50%] w-[90%] flex items-center justify-center'>
                    <div onClick={loginFn} className='cursor-pointer hover:bg-gray-200 flex items-center border border-black w-fit px-12 py-2 rounded-3xl gap-2'>
                        <img className='w-[50px]' src={google} alt="" />
                        <p className='sm:text-xl text-sm font-bold'>Login with Google</p>
                    </div>
                </div>
                <div className='sm:w-[50%] w-[90%]'>
                    <img className='w-[100%] h-[30rem]' src={login} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent