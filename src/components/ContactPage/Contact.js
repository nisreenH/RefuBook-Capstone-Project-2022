import React from 'react';
import { useTranslation } from 'react-i18next';
import pic from './contact.png';
import { db } from '../../firebase';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collection(db, 'Contacts'), {
      email: email,
      message: message,
    }).then(() => {
      alert('Message has been submitted 🎉');
    });

    setEmail('');
    setMessage('');
  };
  return (
    <div className="bg-sky-500/25 full p-10  lg:flex flex-row-reverse  max-md:flex-col md:inline-block...">
      <img src={pic} alt="contact" className="w-45 h-25 jusify-center..." />
      <div className="p-20">
        <h1 className="text-blue-600/75 font-bold lg:text-left md:text-center">
          {t('contact.contactTitle')}
        </h1>
        <p className="font-light  lg:text-left md:text-center">
          {t('contact.contactContent')}
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email4" className="mb-2 block">
            <p className="text-left text-blue-600/50">{t('contact.email')}</p>
          </label>
          <input
            type="email"
            //icon={HiMail}
            placeholder="hello@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <label htmlFor="comment">
            <p className="text-left text-blue-600/50">{t('contact.message')}</p>
          </label>
          <textarea
            placeholder={t('contact.messageContent')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required={true}
            rows={4}
          ></textarea>
          <button
            className="w-full md:w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {t('contact.send')}
          </button>
        </form>
        <div className="mt-8 flex flex-row gap-2 lg:text-left md:text-center object-scale-down h-10 w-10...">
          <a href="https://www.twitter.com/">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
              alt="Facebook"
              className="object-scale-down h-10 w-10 ..."
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png"
              alt="Facebook"
              className="object-scale-down h-10 w-10 ..."
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              alt="Facebook"
              className="object-scale-down h-10 w-10 ..."
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
