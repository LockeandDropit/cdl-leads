import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
const Hero = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [preferedLocation, setPreferedLocation] = useState(null);
  const [success, setSucess] = useState(false);
  const date = new Date();

  console.log(preferedLocation);

  const [firstNameValidation, setFirstNameValidation] = useState();
  const [lastNameValidation, setLastNameValidation] = useState();
  const [emailValidation, setEmailValidation] = useState();

  const handleCheckValidation = () => {
    console.log(firstName);
    if (!firstName) {
      setFirstNameValidation("Please enter your first name");
    } else if (!lastName) {
      setLastNameValidation("Please enter your last name");
    } else if (!email) {
      setEmailValidation("Please enter your email");
    } else {
      submit();
    }
  };

  const submit = () => {
    setDoc(doc(db, "leads", uuidv4()), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber ? phoneNumber : null,
      preferedLocation: preferedLocation,
      dateSubmitted: date,
    })
      .then(() => {
        setSucess(true);
        setFirstName(null);
        setLastName(null);
        setEmail(null);
        setPreferedLocation(null);
        setPhoneNumber(null);
      })
      .catch(() => {});
  };

 

  //https://github.com/tailwindlabs/tailwindcss/discussions/3617 bg opacity credit simonswiss
  // image credit https://unsplash.com/photos/a-semi-truck-driving-down-the-road-in-the-desert-Rhwj3CPwc6o

  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full bg-blue-600 bg-opacity-40"></div>
        <div className="w-full bg-[url('https://images.unsplash.com/photo-1720811559337-c59b75acc4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat ">
          <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full  ">
            <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center gap-x-1">
                <a
                  className="flex-none font-semibold text-3xl text-white focus:outline-none focus:opacity-80 "
                  href="#"
                  aria-label="Brand"
                >
                  CDL Minnesota
                </a>
              </div>
              <div className="flex justify-between items-center">
                <a
                  className="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80 "
                  aria-label="Brand"
                >
                  Find your career today!
                </a>
              </div>
            </nav>
          </header>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative z-10">
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div></div>

              <div>
                <div className="mt-4 mb-6 md:mb-12 max-w-xl lg:mx-auto ">
                  <h1 className="mb-4 font-semibold text-white text-4xl lg:text-5xl ">
                    Find paid CDL training in Minnesota
                  </h1>
                  <p className="text-white text-lg ">
                    We match you with companies in Minnesota that offer paid CDL
                    training so you can earn while you learn!
                  </p>
                </div>
                <div>
                  <div className="lg:max-w-xl lg:mx-auto ">
                    <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg ">
                      {/* {success ? () : ()} */}
                      <div className="">
                        {success ? (
                          <div>
                            {" "}
                            <div className="gap-4 space-y-2">
                              <div>
                                <p className="mb-4  font-semibold text-lg text-gray-800">
                                  Thanks for applying!
                                </p>
                                <p className="mb-4  font-semibold text-lg text-gray-800">
                                  We'll send you a follow up email in the next 24 hours with next steps.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="gap-4 space-y-2">
                            <div>
                              <p className="mb-4  font-semibold text-lg text-gray-800">
                                Tell us about yourself:
                              </p>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="hs-hero-signup-form-floating-input-first-name"
                                  className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2"
                                  placeholder="John"
                                  onChange={(e) => setFirstName(e.target.value)}
                                />
                                <label
                                  htmlFor="hs-hero-signup-form-floating-input-first-name"
                                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                      peer-focus:scale-90
                                      peer-focus:translate-x-0.5
                                      peer-focus:-translate-y-1.5
                                      peer-focus:text-gray-500 
                                      peer-[:not(:placeholder-shown)]:scale-90
                                      peer-[:not(:placeholder-shown)]:translate-x-0.5
                                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                      peer-[:not(:placeholder-shown)]:text-gray-500 "
                                >
                                  First name
                                </label>
                                {firstNameValidation && (
                                  <p className="text-red-500 text-sm">
                                    {firstNameValidation}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="hs-hero-signup-form-floating-input-last-name"
                                  className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2"
                                  placeholder="Doe"
                                  onChange={(e) => setLastName(e.target.value)}
                                />
                                <label
                                  htmlFor="hs-hero-signup-form-floating-input-last-name"
                                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                  peer-focus:scale-90
                                  peer-focus:translate-x-0.5
                                  peer-focus:-translate-y-1.5
                                  peer-focus:text-gray-500 
                                  peer-[:not(:placeholder-shown)]:scale-90
                                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                  peer-[:not(:placeholder-shown)]:text-gray-500 "
                                >
                                  Last name
                                </label>
                                {lastNameValidation && (
                                  <p className="text-red-500 text-sm">
                                    {lastNameValidation}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <div className="relative">
                                <input
                                  type="email"
                                  id="hs-hero-signup-form-floating-input-email"
                                  className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                          focus:pt-6
                                          focus:pb-2
                                          [&:not(:placeholder-shown)]:pt-6
                                          [&:not(:placeholder-shown)]:pb-2
                                          autofill:pt-6
                                          autofill:pb-2"
                                  placeholder="you@email.com"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <label
                                  htmlFor="hs-hero-signup-form-floating-input-email"
                                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                        peer-focus:scale-90
                                        peer-focus:translate-x-0.5
                                        peer-focus:-translate-y-1.5
                                        peer-focus:text-gray-500 
                                        peer-[:not(:placeholder-shown)]:scale-90
                                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                        peer-[:not(:placeholder-shown)]:text-gray-500 "
                                >
                                  Email
                                </label>
                                {emailValidation && (
                                  <p className="text-red-500 text-sm">
                                    {emailValidation}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="hs-hero-signup-form-floating-input-company-name"
                                  className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                              focus:pt-6
                                              focus:pb-2
                                              [&:not(:placeholder-shown)]:pt-6
                                              [&:not(:placeholder-shown)]:pb-2
                                              autofill:pt-6
                                              autofill:pb-2"
                                  placeholder="Preline"
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                />
                                <label
                                  htmlFor="hs-hero-signup-form-floating-input-company-name"
                                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                    peer-focus:scale-90
                                                    peer-focus:translate-x-0.5
                                                    peer-focus:-translate-y-1.5
                                                    peer-focus:text-gray-500 
                                                    peer-[:not(:placeholder-shown)]:scale-90
                                                    peer-[:not(:placeholder-shown)]:translate-x-0.5
                                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                    peer-[:not(:placeholder-shown)]:text-gray-500 "
                                >
                                  Phone Number (optional)
                                </label>
                              </div>
                            </div>

                            <div className="relative col-span-full">
                              <div className="relative">
                                <select
                                  onChange={(e) =>
                                    setPreferedLocation(e.target.value)
                                  }
                                  className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                >
                                  <option selected="No Preference">
                                    Prefered Location
                                  </option>
                                  <option value="No Preference">
                                    No Preference
                                  </option>
                                  <option value="Duluth">Duluth</option>
                                  <option value="Minneapolis">
                                    Minneapolis
                                  </option>
                                  <option value="Fridely">Fridely</option>
                                  <option value="Rochester">Rochester</option>
                                  <option value="St. Paul">St. Paul</option>
                                  <option value="St. Cloud">St. Cloud</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="mt-7">
                          {success ? (
                            <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none">
                              Success
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                          ) : (
                            <>
                            <button
                              onClick={handleCheckValidation}
                              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Find a match
                            </button>
                            <p className="text-gray-500 text-sm mt-2">By submitting this information, you consent to receive calls and emails from Fulfil Inc. and potential employers regarding CDL training.</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
