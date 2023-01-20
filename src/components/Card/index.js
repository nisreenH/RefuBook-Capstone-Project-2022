import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
// import { query , where } from "firebase/firestore";

export default function Card({ props, blogId }) {
  const navigate = useNavigate();

  const [users, setUsers] = useState({});
  useEffect(() => {
    async function fetchUsers() {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        setUsers((prevState) => ({
          ...prevState,
          [doc.id]: doc.data(),
        }));
      });
    }
    fetchUsers();
  }, []);
  // console.log(users);

  function handleRedirection() {
    navigate(`/SingleBlog/${blogId}`);
  }
  return (
    <div class="carouselCard max-w-sm bg-white border rounded-lg h-auto shadow-sm   ">
      {props.blogImgUrl ? (
        <div>
          <img
            class="rounded-t-lg w-full"
            src={`${props.blogImgUrl}`}
            alt=""
            onClick={() => handleRedirection(blogId)}
          />
        </div>
      ) : (
        ''
      )}

      <div class="p-4" onClick={() => handleRedirection(blogId)}>
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {props.BlogTitle}
          </h5>
        </div>
        <p class="mb-10 font-normal text-gray-700 ">{props.subTitle}</p>
        <div class="inline-flex gap-6 items-center px-3 py-2 text-sm font-medium  w-full ">
          {Object.keys(users).map((key) =>
            key === props.userId ? (
              <React.Fragment>
                <div className="rounded-full h-16 w-16 overflow-hidden">
                  <img
                    src={`${users[key].profilePic}`}
                    alt={`${users[key].userName}`}
                  />
                </div>
                <p className="m-0">{users[key].userName}</p>
              </React.Fragment>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
