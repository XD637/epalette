// Import the necessary functions
import { emotionToPalette, analyzeTextAndGetPalette } from './src/emotionToPalette.js';

// Test the `emotionToPalette` function directly
console.log('Test for emotionToPalette:');
console.log('Happy Palette:', emotionToPalette('happy'));
console.log('Calm Palette:', emotionToPalette('calm'));
console.log('Sad Palette:', emotionToPalette('sad'));
console.log('Energetic Palette:', emotionToPalette('energetic'));
console.log('Default Palette:', emotionToPalette('unknown')); // Testing unknown input

// Test the API-based `analyzeTextAndGetPalette` function
console.log('\nTest for analyzeTextAndGetPalette (API):');

(async () => {
  try {
    const testText1 = "The restaurant was great even though it’s not near Madrid.";
    const palette1 = await analyzeTextAndGetPalette(testText1);
    console.log(`Text: "${testText1}"`);
    console.log('Generated Palette:', palette1);

    const testText2 = "I feel very sad and disappointed today.";
    const palette2 = await analyzeTextAndGetPalette(testText2);
    console.log(`\nText: "${testText2}"`);
    console.log('Generated Palette:', palette2);

    const testText3 = "It's a calm and peaceful evening.";
    const palette3 = await analyzeTextAndGetPalette(testText3);
    console.log(`\nText: "${testText3}"`);
    console.log('Generated Palette:', palette3);
  } catch (error) {
    console.error('Error during API test:', error);
  }
})();
