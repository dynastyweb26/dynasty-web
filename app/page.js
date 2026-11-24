import GrainOverlay from "../components/GrainOverlay";
import HomeClient from "../components/HomeClient";
import { pageMetadata } from "../data/seo";

export const metadata = pageMetadata({
  title: "Dynasty Web — Custom Software Built Around Your Company",
  absoluteTitle: true,
  description:
    "Software studio in the Dallas–Fort Worth area building custom web apps, quoting and operations tools, and customer-facing apps for companies. Makers of On It.",
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
