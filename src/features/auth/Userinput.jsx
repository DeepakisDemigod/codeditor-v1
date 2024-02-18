import React, {
  useState
} from 'react'
import {
  Envelope,
  Eye,
  EyeSlash
} from '@phosphor-icons/react'

const Userinput = ({
  label, placeholder, isPass, setStateFunction, Icon, setGetEmailValidationStatus
}) => {
  const [value,
    setValue] = useState('')
  const [showPass,
    setShowPass] = useState(false)
  const [isEmailValid,
    setIsEmailValid] = useState(false)

  const handleTextChange = (e) => {
    setValue(e.target.value)
    setStateFunction(e.target.value)

    if (placeholder === 'Email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const status = emailRegex.test(value)
      // console.log(status)
      setIsEmailValid(status)
      setGetEmailValidationStatus(status)
    }
  }
  return (
    <div className='flex flex-col items-start justify-start gap-1'>
      <label className='text-base text-gray-300'>{label}</label>
      <div className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-pri ${
      !isEmailValid &&
      placeholder === "Email" &&
      value.length > 0 &&
      "border-2 border-red-500"
      }`}>
          <Icon size={24} />
          <input
      type={isPass && showPass ? "password": "text"}
      placeholder={placeholder}
      value={value}
      onChange={handleTextChange}
      className='flex-1 justify-start items-center w-full h-full py-2 outline-none border-none bg-transparent text-base text-zinc-300 placeholder:text-zinc-700'
      />
          {isPass && (
      <div onClick={() => setShowPass(!showPass)} className='cursor-pointer'>
              {showPass ? (
        <Eye size={24} />
      ): (
        <EyeSlash size={24} />
      )}
      </div>
    )}
    </div>
  </div>
)
}

export default Userinput