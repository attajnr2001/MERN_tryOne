import { useLoaderData, Link } from "react-router-dom";

const Home = ({ title }) => {
  const { users } = useLoaderData();

  return (
    <div className="home">
      <h3>{title}</h3>
      {users &&
        users.map((user) => (
          <div className="each" key={user._id}>
            <Link to={`${user._id}`}>
              <img src={user.profileImageUrl} alt="" />
              <div className="info">
                <p>
                  <b>Name:</b> {user.firstName} {user.lastName}
                </p>
                <p>starting salary: {user.salary}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export const allUsersLoader = async () => {
  try {
    const res = await fetch("http://localhost:3300/get-all-users");
    const data = await res.json(); // Add await here

    return data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};

export default Home;
