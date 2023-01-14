import React from 'react';
// // import Card from './BlogCard/Card';
import SingleBlogCard from './BlogCard/SingleBlogCard';

function Card() {
  return (
    <div className="carouselCard max-w-sm bg-white border shadow-md rounded-lg h-auto  ">
      <div>
        <img
          src="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn"
          alt=""
        />
      </div>
      <div className="p-4">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Title
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700">
          subTitle subTitle subTitle subTitle subTitle subTitlesubTitlesubTitle
          subTitle subTitle subTitle subTitle subTitlesubTitle
        </p>
        <div className="inline-flex gap-6 items-center px-3 py-2 text-sm font-medium  w-full ">
          <div className="rounded-full h-16 w-16 overflow-hidden">
            <img
              src="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn"
              alt=""
            />
          </div>
          <p className="m-0">author</p>
        </div>
      </div>
    </div>
  );
}

export default function SingleBlog() {
  return (
    <div className="md:flex justify-center gap-x-4">
      <div>
        <SingleBlogCard />
      </div>

      <div className="gap-y-5 ml-10">
        <p className="text-left">Read also: </p>
        <div className="flex md:flex-col gap-y-5 mr-20 ">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
