import React from 'react'

type Props = {}

const HomepageNav = (props: Props) => {
  return (
    <div className='flex justify-between h-12 text-white relative z-10 items-center mt-2 mx-5'>
    <div>
      Unified Healthcare Interface
    </div>

    <div>
      <button className='mx-2'>About the project</button>
      <button className='mx-2'>GitHub</button>
    </div>

    <div>
      <button>Signup/Login</button>
    </div>
  </div>
  )
}

export default HomepageNav