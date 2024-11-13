import * as React from 'react';
import { useState } from 'react';

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}
//border-2 border-pink-300
export default function Home() {
    const [enabled, setEnabled] = useState<boolean>(false);



    
  return (
    <div className=' flex flex-col    mx-auto rounded mt-2 '>
        <div className=' w-full bg-red-800  flex flex-row justify-between px-20 py-4'>
            <input className=' border-2 border-gray-200 rounded-lg pl-2 py-1' placeholder=' Search Project ' />
            
           
            <select className=' rounded px-1' name="cars" id="cars">
                <option value="volvo">Filter</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>


        </div>
        {
            enabled && (
                <div  className=' absolute w-1/4 h-96 rounded bg-white flex flex-col mx-auto top-52 right-0 left-0 px-5 py-5'>
                    <div className=' flex flex-row justify-between pb-5 '>
                        <text>Add Task</text>
                        <text>X</text>

                    </div>
                    <text className=' bg-gray-300 w-full h-1 mx-auto  '></text>
                    <div className=' w-4/5 mx-auto flex flex-row justify-between pt-10 pb-2 '>
                        <text>Task 1</text>
                        <text>+</text>

                    </div>
                    <text className=' w-4/5 bg-black   h-1 mx-auto  '></text>
                    <text className=' w-4/5 mx-auto'> This will assign the type of boolean to enabled, and setEnabled will be a function accepting either a boolean argument, or a function that returns a boolean</text>
                    <div className=' w-4/5 mx-auto flex flex-row justify-between pt-10 pb-2 '>
                        <text className=' font-bold text-gray-500'>Deadline</text>
                        <text className=' font-bold text-gray-500'>Assigned to</text>

                    </div>
                    

                </div>
            )
        }
        <div className=' flex flex-row'>
            
            

            <div className=' flex flex-col gap-y-4 w-1/5    px-5 py-4 '>

                <div className=' w-11/12 border-2 flex flex-col gap-y-3 border-gray-200  h-44 rounded px-3 py-3 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 px-2 rounded-full  text-white bg-red-500 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                    </svg>

                    <text className=' font-light text-gray-400'>Expired Tasks</text>
                    <text className=' text-3xl'>5</text>


                </div>


                <div className=' w-11/12 border-2 flex flex-col gap-y-3 border-gray-200  h-44 rounded px-3 py-3 '>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 rounded-full px-2  text-white bg-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>


                    <text className=' font-light text-gray-400'>All Active Tasks</text>
                    <text className=' text-3xl'>5</text>


                </div>

                <div className=' w-11/12 border-2 flex flex-col gap-y-3 border-gray-200  h-44 rounded px-3 py-3 '>
                   

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 rounded-full px-2  text-white bg-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>


                    <text className=' font-light text-gray-400'>Complated Tasks</text>
                    <text className=' text-3xl'>5/2</text>


                </div>

               

                <div className=' w-11/12 bg-black text-white h-8  rounded flex flex-row justify-center pt-1'>
                    <text >Add Task</text>

                </div>

            </div>


            <div className=' w-4/5   flex flex-row justify-between p-10  '>

                <div className=' w-1/4  rounded bg-gray-200  pt-3 flex flex-col'>
                    <div className=' flex flex-row gap-x-2 justify-center pb-2 text-center'>
                       
                        <text>To Do</text>
                        <text className=' bg-gray-300 px-2 rounded-full '>3</text>

                    </div>
                   
                    <text className=' bg-blue-500 w-11/12 h-1 mx-auto '>-</text>

                    <div className=' flex flex-col w-11/12 bg-white mt-2 rounded  mx-auto px-3 py-4 gap-y-0.5'>
                        <div className='  flex flex-row justify-between'>
                            <text className= ' rounded text-sm bg-red-300 text-red-600 px-2'>Low</text>
                            <text>...</text>
                        </div>
                        <text>Madhya Pradesh</text>
                        <text className=' font-light text-sm'>Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. Ancient Gwalior</text>
                        
                        <div className=' flex flex-row gap-x-1'>
                            <text className=' text-sm  font-bold'>Deadline</text>
                            <text className=' font-light text-sm'>10/11/2022</text>

                        </div>
                    </div>

                </div>

                <div className=' w-1/4  rounded bg-gray-200  pt-3 flex flex-col'>
                    <div className=' flex flex-row gap-x-2 justify-center pb-2 text-center'>
                       
                        <text>To Do</text>
                        <text className=' bg-gray-300 px-2 rounded-full '>3</text>

                    </div>
                   
                    <text className=' bg-orange-500 w-11/12 h-1 mx-auto '>-</text>

                    <div className=' flex flex-col w-11/12 bg-white mt-2 rounded  mx-auto px-3 py-4 gap-y-0.5'>
                        <div className='  flex flex-row justify-between'>
                            <text className= 'text-sm rounded bg-red-300 text-red-600 px-2'>Low</text>
                            <text>...</text>
                        </div>
                        <text>Madhya Pradesh</text>
                        <text className=' font-light text-sm'>Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. Ancient Gwalior</text>
                        
                        <div className=' flex flex-row gap-x-1'>
                            <text className=' text-sm  font-bold'>Deadline</text>
                            <text className=' font-light text-sm'>10/11/2022</text>

                        </div>
                    </div>

                </div>



                <div className=' w-1/4  rounded bg-gray-200  pt-3 flex flex-col'>
                    <div className=' flex flex-row gap-x-2 justify-center pb-2 text-center'>
                       
                        <text>To Do</text>
                        <text className=' bg-gray-300 px-2 rounded-full '>3</text>

                    </div>
                   
                    <text className=' bg-green-500 w-11/12 h-1 mx-auto '>-</text>

                    <div className=' flex flex-col w-11/12 bg-white mt-2 rounded  mx-auto px-3 py-4 gap-y-0.5'>
                        <div className='  flex flex-row justify-between'>
                            <text className= ' text-sm rounded bg-green-300 text-green-600 px-2'>Complated</text>
                            <text>...</text>
                        </div>
                        <text>Madhya Pradesh</text>
                        <text className=' font-light text-sm'>Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. Ancient Gwalior</text>
                        
                        <div className=' flex flex-row gap-x-1'>
                            <text className=' text-sm  font-bold'>Deadline</text>
                            <text className=' font-light text-sm'>10/11/2022</text>

                        </div>
                    </div>

                </div>

                





            </div>


        </div>
      
    </div>
  );
}
