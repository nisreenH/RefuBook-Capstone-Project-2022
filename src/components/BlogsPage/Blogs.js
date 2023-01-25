import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import '../../index.css';
import Card from '../Card';
// import data from '../../utils/data';
import BlogsForm from './BlogsForm';
import { UserAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import Spinner from '../spinner/Spinner';
import './carousel.css';

export default function Blogs() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogs'), (snapshot) => {
      setBlogs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubscribe;
  }, []);
  // console.log(blogs);
  function handleRedirection() {
    navigate('/signup');
  }
  const { user } = UserAuth();
  // const blogs = data[0].blogs;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 760, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  const categories = [
    { name: 'Food blogs' },
    { name: 'Travel blogs' },
    { name: 'Health and fitness blogs' },
    { name: 'Lifestyle blogs' },
    { name: 'Music blogs' },
    { name: 'Business blogs' },
    { name: 'Sports blogs' },
    { name: 'News blogs' },
    { name: 'Movie blogs' },
    { name: 'Photography blogs' },
    { name: 'Technology blogs' },
  ];
  const [showModal, setShowModal] = React.useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (e) => {
    // console.log('option', e.target.value);
    setSelected(e.target.value);
  };
  return blogs ? (
    <div
      className=" w-auto px-6
    md:px-12 relative"
    >
      <div className="h-auto">
        <Carousel
          showArrows={false}
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={3000}
          className="mb-20"
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
          infiniteLoop={true}
        >
          {blogs
            ? blogs.map((ele) => (
                <Card blogId={ele.id} props={ele} key={ele.id} />
              ))
            : console.log('none')}
        </Carousel>
      </div>

      {/* adminstration bar */}

      <div className="flex relative justify-between items-center border-b-2 border-gray-200">
        <button
          className="bg-sec text-prim active:bg-prim border-2 border-prim uppercase font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            !user ? handleRedirection() : setShowModal(true);
          }}
        >
          create your blog
        </button>

        <div className="flex gap-4 items-center  justify-between">
          <div className="xl:w-72 flex gap-3">
            {/* <p className="font-bold capitalize text-md">
              Filterd By :
            </p> */}
            <select
              value={selected}
              onChange={handleSelect}
              className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
       
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-prim focus:outline-none"
              ariaLabel="Default select example"
            >
              <option selected value="all">
                All Categories
              </option>
              {categories.map((ele) => (
                <option vlaue={ele.name} key={ele.name}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>
          {/* <form
            action=""
            className="relative mx-auto w-max transition-all duration-300"
          >
            <input
              type="search"
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4 "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-prim px-3.5 peer-focus:border-prim peer-focus:stroke-prim"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form> */}
        </div>
      </div>

      <BlogsForm trigger={showModal} setTrigger={setShowModal} />
      <div className="mb-10 text-left px-10 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-center w-auto items-center justify-center justify-items-center">
        {blogs
          ? !selected || selected === 'all'
            ? blogs.map((ele) => (
                <Card blogId={ele.id} props={ele} key={ele.id} />
              ))
            : blogs
                .filter((ele) => ele.categories === selected)
                .map((ele) => <Card key={ele.id} props={ele} blogId={ele.id} />)
          : ''}
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
