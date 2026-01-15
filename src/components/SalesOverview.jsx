import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, ChevronLeft, ChevronRight } from "lucide-react";

const chartData = [
  { name: "Jan", blue: 32, green: 24, red: 9 },
  { name: "Feb", blue: 12, green: 28, red: 11 },
  { name: "Mar", blue: 14, green: 10, red: 8 },
  { name: "Apr", blue: 16, green: 24, red: 11 },
  { name: "May", blue: 10, green: 12, red: 9 },
  { name: "Jun", blue: 28, green: 36, red: 7 },
  { name: "Jul", blue: 21, green: 28, red: 13 },
  { name: "Aug", blue: 24, green: 12, red: 15 },
  { name: "Sep", blue: 30, green: 26, red: 7 },
];

const insightCards = [
  {
    title: "Total Inflow",
    value: "₦120,000,000.00",
    delta: "+2.5%",
    trend: "up",
    color: "blue",
  },
  {
    title: "MRR",
    value: "₦50,000,000.00",
    delta: "+2.5%",
    trend: "up",
    color: "green",
  },
  {
    title: "Commission Revenue",
    value: "₦200,000,000.00",
    delta: "+0.5%",
    trend: "up",
    color: "teal",
  },
  {
    title: "GMV",
    value: "₦100,000,000.00",
    delta: "-0.5%",
    trend: "down",
    color: "red",
  },
];

const insightColorClass = {
  blue: "text-accent-blue",
  green: "text-accent-green",
  teal: "text-accent-teal",
  red: "text-accent-red",
};

function SalesOverview() {
  return (
    <article className="rounded-[16px] border border-border bg-surface p-5">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-[20px] font-semibold">Sales Overview</h2>
          <p className="text-sm text-ink-500">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-full border border-[#dedede] bg-white px-5 py-2 text-sm font-semibold text-ink-700">
            View Transactions
          </button>
          <div className="inline-flex gap-1 rounded-full bg-[#f0f0f0] p-1 text-sm">
            <button className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-ink-500">
              1 Week
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-ink-500">
              1 Month
            </button>
            <button className="rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-ink-900 shadow">
              1 Year
            </button>
          </div>
        </div>
      </header>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="relative h-[240px] rounded-[16px] border border-[#f1f1f1] bg-[#fafafa] px-3 py-4">
          <button className="absolute left-[-14px] top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white shadow">
            <ChevronLeft size={16} />
          </button>
          <button className="absolute right-[-14px] top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white shadow">
            <ChevronRight size={16} />
          </button>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              barGap={6}
              barSize={6}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9a9a9a", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9a9a9a", fontSize: 11 }}
                ticks={[0, 10, 20, 30, 40, 50]}
                tickFormatter={(value) => `${value}m`}
              />
              <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />
              <Bar dataKey="blue" fill="#4c5dff" radius={[6, 6, 6, 6]} />
              <Bar dataKey="green" fill="#13b05a" radius={[6, 6, 6, 6]} />
              <Bar dataKey="red" fill="#f14b3f" radius={[6, 6, 6, 6]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid gap-4">
          {insightCards.map((item) => (
            <div
              className="rounded-[14px] border border-[#f0f0f0] bg-white p-4"
              key={item.title}
            >
              <h3
                className={`text-[17px] font-semibold ${
                  insightColorClass[item.color]
                }`}
              >
                {item.value}
              </h3>
              <div className="mt-1 flex items-center justify-between text-xs text-ink-500">
                <p>{item.title}</p>
                <span
                  className={`inline-flex items-center gap-1 text-[12px] font-semibold ${
                    insightColorClass[item.color]
                  }`}
                >
                  {item.trend === "up" ? (
                    <ArrowUpRight size={12} />
                  ) : (
                    <ArrowDownRight size={12} />
                  )}
                  {item.delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default SalesOverview;
