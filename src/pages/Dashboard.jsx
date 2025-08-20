import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { getStats } from "../services/statsService";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (user) {
      getStats(user.token).then(setStats);
    }
  }, [user]);

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
}

export default Dashboard;
