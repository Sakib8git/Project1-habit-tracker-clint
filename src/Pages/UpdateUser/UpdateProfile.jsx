import { useContext, useState } from "react";
import { updateProfile, reload } from "firebase/auth"; // ✅ reload import করো
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { auth } from "../../Firebase/firebase";
import { FaUserEdit } from "react-icons/fa";

const UpdateProfile = () => {
  const { user, refreshNavUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      await reload(auth.currentUser); // ✅ সঠিকভাবে reload করো
      refreshNavUser(auth.currentUser); // ✅ updated user context এ পাঠাও
      toast.success("Profile updated 🎉");
      navigate("/dashboard/profile"); // ✅ profile এ redirect করো
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <title>Update Profile</title>
      <div className="bg-base rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
        {/* UI same as before */}
        <div className="relative text-center mb-6">
          <FaUserEdit className="text-4xl text-purple-600 mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-base-800">Update Profile</h2>
          <p className="text-sm text-base-500">Keep your info fresh ✨</p>
        </div>

        <div className="relative flex justify-center mb-6">
          <img
            src={photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"}
            alt="Preview"
            className="w-24 h-24 rounded-full border-4 border-purple-400 shadow-md object-cover"
          />
        </div>

        <div className="space-y-4 relative">
          <div className="form-control">
            <label className="label font-semibold text-base-700 mr-2">Name</label>
            <input
              type="text"
              className="input input-bordered focus:border-purple-500 focus:ring focus:ring-purple-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-700 mr-2">Email</label>
            <input
              type="email"
              className="input input-bordered bg-base-100 cursor-not-allowed"
              value={user?.email}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-700">Photo URL</label>
            <input
              type="text"
              className="input input-bordered focus:border-purple-500 focus:ring focus:ring-purple-200"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleUpdate}
          className="btn btn-primary w-full mt-6 hover:scale-105 transition-transform duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;