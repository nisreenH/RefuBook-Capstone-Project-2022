import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../../index.css';
import Card from '../Card';
import data from '../../utils/data';
export default function Blogs() {
  const blogs = data[0].blogs;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div
      className=" w-auto px-6
    md:px-12"
    >
      <Carousel
        showArrows={false}
        breakPoints={breakPoints}
        className="w-full text-left p-6 flex items-center justify-center mb-20"
        autoPlay={true}
        infiniteLoop={true}
      >
        {blogs.map((ele) => {
          return <Card props={ele} key={ele.id} />;
        })}
      </Carousel>
      <div className="mb-10 text-left md:px-16 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 content-center">
        {blogs.map((ele, index) => {
          return <Card props={ele} key={index} />;
        })}
      </div>
    </div>
  );
}
