import React from 'react'
import DocSidebar from '../../components/layout/DocSidebar'
import UserAvatar from '../../components/widgets/UserAvatar'
import DocDBGrid from '../../components/layout/DocDBGrid'
import DocPatientsTable from '../../components/widgets/DocPatientsTable'

type Props = {}

const ViewPatients = (props: Props) => {
    
  return (
    <div className='h-screen flex w-full'>
        <DocSidebar />

        <div className='flex flex-col w-full '>
            <UserAvatar />

            <div className="bg-[#111411] h-full w-full p-5 text-white">
                <h2 className=" font-semibold mb-4">Your Patients</h2>
                <DocPatientsTable />
            </div>
            
        </div>

    </div>
  )
}

export default ViewPatients