import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Shop Smart, Shop Fast </h2>
        </div>

        <div className="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto h-10 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png" alt="" />
            </div>
        </div>
    </div>
    <div className='bg-blue-400 flex items-center  h-screenr bottom-0 min-h-5 text-white justify-center'> 
    Conditions of Use & Sale Privacy Notice Interest-Based Ads
    © 1996-2024, Amazon.com, Inc. or its affiliates
    </div>
</section>
        

  )
}

export default Footer