import { Lock } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";
import SettingSection from "./SettingSection";
import { useState } from "react";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <SettingSection Icon={Lock} title="Security">
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4 ">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 transition duration-300 rounded">
          Change Password
        </button>
      </div>
    </SettingSection>
  );
};
export default Security;
