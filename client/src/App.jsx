import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home, { allUsersLoader } from "./pages/Home";
import AddUser from "./pages/AddUser";
import ViewChart from "./pages/ViewChart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route
          index
          element={<Home title={"All Users"} />}
          loader={allUsersLoader}
        />
        <Route path="create-user" element={<AddUser />} />
        <Route path="view-chart" element={<ViewChart />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
