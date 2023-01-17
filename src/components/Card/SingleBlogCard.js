import React from 'react';

export default function SingleBlogCard() {
  return (
    <div className=" max-w-7xl h-auto flex flex-col flex-wrap items-center justify-center">
      <div className="w-4/6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Title Title Title Title Title Title Title
        </h5>
        {/* <div className='relative'> */}
        <div className=" flex flex-col pt-8 pr-2 gap-2 absolute">
          <a href="socialMediaLink">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.25 16.5C21.2813 16.5 22.1641 16.8672 22.8984 17.6016C23.6328 18.3359 24 19.2187 24 20.25C24 21.2813 23.6328 22.1641 22.8984 22.8984C22.1641 23.6328 21.2813 24 20.25 24C19.2187 24 18.3359 23.6328 17.6016 22.8984C16.8672 22.1641 16.5 21.2813 16.5 20.25C16.5 20.0938 16.5078 19.9453 16.5234 19.8047C16.5391 19.6641 16.5703 19.5234 16.6172 19.3828L6.67969 14.3203C6.33594 14.7578 5.91016 15.1055 5.40234 15.3633C4.89453 15.6211 4.34375 15.75 3.75 15.75C2.71874 15.75 1.83594 15.3828 1.10156 14.6484C0.367184 13.9141 0 13.0313 0 12C0 10.9687 0.367184 10.0859 1.10156 9.35156C1.83594 8.61718 2.71874 8.25 3.75 8.25C4.29688 8.25 4.80859 8.35937 5.28516 8.57812C5.76172 8.79688 6.17187 9.10156 6.51562 9.49219L16.5938 4.59375C16.5625 4.45312 16.5391 4.3125 16.5234 4.17188C16.5078 4.03125 16.5 3.89063 16.5 3.75C16.5 2.71874 16.8672 1.83594 17.6016 1.10156C18.3359 0.367184 19.2187 0 20.25 0C21.2813 0 22.1641 0.367184 22.8984 1.10156C23.6328 1.83594 24 2.71874 24 3.75C24 4.78126 23.6328 5.66406 22.8984 6.39844C22.1641 7.13282 21.2813 7.5 20.25 7.5C19.625 7.5 19.0508 7.35938 18.5273 7.07812C18.0039 6.79687 17.5703 6.42188 17.2266 5.95312L7.28906 10.7812C7.35156 10.9688 7.40234 11.1641 7.44141 11.3672C7.48047 11.5703 7.5 11.7812 7.5 12C7.5 12.1719 7.48828 12.3398 7.46484 12.5039C7.44141 12.668 7.40625 12.8281 7.35938 12.9844L17.25 18.0234C17.5781 17.5547 18.0039 17.1836 18.5273 16.9102C19.0508 16.6367 19.625 16.5 20.25 16.5ZM20.25 1.5C19.625 1.5 19.0938 1.71875 18.6562 2.15625C18.2187 2.59375 18 3.125 18 3.75C18 4.375 18.2187 4.90625 18.6562 5.34375C19.0938 5.78125 19.625 6 20.25 6C20.875 6 21.4062 5.78125 21.8438 5.34375C22.2813 4.90625 22.5 4.375 22.5 3.75C22.5 3.125 22.2813 2.59375 21.8438 2.15625C21.4062 1.71875 20.875 1.5 20.25 1.5ZM3.75 14.25C4.375 14.25 4.90625 14.0313 5.34375 13.5938C5.78125 13.1562 6 12.625 6 12C6 11.375 5.78125 10.8438 5.34375 10.4062C4.90625 9.96875 4.375 9.75 3.75 9.75C3.125 9.75 2.59375 9.96875 2.15625 10.4062C1.71875 10.8438 1.5 11.375 1.5 12C1.5 12.625 1.71875 13.1562 2.15625 13.5938C2.59375 14.0313 3.125 14.25 3.75 14.25ZM20.25 22.5C20.875 22.5 21.4062 22.2813 21.8438 21.8438C22.2813 21.4062 22.5 20.875 22.5 20.25C22.5 19.625 22.2813 19.0938 21.8438 18.6562C21.4062 18.2187 20.875 18 20.25 18C19.625 18 19.0938 18.2187 18.6562 18.6562C18.2187 19.0938 18 19.625 18 20.25C18 20.875 18.2187 21.4062 18.6562 21.8438C19.0938 22.2813 19.625 22.5 20.25 22.5Z"
                fill="#4699C2"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.8267 6.18495C27.4215 5.13122 26.8541 4.23961 26.0435 3.51011C25.233 2.78061 24.4224 2.13216 23.3687 1.72688C22.315 1.32161 21.2612 1.07844 19.8833 1.07844C18.5053 0.997383 18.1001 0.997383 14.7768 0.997383C11.4535 0.997383 11.0482 0.997383 9.67027 1.07844C8.29233 1.15949 7.2386 1.32161 6.18488 1.72688C5.13115 2.13216 4.23954 2.69955 3.51004 3.51011C2.78054 4.32067 2.13209 5.13122 1.72682 6.18495C1.32154 7.23867 1.07837 8.2924 1.07837 9.67034C0.997314 11.0483 0.997314 11.4536 0.997314 14.7768C0.997314 18.1001 0.997314 18.5054 1.07837 19.8834C1.15943 21.2613 1.32154 22.315 1.72682 23.3688C2.13209 24.4225 2.69948 25.3141 3.51004 26.0436C4.3206 26.7731 5.13115 27.4215 6.18488 27.8268C7.2386 28.2321 8.29233 28.4753 9.67027 28.4753C11.0482 28.5563 11.4535 28.5563 14.7768 28.5563C18.1001 28.5563 18.5053 28.5563 19.8833 28.4753C21.2612 28.3942 22.315 28.2321 23.3687 27.8268C24.4224 27.4215 25.314 26.8541 26.0435 26.0436C26.773 25.233 27.4215 24.4225 27.8267 23.3688C28.232 22.315 28.4752 21.2613 28.4752 19.8834C28.5562 18.5054 28.5562 18.1001 28.5562 14.7768C28.5562 11.4536 28.5562 11.0483 28.4752 9.67034C28.3941 8.2924 28.232 7.23867 27.8267 6.18495ZM25.2326 19.7209C25.1515 21.0177 24.9894 21.6662 24.7462 22.1525C24.5031 22.801 24.1788 23.2873 23.6925 23.7736C23.2062 24.26 22.7198 24.5842 22.0714 24.8274L21.9744 24.8599C21.4981 25.0204 20.8524 25.2379 19.6397 25.3137H14.7764C11.5342 25.3137 11.1289 25.3137 9.83199 25.2326C8.5351 25.1516 7.88666 24.9895 7.40032 24.7463C6.75188 24.5031 6.26554 24.1789 5.77921 23.6926C5.29287 23.2063 4.96865 22.7199 4.72548 22.0715L4.69292 21.9745C4.53246 21.4981 4.31494 20.8524 4.23915 19.6398V14.7765C4.23915 11.5342 4.23915 11.129 4.32021 9.83207C4.40126 8.53517 4.56337 7.88673 4.80654 7.40039C5.04971 6.75195 5.37393 6.26561 5.86026 5.77928C6.3466 5.29295 6.83293 4.96872 7.48138 4.72556L7.57837 4.693C8.05472 4.53253 8.70043 4.31501 9.91305 4.23922H14.7764C18.0186 4.23922 18.4239 4.23922 19.7208 4.32028C21.0177 4.40133 21.6661 4.56345 22.1525 4.80661C22.8009 5.04978 23.2872 5.374 23.7736 5.86034C24.2599 6.34667 24.5841 6.833 24.8273 7.48145L24.8599 7.57844C25.0203 8.05479 25.2378 8.7005 25.3136 9.91312V14.7765C25.3136 18.0187 25.3136 18.424 25.2326 19.7209ZM21.6661 9.42678C22.5167 9.42678 23.2062 8.73728 23.2062 7.88673C23.2062 7.03618 22.5167 6.34667 21.6661 6.34667C20.8156 6.34667 20.1261 7.03618 20.1261 7.88673C20.1261 8.73728 20.8156 9.42678 21.6661 9.42678ZM7.64349 14.7765C7.64349 10.8047 10.8047 7.64356 14.7764 7.64356C18.7481 7.64356 21.9093 10.8047 21.9093 14.7765C21.9093 18.7482 18.7481 21.9094 14.7764 21.9094C10.8047 21.9094 7.64349 18.7482 7.64349 14.7765ZM10.8857 14.7765C10.8857 16.8839 12.6689 18.6671 14.7764 18.6671C16.8838 18.6671 18.6671 16.8839 18.6671 14.7765C18.6671 12.669 16.8838 10.8858 14.7764 10.8858C12.6689 10.8858 10.8857 12.669 10.8857 14.7765Z"
                fill="#4699C2"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <svg
              width="12"
              height="26"
              viewBox="0 0 12 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1761 12.6053H7.72205V25.2593H2.4889V12.6053H0V8.1582H2.4889V5.28042C2.4889 3.22249 3.46645 0 7.76863 0L11.645 0.0162177V4.33289H8.83244C8.3711 4.33289 7.72239 4.56339 7.72239 5.54508V8.16234H11.6333L11.1761 12.6053Z"
                fill="#4699C2"
              />
            </svg>
          </a>

          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.5556 4.96574C26.5222 5.3963 25.4889 5.74074 24.2833 5.82685C25.4889 5.13796 26.35 4.01852 26.7806 2.72685C25.6611 3.41574 24.4556 3.8463 23.1639 4.10463C22.1306 2.98519 20.6667 2.2963 19.1167 2.2963C16.0167 2.2963 13.4333 4.79352 13.4333 7.97963C13.4333 8.41018 13.5194 8.84074 13.6056 9.2713C8.86944 9.01296 4.73611 6.77407 1.98056 3.32963C1.46389 4.19074 1.20556 5.13796 1.20556 6.1713C1.20556 8.15185 2.23889 9.87407 3.70278 10.9074C2.75556 10.9074 1.89444 10.6491 1.11944 10.2185V10.3046C1.11944 13.0602 3.1 15.2991 5.68333 15.8157C5.16667 15.9018 4.73611 15.988 4.21944 15.988C3.875 15.988 3.53056 15.988 3.18611 15.9019C3.875 18.1407 6.02778 19.7769 8.43889 19.863C6.54444 21.413 4.04722 22.2741 1.37778 22.2741C0.947222 22.2741 0.430556 22.2741 0 22.188C2.49722 23.8241 5.51111 24.6852 8.69722 24.6852C19.1167 24.6852 24.8 16.0741 24.8 8.58241C24.8 8.32407 24.8 8.06574 24.8 7.89352C25.8333 7.11852 26.7806 6.08519 27.5556 4.96574Z"
                fill="#4699C2"
              />
            </svg>
          </a>
        </div>
        <img
          className="rounded-t-lg w-full"
          src="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn"
          alt=""
        />
        {/* </div> */}
      </div>
      <div className="inline-flex mt-4 gap-6 items-center justify-center px-3 py-2 text-sm font-medium  w-full ">
        by:
        <div className="rounded-full h-16 w-16 overflow-hidden">
          <img
            src="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn"
            alt="vdcd"
          />
        </div>
        <p className="m-0 pb-2 text-blue-500">author</p>
      </div>

      <div className="w-4/6 text-left">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          subTitle subTitle subTitle subTitle subTitle subTitlesubTitlesubTitle
          subTitle subTitle subTitle subTitle subTitlesubTitle
        </h5>
        <div className=" ">
          <p className=" mb-3 font-normal text-gray-700 ">
            Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum
            dolor sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum
            dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor Lorem
            ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor
            sitadad Lorem ipsum dLorem ipsum dolor sitadad Lorem ipsum Lorem
            ipsum dolor sitadad Lorem ipsum orem ipsum dolor sitadad Lorem ipsum
            dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor Lorem
            ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor
            sitadad Lorem ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor
            sitadad Lorem ipsum dolor sitadad Lorem ipsum Lorem ipsum dolor
            sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem
            ipsum Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem
            ipsum dolor
          </p>
        </div>
      </div>
    </div>
  );
}