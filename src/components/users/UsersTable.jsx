import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const UsersTable = () => {
  const userData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      role: "Moderator",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emilydavis@example.com",
      role: "Customer",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Chris Lee",
      email: "chrislee@example.com",
      role: "Admin",
      status: "Active",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUser, setFilteredUser] = useState(userData);

  const handleSearch = (e) => {
    const filter = e.target.value;
    setSearchTerm(filter);
    const result = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(filter) ||
        user.email.toLowerCase().includes(filter) ||
        user.role.toLowerCase().includes(filter) ||
        user.status.toLowerCase().includes(filter)
    );
    setFilteredUser(result);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium mb-4 text-gray-100">User List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredUser.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium gap-2 text-gray-100 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                    {user.name.charAt(0)}
                  </div>
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold text-blue-100 bg-blue-800 rounded-full">
                    {user.role}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Inactive"
                        ? "bg-red-800 text-red-100"
                        : "bg-green-800 text-green-100"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    Edit
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
