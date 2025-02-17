import React from 'react'
import DBNavbar from '../../components/widgets/DBNavbar'
import DocSidebar from '../../components/layout/DocSidebar'

type Props = {}

const DoctorDashboard = (props: Props) => {
  return (
    <div className='h-screen flex w-full h-full'>
        <DocSidebar />

        <div className='flex flex-col w-full p-3'>
            <div className='text-xl font-bold'>User avatar</div>


            <div className='doc dashboard grid grid-cols-3 grid-rows-2 gap-5 m-4 mt-7 rounded-md h-full'>
                <div className='col-span-1 row-span-1 bg-yellow-200'>dsdsds</div>

                <div className='col-span-1 row-span-1 bg-yellow-200'>dsdsds</div>

                <div className='col-span-1 row-span-1 bg-yellow-200'>dsdsds</div>
                <div className='col-span-2 row-span-1 bg-yellow-200'>dsdsds</div>
                <div className='col-span-1 row-span-1 bg-yellow-200'>dsdsds</div>
            </div>

            
        </div>
    </div>
  )
}

export default DoctorDashboard