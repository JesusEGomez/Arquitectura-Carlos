/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useFetchAndLoad } from "../../hooks";
import { projectAdapter } from "../../adapters";
import { getProjectByCategory } from "../../services";

import { useParams } from "react-router-dom";
import { fetchProjectsByCategory } from "../../redux/features/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Card } from "../../components";

const ProjectsByCategory = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const { category } = useParams();

  const projects = useSelector(
    (state: RootState) => state.projects.filteredProjects
  );
  const searchProjects = async () => {
    const newProjects = await callEndpoint(getProjectByCategory(category));
    dispatch(
      fetchProjectsByCategory(projectAdapter(newProjects.data[0].project))
    );
  };
  useEffect(() => {
    searchProjects();
  }, [category]);
  console.log("ByCategory", projects);
  return (
    <>
      {loading ? (
        <div className="text-yellow-text w-screen   flex justify-center items-center">
          Cargando...
        </div>
      ) : (
        <div className="flex flex-wrap h-full  w-full  bg-black ">
          {projects.map((p) => (
            <Card project={p} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectsByCategory;
