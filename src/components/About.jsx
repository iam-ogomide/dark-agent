import '../App.css';

const About = () => {
  return (
    <div className='text-white md:-mt-[100px] -mt-[10] bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 px-6 rounded-xl z-50 flex flex-col md:flex-row justify-between md:items-center gap-12 relative'>
        <div className="bg-[url(/src/assets/funfact_bg.svg)] bg-no-repeat bg-center h-full w-full absolute top-0 left-0 opacity-75"></div>

        {/* left side */}
        <div className="md:w-2/5" id='about'>
            <h2 className="text-5xl  font-bold mb-5">Our fun fact</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam veritatis perspiciatis ut soluta expedita!</p>
        </div>

        {/* right side  */}
        <div className="md:w-3/5">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                <div className=" items-center gap-3 flex h-auto">
                    <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                    <div className="">
                        <span className="text-orange text-lg font-bold">+</span>
                        <p className="mb-2 text-sm leading-tight text-gray-300">Global Heavy clients</p>
                    </div>
                </div>
                <div className=" items-center gap-3 flex h-auto">
                    <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                    <div className="">
                        <span className="text-orange text-lg font-bold">+</span>
                        <p className="mb-2 text-sm leading-tight text-gray-300">Global Heavy clients</p>
                    </div>
                </div>
                <div className=" items-center gap-3 flex h-auto">
                    <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                    <div className="">
                        <span className="text-orange text-lg font-bold">+</span>
                        <p className="mb-2 text-sm leading-tight text-gray-300">Global Heavy clients</p>
                    </div>
                </div>
                <div className=" items-center gap-3 flex h-auto">
                    <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                    <div className="">
                        <span className="text-orange text-lg font-bold">+</span>
                        <p className="mb-2 text-sm leading-tight text-gray-300">Global Heavy clients</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About