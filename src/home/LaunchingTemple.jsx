import React from 'react';
import headingIcon from "../assets/icon.png"; // Import an icon (you can change it)
import ImageSlider from './ImageSlider';


const LaunchingTemple = () => {
    return (
        <>
        <section className="container py-12">
        <div className="flex items-center justify-center gap-4">
          <img src={headingIcon} className="h-16" /> {/* Left Icon */}
          <h2 className="fw-bold text-3xl primaryColor text-center  font-heading">Saishakti Sant Ashram Kasili, Kopergaon</h2>
          <img src={headingIcon} className="h-16" /> {/* Right Icon */}
        </div>
        </section>
        <div className="launching-temple-container py-5">
            <div className="launching-temple-content">
                <div className="text-section ">
                
        <h4 className="fw-bold text-md primaryColor"> Opening the doors to a spiritual journey....</h4>
                    <p className="description">
                        

Swamiji undertook missions to build temple for Sai Nath around India. Till date he has constructed 17 temples, and this is the last and 18th temple cum Ashram that Swamiji is currently constructing at Kopergaon. According to Swamiji, Sai Baba has foretold that this 18th Ashram will be Swamiji's final resting place and devotees has already prepared his Samadhi in most unique way. Sai Baba has also mentioned that this place would turn into a place of pilgrim for devotees seeking healing and blessings in the near future. The Kalasa of Sai Baba in this Ashram is the tallest in the world for a Baba Temple, standing at 141 feet. Apart from Sai Nath, there are mandir's for lord Anjeneya, Devi Mariamman. Other Mandir's are still under construction for Lord Muruga, Lord Ganesha, Lord Venkatachalam, and a huge event hall / dinner hall for serving prasad and annathanam.
                    </p>
                   
                </div>
                <div className="image-section">
                   <ImageSlider/>
                </div>
            </div>
        </div>
       
        </>
    );
}

export default LaunchingTemple;
