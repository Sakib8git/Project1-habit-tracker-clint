import { createBrowserRouter } from "react-router";
import Root from "../Main/Root";
import Home from "../Pages/Home/Home";
import AddHabit from "../Pages/AddHabit/AddHabit";
import MyHabits from "../Pages/MyHabits/MyHabits";
import BrowseHabits from "../Pages/BrowseHabits/BrowseHabits";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Main/PrivateRoute";
import NotFound from "../Components/404/NotFound";
import HabitDetails from "../Pages/HabitDetails/HabitDetails"; // ✅ NEW IMPORT

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/fetured"),
      },
      {
        path: "add-habit",
        element: (
          <PrivateRoute>
            <AddHabit></AddHabit>
          </PrivateRoute>
        ),
      },
      {
        path: "my-habits",
        element: (
          <PrivateRoute>
            <MyHabits></MyHabits>
          </PrivateRoute>
        ),
      },
      {
        path: "browse",
        Component: BrowseHabits,
        loader: () => fetch("http://localhost:3000/habits"),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "habits/:id",
        element: (
          <PrivateRoute>
            <HabitDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
