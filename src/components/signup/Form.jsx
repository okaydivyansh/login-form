import React from 'react'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'
import person_icon from '../../Assets/person.png'
const Form = () => {
  return (
    <div className="mt-50 m-8 flex flex-col pb-30">
      <div className='header flex-1 w-32 ...'>
        <div className='text'> Sign Up </div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={person_icon} alt=''/>
          <input type="text"/>
        </div>
        <div className='input'>
          <img src={email_icon} alt=''/>
          <input type='email'/>
        </div>
        <div className='input'>
          <img src={password_icon} alt=''/>
          <input type='password'/>
        </div>
      </div>
      <div className='forgot-password'>Lost Password? <span class="flex justify-end ">Click Here!</span></div>
      <div className='submit-container'>
        <div className='submit'>Sign up</div>
        <div className='submit'>Login</div>
      </div>
    </div>
  )
}

export default Form
