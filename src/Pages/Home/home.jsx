import React from 'react';
import HeroSection from '../../Components/HeroSection/hero';
import Featured from '../../Components/Featured/features';
import StorySection from '../../Components/Story/story';
import Testimonials from '../../Components/Testimonials/testimonials';
import BestSellers from '../../Components/BestFood/bestsellers';
import HappyHour from '../../Components/HappyHour/happyHour';


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Featured/>
        <StorySection/>
        <BestSellers/>
        <HappyHour/>
        <Testimonials/>
    </div>
  )
}

export default Home;