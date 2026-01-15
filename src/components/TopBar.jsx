import logoSvg from "../assets/logo.svg";
import budgettingSvg from "../assets/budgetting.svg";
import calendarSvg from "../assets/calendar.svg";
import historySvg from "../assets/history.svg";
import payoutSvg from "../assets/payout.svg";
import marketplaceSvg from "../assets/marketplace.svg";

const topbarIcons = [
  {
    label: "Budgeting",
    icon: budgettingSvg,
    onClickKey: "budget",
  },
  {
    label: "Calendar",
    icon: calendarSvg,
    onClickKey: "calendar",
  },
  {
    label: "History",
    icon: historySvg,
  },
  {
    label: "Wallet",
    icon: payoutSvg,
  },
  {
    label: "Store",
    icon: marketplaceSvg,
  },
];

function TopBar({ onOpenBudget, onOpenCalendar }) {
  return (
    <header className="bg-brand-green text-white">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-[4vw] py-4">
        <img className="h-[22px]" src={logoSvg} alt="Expert Listing" />
        <div className="flex items-center gap-3">
          {topbarIcons.map((item) => (
            <button
              key={item.label}
              className={`grid h-10 w-10 place-items-center rounded-[12px] border border-white/25 ${
                item.onClickKey === "budget" ? "group relative" : ""
              }`}
              aria-label={item.label}
              onClick={() => {
                if (item.onClickKey === "budget") {
                  onOpenBudget();
                }
                if (item.onClickKey === "calendar") {
                  onOpenCalendar();
                }
              }}
            >
              <img className="h-5 w-5" src={item.icon} alt="" aria-hidden="true" />
              {item.onClickKey === "budget" && (
                <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-lg bg-[#1d1e22] px-2 py-1 text-[11px] opacity-0 transition group-hover:opacity-100">
                  Budgeting
                </span>
              )}
            </button>
          ))}
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white font-semibold text-brand-green">
            D
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
