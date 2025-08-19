import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Completed", value: stats.completed },
  { name: "Pending", value: stats.pending },
];

const COLORS = ["#10B981", "#F59E0B"];

<PieChart width={400} height={250}>
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={80}
    fill="#8884d8"
    label
  >
    {data.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>;
