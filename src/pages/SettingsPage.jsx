import Header from "../components/common/Header";
import ConnectedAccount from "../components/settings/ConnectedAccount";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import Danger from "../components/settings/Danger";
import Billing from "../components/settings/Billing";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Settings" />
      <main className="max-w-7xl mx-auto px-4 py-6 lg:px-8 space-y-8">
        <Profile />
        <Notifications />
        <Security />
        <Billing />
        <ConnectedAccount />
        <Danger />
      </main>
    </div>
  );
};
export default SettingsPage;
