import {
  LayoutGrid,
  Briefcase,
  Users,
  FileText,
  ClipboardList,
  CheckSquare,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Listings", icon: Briefcase },
  { label: "Users", icon: Users },
  { label: "Request", icon: FileText },
  { label: "Applications", icon: ClipboardList },
  { label: "Tasks", icon: CheckSquare },
];

function Tabs() {
  return (
    <div className="border-b border-[#ededed] bg-white">
      <nav className="mx-auto flex w-full max-w-[1280px] flex-wrap gap-4 px-[4vw] py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex items-center gap-2 rounded-[12px] px-4 py-2 text-sm font-semibold ${
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
  );
}

export default Tabs;
