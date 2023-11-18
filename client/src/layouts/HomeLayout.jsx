import { Outlet, NavLink } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="homeLayout layout">
      <nav>
        <NavLink className={"navlink"} to={"/"}>Home</NavLink>
        <NavLink className={"navlink"} to={"/create-user"}>Add User</NavLink>
        <NavLink className={"navlink"} to={"/view-chart"}>View Chart</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
