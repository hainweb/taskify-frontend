import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { getStats } from "../services/statsService";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (user) {
      getStats(user.token).then(setStats);
    }
  }, [user]);

  if (!stats) return <p className="p-4">Loading stats...</p>;

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      <div className="bg-blue-500 text-white rounded-xl p-6 text-center">
        <h2 className="text-2xl font-bold">{stats.total}</h2>
        <p>Total Tasks</p>
      </div>
      <div className="bg-green-500 text-white rounded-xl p-6 text-center">
        <h2 className="text-2xl font-bold">{stats.completed}</h2>
        <p>Completed</p>
      </div>
      <div className="bg-yellow-500 text-white rounded-xl p-6 text-center">
        <h2 className="text-2xl font-bold">{stats.pending}</h2>
        <p>Pending</p>
      </div>
    </div>
  );
}

export default Dashboard;
