'use client';

import {
  SERVICES,
  partnerLevelForCount,
  nextPartnerLevel,
} from './data/services';

const money = (n) => `$${n.toLocaleString('en-US')}`;

// Reads the same selection Set the list writes to. Keeps two totals strictly
// separate — "Due today" (one-time setup) and "Monthly" (recurring) are never
// summed into a single number.
export default function SummaryPanel({ selected }) {
  const chosen = SERVICES.filter((s) => selected.has(s.id));
  const count = chosen.length;
  const monthly = chosen.reduce((sum, s) => sum + s.monthly, 0);
  const setup = chosen.reduce((sum, s) => sum + s.setup, 0);

  const level = partnerLevelForCount(count);
  const next = nextPartnerLevel(count);
  // Progress within the current tier: from the tier just earned toward the next
  // threshold. Full bar once the top tier is reached.
  const prevMin = level ? level.min : 0;
  const pct = next
    ? Math.round(((count - prevMin) / (next.level.min - prevMin)) * 100)
    : 100;

  return (
    <aside className="svc-summary" aria-label="Package summary">
      <h3 className="svc-summary-title">Your package</h3>

      {count === 0 ? (
        <p className="svc-summary-empty">
          Select services to build your package. Your partner level and totals
          appear here.
        </p>
      ) : (
        <>
          <ul className="svc-summary-items">
            {chosen.map((s) => (
              <li key={s.id}>
                <span>{s.name}</span>
                <span>
                  {s.setup > 0
                    ? `${money(s.monthly)}/mo · ${money(s.setup)}`
                    : `${money(s.monthly)}/mo`}
                </span>
              </li>
            ))}
          </ul>

          <div className="svc-level">
            <div className="svc-level-row">
              <span className="svc-level-badge">{level ? level.label : '—'}</span>
              <span className="svc-level-count">
                {count} service{count === 1 ? '' : 's'}
              </span>
            </div>
            <div className="svc-progress" role="presentation">
              <span style={{ width: `${pct}%` }} />
            </div>
            <p className="svc-level-hint">
              {next
                ? `${next.remaining} more for ${next.level.label}`
                : 'Top partner level reached.'}
            </p>
          </div>

          <div className="svc-totals">
            <div className="svc-total">
              <span className="svc-total-label">Due today</span>
              <span className="svc-total-value">{money(setup)}</span>
              <span className="svc-total-note">one-time setup</span>
            </div>
            <div className="svc-total">
              <span className="svc-total-label">Monthly</span>
              <span className="svc-total-value">{money(monthly)}</span>
              <span className="svc-total-note">recurring</span>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
