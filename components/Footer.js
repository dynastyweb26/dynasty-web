import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="brand" href="#top">
          <BrandLogo variant="dynasty" />
          <span>Dynasty Web</span>
        </a>

        <div className="footer-links">
          <a href="#packages">Packages</a>
          <a href="#solutions">Solutions</a>
          <a href="#work">Work</a>
          <a href="https://onit.dynastyweb.co" target="_blank" rel="noopener">
            On It
          </a>
          <a href="/privacy">Privacy</a>
          <a href="mailto:brandon@dynastyweb.co">Email</a>
        </div>

        <span>© {new Date().getFullYear()} Dynasty Web · Forney, TX</span>
      </div>
    </footer>
  );
}
