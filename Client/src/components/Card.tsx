import { useNavigate } from "react-router-dom";
import { IAdaptedProject } from "../models";

interface ICardProps {
  project: IAdaptedProject;
}

const Card = (props: ICardProps) => {
  const navigate = useNavigate();
  const { project } = props;
  console.log("card", project);
  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="md:w-2/4 w-full font-Almarai font-extrabold cursor-pointer overflow-hidden text-transparent hover:text-yellow-text  relative p-1 "
    >
      <img
        src={project.photos[0]}
        alt={project.title}
        className="object-cover w-full hover:blur-sm h-[400px] lg:h-[600px]"
      />
      <h2 className="text-2xl   font-bold w-full text-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] select-none pointer-events-none  ">
        {project.title}
      </h2>
    </div>
  );
};

export default Card;
