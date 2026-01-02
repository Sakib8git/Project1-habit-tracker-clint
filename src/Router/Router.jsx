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
import HabitDetails from "../Pages/HabitDetails/HabitDetails"; 
import UpdateHabit from "../Pages/UpdateHabit/UpdateHabit";
import UpdateProfile from "../Pages/UpdateUser/UpdateProfile";
import Spinner from "../Components/Spinner/Spinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://habit-tracker-server-teal.vercel.app/fetured"),
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
        path: "update-habit/:id",
        element: (
          <PrivateRoute>
            <UpdateHabit />
          </PrivateRoute>
        ),
      },
      {
        path: "browse",
        Component: BrowseHabits,
        loader: () =>
          fetch("https://habit-tracker-server-teal.vercel.app/habits"),
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
      {
        path: "/update-profile",

        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
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
