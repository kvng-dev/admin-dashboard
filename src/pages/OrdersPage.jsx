import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import {
  CheckCircle,
  CircleDollarSign,
  Clock,
  ShoppingBag,
} from "lucide-react";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";
const OrdersPage = () => {
  const ordersStat = {
    totalOrders: "1,234",
    pendingOrders: "56",
    completeOrders: "1,179",
    totalRev: "$98,765",
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={ordersStat.totalOrders}
            color="#6366f1"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={ordersStat.pendingOrders}
            color="#8b5cf6"
          />
          <StatCard
            name="Complete Orders"
            icon={CheckCircle}
            value="567"
            color="#ec4899"
          />
          <StatCard
            name="Total Revenue"
            icon={CircleDollarSign}
            value={ordersStat.totalRev}
            color="#10b981"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders />
          <OrderDistribution />
        </div>
        <OrdersTable />
      </main>
    </div>
  );
};
export default OrdersPage;
