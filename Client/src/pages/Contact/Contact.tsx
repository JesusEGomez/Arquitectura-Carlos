import { useFormik } from "formik";
import Swal from "sweetalert2";

import * as Yup from "yup";
import { createMessage } from "../../services";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Nombre invalido").required("Requerido"),
      email: Yup.string()
        .max(35, "Email invalido")
        .email("Email invalido")
        .required("Requerido"),
      phone: Yup.number().required("Requerido"),
      message: Yup.string().required("Requerido"),
    }),
    onSubmit: async (values) => {
      const { name, phone, email, message } = values;

      try {
        await createMessage(name, phone, email, message);
        Swal.fire({
          background: "#2a323c",
          position: "center",
          icon: "success",
          title: "Mensaje Enviado",
          showConfirmButton: false,
          timer: 1500,
        });
        formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div className=" w-full h-full mb-32  xl:h-screen flex  justify-center items-center flex-col">
      <form
        onSubmit={formik.handleSubmit}
        className="h-full p-5 w-10/12 mb:p-5 justify-around sm:w-1/2 lg:w-1/4 bg-gray-background rounded-md flex flex-col  items-center "
      >
        <h3 className=" text-lg md:text-4xl mb-5 text-yellow-text font-Almarai font-bold ">
          Contacto
        </h3>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          className="input input-bordered p-5 w-full "
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <div className=" m-5 sm:flex  justify-between w-full">
          <div className="max-sm:mb-4 ">
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder="Teléfono"
              className="input input-bordered    w-full "
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Nombre"
              className="input input-bordered  w-full "
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
        </div>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder="Escribe tu mensaje"
          className="textarea textarea-bordered h-2/5 textarea-lg  w-full "
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
        <button type="submit" className="btn w-full mt-5 btn-outline">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
