import { PieChart, Pie, Cell, Tooltip } from "recharts";

const PieChartComponent = () => {
  const data = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 100 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 450 },
  ];
  const COLORS = ["#1D08AF", "#157145", "#DE4D86", "#DE4D86"];
  return (
    <PieChart width={250} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        // fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
