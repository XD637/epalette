# ePalette

**ePalette** is a lightweight and easy-to-use npm module that generates color palettes based on emotions. It helps designers, developers, and creatives easily generate color schemes that match specific emotional tones. Perfect for dynamic theming, creative projects, and visual design.

## Features
- Generate vibrant, emotion-based color palettes.
- Pre-defined palettes for common emotions like `happy`, `calm`, `sad`, and more.
- Customizable to support more emotions as needed.
- Fast and lightweight for integration into various projects.

## Installation
To install **ePalette**, run the following command:

```bash
npm install epalette 
```
## Usage
To use ePalette, import the module and call the emotionToPalette function, passing in the desired emotion

'''
import { emotionToPalette } from 'epalette';

const palette = emotionToPalette('happy');
console.log(palette); // Example Output: ['#FFD700', '#FFA500', '#FF6347']

'''
## Generate Palette by Analyzing Text
Use the 'analyzeTextAndGetPalette' function to analyze text sentiment and generate a corresponding color palette. The module uses the MeaningCloud API for sentiment analysis.

'''
import { analyzeTextAndGetPalette } from 'epalette';

(async () => {
  const text = "It's a calm and peaceful evening.";
  const palette = await analyzeTextAndGetPalette(text);
  console.log(palette); // Example Output: ['#1E90FF', '#00CED1', '#4682B4']
})();

'''

