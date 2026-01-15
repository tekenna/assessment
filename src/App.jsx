import { useState } from "react";
import { Home, Users } from "lucide-react";
import TopBar from "./components/TopBar";
import Tabs from "./components/Tabs";
import SalesOverview from "./components/SalesOverview";
import OverviewCard from "./components/OverviewCard";
import ListingStrip from "./components/ListingStrip";
import CalendarModal from "./components/CalendarModal";
import BudgetModal from "./components/BudgetModal";

const listingsOverviewItems = [
  { label: "Total", value: "1.8k" },
  { label: "Active", value: "80" },
  { label: "Archived", value: "1k" },
];

const usersOverviewItems = [
  { label: "Total", value: "20.7k" },
  { label: "Riders", value: "8.5k" },
  { label: "Subscribers", value: "7.5k" },
];

function App() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f6] text-ink-900">
      <TopBar
        onOpenBudget={() => setBudgetOpen(true)}
        onOpenCalendar={() => setCalendarOpen(true)}
      />
      <Tabs />

      <main className="mx-auto flex w-full max-w-[1220px] flex-col gap-6 px-[4vw] py-6">
        <section>
          <h1 className="text-[26px] font-semibold">Welcome, Ahmed</h1>
        </section>

        <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          <SalesOverview />

          <aside className="grid gap-5">
            <OverviewCard
              icon={Home}
              title="Listings Overview"
              items={listingsOverviewItems}
            />
            <OverviewCard
              icon={Users}
              title="Users Overview"
              items={usersOverviewItems}
            />
          </aside>
        </section>

        <ListingStrip />
      </main>

      {calendarOpen && <CalendarModal onClose={() => setCalendarOpen(false)} />}
      {budgetOpen && <BudgetModal onClose={() => setBudgetOpen(false)} />}
    </div>
  );
}

export default App;
