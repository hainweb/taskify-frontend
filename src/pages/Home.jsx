import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h1>Please login</h1>;
  }

  return <h1>Welcome, {user.name}</h1>;
}

export default Home;
