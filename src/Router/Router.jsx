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
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/profile";
import ContactPage from "../Pages/Contact/ContactPage";
const API_BASE = import.meta.env.VITE_API_BASE;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch(`${API_BASE}/fetured`),
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
        loader: async () => {
          const API_BASE = import.meta.env.VITE_API_BASE;
          const res = await fetch(`${API_BASE}/habits`);
          return res.json(); 
        },
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
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "habits/:id",
        element: (
          <PrivateRoute>
            <HabitDetails />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/update-profile",

      //   element: (
      //     <PrivateRoute>
      //       <UpdateProfile></UpdateProfile>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-habit",
        element: (
          <PrivateRoute>
            <AddHabit />
          </PrivateRoute>
        ),
      },
      {
        path: "my-habits",
        element: (
          <PrivateRoute>
            <MyHabits />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "update-habit/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdateHabit />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
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
