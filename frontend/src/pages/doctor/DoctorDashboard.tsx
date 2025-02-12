import React from 'react'
import DBNavbar from '../../components/widgets/DBNavbar'

type Props = {}

const DoctorDashboard = (props: Props) => {
  return (
    <div className='flex flex-col'>
        <DBNavbar />

        <div className='flex flex-col items-center'>
            <h1>Doctor Dashboard</h1>
        </div>

        <div className='grid grid-cols-3 gap-4 p-4'>
            <div className='bg-blue-100 p-4 rounded-md'>
                <h2>Appointments</h2>
            </div>

            <div className='bg-blue-100 p-4 rounded-md'>
                <h2>Patients</h2>
            </div>

            <div className='flex flex-col bg-blue-100 p-4 rounded-md'>
                <h2>Actions</h2>
                <button className='p-2 bg-blue-500 my-2 text-white rounded-md'>Add Patient</button>
                <button className='p-2 bg-blue-500 my-2 text-white rounded-md'>Issue</button>
            </div>


            </div>
    </div>
  )
}

export default DoctorDashboard