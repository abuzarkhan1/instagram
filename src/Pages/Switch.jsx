import React from 'react'

const Switch = ({to}) => {
  const text = 
  to === "Sign Up" ? "Don't have an account" : "Already have an account?"
  return (
    <div className='md:bg-white md:border py-2.5 flex justify-center items-center'>
      <p className='text-sm my-2.5 mx-4 font-semibold'>
      {text}   <a href='https://www.instagram.com/accounts/emailsignup/' className='text-accent bg-white text-sm font-semibold text-center active:text-accent/70 disabled:text-accent/30'>Sign Up</a>
      </p>
    </div>
  )
}

export default Switch;