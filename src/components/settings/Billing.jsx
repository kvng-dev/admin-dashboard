import { CreditCard } from "lucide-react";
import SettingSection from "./SettingSection";

const Billing = () => {
  return (
    <SettingSection Icon={CreditCard} title={"Biling"}>
      <div className="flex justify-between my-8">
        <p className="text-gray-100">Current Plan</p>
        <p className="text-indigo-500">Pro</p>
      </div>
      <button className="rounded font-bold py-2 px-4 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
        Upgrade Plan
      </button>
    </SettingSection>
  );
};
export default Billing;
