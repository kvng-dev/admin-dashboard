import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection Icon={User} title="Profile">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="profile"
          className="rounded-full w-16 h-16 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">John Krasinki</h3>
          <p className="text-gray-400">johnkra@example.com</p>
        </div>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
