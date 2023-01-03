import React from "react";
import Carousel from 'react-elastic-carousel'

export default function Testimonials() {
  return (
    <div className="p-20  align item-center lg:flex flex-row md:flex-col md:inline-block ...">
      
    <img src="/Image/map.png" alt="map" className="w-45 h-full md:w-50..." />
      
    <Carousel showArrows={false} className="w-48 text-left">
      <div className="w-48">
     <p>Two lines of a short testimonial from someone want to say something, and can say more to explain. </p>
     <p className="text-blue-600/50">Louis Li,</p>
     <p className="text-blue-600/50">Trainer at Recoded</p>
      </div>
     <div className="w-48">
     <p>Two lines of a short testimonial from someone want to say something, and can say more to explain. </p>
     <p className="text-blue-600/50">Louis Li,</p>
     <p className="text-blue-600/50">Trainer at Recoded</p>
     </div>
     <div className="w-48">
     <p>Two lines of a short testimonial from someone want to say something, and can say more to explain. </p>
     <p className="text-blue-600/50">Louis Li,</p>
     <p className="text-blue-600/50">Trainer at Recoded</p>
     </div>
    </Carousel>
     

    </div>
  );
}