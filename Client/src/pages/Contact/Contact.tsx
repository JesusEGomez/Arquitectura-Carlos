const Contact = () => {
  return (
    <div className=" w-full h-screen mb-20 flex justify-center items-center flex-col">
      <div className="h-3/5 mb:p-10  mb:w-2/6 bg-gray-background rounded-md flex flex-col  items-center ">
        <h3 className=" text-sm md:text-4xl mb-5 text-yellow-text font-Almarai font-bold ">
          Contacto
        </h3>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered  w-full "
        />
        <div className=" m-5 md:flex sm:flex  w-full">
          <input
            type="text"
            placeholder="Teléfono"
            className="input input-bordered mr-5  w-full "
          />
          <input
            type="text"
            placeholder="Nombre"
            className="input input-bordered  w-full "
          />
        </div>
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered h-2/5 textarea-lg  w-full "
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
