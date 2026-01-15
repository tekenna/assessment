function OverviewCard({ icon: Icon, title, items, linkLabel = "View all" }) {
  return (
    <article className="rounded-[16px] border border-border bg-surface p-5">
      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-ink-700">
          <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[rgba(76,93,255,0.12)] text-accent-blue">
            <Icon size={18} />
          </span>
          <h3 className="text-sm">{title}</h3>
        </div>
        <a
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue"
          href="/"
        >
          {linkLabel} <span aria-hidden="true">›</span>
        </a>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <span className="text-xs text-ink-500">{item.label}</span>
            <strong className="mt-1 block text-[20px] font-semibold">
              {item.value}
            </strong>
          </div>
        ))}
      </div>
    </article>
  );
}

export default OverviewCard;
