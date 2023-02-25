import React from 'react'
import { useState } from 'react'


function Broadcast() {
    const [isRunning, setIsRunning] = useState("Broadcast!")
    const [isGreen, setIsGreen] = useState("bg-green-300")
    const [pulse, setPulse] = useState("")


    const handleRunning = () => {
        if (isRunning == "Broadcast!") {
            setIsRunning("Stop Broadcasting")
            setIsGreen("bg-red-300")
            setPulse("animate-pulse")
        } else {
            setIsRunning("Broadcast!")
            setIsGreen("bg-green-300")
            setPulse("")
        }
    }
  return (
    <div className='my-32 flex flex-col justify-center'>
        {/* Button */}
        <div className={`bg-slate-300 p-24 m-6 rounded-full ${pulse} ${isGreen}`}  onClick={handleRunning}>
            <object className="mx-auto my-auto" type="image/svg+xml" data={'../images/Run.svg'} ></object>
        </div>
        <p className='text-lg text-center font-bold'>{isRunning}</p>



    </div>
  )
}

export default Broadcast