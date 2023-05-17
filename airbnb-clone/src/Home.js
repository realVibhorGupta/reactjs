import React from 'react';
import "./Home.css";
import Banner from "./Banner";
import Cards from "./Cards";

function Home() {

    return (
        <div className="home">
            <Banner />
            <div className='home__section'>
                <Cards
                    src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720"
                    title="Entire Homes"
                    description="This includes entire homes"
                />
                <Cards
                    src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
                    title="Cabins and Cottages"
                    description="This includes cottages and cabins with beautiful sea facing or mountain facing view."
                />                
               <Cards
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
            />
                 <Cards
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
            />
            </div>
            <div className="home__section">
                <Cards
                    src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=320"
                    title="Host your home"
                    description="Spare your room for travellers."
                />
                <Cards
                    src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=320"
                    title="Host an online Experience."
                    description="Tell your experience Online."
                />                


                 <Cards
                    src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=320"
                    title="Host on experience"
                    description="Tell your experience to the world."
                />
            </div>
     
        </div>
    )
}

export default Home;