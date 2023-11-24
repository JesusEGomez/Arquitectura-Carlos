/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { oneProjectAdapter } from "../../adapters";
import { getProjectById } from "../../services";
import { IAdaptedProject } from "../../models";
import { useParams } from "react-router-dom";
import Carousel from "nuka-carousel";

const ProjectsById = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [project, setProject] = useState<IAdaptedProject>();
  const { id } = useParams();

  const searchProject = async () => {
    const newProjects = await callEndpoint(getProjectById(id));

    setProject(oneProjectAdapter(newProjects.data[0]));
  };
  useEffect(() => {
    searchProject();
  }, []);
  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="flex p-2 flex-col items-center bg-black  w-full ">
          <h2
            className="text-2xl p-5 font-Almarai font-bold
           text-yellow-text"
          >
            {project?.title}
          </h2>

          <Carousel className="rounded-box ">
            {project?.photos.map((p, i) => {
              return (
                <img
                  src={p}
                  className="min-h-[350px] w-full  lg:min-h-[680px] lg:max-h-[880px]  object-contain "
                  alt={i.toString()}
                />
              );
            })}
          </Carousel>

          <p className="text-xl font-Almarai p-5">{project?.description}</p>
        </div>
      )}
    </>
  );
};

export default ProjectsById;
