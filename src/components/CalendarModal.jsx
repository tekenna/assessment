import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

const calendarDays = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

function CalendarModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-20 flex justify-end bg-black/40 p-6 backdrop-blur-[3px]">
      <div className="h-[85vh] w-full max-w-[420px] overflow-hidden rounded-[20px] bg-[#0e0e0e] text-white shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
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
            {calendarDays.map((day) => (
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
                className={`relative h-[64px] border border-white/10 bg-white/5 px-2 pt-2 text-left text-[12px] transition ${
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

export default CalendarModal;
