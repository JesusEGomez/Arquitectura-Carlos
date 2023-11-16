/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { oneProjectAdapter } from "../../adapters";
import { getProjectById } from "../../services";
import { IAdaptedProject } from "../../models";

import { useParams } from "react-router-dom";

const Projects = () => {
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
        <div className="flex flex-wrap h-full flex-col items-center  w-full ">
          <h2
            className="text-2xl p-5 font-Almarai font-bold
           text-yellow-text"
          >
            {project?.title}
          </h2>

          <img src={project?.photos[0]} width={900} alt="" />
          <p className="text-xl font-Almarai p-5">{project?.description}</p>
        </div>
      )}
    </>
  );
};

export default Projects;
