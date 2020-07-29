import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles={
   margin:'auto',
   width:'500px'
  };

function App() {
  return (
    <div style={styles}>
      <Carousel>
        <div>
          <img src="https://static.toiimg.com/photo/72975551.cms" alt="Sun or Planet"
          />
          <p className="legend">Surya Grahan</p>
        </div>
        <div>
          <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2019%2F03%2Fmimivirus-1200x900.jpg"
          alt="What Life is"/>
          <p className="legend">Life</p>
        </div>
        <div>
          <img src="https://astrobiology-campus.eu/wp-content/uploads/2015/02/VISTA-stares-deep-into-the-cosmos-1200x900.jpg" alt="European Constillation"/>
          <p className="legend">Constillation</p>
        </div>
        <div>
          <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fjillianscudder%2Ffiles%2F2016%2F04%2F484523main_observethemoon_full-1200x900.jpg"
           alt="Speed of Light"/>
          <p className="legend">Laser Light</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
