import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  LayoutGrid,
  Briefcase,
  Users,
  FileText,
  ClipboardList,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import logoSvg from "./assets/logo.svg";
import budgettingSvg from "./assets/budgetting.svg";
import calendarSvg from "./assets/calendar.svg";
import historySvg from "./assets/history.svg";
import payoutSvg from "./assets/payout.svg";
import marketplaceSvg from "./assets/marketplace.svg";
import increase from "./assets/increase.svg";
import decrease from "./assets/decrease.svg";
import decrease_ from "./assets/decrease2.svg";
import home from "./assets/house.svg";
import user from "./assets/profile.svg";
import chat from "./assets/chat.svg";
import sketch from "./assets/sketch.svg";
import align from "./assets/align.svg";
import settings from "./assets/settings.svg";
import trend from "./assets/trend.svg";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Listings", icon: Briefcase },
  { label: "Users", icon: Users },
  { label: "Request", icon: FileText },
  { label: "Applications", icon: ClipboardList },
  { label: "Tasks", icon: CheckSquare },
];

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
    icon: increase,
  },
  {
    title: "MRR",
    value: "₦50,000,000.00",
    delta: "+2.5%",
    trend: "up",
    color: "green",
    icon: increase,
  },
  {
    title: "Commission Revenue",
    value: "₦200,000,000.00",
    delta: "+0.5%",
    trend: "up",
    color: "teal",
    icon: decrease_,
  },
  {
    title: "GMV",
    value: "₦100,000,000.00",
    delta: "-0.5%",
    trend: "down",
    color: "red",
    icon: decrease,
  },
];

const listingCards = [
  {
    label: "Most Clicked",
    title: "Urban Prime Plaza Premiere",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Most Watchlisted",
    title: "Urban Prime Plaza Premiere",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Hottest Listing",
    title: "Urban Prime Plaza Premiere",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
  },
];

