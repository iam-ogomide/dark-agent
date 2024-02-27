import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='lg:px-24 px-4 text-white'>
        {/* footer top  */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">

            {/* logo text  */}
            <div className="space-y-4 lg:w-1/3">
                <a href="/" className="text-white text-3xl font-bold">
                    <span className='text-orange'>A</span>rino
                </a>
                <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, veniam.</p>

                {/* social icons  */}
                <div className="flex gap-5 text-white">
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaLinkedinIn className='w-5 h-5'/></a>
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaInstagram className='w-5 h-5'/></a>
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaTwitter className='w-5 h-5'/></a>
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaFacebookF className='w-5 h-5'/></a>
                </div>
            </div>

            {/* services  */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Services</h3>
                <div className="space-y-3 text-gray-300">
                    <a href="/" className="block">UI design</a>
                    <a href="/" className="block">Web development</a>
                    <a href="/" className="block">AL/ML</a>
                    <a href="/" className="block">SEO marketing</a>
                </div>
            </div>

            {/* contact  */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <div className="space-y-3 text-gray-300">
                    <p className="">08022819293</p>
                    <p>theenigne@hotmail.com</p>
                    <p>THE MOON</p>
                </div>
            </div>

            {/* subscribe  */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Subscribe</h3>
                <div className="space-y-3 text-gray-300">
                    <div className="relative w-full">
                        <input type="email" placeholder='yourhead@gmail.com' className='newsletter_input' />
                        <button className='newsletter_btn'>
                            <span>Send</span>
                        </button>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quia.</p>
                </div>
            </div>


        </div>

        <div className="h-12"></div>
        <hr className='border-gray-300'/>
        <div className="h-12"></div>

        {/* copyright */}
        <div className="flex flex-col sm:flex-row justify-between pb-7">
            <p>omo all rights no dey reserved for this joint</p>
            <p>Terms of use | no stress</p>
        </div>
    </div>
  )
}

export default Footer