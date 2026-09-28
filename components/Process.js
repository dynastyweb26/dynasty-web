import { siteData } from "../data/site";

export function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="process-pinned reveal">
          <span className="eyebrow">How We Work</span>
          <h2>
            A clean 4-step execution from contract to <em>live launch</em>.
          </h2>
          <p>
            No long strategy phase or endless meetings. You work directly with the person
            building your site, and we focus on getting you live fast.
          </p>
        </div>

        <div className="process-steps reveal">
          {siteData.process.map((stepItem) => (
            <div key={stepItem.step} className="process-card">
              <div className="process-step-num">{stepItem.step}</div>
              <h3>{stepItem.title}</h3>
              <p>{stepItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
