const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const farcasterConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",
    name: "GruzGame 03",
    subtitle: "Urban Tap Game",
    description: "Tap the heroine, perform onchain check-ins, and climb the city leaderboard.",
    imageUrl: `${ROOT_URL}/hero.png`,
    buttonTitle: "Open GruzGame 03",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#1e1a23",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["game", "tap", "leaderboard", "onchain", "urban", "base"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Tap. Check in. Rule the city.",
    ogTitle: "GruzGame 03",
    ogDescription: "Urban city tap game for Base App.",
    ogImageUrl: `${ROOT_URL}/hero.png`,
    castShareUrl: ROOT_URL,
  },
} as const;

