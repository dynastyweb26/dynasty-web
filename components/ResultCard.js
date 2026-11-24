import Image from "next/image";
import Link from "next/link";

// Behance-style result card: 3-shot strip, round logo, name, meta,
// result chips, and a full-width button to the case study.
export function ResultCard({ item }) {
  const href = item.href ?? (item.slug ? `/work/${item.slug}` : item.url);
  const thumbs = (item.thumbs ?? item.screenshots).slice(0, 3);
  const portrait = Boolean(item.thumbs);

  return (
    <Link href={href} className="result-card">
      <div className={`result-strip${portrait ? " result-strip-portrait" : ""}`}>
        {thumbs.map((t) => (
          <div key={t.src} className="result-strip-cell">
            <Image src={t.src} alt={t.alt} fill sizes="(min-width: 900px) 120px, 33vw" />
          </div>
        ))}
      </div>
      <div className="result-body">
        <Image src={item.logo} alt="" width={64} height={64} className="result-logo" />
        <h3 className="result-name">{item.name}</h3>
        <p className="result-meta">{item.meta}</p>
        <ul className="result-chips">
          {item.chips.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <span className="result-btn">{item.builtInHouse ? "See the app" : "View case study"} →</span>
      </div>
    </Link>
  );
}
