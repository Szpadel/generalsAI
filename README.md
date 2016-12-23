# generalsAI
This is work in progress on AI implementation for generals.io
Compatable with generals.ai 8.0.1

Currently AI is able to beat only begginer players and needs little human help in many situations.
There are bugs and code is messy and will be refactored in the future.

AI scores around 60-70 stars in FFA mode with little human interaction (buggy army gathering)

# Roadmap
- [x] Bindings with game API
- [x] PoC Simple context less agent
- [x] Priority and targets based implementation
- [x] Enemy, city, empty tiles, generals, aggregating (very buggy) targets
- [x] Memorising of cities and generals location
- [ ] Tasks with dynamic priority
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

Replace game js file with generals.js and append builded dist/ai.js file to the site
