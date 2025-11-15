# iPhone Timer Redesign

**Set a timer in seconds, not swipes!**

## Purpose

This app redesigns the iPhone timer interface to make setting timers faster and easier. It replaces the scroll wheel with preset buttons and direct number input.

## User Story

> "As a busy person who frequently sets timers for cooking and workouts, I want to set a timer quickly without scrolling through numbers, so I can save time and avoid frustration."

## Test Case

**Scenario:** Set a 15-minute timer

**Original iPhone Timer:**
1. Open Clock app
2. Go to Timer tab
3. Scroll minutes wheel to 15
4. Tap Start
- **Time:** 10-15 seconds, 20+ swipes

**Improved Design:**
1. Click "15 min" button
2. Click Start
- **Time:** 2 seconds, 2 clicks

## Success Metrics

- **Fewer Clicks:** 2 clicks instead of 20+ swipes
- **Faster Data Entry:** 2 seconds instead of 10-15 seconds
- **No Overshooting:** Direct input eliminates scrolling errors

## Validation Links

### HTML Validation (Nu)
- [index.html](https://validator.w3.org/nu/?doc=https://jcalvert22.github.io/project-delta/index.html)
- [original.html](https://validator.w3.org/nu/?doc=https://jcalvert22.github.io/project-delta/original.html)
- [improved.html](https://validator.w3.org/nu/?doc=https://jcalvert22.github.io/project-delta/improved.html)

### Accessibility (WAVE)
- [WAVE - Home](https://wave.webaim.org/report#/https://jcalvert22.github.io/project-delta/index.html)
- [WAVE - Original](https://wave.webaim.org/report#/https://jcalvert22.github.io/project-delta/original.html)
- [WAVE - Improved](https://wave.webaim.org/report#/https://jcalvert22.github.io/project-delta/improved.html)

### Architecture Pattern

```
project-delta/
├── index.html          # Home page
├── original.html       # Problem page
├── improved.html       # Timer prototype
├── scripts/scripts.js  # Timer logic
├── style/style.css     # Styling
└── favicon.ico         # Icon
```

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | - | Page structure |
| CSS3 | - | Styling and layout |
| JavaScript | ES6 | Timer functionality |
| Bootstrap | 5.3.2 | Grid and components |

**External Libraries:**
- Bootstrap 5.3.2 (via CDN)

**Fonts:**
- Arial, sans-serif

## Attribution
- This project was created by Jace Calvert
- Bootstrap Docs: [getbootstrap.com](https://getbootstrap.com)
- MDN Web Docs: JavaScript `setInterval` and `clearInterval`
- W3Schools: [HTML Tutorial](https://www.w3schools.com/html/default.asp) - Code structures, CSS gradients, and input types
- Apple Support: iPhone timer image
- GitHub Copilot (GPT-4) in VS Code
1. create a basic structure of all my files
2. help clean code up with format
3. styling
4. helped find errors in coding structure
5. explained the favicon error and fixed the error
