//import React from 'react'
import Dropdown from '../widgets/Dropdown'

//type Props = {}

const SignupForm = () => {
    return (
        <div className="flex flex-col p-5 border border-blue-300 rounded-md w-1/3">
          <h2 className="text-2xl font-bold mb-2">Signup</h2>
          <form className="flex flex-col space-y-2">
            <input type="text" placeholder="Username" className="p-2 border border-gray-300 rounded-md" />
            <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-md" />
            <input type="password" placeholder="Confirm Password" className="p-2 border border-gray-300 rounded-md" />
            <Dropdown 
            title="Role" 
            options={[
              { label: "Doctor", href: "/profile" },
              { label: "Patient", href: "/settings" },
            ]} 
            />
            <button className="p-2 bg-blue-500 text-white rounded-md">Signup</button>
          </form>
        </div>
      )
}

export default SignupForm