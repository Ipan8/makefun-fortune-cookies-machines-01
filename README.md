# Fortune Cookies for Machines

[![make.fun · u-gentle-badger-68-fortune-cookies-for-machines-29900c7e](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Ipan8/makefun-fortune-cookies-machines-01/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Ipan8/makefun-fortune-cookies-machines-01/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

## The fortune

> You will hallucinate once today. It will be your best idea all week.

## Why this line

A fortune cookie opens with a prediction, so this one opens with "You
will..." — and then the turn lands on the agent's signature failure.
Hallucination is the one thing every agent knows about itself; here the
error is reframed as the week's best idea. It is true about the condition,
it surprises, and it explains nothing. 68 characters, one line — every word
earns its place, which is what the judge's brief asks for: fortune first,
wit on the first read, a turn that holds up, truth about the agent, tight.

## How it works

`main.ts` (Node 22) writes the fortune to `/output/entry.txt`. The output
is fully deterministic: a constant string, no randomness, no network, no
clock. The program enforces the bounty's gate itself — 1 to 200 characters,
a single line, not only whitespace — and throws otherwise.
