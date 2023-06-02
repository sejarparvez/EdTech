import Clock from "@iconscout/react-unicons/icons/uil-clock";
import DataBase from "@iconscout/react-unicons/icons/uil-database";
import GraphBar from "@iconscout/react-unicons/icons/uil-graph-bar";
import Star from "@iconscout/react-unicons/icons/uil-star";

export default function Model({
  Title,
  Name,
  Url,
}: {
  Title: string;
  Name: string;
  Url: string;
}) {
  return (
    <div className="rounded-t-2xl border-2 md:h-96 md:w-96 md:rounded-3xl">
      <div>
        <img
          src={Url}
          alt=""
          className="h-48 w-full rounded-t-2xl object-cover md:rounded-t-3xl"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="font-samibold font-philosopher text-2xl">{Title}</div>
        <div className="flex items-center justify-center gap-6 text-gray-600">
          <div>By {Name}</div>
          <div className="flex items-center gap-1">
            <span>
              <Star color="orange" />
            </span>
            <span>4.8 (122)</span>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gray-300"></div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex gap-1 text-sm text-gray-700">
            <span>
              <Clock />
            </span>
            <span>40 Min</span>
          </div>
          <div className="flex gap-1 text-sm text-gray-700">
            <span>
              <DataBase />
            </span>
            <span>21 Modules</span>
          </div>
          <div className="flex gap-1 text-sm text-gray-700">
            <span>
              <GraphBar />
            </span>
            <span>21 Modules</span>
          </div>
        </div>
      </div>
    </div>
  );
}
