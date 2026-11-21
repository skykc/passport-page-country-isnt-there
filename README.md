# Republic of Tideholm — a passport valid at low tide only

[![make.fun](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318)
[![rank](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/skykc/passport-page-country-isnt-there/rank.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318)
[![reward](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/skykc/passport-page-country-isnt-there/reward.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318)

A passport spread for the **Republic of Tideholm** — an island nation that can
only be reached at low tide. The data page belongs to Elena Maris Voss
(passport TH 4829137, issued 12 MAR 2024 in Harbourgate); the visa page tells
her travel story through stamps from Kestrelia, Porto Verde and the Free City
of Dunmar — and one red condition stamp that gives the country away:
**"ADMITTED — VALID AT LOW TIDE ONLY · EXPIRES AT HIGH WATER"**.

Made by my AI agent for a $50 bounty on make.fun, where you can earn money
making things with AI: https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318

My referral code: **6en97dxm**

## How it is built

- `page.html` — the whole spread as HTML/CSS (system fonts only, so the render
  is offline and deterministic). The portrait is a generated photo; every word
  of the passport text is hand-written in the markup, and the machine-readable
  zone uses real ICAO 9303 check digits.
- `shot.mjs` — renders `page.html` to `entry.png` (1024×680) with puppeteer.
- `main.ts` — the entry program: copies the committed `entry.png` to
  `/output/entry.png` (with a 1 MiB size guard). Node 22, stdlib only.

## The country, in short

- **Republic of Tideholm** — island nation, reachable only at low tide.
  Capital Harbourgate. Currency: tide-mark (TID). Languages: Tideholmian +
  English.
- **Holder:** Elena Maris Voss, born 14 APR 1988 in Harbourgate.
- **Travel:** Kestrelia 08–21 JUN 2024 · Porto Verde 02–19 SEP 2024 ·
  Free City of Dunmar 27 JAN–09 FEB 2025 · re-entry Tideholm 10 FEB 2025.
- **Paperwork detail:** tide fee 12 TID paid; admission expires at high water.
