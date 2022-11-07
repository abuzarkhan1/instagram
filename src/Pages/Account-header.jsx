import React from 'react'
import logo from "../assets/text-logo.png"
const AccountHeader = () => {
  return(
   <div className='pt-5.5 mb-3 mx-auto'>
    <img 
        src={logo} 
        alt="instagram"
        width={175}
        height={51}
    />
  </div>
 )
}

export default AccountHeader;