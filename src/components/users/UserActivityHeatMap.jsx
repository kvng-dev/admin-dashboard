import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  Tooltip,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const userActivityData = [
  {
    name: "Mon",
    "0-4": 20,
    "4-8": 40,
    "8-12": 60,
    "12-16": 80,
    "16-20": 100,
    "20-24": 30,
  },
  {
    name: "Tue",
    "0-4": 15,
    "4-8": 35,
    "8-12": 55,
    "12-16": 75,
    "16-20": 90,
    "20-24": 25,
  },
  {
    name: "Wed",
    "0-4": 10,
    "4-8": 30,
    "8-12": 50,
    "12-16": 70,
    "16-20": 85,
    "20-24": 20,
  },
  {
    name: "Thu",
    "0-4": 25,
    "4-8": 45,
    "8-12": 65,
    "12-16": 85,
    "16-20": 95,
    "20-24": 35,
  },
  {
    name: "Fri",
    "0-4": 30,
    "4-8": 50,
    "8-12": 70,
    "12-16": 90,
    "16-20": 110,
    "20-24": 40,
  },
  {
    name: "Sat",
    "0-4": 35,
    "4-8": 55,
    "8-12": 75,
    "12-16": 95,
    "16-20": 120,
    "20-24": 45,
  },
  {
    name: "Sun",
    "0-4": 20,
    "4-8": 40,
    "8-12": 60,
    "12-16": 80,
    "16-20": 100,
    "20-24": 30,
  },
];

console.log(userActivityData);

const UserActivityHeatMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        User Activity Heatmap
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
            <Bar dataKey={"0-4"} stackId={"a"} fill="#6366f1" />
            <Bar dataKey={"4-8"} stackId={"a"} fill="#885cf6" />
            <Bar dataKey={"8-12"} stackId={"a"} fill="#ec4899" />
            <Bar dataKey={"12-16"} stackId={"a"} fill="#10b981" />
            <Bar dataKey={"16-20"} stackId={"a"} fill="#f59e0b" />
            <Bar dataKey={"20-24"} stackId={"a"} fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default UserActivityHeatMap;
