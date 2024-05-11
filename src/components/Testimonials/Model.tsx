import { FaRegComments } from "react-icons/fa";

export default function Model({
  image,
  name,
  position,
  description,
}: {
  image: string;
  name: string;
  position: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-2xl border-2 border-black p-4 lg:h-60 lg:w-[30rem]">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-3">
          <div>
            <img
              src={image}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div>{position}</div>
          </div>
        </div>
        <div>
          <FaRegComments size="32" />
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
}
