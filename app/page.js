import GrainOverlay from "../components/GrainOverlay";
import HomeClient from "../components/HomeClient";
import { pageMetadata } from "../data/seo";

export const metadata = pageMetadata({
  title: "Custom Software Development Company | Dynasty Web",
  absoluteTitle: true,
  description:
    "Custom software development company based in Texas, serving the US. We build custom web applications, quoting and operations tools, and websites for companies.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <GrainOverlay />
      <HomeClient />
    </>
  );
}
