import React from 'react';

export default function Card({ props }) {
  return (
    <div class="carouselCard max-w-sm bg-white border shadow-md rounded-lg h-auto  ">
      <div>
        <img class="rounded-t-lg w-full" src={`${props.blogPic}`} alt="" />
      </div>
      <div class="p-4">
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {props.title}
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700">{props.text}</p>
        <div class="inline-flex gap-6 items-center px-3 py-2 text-sm font-medium  w-full ">
          <div className="rounded-full h-16 w-16 overflow-hidden">
            <img src={`${props.userProfilePic}`} alt={`${props.user}`} />
          </div>
          <p className="m-0">{props.user}</p>
        </div>
      </div>
    </div>
  );
}
