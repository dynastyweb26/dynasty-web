import GrainOverlay from "../components/GrainOverlay";
import HomeClient from "../components/HomeClient";
import { pageMetadata } from "../data/seo";

export const metadata = pageMetadata({
  title: "Dynasty Web | Custom Software & Websites for Growing Companies",
  absoluteTitle: true,
  description:
    "Dynasty Web is a Texas software studio building custom web apps, internal tools and websites for companies across the US. You own the code, the accounts and the data.",
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
