import React from 'react'
import DocDBTable from '../widgets/DocDBTable'

type Props = {}

const DocDBGrid = (props: Props) => {
  return (
    <div className='doc dashboard grid grid-cols-3 grid-rows-2 gap-5 p-5 h-full bg-[#1e201f]'>
        <div className='col-span-1 row-span-1 bg-[#111411] rounded-md text-white p-5 border border-gray-600 flex flex-col'>
            <div className='border-b p-1'>Overview</div>
                <div className='h-full items-center grid grid-cols-3 text-center text-gray-400 '>
                    <div className='flex flex-col justify-center p-4'>
                      <div className='text-4xl text-white'>69</div>
                      <h1 className='text-center'>Patients</h1>
                    </div>

                    <div className='flex flex-col p-4'>
                      <div className='text-4xl text-white'>5</div>
                      <h1 className='text-center'>Surgeries</h1>
                    </div>

                    <div className='flex flex-col p-4'>
                      <div className='text-4xl text-white'>5</div>
                      <h1 className='text-center'>Certificates</h1>
                    </div>
                </div>
            </div>

            <div className='col-span-1 row-span-1 bg-[#111411] rounded-md text-white p-5 border border-gray-600 flex flex-col'>
                <div className='border-b p-1'>Blockchain Deployment</div>
                <div className='text-gray-500 mt-4 text-sm'>Testnet</div>
                <div className='text-white text-sm'>0x22392739820191082019</div>
                <div className='text-green-400 text-3xl mb-2 font-bold p-2'>Working</div>
                <div className='text-white text-sm'>Truffle + Ganache deployed on AWS</div>
            </div>

            <div className='col-span-1 row-span-1 bg-[#111411] rounded-md text-white p-5 border border-gray-600 p-5 flex flex-col justify-start'>
                <div className='border-b p-1'>Quick Actions</div>
                <button className="bg-[#272b2c] transition-all mt-5 rounded-md p-2 text-white text-left pl-3 text-sm">Issue Certificate</button>
                <button className="bg-[#272b2c] transition-all mt-2 rounded-md p-2 text-white text-left pl-3 text-sm">Add Surgery</button>
            </div>

                <div className="col-span-2 row-span-1 bg-[#111411] rounded-md text-white p-5 border border-gray-600 flex flex-col">
                    <div className="border-b p-1 ">Recent Activity</div>
                    <div className="overflow-x-auto">
                        <DocDBTable />
                    </div>
                </div>



                <div className='col-span-1 row-span-1 bg-[#111411] rounded-md text-white p-5 border border-gray-600 flex flex-col'>
                  <div className='border-b p-1 mb-5'>Project Contributors</div>
                  <div className='text-sm my-1'>Pratham Gadkari</div>
                  <div className='text-sm my-1'>Yash Kate</div>
                  <div className='text-sm my-1'>Medhaj Kulkarni</div>
                  <div className='text-sm my-1'>Prateek Buthale</div>
                </div>
    </div>
  )
}

export default DocDBGrid