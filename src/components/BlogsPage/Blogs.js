import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../../index.css';
import Card from './BlogCard/Card';

export default function Testimonials() {
  const blogs = [
    {
      id: 1,
      title: 'Title',
      text: 'Lorem ipsum dolor sitadadLorem ipsum dolor sitadadLorem ipsum dolor sitdadaLorem ipsum dolor sitdad',
      user: 'Bruce Lee',
      userProfilePic:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      blogPic:
        'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
    },
    {
      id: 2,
      title: 'Title',
      text: 'Lorem ipsum dolor sitadadLorem ipsum dolor sitadadLorem ipsum dolor sitdadaLorem ipsum dolor sitdad',
      user: 'Bruce Lee',
      userProfilePic:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      blogPic:
        'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
    },
    {
      id: 3,
      title: 'Title',
      text: 'Lorem ipsum dolor sitadadLorem ipsum dolor sitadadLorem ipsum dolor sitdadaLorem ipsum dolor sitdad',
      user: 'Bruce Lee',
      userProfilePic:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      blogPic:
        'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
    },
    {
      id: 4,
      title: 'Title',
      text: 'Lorem ipsum dolor sitadadLorem ipsum dolor sitadadLorem ipsum dolor sitdadaLorem ipsum dolor sitdad',
      user: 'Bruce Lee',
      userProfilePic:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      blogPic:
        'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
    },
    {
      id: 5,
      title: 'Title',
      text: 'Lorem ipsum dolor sitadadLorem ipsum dolor sitadadLorem ipsum dolor sitdadaLorem ipsum dolor sitdad',
      user: 'Bruce Lee',
      userProfilePic:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      blogPic:
        'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
    },
    {
      id: 6,
      title: 'Title',
      text: 'Lorem ipsum dolor sitadadLorem ipsum dolor sitadadLorem ipsum dolor sitdadaLorem ipsum dolor sitdad',
      user: 'Bruce Lee',
      userProfilePic:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      blogPic:
        'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
    },
    {
      id: 7,
      title: 'Title',
      text: 'Lorem ipsum dolor sitadadLorem ipsum dolor sitadadLorem ipsum dolor sitdadaLorem ipsum dolor sitdad',
      user: 'Bruce Lee',
      userProfilePic:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      blogPic:
        'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
    },
  ];
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
        {blogs.map((ele) => {
          return <Card props={ele} key={ele.id} />;
        })}
      </div>
    </div>
  );
}
