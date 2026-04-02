import { siteConfig } from "@/data/site";

type LinkedInProfileLinkProps = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * Opens LinkedIn profile in a new tab — single source for href (see `siteConfig.linkedinUrl`).
 */
export const LinkedInProfileLink = ({
  children = "LinkedIn",
  className,
}: LinkedInProfileLinkProps) => (
  <a
    href={siteConfig.linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);
