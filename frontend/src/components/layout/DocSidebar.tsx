import React from 'react'

type Props = {}

const DocSidebar = (props: Props) => {
  return (
    <div className='flex flex-col text-left bg-green-200 w-1/5 h-full p-3'>
        
        <div className='text-xl font-bold items-center font-bold'>UHI</div>

        <div className='my-5'>
        <button className='text-left p-1 my-1 text-l w-full border rounded-md'>Dashboard</button>
        <button className='text-left p-1 my-1 text-l w-full border rounded-md'>View Patients</button>
        <button className='text-left p-1 my-1 text-l w-full border rounded-md'>Add Patients</button>
        <button className='text-left p-1 my-1 text-l w-full border rounded-md'>View Certificates</button>
        <button className='text-left p-1 my-1 text-l w-full border rounded-md'>Issue Certificates</button>
        </div>

    
    </div>
  )
}

export default DocSidebar