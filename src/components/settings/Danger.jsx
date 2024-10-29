import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
const Danger = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-red-900 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-red-700 mb-8"
    >
      <div className="flex items-center mb-4">
        <Trash2 className="text-red-400 mr-2" size={24} />
        <h2 className="text-gray-100 font-semibold text-xl">Danger Zone</h2>
      </div>
      <p className="text-gray-300 mb-4">
        Parmanently delete your account and all of your content
      </p>
      <button className="rounded bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 transition duration-300">Delete Account</button>
    </motion.div>
  );
};
export default Danger;
