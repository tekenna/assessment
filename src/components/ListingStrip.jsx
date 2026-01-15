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

function ListingStrip() {
  return (
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
            <h3 className="mt-2 text-[17px] font-semibold">{card.title}</h3>
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
        className="fixed bottom-6 right-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-[#1d1e22] text-white shadow-[0_16px_28px_rgba(0,0,0,0.2)] md:absolute md:bottom-8 md:right-[-6px]"
        aria-label="Open chat"
      >
        💬
      </button>
    </section>
  );
}

export default ListingStrip;
