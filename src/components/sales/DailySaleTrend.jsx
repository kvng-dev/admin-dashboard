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

const DailySaleTrend = () => {
  const dailySalesData = [
    { name: "Mon", sales: 1000 },
    { name: "Tue", sales: 1200 },
    { name: "Wed", sales: 900 },
    { name: "Thu", sales: 1100 },
    { name: "Fri", sales: 1300 },
    { name: "Sat", sales: 1600 },
    { name: "Sun", sales: 1400 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 "
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Daily Sales Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
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
            <Bar dataKey="sales" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default DailySaleTrend;
