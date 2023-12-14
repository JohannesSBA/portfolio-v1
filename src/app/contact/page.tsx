import React from "react";

const Page = () => {
  return (
    <div className="w-screen flex justify-center align-middle translate-y-24">
      <div className="w-full max-w-lg p-4 bg-teal-blue-950  rounded-lg shadow sm:p-6 md:p-8 ">
        <form
          className="space-y-6"
          method="POST"
          action="https://api.web3forms.com/submit"
        >
          <input
            type="hidden"
            name="access_key"
            value="919aca78-6ef5-4bc4-95a7-04eb43214de1"
          ></input>
          <h5 className="text-xl font-medium text-slate-100 ">
            Send me an Email to get in contact with me
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-slate-100 "
            >
              Your Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="Email"
              className="block mb-2 text-sm font-medium text-slate-100 "
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="johndoe@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-slate-100 "
            >
              Your Message
            </label>
            <textarea
              name="text"
              id="text"
              placeholder="Enter you message here"
              className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="flex items-start"></div>
          <button
            type="submit"
            className="w-full uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