const calendarCells = [
  { label: "29", muted: true },
  { label: "30", muted: true },
  { label: "31", muted: true },
  { label: "Nov 1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "10" },
  { label: "11" },
  { label: "12" },
  { label: "13" },
  { label: "14" },
  { label: "15" },
  { label: "16", selected: true },
  { label: "17" },
  { label: "18" },
  { label: "19" },
  { label: "20" },
  { label: "21" },
  { label: "22" },
  { label: "23" },
  { label: "24" },
  { label: "25" },
  { label: "26" },
  { label: "27" },
  { label: "28" },
  { label: "29" },
  { label: "30" },
  { label: "Dec 1", muted: true },
  { label: "2", muted: true },
];

const insightColorClass = {
  blue: "text-accent-blue",
  green: "text-accent-green",
  teal: "text-accent-teal",
  red: "text-accent-red",
};

function CalendarModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-20 flex justify-end bg-black/40  backdrop-blur-[3px]">
      <div className="h-[85vh] mt-[80px] w-full max-w-[420px] overflow-hidden rounded-[20px] bg-[#0e0e0e] text-white shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <header className="grid grid-cols-[auto_1fr_auto] items-center border-b border-white/10 px-5 py-4">
          <button
            className="grid h-8 w-8 place-items-center text-white/80"
            aria-label="Back"
          >
            <ChevronLeft size={18} />
          </button>
          <h3 className="text-center text-sm font-semibold">Calendar</h3>
          <button
            className="grid h-8 w-8 place-items-center text-white/80"
            aria-label="Close"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </header>
        <div className="p-5">
          <div className="mb-4 grid grid-cols-[auto_1fr_auto] items-center gap-2 text-sm font-semibold text-white/90">
            <button className="grid h-8 w-8 place-items-center text-white/70">
              <ChevronLeft size={16} />
            </button>
            <span className="text-center">November 2023</span>
            <button className="grid h-8 w-8 place-items-center text-white/70">
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-7 text-[12px]">
            {["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"].map((day) => (
              <span
                key={day}
                className="border border-white/10 py-2 text-center text-[10px] tracking-[0.08em] text-white/60"
              >
                {day}
              </span>
            ))}
            {calendarCells.map((cell, index) => (
              <button
                key={`${cell.label}-${index}`}
                className={`relative h-[90px] border border-white/10 bg-white/5 px-2 pt-2 text-left text-[12px] transition ${
                  cell.muted ? "text-white/40" : "text-white"
                }`}
              >
                <span
                  className={`inline-flex min-w-[26px] justify-center rounded-full px-2 py-1 text-[11px] ${
                    cell.selected ? "bg-accent-blue text-white" : ""
                  }`}
                >
                  {cell.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BudgetModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-20 grid place-items-center bg-black/55 p-6 backdrop-blur-[3px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-[420px] rounded-[20px] bg-white overflow-hidden"
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <div className="w-full bg-[#0C2841] p-5 pb-0">
          <img src={sketch} alt="" className="w-full bg-[] " />
        </div>

        <div className="flex flex-col gap-5 p-6">
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <img src={settings} alt="" />
            <div>
              <h4 className="text-sm font-semibold">
                Set up annual budgets by account category
              </h4>
              <p className="text-xs text-ink-500">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <img src={align} alt="" />
            <div>
              <h4 className="text-sm font-semibold">
                Track actuals vs budget in real time
              </h4>
              <p className="text-xs text-ink-500">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <img src={trend} alt="" />
            <div>
              <h4 className="text-sm font-semibold">
                Adjust figures and forecast with ease
              </h4>
              <p className="text-xs text-ink-500">
                Edit amounts, apply percentage changes, or roll forward last
                year’s data—all in one place.
              </p>
            </div>
          </div>
          <button className="w-full rounded-full bg-[#15161a] py-3 text-sm font-semibold text-white">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f6] text-ink-900">
      <header className="bg-brand-green text-white">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4  py-4">
          <img className="h-[22px]" src={logoSvg} alt="Expert Listing" />
          <div className="flex items-center gap-[24px]">
            <button
              className="group relative grid h-10 w-10 place-items-center rounded-[12px]"
              aria-label="Budgeting"
              onClick={() => setBudgetOpen(true)}
            >
              <img
                className="h-[32px] w-[32px]"
                src={budgettingSvg}
                alt=""
                aria-hidden="true"
              />
              <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-lg bg-[#1d1e22] px-2 py-1 text-[11px] opacity-0 transition group-hover:opacity-100">
                Budgeting
              </span>
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-[12px]"
              aria-label="Calendar"
              onClick={() => setCalendarOpen(true)}
            >
              <img
                className="h-[32px] w-[32px]"
                src={calendarSvg}
                alt=""
                aria-hidden="true"
              />
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-[12px] "
              aria-label="History"
            >
              <img
                className="h-[32px] w-[32px]"
                src={historySvg}
                alt=""
                aria-hidden="true"
              />
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-[12px]"
              aria-label="Wallet"
            >
              <img
                className="h-[32px] w-[32px]"
                src={payoutSvg}
                alt=""
                aria-hidden="true"
              />
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-[12px]"
              aria-label="Store"
            >
              <img
                className="h-[32px] w-[32px]"
                src={marketplaceSvg}
                alt=""
                aria-hidden="true"
              />
            </button>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white font-semibold text-brand-green">
              D
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-[#ededed] bg-white h-[67px] flex items-center justify-center">
        <nav className="mx-auto  w-full max-w-[1280px] grid grid-cols-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex items-center justify-center gap-2 rounded-[12px] px-4 py-2 text-sm font-semibold ${
                  item.active
                    ? "bg-brand-greenSoft text-brand-green"
                    : "text-ink-700"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <main className="flex w-full justify-center gap-[16px] py-[12px]">
        <div className="w-full max-w-[1280px] flex flex-col gap-[16px]">
          <h1 className="text-[20px] font-[600]">Welcome, Ahmed</h1>

          <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
            <article className="rounded-[16px] border border-border bg-surface py-5">
              <header className="flex flex-wrap justify-between gap-4 border-b border-[#f0f0f0] pb-4">
                <div className="flex flex-col gap-[12px] ps-5">
                  <h2 className="text-[20px] font-600">Sales Overview</h2>
                  <p className="text-[12px] font-[400] text-ink-500">
                    Showing overview Jan 2022 - Sep 2022
                  </p>
                </div>
                <div className="flex flex-col items-end gap-4 pe-5">
                  <button className="rounded-full border border-[#D6D6D6] text-[12px] px-[37px] bg-white h-[46px] font-semibold text-ink-700 flex items-center justify-center cursor-pointer">
                    View Transactions
                  </button>
                  <div className="inline-flex gap-1 rounded-full ">
                    <button className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-ink-500">
                      1 Week
                    </button>
                    <button className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-ink-500">
                      1 Month
                    </button>
                    <button className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-[13px] font-semibold text-ink-900 shadow">
                      1 Year
                    </button>
                  </div>
                </div>
              </header>

              <div className="mt-5 grid gap-5 lg:grid-cols-2 grid-cols-1 px-[24px]">
                <div className="relative h-[180px] rounded-[16px] border border-[#f1f1f1] bg-[#fafafa] px-3 py-4">
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
                      <Bar
                        dataKey="blue"
                        fill="#4c5dff"
                        radius={[6, 6, 6, 6]}
                      />
                      <Bar
                        dataKey="green"
                        fill="#13b05a"
                        radius={[6, 6, 6, 6]}
                      />
                      <Bar dataKey="red" fill="#f14b3f" radius={[6, 6, 6, 6]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-x-[16px] h-fit gap-y-[14px] ">
                  {insightCards.map((item) => (
                    <div
                      className="rounded-[14px] border border-[#f0f0f0] h-fit bg-white p-4 col-span-1"
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
                        <p className="text-[10px] whitespace-nowrap">
                          {item.title}
                        </p>
                        <span
                          className={`inline-flex items-center gap-1 text-[12px] font-semibold ${
                            insightColorClass[item.color]
                          }`}
                        >
                          <img src={item.icon} alt="" />
                          {item.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="flex flex-col justify-between h-full">
              <article className=" border border-border bg-surface rounded-[16px] overflow-hidden flex flex-col gap-[16px] pb-[20px] ">
                <header className=" flex items-center justify-between bg-[#F9FAFB] h-[50px] px-5">
                  <div className="flex items-center gap-2 font-semibold text-ink-700">
                    <img src={home} alt="" />
                    <h3 className="text-[14px]">Listings Overview</h3>
                  </div>
                  <a
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue"
                    href="/"
                  >
                    View all <ChevronRight size={14} />
                  </a>
                </header>
                <div className="grid grid-cols-3 gap-4 px-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-ink-500">Total</span>
                    <strong className="mt-1 block text-[24px] font-semibold">
                      1.8k
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-ink-500">Active</span>
                    <strong className="mt-1 block text-[24px] font-semibold">
                      80
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-ink-500">Archived</span>
                    <strong className="mt-1 block text-[24px] font-semibold">
                      1k
                    </strong>
                  </div>
                </div>
              </article>

              <article className=" border border-border bg-surface rounded-[16px] overflow-hidden flex flex-col gap-[16px] pb-[20px] ">
                <header className=" flex items-center justify-between bg-[#F9FAFB] h-[50px] px-5">
                  <div className="flex items-center gap-2 font-semibold text-ink-700">
                    <img src={user} alt="" />

                    <h3 className="text-[14px]">Users Overview</h3>
                  </div>
                  <a
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue"
                    href="/"
                  >
                    View all <ChevronRight size={14} />
                  </a>
                </header>
                <div className="grid grid-cols-3 gap-4 px-[20px]">
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-ink-500">Total</span>
                    <strong className="mt-1 block text-[24px] font-semibold">
                      20.7k
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-ink-500">Riders</span>
                    <strong className="mt-1 block text-[25px] font-semibold">
                      8.5k
                    </strong>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-ink-500">
                      Subscribers
                    </span>
                    <strong className="mt-1 block text-[24px] font-semibold">
                      7.5k
                    </strong>
                  </div>
                </div>
              </article>
            </aside>
          </section>

          <section className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listingCards.map((card, index) => (
              <article
                className="min-h-[220px] overflow-hidden rounded-[18px] opacity-0 shadow-card animate-fadeUp"
                key={card.label}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <img
                  className="h-full w-full object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-black/0 to-black/60 p-5 text-white">
                  <span className="text-[11px] uppercase tracking-[0.08em] text-white/80">
                    {card.label}
                  </span>
                  <h3 className="mt-2 text-[17px] font-semibold">
                    {card.title}
                  </h3>
                  <div className="mt-3 flex gap-2">
                    {Array.from({ length: 4 }).map((_, dotIndex) => (
                      <span
                        key={`${card.label}-${dotIndex}`}
                        className={`h-2 w-2 rounded-full ${
                          dotIndex === 1 ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
            <button
              className="fixed bottom-6 right-5 z-10  md:absolute md:bottom-8 md:right-[-6px]"
              aria-label="Open chat"
            >
              <img src={chat} alt="Chat" />
            </button>
          </section>
        </div>
      </main>

      {calendarOpen && <CalendarModal onClose={() => setCalendarOpen(false)} />}
      {budgetOpen && <BudgetModal onClose={() => setBudgetOpen(false)} />}
    </div>
  );
}

export default App;
