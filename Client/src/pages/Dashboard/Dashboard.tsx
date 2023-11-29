import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { getCategories } from "../../services/category.service";
import { fetchCategories } from "../../redux/features/projectSlice";
import { createProject } from "../../services/project.service";
import Swal from "sweetalert2";

interface values {
  title: string;
  description: string;
  category: number;
}

const Dashboard = () => {
  const [images, setImages] = useState<string[]>([]);
  const { callEndpoint } = useFetchAndLoad();

  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.projects.categories
  );

  const searchCategories = async () => {
    const newCategories = await callEndpoint(getCategories());
    dispatch(fetchCategories(newCategories.data));
  };
  useEffect(() => {
    searchCategories();
  }, []);

  const handleDeleteImg = async (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const submitImage = async (event) => {
    try {
      const file = event.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("tags", `codeinfuse, medium, gist`);
      data.append("upload_preset", "ProjectsImages");
      data.append("api_key", "281319842657573");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dezg8rinp/image/upload",
        data
      );
      console.log(response);
      const { url } = response.data;

      setImages([...images, url]);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, "Nombre demasiado largo")
        .required("Campo requerido"),
      description: Yup.string()
        .max(500, "Descripción demasiado largo ")
        .required("Campo requerido"),
      category: Yup.number().required("Campo requerido"),
    }),
    onSubmit: async (values: values) => {
      try {
        const { title, description, category } = values;
        const photo = images.map((p) => {
          return { url: p };
        });
        await createProject(photo, title, description, category);
        Swal.fire({
          background: "#2a323c",
          position: "center",
          icon: "success",
          title: "Proyecto Creado",
          showConfirmButton: false,
          timer: 1500,
        });

        formik.resetForm();
        setImages([]);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className=" w-full mb-1  h-screen bg-black   flex   items-center flex-col ">
      <h3 className=" text-lg md:text-4xl mb-5 text-yellow-text font-Almarai font-bold ">
        Agregar Proyectos
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="h-full p-5 w-10/12 mb:p-5  justify-around sm:w-1/2 lg:w-1/4 bg-gray-background rounded-md flex flex-col  items-center "
      >
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          placeholder="Titulo"
          className="input input-bordered px-6 w-full  "
        />
        {formik.touched.category && formik.errors.category ? (
          <div>{formik.errors.category}</div>
        ) : null}
        <select
          title="category"
          id="category"
          name="category"
          onChange={formik.handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Categoría
          </option>
          {categories.map((c) => {
            return <option value={c.id}>{c.category}</option>;
          })}
        </select>
        {formik.touched.description && formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          placeholder="Descripción del Proyecto"
          className="textarea textarea-bordered h-2/5 textarea-lg  w-full "
        ></textarea>
        <div className="flex flex-col ">
          <input
            type="file"
            title="image"
            accept="image/*"
            className="file-input file-input-bordered w-full max-w-xl m-2"
            onChange={submitImage}
          />
          <div className="flex  flex-wrap">
            {images.map((image, index) => (
              <div className="relative" key={index}>
                <img
                  className="w-28 h-28 object-cover   m-3"
                  src={image}
                  alt={`Image ${index}`}
                />
                <button
                  onClick={(e) => handleDeleteImg(index, e)}
                  className="absolute top-0 right-0 w-6 h-6 bg-gray-background hover:bg-white border-none text-white  rounded-full "
                >
                  <p>✖️</p>
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="btn w-full mt-5 btn-outline">
          Crear
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
