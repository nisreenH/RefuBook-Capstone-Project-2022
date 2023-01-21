import React, { useState, useEffect } from 'react';
import SingleBlogCard from './BlogCard/SingleBlogCard';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import Card from '../Card';
import shuffle from '../../shuffle';
import Spinner from '../spinner/Spinner';

export default function SingleBlog() {
  let { blogId } = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    async function fetchSingleBlog() {
      const docRef = doc(db, 'blogs', blogId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSingleBlog({ [docSnap.id]: docSnap.data() });
      } else {
        console.log('No such document!');
      }
    }
    fetchSingleBlog();
  }, [blogId]);
  // console.log(singleBlog);

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
 
  let keys = Object.keys(blogs);
  keys = keys.filter((key) => key !== blogId);
  const indexes = [...Array(keys.length).keys()];
  shuffle(indexes);
  const randomIndex1 = indexes[0];
  const randomKey1 = keys[randomIndex1];
  const randomIndex2 = indexes[1];
  const randomKey2 = keys[randomIndex2];

  return (
    <div className="md:flex justify-center gap-x-4">
      <div>
        {Object.keys(singleBlog).map((key) => (
          <SingleBlogCard props={singleBlog[key]} key={key} blogId={key} />
        ))}
      </div>

      <div className="gap-y-5 ml-10">
        <p className="text-left">Read also: </p>
        <div className="flex md:flex-col gap-y-5 mr-20 ">
          {blogs && keys.length > 0 ? (
            <React.Fragment>
              <Card props={blogs[randomKey1]} blogId={randomKey1} />
              <Card props={blogs[randomKey2]} blogId={randomKey2} />
            </React.Fragment>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}
