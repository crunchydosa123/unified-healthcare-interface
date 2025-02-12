import React from 'react'
import SignupForm from '../../components/forms/SignupForm'

type Props = {}

const Signuppage = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
        <SignupForm />
    </div>
  )
}

export default Signuppage