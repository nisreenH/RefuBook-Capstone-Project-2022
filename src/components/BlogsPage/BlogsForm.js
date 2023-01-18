import React from 'react';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserAuth } from '../../context/authContext';

export default function BlogsForm(props) {
  const { user } = UserAuth();
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
  const handleFormData = async (Title, subT, url, blogB, uid, categorie) => {
    await addDoc(collection(db, `blogs`), {
      BlogTitle: Title,
      subTitle: subT,
      blogImgUrl: url,
      blogBody: blogB,
      userId: uid,
      categories: categorie,
    });
  };

  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [blogImg, setBlogImg] = useState(null);
  const [blogBody, setBlogBody] = useState(null);
  const [blogCategorie, setBlogCategorie] = useState(null);

  const addingData = (e) => {
    e.preventDefault();

    handleFormData(title, subTitle, blogImg, blogBody, user.uid, blogCategorie);
  };

  return (
    <>
      {props.trigger ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Type Your Blog</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setTrigger(false)}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={addingData}>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          for="title"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="React js ..."
                          required
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          for="title"
                          class="block mb-2 text-sm font-medium text-gray-900  text-left"
                        >
                          Sub Title
                        </label>
                        <input
                          type="text"
                          id="subTitle"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Top React js Hooks"
                          required
                          onChange={(e) => setSubTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          for="image"
                          class="block mb-2 text-sm font-medium text-gray-900  text-left"
                        >
                          Image Url
                        </label>
                        <input
                          type="text"
                          id="image"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="www.image.com/path"
                          required
                          onChange={(e) => setBlogImg(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          for="categorie"
                          class="block mb-2 text-sm font-medium text-gray-900  text-left"
                        >
                          Categories
                        </label>
                        <select
                          id="categorie"
                          onChange={(e) => setBlogCategorie(e.target.value)}
                          placeholder="priority"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          required
                        >
                          {categories.map((ele) => (
                            <option vlaue={ele.name} key={ele.name}>
                              {ele.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-2 flex flex-col items-center gap-4">
                        {/* <label class="block">
                          <span class="sr-only">Choose File</span>
                          <input
                            type="file"
                            onChange={(e) => setBlogImg(e.target.value)}
                            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                        </label> */}
                        <div className=" w-full">
                          <label
                            for="blog"
                            class="block mb-2 text-sm text-left font-medium text-gray-900 "
                          >
                            Blog Body
                          </label>
                          <textarea
                            id="blog"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Write your thoughts here..."
                            onChange={(e) => setBlogBody(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => props.setTrigger(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-prim text-white active:bg-sky-700 active:text-prim font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        // onClick={() => props.setTrigger(false)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
