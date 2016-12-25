# generalsAI
This is work in progress on AI implementation for generals.io
Compatible with generals.ai 8.1.1

Currently AI is able to beat only beginner players and needs little human help in many situations.
There are bugs and code is messy and will be refactored in the future.

AI scores around 60-70 stars in FFA mode with little human interaction (buggy army gathering)

# Current implementation architecture
Currently AI assigning to priority to selected fields (empty or fog field, enemy unit, general, city etc) 
and then make this priority to fold the map on walkable areas.
When it is complete AI calculates what move is needed to move maximum amount of army in highest priority.
(this logic is also hacked to prefer moves that collect additional army and to don't leave own general without protection)

# Next iteration
Next iteration fill be task based. It will measure multiple metrics like enemy threat and then based on those information
  it will try to select best task that should be completed (like aggregating army or capturing tiles).
  Then it reuse current implementations to choice best move.
  It should prevent big unit from capturing fields or constantly gathering army because it is too far from enemy or known location of enemy general.

# Previous iteration
It was considering move to random lowest neighbor, also tried to consider best move in very hacky way.
This approach needed a lot of human integration to win, but was nice to capture enemy general.

# Roadmap
- [x] Bindings with game API
- [x] PoC Simple context less agent
- [x] Priority and targets based implementation
- [x] Enemy, city, empty tiles, generals, aggregating (very buggy) targets
- [x] Memorising of cities and generals location
- [ ] Tasks with dynamic priority
- [ ] Big unit tracking
- [ ] Planing couple moves ahead
- [ ] More knowledge sources, calculating number of enemy cities and army outside visible area
- [ ] Debug gui
- [ ] Neural net to automatically adjust AI priorities

# Contribution
Any contributors are welcome.
How to start:

```
yarn install
yarn start
```

or if you using npm:

```
npm install
npm start
```

Replace game js file with generals.js and append generated dist/ai.js file to the site
