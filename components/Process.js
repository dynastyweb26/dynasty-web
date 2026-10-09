import Image from "next/image";
import { siteData } from "../data/site";
import { brandConfig } from "../data/brand";

export function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="process-pinned reveal">
          <span className="eyebrow">How We Work</span>
          <h2>
            A clear path from first call to <em>launch</em>.
          </h2>
          <p>
            Every engagement follows the same disciplined process: defined scope, phased
            delivery, and direct access to the engineer leading your build.
          </p>
          <div className="credential-row">
            <Image
              src={brandConfig.awsCloudPractitioner.src}
              alt={brandConfig.awsCloudPractitioner.alt}
              width={64}
              height={64}
              className="credential-badge"
            />
            <div className="credential-text">
              <span className="credential-label">Credentials</span>
              <span className="credential-name">AWS Certified Cloud Practitioner</span>
            </div>
          </div>
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
