const TINT_LEVELS = [10, 20, 40, 60, 80];

function clamp(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => clamp(value).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

function mixColours(source, target, amount) {
  return rgbToHex({
    r: source.r + (target.r - source.r) * amount,
    g: source.g + (target.g - source.g) * amount,
    b: source.b + (target.b - source.b) * amount,
  });
}

export function generateTintShadeSpectrum(baseHex) {
  const base = hexToRgb(baseHex);
  const white = { r: 255, g: 255, b: 255 };
  const black = { r: 0, g: 0, b: 0 };

  return TINT_LEVELS.map((level) => {
    const amount = level / 100;
    const isTint = level <= 20;
    return {
      level,
      label: isTint ? `${level}% Tint` : `${level}% Shade`,
      hex: isTint ? mixColours(base, white, amount) : mixColours(base, black, amount - 0.2),
    };
  });
}

export function getAccentRecommendations(hex) {
  const { r, g, b } = hexToRgb(hex);
  return [
    rgbToHex({ r: 255 - r, g: 255 - g, b: 255 - b }),
    rgbToHex({ r: (r + 255) / 2, g: (g + 255) / 2, b: (b + 255) / 2 }),
  ];
}

export function getContrastText(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#262420" : "#FFFFFF";
}

export { TINT_LEVELS };
