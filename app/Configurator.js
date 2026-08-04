'use client';

import { CATEGORIES, SERVICES } from './data/services';

// Monthly is always shown; setup only when it is a real one-time charge.
function priceLabel(svc) {
  const monthly = `$${svc.monthly}/mo`;
  return svc.setup > 0 ? `${monthly} · $${svc.setup} setup` : monthly;
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Category-grouped, individually selectable service list. Selection state is
// owned by the page so the summary panel and the contact prefill read the same
// source; this component just renders rows and reports toggles.
export default function Configurator({ selected, onToggle }) {
  return (
    <div className="configurator">
      {CATEGORIES.map((cat) => {
        const items = SERVICES.filter((s) => s.category === cat.id);
        if (items.length === 0) return null;
        return (
          <div className="svc-group" key={cat.id}>
            <h3 className="svc-group-label">{cat.label}</h3>
            <div className="svc-list">
              {items.map((svc) => {
                const isSelected = selected.has(svc.id);
                return (
                  <button
                    type="button"
                    key={svc.id}
                    className={`svc-row${isSelected ? ' selected' : ''}`}
                    aria-pressed={isSelected}
                    onClick={() => onToggle(svc.id)}
                  >
                    <span className="svc-check">{isSelected && <Check />}</span>
                    <span className="svc-body">
                      <span className="svc-name">{svc.name}</span>
                      <span className="svc-desc">{svc.description}</span>
                    </span>
                    <span className="svc-price">{priceLabel(svc)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
