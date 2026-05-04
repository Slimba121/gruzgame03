# GruzGame 03

Urban mini game for Base App:
- tap the heroine to gain score,
- perform one onchain check-in,
- increase tap multiplier by +10% per check-in streak,
- compete in leaderboard.

## Features

- Menu with 3 actions:
  - `Лидерборд`
  - `Ончейн чек-ин`
  - `Начать тапать`
- Tap gameplay:
  - base tap value: `1`,
  - multiplier: `1 + streak * 0.1`.
- Onchain check-in:
  - one check-in per 10-minute window,
  - streak grows only with consecutive windows,
  - streak resets after missing a window.
- Countdown to next 10-minute check-in window.
- Unique checked-in users counter.
- Urban style UI (city skyline, pipes, bricks, industrial controls).

## Stack

- Next.js App Router
- wagmi + viem
- Base Mini App SDK
- Solidity contract (source in `contracts/GruzGame03Onchain.sol`)

## Environment

Create `.env.local`:

```bash
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_GRUZGAME03_CONTRACT=0xYourDeployedContractAddress
```

## Run

```bash
npm install
npm run dev
```

## Onchain check-in contract

App now sends real contract calls (`tap`, `checkIn`) so BaseScan shows interaction with your app contract.

1. Open `contracts/GruzGame03Onchain.sol` in Remix.
2. Deploy to Base Mainnet (or Base Sepolia for testing).
3. Copy deployed address.
4. Set `NEXT_PUBLIC_GRUZGAME03_CONTRACT` in `.env.local` and Vercel env vars.
5. Redeploy.
