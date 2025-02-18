import React from 'react'
import DBNavbar from '../../components/widgets/DBNavbar'
import DocSidebar from '../../components/layout/DocSidebar'
import UserAvatar from '../../components/widgets/UserAvatar'
import DocDBGrid from '../../components/layout/DocDBGrid'

type Props = {}

const DoctorDashboard = (props: Props) => {
  return (
    <div className='h-screen flex w-full'>
        <DocSidebar />

        <div className='flex flex-col w-full '>
            <UserAvatar />


            
          <DocDBGrid />

            
        </div>
    </div>
  )
}

export default DoctorDashboard