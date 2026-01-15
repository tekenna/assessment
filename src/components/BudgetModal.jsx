import { SlidersHorizontal, TrendingUp, BarChart3 } from "lucide-react";
import budgettingSvg from "../assets/budgetting.svg";

function BudgetModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-20 grid place-items-center bg-black/55 p-6 backdrop-blur-[3px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-[420px] overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <div className="grid h-40 place-items-center bg-[radial-gradient(circle_at_top,_#0b2234_0%,_#081728_72%)]">
          <div className="grid h-20 w-20 place-items-center rounded-[20px] border-2 border-white/80 text-white">
            <img className="h-9 w-9" src={budgettingSvg} alt="" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-[10px] border border-[#e7e7e7] text-ink-700">
              <SlidersHorizontal size={18} />
            </div>
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
            <div className="grid h-8 w-8 place-items-center rounded-[10px] border border-[#e7e7e7] text-ink-700">
              <TrendingUp size={18} />
            </div>
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
            <div className="grid h-8 w-8 place-items-center rounded-[10px] border border-[#e7e7e7] text-ink-700">
              <BarChart3 size={18} />
            </div>
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

export default BudgetModal;
