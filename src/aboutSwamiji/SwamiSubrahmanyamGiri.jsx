import React from 'react';
import headingIcon from "../assets/icon.png"; 
import img from "../assets/aboutswamijicenter.png"

const MyComponent = () => {
  return (
    <div className="flex p-">
      {/* Left Div */}
      <div className="md:w-4/5 md:px-10 p-3">
        
        <div className="flex items-center justify-center gap-4 ">
                  <img src={headingIcon} className="h-16" /> {/* Left Icon */}
                  <h2 className="fw-bold text-3xl primaryColor text-center  font-heading">Swami Subrahmanyam Giri </h2>
                  <img src={headingIcon} className="h-16" /> {/* Right Icon */}
                </div>
<div className='md:px-15'>
        <p className="pt-4 ">Swami Subrahmanyam Giri hails from Kanyakumari, Tamil Nadu, is a profound Astha yogi. He has been living in the holy lands of Shirdi for the past 42 years. Out of compassion, Swamiji provides healing and blessings to all that seek refuge in Baba. Till date Swamiji has visited numerous countries and performed many healing miracles until he was conferred the title of "Miracle Man' of the World.</p>

        <p className="">During his earlier days, Swamiji worked as an Architectural Engineer in Dubai until he had a calling from Shirdi Sai, Swamiji decided to travel to Shirdi, and it so happened that he lost his luggage and money in Mumbai. With heart full of eagerness, Swamiji walked all the way from Mumbai to Shirdi by foot, surviving on alms.</p>

        <p className="">By the time Swamiji reached Shirdi, he was barely recognizable and spent the next few years roaming and living like a beggar in the streets of Shirdi until one fateful night, he had a rare encounter with Sai Nath.</p>

        <p className="">owing to Sai's holy feet, Swamiji undertook the mission to heal people that needed help and carry the burden of the world on his shoulders At the age of 33, he received the divine calling from Shirdi Sai Baba himself and soon after this he renounced the material world and made his way to Shirdi.</p>

        <p className="">He has the holy symbols of Chakra (Wheel) and Sankha (Conch) on his hands and feet. Any place where Swamiji has set his sacred feet has been blessed with an abundance of wealth and health. There have been innumerable cases where childless couples have been blessed with children. Devotees struggling to get married have found their life partners by Swami's blessings.
        </p>

        <p className="">
        Shirdi Sai Baba has bestowed upon Swamiji a wealth of spiritual powers. Swamiji has healed thousands of people from many physical and mental ailments.He has literally made the lame walk, the blind see and the deaf hear. Refer to this video for a glimpse of his divine impact - https://www.youtube.com/watch?v=uUMX4FxLWAs</p>

        <p className="">Apart from healing, Swamiji, out of his limitless compassion, also performs Goddess Lakshmi yajna for the betterment of his devotees.Till date Swamiji has performed 4,75,089 such yajnas. Devotees who perform this yajna with the guidance and grace of Swamiji have experienced a plentitude of wealth and well being in all spheres of their lives.</p>
        </div>
        
      </div>
      {/* Center Image */}
      <div className="md:w-2/5 relative ">
        <img 
          className="absolute py-20 left-0 transform -translate-x-1/6" 
          src= {img} 
          alt="Center Image" 
        />
        {/* Right Div */}
        <div className="md:w-full h-full bg-[#800080]" />
      </div>
    </div>
  );
};

export default MyComponent;
