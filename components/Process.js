import { siteData } from "@/data/site";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="process-grid">
          {/* Pinned Sticky Heading */}
          <div className="process-pinned reveal">
            <span className="eyebrow">How We Work</span>
            <h2>
              A clean 4-step execution from contract to <em>live launch</em>.
            </h2>
            <p>
              No bloated strategy phase or endless meetings. Direct craftsman communication
              focused on getting your project live quickly.
            </p>
          </div>

          {/* Scrolling Steps */}
          <div className="process-steps reveal">
            {siteData.process.map((stepItem) => (
              <div key={stepItem.step} className="step-card">
                <div className="step-num">{stepItem.step}</div>
                <div className="step-content">
                  <h3>{stepItem.title}</h3>
                  <p>{stepItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
