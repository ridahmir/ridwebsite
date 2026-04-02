import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About" },
] as const;

const resourceNav = [
  { href: "/templates", label: "Templates" },
  { href: "/resources", label: "Blogs" },
] as const;

/** Set to true when Templates / Blogs are ready to show in the footer again. */
const showFooterResources = false;

export const Footer = () => {
  return (
    <footer className="border-t border-line bg-paper">
      <div
        className={`mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 ${
          showFooterResources ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {/* Main column */}
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Main
          </p>
          <ul className="space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {showFooterResources ? (
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Resources
            </p>
            <ul className="space-y-3">
              {resourceNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Contact */}
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            How to Reach
          </p>
          <ul className="space-y-3 text-sm text-ink">
            <li>
              <a
                href={`mailto:${siteConfig.email}?subject=Need%20Information`}
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="text-muted">{siteConfig.location}</li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-6 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Social Media
          </p>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-line py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 text-xs text-muted md:flex-row md:items-center md:px-8">
          <p>© 2026 Ridah e Fatima. All rights reserved.</p>
          <p>Built with Cursor</p>
        </div>
      </div>
    </footer>
  );
};
