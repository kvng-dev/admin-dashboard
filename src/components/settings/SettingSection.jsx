import { motion } from "framer-motion";

const SettingSection = ({ Icon, title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    >
      <div className="flex items-center mb-4">
        <Icon className="text-indigo-400 mr-4" size={24} />
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};
export default SettingSection;
