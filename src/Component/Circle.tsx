import * as React from 'react';
import { useState } from 'react';


//border-2 border-pink-300
export default function Circle() {

    const [enble, setEnabled] = useState<boolean>(false)
    const handleButton =()=>{
        setEnabled(true)
    }
    return(
        <div>

            <button className=' px-4 py-2 bg-red-700 text-white rounded m-20' onClick={handleButton}>Click me</button>
            {
                enble && (
                    <button className=' px-4 py-2 bg-red-700 text-white rounded m-20'>Show me</button>

                )
            }

        </div>
    )
   


}