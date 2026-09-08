# Escape Artists

An early [D3 Loves React](https://www.d3indepth.com/d3-loves-react/) learning project from the end of the course's Scales module. The exercise recreates an Economist-inspired horizontal bar chart about laboratory-acquired infections while keeping D3 responsible for scale calculations and React responsible for rendering the SVG.

## Live Demo

[View the chart on GitHub Pages](https://unguisdraconis.github.io/escape-artists/)

## Assignment Context

The assignment asked learners to recreate a polished reference graphic using scales, bars, grid lines, labels, and title/subtitle/footer composition. The goal was to practice the chart's structure and visual relationships rather than reproduce every pixel exactly.

## What the Chart Shows

The chart compares nine disease or pathogen categories using reported counts of laboratory-acquired infections for the stated period 1970–2021. Horizontal bar length encodes the count. Labels move inside or outside a bar depending on the available bar length, while vertical grid lines and values above the plot support quantitative reading.

| Disease or pathogen | Count |
| --- | ---: |
| Hantavirus | 6 |
| Tularemia | 7 |
| Dengue | 7 |
| Ebola | 9 |
| E. coli | 11 |
| Tuberculosis | 15 |
| Salmonella | 17 |
| Vaccinia | 18 |
| Brucella | 54 |

## Data and Provenance

The course supplied the exercise data and cited the Laboratory-Acquired Infection Database and American Biological Safety Association in the reference graphic. The nine values above are the values preserved in this repository for the exercise. The chart also retains The Economist attribution for the reference design.

The repository does not establish an independently verified download, dataset version, retrieval date, or data license.

## Techniques Practiced

- `d3.scaleLinear` for proportional bar lengths and tick positions
- `d3.scaleBand` for vertical category placement
- `d3.max` for the quantitative domain
- SVG bars rendered with React
- Data-driven grid lines and top-positioned scale labels
- A visible zero baseline
- Conditional inside/outside category-label placement
- Chart composition guided by a reference design

## Learning Progression

This project follows the simpler `barchart` exercise. It advances from basic bar construction toward editorial hierarchy, grid and tick reasoning, conditional label placement, source/footer treatment, and reference-driven visual composition.

## Accessibility

The visible title uses a semantic heading. The SVG has an accessible name and description, and the same course data are exposed in a visually hidden semantic table so exact values do not depend on reading bar lengths.

## Historical Limitations

This repository preserves the project at its original learning stage: a fixed 650 × 360 chart with simplified/default typography, no interaction, no generalized responsive chart architecture, and no test suite or CI. Data provenance is limited to the course and reference information recorded above. On narrow screens, the fixed-width composition remains available through horizontal scrolling rather than being redesigned.

## Local Use

```sh
npm ci
npm run dev
```

Create a production build with:

```sh
npm run build
```
