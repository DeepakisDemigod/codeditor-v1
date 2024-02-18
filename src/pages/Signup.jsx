import React, {
  useState
} from 'react'
import logo from '../assets/logo.png'
import Userinput from '../features/auth/Userinput.jsx'
import {
  signInWithGoogle, signInWithGithub
} from '../utils/helpers.js'
import {
  Envelope,
  Password,
  GoogleLogo,
  GithubLogo
} from '@phosphor-icons/react'

const Signup = () => {
  const [email,
    setEmail] = useState('')
  const [password,
    setPassword] = useState('')
  const [getEmailValidationStatus,
    setGetEmailValidationStatus] = useState(false)
  const [isLogin,
    setIsLogin] = useState(false)
  return (
    <div className="font-almarai w-full py-6">
    <img className='object-contain w-20 opacity-50 h-auto grayscale' src={logo} alt="logo" />
    <div className='w-full flex-col items-center justify-center py-8'>
      <div className='w-full px-8 md:w-auto py-4 rounded-xl bg-sec shadow-md flex flex-col items-center justify-center gap-8'>
        <p className="text-lg">
🚀 Join Us To Start Coding!
    </p>
        {/* email */}
        <Userinput
      label="Email"
      placeholder="Email"
      isPass={false}
      key="Email"
      setStateFunction={setEmail}
      Icon={Envelope}
      setGetEmailValidationStatus={setGetEmailValidationStatus} />
        {/* paswd */}
        <Userinput
      label="Passkey"
      placeholder="passkey"
      isPass={true}
      key="Password"
      setStateFunction={setPassword}
      Icon={Password}
      />
        {/* alert */}
        {/* login */}
        {!isLogin ? (
      <div className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-ter cursor-pointer bg-qua">
          <p className="text-base text-zinc-50">
Sign Up
      </p>
      </div>
    ): (
      <div className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-ter cursor-pointer bg-qua">
          <p className="text-base text-zinc-50">
Log In
      </p>
      </div>

    )}
    {!isLogin ? (
      <p className="text-base text-zinc-300 flex items-center justify-center gap-3">
Already have an account <span onClick={() => setIsLogin(!isLogin)} className="text-base text-qua cursor-pointer">Login here</span>
      </p>
    ): (
      <p className="text-base text-zinc-300 flex items-center justify-center gap-3">
Don't have an account <span onClick={() => setIsLogin(!isLogin)} className="text-base text-qua cursor-pointer">Create here</span>
      </p>
    )}
        {/* orsec */}
        <div className="flex items-center justify-center gap-10">
      <div className="h-[1px] text-sm bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
      <p className="text-sm text-[rgba(256,256,256,0.2)]">
      or
      </p>
      <div className="h-[1px] text-sm bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
    </div>
      {/* google*/}
      <div onClick={signInWithGoogle} className="flex items-center justify-center gap-3 bg-pri backdrop-blur-md w-full py-3 rounded-xl cursor-pointer">
       <GoogleLogo size={24} />
       <p className="text-base text-white">
Sign in with Google
      </p>
    </div>
      {/* orsecn*/}
      <div className="flex items-center justify-center gap-10">
      <div className="h-[1px] text-sm bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
      <p className="text-sm text-[rgba(256,256,256,0.2)]">
      or
      </p>
      <div className="h-[1px] text-sm bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
    </div>
      {/* github*/}
      <div onClick={signInWithGithub} className="flex items-center justify-center gap-3 bg-pri backdrop-blur-md w-full py-3 rounded-xl cursor-pointer">
       <GithubLogo size={24} />
       <p className="text-base text-white">
Sign in with Github
      </p>
    </div>
    </div>
    </div>
  </div>
)
}

export default Signup