const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="p-4 m-2 flex justify-center bg-white shadow-xl ">
      <strong>
        Food<span>Rush </span>&copy;
      </strong>
      &nbsp;{year}&nbsp; All rights are reserved&nbsp; Created By
      <a
        href="https://www.linkedin.com/in/gosal-ram-ab32a61a2/"
        target="_blank"
        className=" hover:bg-amber-500"
      >
        &nbsp;Gosal Ram
      </a>
    </div>
  );
};

export default Footer;
