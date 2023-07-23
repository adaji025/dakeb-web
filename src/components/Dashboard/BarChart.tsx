import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
//   Cell,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
} from "recharts";

const BarChartComponent = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 5490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 4490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 1490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3190,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <div className="overflow-auto">
      <BarChart
        width={800}
        height={400}
        data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
      >
        
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
    // </ResponsiveContainer>
  );
};

export default BarChartComponent;
