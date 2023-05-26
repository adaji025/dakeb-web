import ParkIcon from "../../assets/svgs/park.svg";
import { StatCard } from "../../components/Dashboard";
// import { DecreaseIcon } from "../../components/Svgs";

const AdminDashboard = () => {
  const statsData = [
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3
    },
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3
    },
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3
    },
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-y-5 place-items-center min-h-[116px] xs:border mt-10 p-4">
        {statsData.map((item, idx) => (
          <div
            className={`border xs:border-0  w-full ${
              idx === 3 ? "lg:border-r-0" : "lg:border-r"
            }`}
          >
            <StatCard {...{ item }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
