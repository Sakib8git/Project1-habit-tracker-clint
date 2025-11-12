import { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { auth } from "../../Firebase/firebase";

const UpdateProfile = () => {
  const { user, refreshNavUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      await auth.currentUser.reload();
      const updatedUser = auth.currentUser;
      refreshNavUser(updatedUser);
      toast.success("Profile updated");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <title> Update Profile</title>
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          ✏️ Update Profile
        </h2>

        <div className="form-control mb-4">
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered"
            value={user?.email}
            disabled
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input input-bordered"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>

        <button onClick={handleUpdate} className="btn btn-primary w-full">
          ✅ Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
