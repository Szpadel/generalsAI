# generalsAI
This is work in progress on AI implementation for generals.io
Compatible with generals.ai 11.0

Currently AI is able to beat most of the players in 1v1 mode.
It currently plays very defensive slowly taking over the map.

AI scores around 70-80 stars in 1v1 mode without human interaction

![GeneralsAi Gui](https://rawgit.com/Szpadel/generalsAI/master/img/generalsAi.png)

# How to run it?
Install browser extension that allow to replace resources like [Requestly](https://chrome.google.com/webstore/detail/requestly/mdnleldcmiljblolnjhpnblkcekpdkpa)

Add redirect rule url matching with regexp
```
/http://(eu\.)?generals\.io/generals-bundle-prod-v11.0\.js/
```
With destination:
```
https://goo.gl/asCjxH
```


# Current iteration
Current implementation is task based. It measure multiple metrics like enemy threat and then based on those information
  it try to select best task that should be completed (like aggregating army or capturing tiles).
  It simulate multiple moves ahead to determine best moves combination to achieve the best score.
  Current implementation 

# Previous iteration
Previously AI assigning to priority to selected fields (empty or fog field, enemy unit, general, city etc) 
and then make this priority to fold the map on walkable areas.
When it is complete AI calculates what move is needed to move maximum amount of army in highest priority.
(this logic is also hacked to prefer moves that collect additional army and to don't leave own general without protection)


# Previous iteration v2
It was considering move to random lowest neighbor, also tried to consider best move in very hacky way.
This approach needed a lot of human integration to win, but was nice to capture enemy general.

# Roadmap
- [x] Bindings with game API
- [x] PoC Simple context less agent
- [x] Priority and targets based implementation
- [x] Enemy, city, empty tiles, generals, aggregating (very buggy) targets
- [x] Memorising of cities and generals location
- [x] Tasks with dynamic priority
- [x] Planing couple moves ahead
- [x] Debug gui
- [ ] Tracking unit movement
- [ ] Big unit tracking
- [ ] Caching computed best path
- [ ] More knowledge sources, calculating number of enemy cities and army outside visible area
- [ ] Tracking enemy units outside of visible area based on previous locations
- [ ] Async thinking
- [ ] Move computing to multiple web workers
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
