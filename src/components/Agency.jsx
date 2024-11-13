import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import Hero from "./Hero";

const Agency = () => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [preferedLocation, setPreferedLocation] = useState(null);
  const [success, setSucess] = useState(false);

  console.log(preferedLocation);
  
  const submit = () => {
    setDoc(doc(db, "leads", uuidv4()), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber ? phoneNumber : null,
      preferedLocation: preferedLocation,
    })
      .then(() => {
        setSucess(true);
      })
      .catch(() => {});
  };
  return (
    <body>
      <main id="content">
        <Hero />

        <div className="bg-white bg-gradient-to-t ">
          <div className="max-w-5xl px-4 xl:px-0 pt-8 pb-24 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">
                About the Industry
              </h2>
              <p className="mt-1 text-neutral-600">
                The trucking and bussing industry are alive and well in 2024.
                The industry offers some of the best benefits and pay without a
                college degree.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-blue-400 divide-y lg:divide-y-0 lg:divide-x divide-blue-700 rounded-xl">
              <a
                className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-blue-200 bg-opacity-40 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
                href="#"
              >
                <div className="mb-5">
                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-gray-900">
                      $84,896
                    </p>
                    <h3 className="mt-5 font-semibold text-lg text-black">
                      Average Salary in Minnesota
                    </h3>
                    <p className="mt-1 text-gray-900">
                      The average salary in Minnesota for a truck driver is
                      $84,896, which is on track with the national average.
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.indeed.com/career/truck-driver/salaries/MN"
                      )
                    }
                    className="font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700"
                  >
                    Source
                  </span>
                </p>
              </a>

              <a
                className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-blue-200 bg-opacity-40 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
                href="#"
              >
                <div className="mb-5">
                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-gray-900">401k</p>
                    <h3 className="mt-5 font-semibold text-lg text-black">
                      And other benefits
                    </h3>
                    <p className="mt-1 text-gray-900">
                      Many of the top employers in the trucking industry offer
                      fantastic benefits ranging from medical insurance to 401k.
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.reddit.com/r/Truckers/comments/1dgw51p/what_trucking_companies_have_good_benefits/"
                      )
                    }
                    className="font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700"
                  >
                    Source
                  </span>
                </p>
              </a>

              <a
                className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-blue-200 bg-opacity-40 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
                href="#"
              >
                <div className="mb-5">
                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-gray-900">
                      $219,404
                    </p>
                    <h3 className="mt-5 font-semibold text-lg text-black">
                      Highest trucking salary in the U.S.
                    </h3>
                    <p className="mt-1 text-gray-900">
                      Some positions available to you with a CDL can end up providing
                      substantial income.
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.indeed.com/career/truck-driver/salaries"
                      )
                    }
                    className="font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700"
                  >
                    Source one
                  </span>
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.cloudtrucks.com/blog-post/highest-paying-trucking-salaries"
                      )
                    }
                    className="ml-2 font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700"
                  >
                    Source two
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className=" bg-blue-700 bg-opacity-90">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-10">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Benefits of a CDL
              </h2>
              <p className="mt-1 text-white">
                A class A CDL opens up dooers that weren't possible before. Let
                us match you with a company that will pay you to get yours!
              </p>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
              <div>
                <blockquote>
                  <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                    A class A CDL opens up countless opportunities all around
                    the U.S. It’s a growing industry with 10’s of thousands of
                    open positions, many with great benefits, ensuring that
                    you’ll always have work.
                  </p>
                </blockquote>
              </div>

              <div className="hidden md:block mb-24 md:mb-0">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className=" rounded-xl">
              <div className="p-4 lg:p-8 bg-gradient-to-tr from-blue-600 via-blue-600 to-blue-400 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        240,000+
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-white">
                        Open positions
                      </p>
                    </div>
                  </div>

                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <img
                        className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <img
                        className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7"
                        src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <img
                        className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        5%
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-white">
                        Industry Growth
                      </p>
                    </div>
                  </div>

                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                      <path d="m2 16 6 6" />
                      <circle cx="16" cy="9" r="2.9" />
                      <circle cx="6" cy="5" r="3" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        $54k
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-white">
                        Median Salary (U.S.A.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-end flex ">
              <p
                className="justify-end text-sm text-gray-500 mr-1 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm#tab-1"
                  )
                }
              >
                Source
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-gray-900 font-semibold text-2xl md:text-4xl md:leading-tight">
               How to get your CDL in Minnesota
              </h2>
              <p className="mt-1 text-neutral-400">
                If you don't already have your CDL, this is the perfect place for you to start
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image Description"
                />
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="text-xs font-medium uppercase text-gray-900 font-semibold">
                    Steps
                  </h3>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-900  font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-500">
                      <span className="text-gray-900 font-semibold mr-1">
                        Tell us a little about yourself:
                      </span>
                      Fill out the form at the top of the page and tell us a little bit about yourself along with your prefered location for training
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-900 font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-gray-900 font-semibold mr-1">
                        We do the work for you:
                      </span>
                      We find an employer that has open positions for paid CDL trainging
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-900 font-semibold font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-gray-900 font-semibold mr-1">
                        Interview:
                      </span>
                      If the companies we find think you're a good fit, they'll reach out to you to start the interview process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-900 font-semibold font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-gray-900 font-semibold mr-1">
                        Start your career!
                      </span>
                      If the company thinks you're a good fit, you can start your paid CDL training and begin your new career.
                    </p>
                  </div>
                </div>

                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-full focus:outline-none"
                  href="#"
                >
                 
                  Start the process
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Contact us
              </h2>
              <p className="mt-1 text-white">
                Whatever your goal - we will get you there.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
              <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <form>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-name"
                        className="peer p-4 block w-full  border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2"
                        placeholder="Name"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label
                        htmlFor="hs-tac-input-name"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-name"
                        className="peer p-4 block w-full  border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2"
                        placeholder="Name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label
                        htmlFor="hs-tac-input-name"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Last Name
                      </label>
                    </div>
                   

                    <div className="relative">
                      <input
                        type="email"
                        id="hs-tac-input-email"
                        className="peer p-4 block w-full  border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                        htmlFor="hs-tac-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative">
                    <select
                                onChange={(e) =>
                                  setPreferedLocation(e.target.value)
                                }
                                className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                              >
                                <option selected="">Prefered Location</option>
                                <option selected="No Preference">
                                  No Preference
                                </option>
                                <option selected="Duluth">Duluth</option>
                                <option selected="Minneapolis">
                                  Minneapolis
                                </option>
                                <option selected="Fridely">Fridely</option>
                                <option selected="Rochester">Rochester</option>
                                <option selected="St. Paul">St. Paul</option>
                                <option selected="St. Cloud">St. Cloud</option>
                              </select>
               
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-phone"
                        className="peer p-4 block w-full  border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2"
                        placeholder="Phone"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <label
                        htmlFor="hs-tac-input-phone"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Phone
                      </label>
                    </div>

               
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-white">
                      All fields are required
                    </p>

                    <p className="mt-5">
                      <a
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-white font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        onClick={submit}
                      >
                        Submit
                        <svg
                          className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </form>
              </div>

              <div className="space-y-14">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Email us:</h4>

                    <a
                      className="mt-1 text-white text-sm"
                      href="#mailto:example@site.co"
                      target="_blank"
                    >
                      john@getfulfil.com
                    </a>
                  </div>
                </div>

         
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative overflow-hidden bg-white">
        <div className="relative z-10">
          <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
            <div className="inline-flex items-center">
              <div className="border-s border-neutral-700 ps-5 ms-5">
                <p className="text-sm text-gray-900">Minnesota CDL</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Agency;
