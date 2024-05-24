const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="p-4 m-2 flex justify-center bg-pink-300 shadow-lg ">
      <strong>
        Healthy<span>Foods </span>&copy;
      </strong>
      &nbsp;{year}&nbsp; All rights are reserved&nbsp; Created By
      <a
        href="https://www.linkedin.com/in/gosal-ram-ab32a61a2/"
        target="_blank"
        className="bg-pink-300 hover:bg-blue-300"
      >
        &nbsp;Gosal Ram
      </a>
    </div>
  );
};

export default Footer;
