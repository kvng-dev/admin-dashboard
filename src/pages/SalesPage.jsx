import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesCategoryChart from "../components/sales/SalesCategoryChart";
import DailySaleTrend from "../components/sales/DailySaleTrend";

const SalesPage = () => {
  const salesStats = {
    totalRev: 1234567,
    avgOrder: 78.9,
    comRate: "3.4%",
    salesGrowth: "12.3%",
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRev.toLocaleString()}
            color="#6366f1"
          />
          <StatCard
            name="Avg Order Value"
            icon={ShoppingCart}
            value={salesStats.avgOrder}
            color="#10b981"
          />
          <StatCard
            name="Commission Rate"
            icon={TrendingUp}
            value={salesStats.comRate.toLocaleString()}
            color="#f59e0b"
          />
          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#ef4444"
          />
        </motion.div>

        {/* CHARTS */}
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesCategoryChart />
          <DailySaleTrend />
        </div>
      </main>
    </div>
  );
};
export default SalesPage;
