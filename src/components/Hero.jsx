import main from '../assets/hero_bg.jpeg';
import '../App.css';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-scroll';

const Hero = () => {
  return (

    <div className="banner cs-style1" id='home'>
        {/* css shapes */}
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>

        {/* banner content  */}
        <div className="px-4 lg:px-24">
            <h1 className="md:w-2/3 lg:text-7xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug">Creativity In Our Blood Line</h1>

            <div className="text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8">
                <div className="">
                    <a href="" className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"><span>Get a quote</span><BsArrowRight /></a>
                </div>
                <div className="md:w-1/2">
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum unde quam numquam dolores iure, iste suscipit dolore, </p>
                </div>
            </div>
        </div>

        {/* scroll arrow to service section  */}
        <Link to='services' smooth={true} className='cs-down_btn md:mt-20 mt-8'>.</Link>
    </div>
  )
}

export default Hero