import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import '../../index.css';
import Card from '../Card';
// import data from '../../utils/data';
import BlogsForm from './BlogsForm';
import { UserAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Blogs() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    async function fetchBlogs() {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      querySnapshot.forEach((doc) => {
        setBlogs((prevState) => ({
          ...prevState,
          [doc.id]: doc.data(),
        }));
      });
    }
    fetchBlogs();
  }, []);
  console.log(blogs);

  function handleRedirection() {
    navigate('/signup');
  }
  const { user } = UserAuth();
  // const blogs = data[0].blogs;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div
      className=" w-auto px-6
    md:px-12 relative"
    >
      <Carousel
        showArrows={false}
        breakPoints={breakPoints}
        className="w-full text-left p-6 flex items-center justify-center mb-20"
        autoPlay={true}
        infiniteLoop={true}
      >
        {Object.keys(blogs).map((key) => (
          <Card props={blogs[key]} key={key} blogId={key} />
        ))}
      </Carousel>
      <button
        className="bg-sec text-prim active:bg-prim border-2 border-prim uppercase font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          !user ? handleRedirection() : setShowModal(true);
        }}
      >
        create your blog
      </button>
      <BlogsForm trigger={showModal} setTrigger={setShowModal} />
      <div className="mb-10 text-left md:px-16 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 content-center">
        {Object.keys(blogs).map((key) => (
          <Card props={blogs[key]} key={key} blogId={key} />
        ))}
      </div>
    </div>
  );
}
