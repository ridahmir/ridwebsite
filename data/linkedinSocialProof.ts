/**
 * Homepage LinkedIn authority strip — update `linkedinFollowerCount` when you check LinkedIn.
 * The section renders only when count >= threshold (default 10,000).
 */

export const LINKEDIN_HOMEPAGE_SOCIAL_PROOF_THRESHOLD = 10_000;

/** Current follower count — set manually (e.g. from LinkedIn analytics). */
export const linkedinFollowerCount = 0;

export const shouldShowLinkedInSocialProofSection = (): boolean =>
  linkedinFollowerCount >= LINKEDIN_HOMEPAGE_SOCIAL_PROOF_THRESHOLD;
