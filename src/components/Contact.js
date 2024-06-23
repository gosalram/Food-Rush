const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="p-2 m-2 text-3xl font-bold ">Contact us</h1>
      <form>
        <input
          className="p-2 m-2 border border-black"
          placeholder="name"
        ></input>
        <input
          className="p-2 m-2 border border-black "
          placeholder="message"
        ></input>
        <button className="p-2 m-2 border border-black  rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
