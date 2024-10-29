import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  Cell,
  Tooltip,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
const SalesChannelChart = () => {
  const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];

  const salesChannelData = [
    { name: "Website", value: 45600 },
    { name: "Mobile App", value: 38200 },
    { name: "Marketplace", value: 29800 },
    { name: "Social Media", value: 18700 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Channel
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={salesChannelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {salesChannelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesChannelChart;
