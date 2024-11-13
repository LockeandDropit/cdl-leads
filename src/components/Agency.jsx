import React from "react";
import Hero from "./Hero";

const Agency = () => {
  return (
    <body >
      <main id="content">
        <Hero />

        <div className="bg-white bg-gradient-to-t ">
          <div className="max-w-5xl px-4 xl:px-0 pt-8 pb-24 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">
                About the Industry
              </h2>
              <p className="mt-1 text-neutral-400">
                Global brands see measurable success when they collaborate with
                us. From higher conversion and payment approval rates to faster
                processing speeds. Discover their stories here.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-blue-400 divide-y lg:divide-y-0 lg:divide-x divide-blue-700 rounded-xl">
              <a
                className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-blue-200 bg-opacity-40 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
                href="#"
              >
                <div className="mb-5">
                 

                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-gray-900">$84,896</p>
                    <h3 className="mt-5 font-semibold text-lg text-black">
                      Average Salary in Minnesota
                    </h3>
                    <p className="mt-1 text-gray-900">
                     The average salary in Minnesota for a truck driver is $84,896, which is on track with the national average.
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span onClick={() => window.open("https://www.indeed.com/career/truck-driver/salaries/MN")} className="font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700">
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
                      Enhancement in Customer Engagement
                    </h3>
                    <p className="mt-1 text-gray-900">
                      With the aim of optimizing customer interactions and
                      boosting brand loyalty, the team at Preline leveraged
                      Mailchimp's powerful tools and expertise to deliver
                      exceptional results.
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span className="font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700">
                    Case study
                  </span>
                </p>
              </a>

              <a
                className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-blue-200 bg-opacity-40 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
                href="#"
              >
                <div className="mb-5">
                 

                  <div className="mt-5">
                    <p className="font-semibold text-5xl text-gray-900">$219,404</p>
                    <h3 className="mt-5 font-semibold text-lg text-black">
                      Highest trucking salary in the U.S.
                    </h3>
                    <p className="mt-1 text-gray-900">
                      With the aim of optimizing customer interactions and
                      boosting brand loyalty, the team at Preline leveraged
                      Mailchimp's powerful tools and expertise to deliver
                      exceptional results.
                    </p>
                  </div>
                </div>
                <p className="mt-auto">
                  <span onClick={() => window.open("https://www.indeed.com/career/truck-driver/salaries")} className="font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700">
                    Source one
                  </span>
                  <span onClick={() => window.open("https://www.cloudtrucks.com/blog-post/highest-paying-trucking-salaries")} className="ml-2 font-medium text-sm text-gray-900 pb-1 border-b-2 border-neutral-700 group-hover:border-blue-700 transition focus:outline-none group-focus:border-blue-700">
                    Source two 
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className=" bg-blue-700 bg-opacity-90">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Preline reviews
              </h2>
              <p className="mt-1 text-neutral-400">
                With over 30 awards, and achievements, we proudly demonstrate
                our unwavering dedication to excellence and client success.
              </p>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
              <div>
                <blockquote>
                  <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                    To say that switching to Preline has been life-changing is
                    an understatement. My business has tripled since then.
                  </p>

                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="md:hidden flex-shrink-0">
                        <img
                          className="size-12 rounded-full"
                          src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-4 md:ms-0">
                        <div className="text-base font-semibold text-white">
                          Nicole Grazioso
                        </div>
                        <div className="text-xs text-neutral-400">
                          Director Payments & Risk | Airbnb
                        </div>
                      </div>
                    </div>
                  </footer>
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
                        2,000+
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Preline partners
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
                        85%
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Happy customers
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
                        $55M+
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Ads managed yearly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-gray-900 font-semibold text-2xl md:text-4xl md:leading-tight">
                Our approach
              </h2>
              <p className="mt-1 text-neutral-400">
                This profound insight guides our comprehensive strategy — from
                meticulous research and strategic planning to the seamless
                execution of brand development and website or product
                deployment.
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
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-gray-900 font-semibold">
                        Market Research and Analysis:
                      </span>
                      Identify your target audience and understand their needs,
                      preferences, and behaviors.
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
                      <span className="text-gray-900 font-semibold">
                        Product Development and Testing:
                      </span>
                      Develop digital products or services that address the
                      needs and preferences of your target audience.
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
                      <span className="text-gray-900 font-semibold">
                        Marketing and Promotion:
                      </span>
                      Develop a comprehensive marketing strategy to promote your
                      digital products or services.
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
                      <span className="text-gray-900 font-semibold">
                        Launch and Optimization:
                      </span>
                      Launch your digital products or services to the market,
                      closely monitoring their performance and user feedback.
                    </p>
                  </div>
                </div>

                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-full focus:outline-none"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    ></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    ></path>
                  </svg>
                  Schedule a call
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
                        Name
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
                      <input
                        type="text"
                        id="hs-tac-input-company"
                        className="peer p-4 block w-full border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2"
                        placeholder="Company"
                      />
                      <label
                        htmlFor="hs-tac-input-company"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Company
                      </label>
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

                    <div className="relative">
                      <textarea
                        id="hs-tac-message"
                        className="peer p-4 block w-full  border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2"
                        placeholder="This is a textarea placeholder"
                      ></textarea>
                      <label
                        htmlFor="hs-tac-message"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Tell us about your project
                      </label>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-neutral-500">
                      All fields are required
                    </p>

                    <p className="mt-5">
                      <a
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-white font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="#"
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
                      className="mt-1 text-neutral-400 text-sm"
                      href="#mailto:example@site.co"
                      target="_blank"
                    >
                      john@getfulfil.com
                    </a>
                  </div>
                </div>

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
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">We're hiring</h4>
                    <p className="mt-1 text-white">
                      We're thrilled to announce that we're expanding our team
                      and looking for talented individuals like you to join us.
                    </p>
                    <p className="mt-2">
                      <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-black decoration-2 hover:underline focus:outline-none focus:underline"
                        href="#"
                      >
                        Job openings
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
