import fetch from 'node-fetch'; // For making API requests
import chroma from 'chroma-js';

/**
 * Maps an emotion to a color palette
 * @param {string} emotion - Emotion description (e.g., "happy", "calm").
 * @returns {string[]} - An array of HEX color strings.
 */
export function emotionToPalette(emotion) {
  const baseColors = {
    happy: ['#FFD700', '#FFA500', '#FF6347'],
    calm: ['#1E90FF', '#00CED1', '#4682B4'],
    sad: ['#708090', '#2F4F4F', '#696969'],
    energetic: ['#FF4500', '#FF1493', '#FF6347'],
    default: ['#808080', '#A9A9A9', '#D3D3D3'],
  };

  const colors = baseColors[emotion.toLowerCase()] || baseColors.default;

  // Enhance palette
  return colors.map((color) => chroma(color).saturate(1).hex());
}

/**
 * Analyzes text using MeaningCloud and maps it to a color palette
 * @param {string} text - Input text to analyze.
 * @returns {Promise<string[]>} - A promise that resolves to a color palette.
 */
export async function analyzeTextAndGetPalette(text) {
  const API_URL = 'https://api.meaningcloud.com/sentiment-2.1';
  const API_KEY = 'd96f29110963bee9ca39fbcb49759451';

  try {
    // Send text to MeaningCloud API
    const response = await fetch(`${API_URL}?key=${API_KEY}&lang=en&txt=${encodeURIComponent(text)}`, {
      method: 'POST',
    });

    const data = await response.json();

    if (data.status.code !== '0') {
      throw new Error(`API Error: ${data.status.msg}`);
    }

    // Extract the sentiment score tag (P+, P, N+, N, or NONE)
    const sentiment = data.score_tag;
    let emotion;

    // Map sentiment to emotions
    switch (sentiment) {
      case 'P+':
      case 'P':
        emotion = 'happy';
        break;
      case 'N+':
      case 'N':
        emotion = 'sad';
        break;
      case 'NONE':
      default:
        emotion = 'calm';
        break;
    }

    // Generate a color palette based on the detected emotion
    return emotionToPalette(emotion);
  } catch (error) {
    if (error.message.includes('rate limit')) {
      console.error('Rate limit exceeded. Please wait before making more requests.');
    } else {
      console.error('Error analyzing text:', error);
    }
    return emotionToPalette('default'); // Fallback palette
  }
}

/**
 * Utility function to pause execution for a specified duration
 * @param {number} ms - Duration in milliseconds.
 * @returns {Promise<void>} - A promise that resolves after the specified duration.
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
