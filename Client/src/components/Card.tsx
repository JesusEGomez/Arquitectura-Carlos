import { IAdaptedProject } from "../models";

interface ICardProps {
  project: IAdaptedProject;
}

const Card = (props: ICardProps) => {
  const { project } = props;
  return (
    <div className="md:w-2/4 font-Almarai font-extrabold cursor-pointer overflow-hidden text-transparent hover:text-black  relative p-1 ">
      <img
        src={project.photos[0]}
        alt={project.title}
        className="object-cover w-full hover:blur-sm md:h-[400px]"
      />
      <h2 className="text-2xl   font-bold w-full text-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] select-none pointer-events-none  ">
        {project.title}
      </h2>
    </div>
  );
};

export default Card;
