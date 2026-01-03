import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router"; // ✅ react-router-dom ব্যবহার করো
import { FaPlus, FaList, FaUserEdit, FaUser, FaHome } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { AuthContext } from "../../AuthContext/AuthContext";
import Loader from "../../Components/Loader/Loader";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-base-200 flex flex-col items-center py-6 gap-6 shadow-md">
        {/* ✅ Back to Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `tooltip tooltip-right p-2 rounded-lg ${
              isActive ? "bg-primary text-white" : "hover:text-primary"
            }`
          }
          data-tip="Home"
        >
          <FaHome className="text-2xl" />
        </NavLink>

        <NavLink
          to="add-habit"
          className={({ isActive }) =>
            `tooltip tooltip-right p-2 rounded-lg ${
              isActive ? "bg-primary text-white" : "hover:text-primary"
            }`
          }
          data-tip="Add Habit"
        >
          <FaPlus className="text-2xl" />
        </NavLink>

        <NavLink
          to="my-habits"
          className={({ isActive }) =>
            `tooltip tooltip-right p-2 rounded-lg ${
              isActive ? "bg-primary text-white" : "hover:text-primary"
            }`
          }
          data-tip="My Habits"
        >
          <FaList className="text-2xl" />
        </NavLink>

        

        <NavLink
          to="profile"
          className={({ isActive }) =>
            `tooltip tooltip-right p-2 rounded-lg ${
              isActive ? "bg-primary text-white" : "hover:text-primary"
            }`
          }
          data-tip="Profile"
        >
          <FaUser className="text-2xl" />
        </NavLink>

        <NavLink
          to="update-profile"
          className={({ isActive }) =>
            `tooltip tooltip-right p-2 rounded-lg ${
              isActive ? "bg-primary text-white" : "hover:text-primary"
            }`
          }
          data-tip="Update Profile"
        >
          <FaUserEdit className="text-2xl" />
        </NavLink>
      </aside>

      {/* Content Area */}
      <main className="flex-1 bg-base-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;