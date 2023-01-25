import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import '../../App.css';
// import { query , where } from "firebase/firestore";

export default function Card({ props, blogId }) {
  const navigate = useNavigate();

  const [users, setUsers] = useState(null);
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const querySnapshot = await getDocs(collection(db, 'users'));
  //     querySnapshot.forEach((doc) => {
  //       setUsers((prevState) => ({
  //         ...prevState,
  //         [doc.id]: doc.data(),
  //       }));
  //     });
  //   }
  //   fetchUsers();
  // }, []);
  // console.log(users);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, `users`), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });

    return unsubscribe;
  }, []);
  console.log(users);
  function handleRedirection() {
    navigate(`/SingleBlog/${blogId}`);
  }
  return (
    <div class="carouselCard border hover:-translate-y-2 transition-translate duration-500 cursor-pointer w-96 mx-6 rounded-lg h-5/6  shadow-md hover:shadow-xl">
      {props.blogImgUrl ? (
        <div className="w-full h-1/2">
          <img
            className="rounded-t-lg w-full h-full object-cover "
            src={`${props.blogImgUrl}`}
            alt=""
            onClick={() => handleRedirection(blogId)}
          />
        </div>
      ) : (
        ''
      )}

      <div className="p-4">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {props.BlogTitle}
          </h5>
        </div>
        <p className="mb-10 font-normal text-gray-700 truncate">
          {props.subTitle}
        </p>
        <div className="  text-sm font-medium w-full">
          {users
            ? users.map((key) =>
                key.userId === props.userId ? (
                  <div className="flex gap-2 items-center mb-20 ">
                    <div className="rounded-full h-16 w-16 overflow-hidden">
                      {key.profilePic ? (
                        <img
                          src={`${key.profilePic}`}
                          alt={`${key.userName}`}
                        />
                      ) : (
                        <img
                          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
                          alt={`${key.userName}`}
                        />
                      )}
                    </div>
                    <p className="m-0">{key.userName}</p>
                  </div>
                ) : null
              )
            : ''}
        </div>
      </div>
    </div>
  );
}
