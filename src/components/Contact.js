import { useState } from "react";
import contact from "../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100">
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={contact} alt="Contact us" className="max-w-full h-auto" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col">
          <input
            type="text"
            placeholder="Name"
            required
            className="mb-4 p-3 border border-gray-300 rounded shadow focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="mb-4 p-3 border border-gray-300 rounded shadow focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Type your message here..."
            required
            className="mb-4 p-3 border border-gray-300 rounded shadow focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white font-bold rounded shadow hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
          {message && (
            <span className="mt-4 text-green-500">
              Thanks for contacting FoodRush , We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
