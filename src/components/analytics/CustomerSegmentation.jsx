import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from "recharts";

const customerSegmentationData = [
  { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
  { subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
  { subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
  { subject: "Spend", A: 99, B: 100, fullMark: 150 },
  { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
  { subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 "
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Customer Segmentation
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart
            cx={"50%"}
            outerRadius={"80%"}
            data={customerSegmentationData}
          >
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey={"subject"} stroke="#9ca3af" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9ca3af" />
            <Radar
              name="Segment A"
              dataKey={"A"}
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.6}
            />
            <Radar
              name="Segment B"
              dataKey={"B"}
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                background: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default CustomerSegmentation;
