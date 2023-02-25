import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [nav, setNav] = useState(false);


  const links = [
      {
          id: 1,
          name: 'coffee',
          pic: '../images/coffee.svg',
          link: '/'

      },
      {
          id: 2,
          name: 'Friends',
          pic: '../images/privacy-policy.svg',
          link: '/friends'


      },
    //   {
    //       id: 3,
    //       name: 'Scrapbook',
    //       pic: '../images/favorite.svg',
    //       link: '/Scrapbook'


    //   },
      {
          id: 4,
          name: 'Profile',
          pic: '../images/setting.svg',
          link: '/settings'


      },

  ]
  return (
    <div className="nav">
        <div className='flex items-center w-full h-20 text-white fixed bottom-0 bg-slate-50 rounded-t'>
            {links.map(({ id, link, pic, name }) => (
                <Link className=' flex-col w-1/3' key={id} to={link}>
                    {/* <div className="flex-col w-1/3"> */}
                        <div className="text-center active:bg-violet-100 rounded-full max-w-md">
                            <object className="mx-auto my-auto" type="image/svg+xml" data={pic} ></object>
                        </div>
                    {/* </div> */}
                </Link>
            ))}
        </div>

    </div>
  )
}

export default Navbar