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

  // Map emotion to base colors or default
  const colors = baseColors[emotion.toLowerCase()] || baseColors.default;

  // Enhance palette (e.g., lighten or darken colors dynamically)
  const enhancedPalette = colors.map((color) =>
    chroma(color).saturate(1).hex()
  );

  return enhancedPalette;
}
