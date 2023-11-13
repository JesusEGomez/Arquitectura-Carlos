/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/features/projectSlice";
import { useFetchAndLoad } from "../../hooks";
import { useEffect } from "react";
import { getProjects } from "../../services";
import { RootState } from "../../redux";
import { projectAdapter } from "../../adapters";
import { Card } from "../../components";

const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects);
  const searchProjects = async () => {
    const newProjects = await callEndpoint(getProjects());
    dispatch(fetchProjects(projectAdapter(newProjects.data)));
  };
  useEffect(() => {
    searchProjects();
  }, []);
  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="flex flex-wrap   w-full ">
          {projects.projects.map((p) => (
            <Card project={p} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
