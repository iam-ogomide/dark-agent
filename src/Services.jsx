import './App.css';
import { BsArrowRight } from "react-icons/bs";
import service1 from '../src/assets/service_1.jpeg';
import service2 from '../src/assets/service_2.jpeg';
import service3 from '../src/assets/service_3.jpeg';
import service4 from '../src/assets/service_4.jpeg';

const Services = () => {
  return (
    <div className='text-white lg:px-24 px-4'>
        <div className="h-36"></div>

        {/* service section  */}
        <div className="lg:flex lg:justify-between items-start" id='services'>

          {/* content  */}
          <div className="lg:w-1/3 space-y-5">
            <h4 className="text-gray-200 font-semibold text-2xl">What cant we do</h4>
            <h2 className='font-bold text-5xl mb-5 leading-snug'>Services we can help you with</h2>
            <a href="" className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"><span>See all services</span><BsArrowRight /></a>
          </div>

          {/* service card */}
          <div className="lg:w-2/3 my-8">
            <div className="flex flex-wrap">
              <div className="lg:w-1/4 hidden lg:block"></div>
              <div className="service_card">
                <a href="/" className="rounded-2xl block relative">
                  <img src={service1} alt="" className='rounded-2xl'/>
                  {/* shade on the image */}
                  <div className="absolute bg-dark left-0 top-0 opacity-50 w-full h-full rounded-2xl"></div>

                  {/* text  */}
                  <div className="absolute top-1/3 left-4 right-0">
                    <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                    <h2 className='text-2xl font-bold text-white'>UI Design</h2>
                  </div>
                </a>
              </div>

              {/* 2nd image  */}
              <div className="lg:w-1/4 hidden lg:block "></div>
              <div className="service_card">
                <a href="/" className="rounded-2xl block relative">
                  <img src={service2} alt="" className='rounded-2xl'/>
                  {/* shade on the image */}
                  <div className="absolute bg-dark left-0 top-0 opacity-50 w-full h-full rounded-2xl"></div>

                  {/* text  */}
                  <div className="absolute top-1/3 left-4 right-0">
                    <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                    <h2 className='text-2xl font-bold text-white'>React</h2>
                  </div>
                </a>
              </div>


              {/* 3rd image  */}
              <div className="service_card">
                <a href="/" className="rounded-2xl block relative">
                  <img src={service3} alt="" className='rounded-2xl'/>
                  {/* shade on the image */}
                  <div className="absolute bg-dark left-0 top-0 opacity-50 w-full h-full rounded-2xl"></div>

                  {/* text  */}
                  <div className="absolute top-1/3 left-4 right-0">
                    <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                    <h2 className='text-2xl font-bold text-white'>AI/ML</h2>
                  </div>
                </a>
              </div>

              {/* 4th image  */}
              <div className="lg:w-1/4 hidden lg:block"></div>
              <div className="service_card">
                <a href="/" className="rounded-2xl block relative">
                  <img src={service4} alt="" className='rounded-2xl'/>
                  {/* shade on the image */}
                  <div className="absolute bg-dark left-0 top-0 opacity-50 w-full h-full rounded-2xl"></div>

                  {/* text  */}
                  <div className="absolute top-1/3 left-4 right-0">
                    <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                    <h2 className='text-2xl font-bold text-white'>Graphics</h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services