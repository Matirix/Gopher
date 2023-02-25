import React from 'react'

function Friends() {
    const requests = [
        {
            id: 1,
            name: 'John Doe',
            phone: '###-###-####',
            request: 'Coffee'
  
        },
        {
            id: 2,
            name: 'Jane Doe',
            phone: '###-###-####',
            request: 'Tea'
        },
        {
            id: 3,
            name: 'Mary Doe',
            phone: '###-###-####',
            request: 'Coffee'
        },
        {
            id: 4,
            name: 'John Doe',
            phone: '###-###-####',
            request: 'Tea'
        },

    ]
    

  return (
    <div>
        {/* For Requests. */}
        <div className="flex flex-col gap-1 mt-4">
            {requests.map(({ id, name, phone, request}) => (
                //  Each request box
                <div id={id} className="flex flex-col bg-slate-300 p-3 rounded-lg m-1">

                    <b className="bold text-md text-left">{name} - {phone}</b>
                    <p className="text-sm text-left">{request}</p>
                
                {/* Button */}
                <div className="flex flex-row gap-1 justify-end">
                    <button className="bg-green-200 text-black font-bold py-2 px-4 rounded">
                        Accept
                    </button>

                </div>



                </div>

            ))}


        </div>

    </div>
  )
}

export default Friends