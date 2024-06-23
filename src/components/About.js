import { useState } from "react";
import food from "../images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-4xl">
        <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <br /> The world of <br />
            <span className="text-blue-500">Tasty & Fresh Food</span>
          </h1>
          <h4 className="text-lg text-gray-700">
            "Experience the{" "}
            <span className="text-blue-500">Food Feast Rush</span> healthy meal"
          </h4>
        </div>
        <div className="lg:w-1/2">
          <img src={food} alt="Food Image" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
