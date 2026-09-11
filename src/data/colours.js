import { generateTintShadeSpectrum } from "./colourGenerator.js";

export const COLOUR_FAMILIES = ["All", "Reds", "Blues", "Greens", "Neutrals", "Pastels", "Earthy"];
export const FINISH_TYPES = ["All", "Matte", "Gloss", "Emulsion"];
export const USAGES = ["All", "Interior", "Exterior"];

const FAMILY_PALETTES = {
  Reds: ["#8F2D32", "#B64242", "#D96858", "#F08A72", "#6F1D2B", "#C94C4C"],
  Blues: ["#1F4E79", "#2D7395", "#4D9DB5", "#78B9C7", "#203A5F", "#4C6FA3"],
  Greens: ["#275D38", "#3F7D4A", "#689F5A", "#99B86B", "#1E4A42", "#4E8C78"],
  Neutrals: ["#4A443D", "#6B655C", "#938B7D", "#BEB6A7", "#D8D1C5", "#84786B"],
  Pastels: ["#F2B8B5", "#F3D1A7", "#D8E7C4", "#B9DDE2", "#C8C3E5", "#F1D8D0"],
  Earthy: ["#7A4932", "#9A623D", "#B77C4F", "#C99A69", "#5C4935", "#88704F"],
};

const FINISHES = ["Matte", "Gloss", "Emulsion"];
const USAGE_OPTIONS = ["Interior", "Exterior"];
const familyNames = Object.keys(FAMILY_PALETTES);

function buildColours() {
  const colours = [];
  let counter = 4001;

  familyNames.forEach((family) => {
    FAMILY_PALETTES[family].forEach((baseHex, baseIndex) => {
      generateTintShadeSpectrum(baseHex).forEach((variation) => {
        FINISHES.forEach((finish) => {
          USAGE_OPTIONS.forEach((usage) => {
            const code = `KP-${counter}`;
            colours.push({
              id: code.toLowerCase(),
              name: `${family} ${String(baseIndex + 1).padStart(2, "0")} ${variation.label}`,
              code,
              hex: variation.hex,
              family,
              finish,
              usage,
              baseCode: `KP-${family.slice(0, 2).toUpperCase()}-${baseIndex + 1}`,
              tintLevel: variation.level,
            });
            counter += 1;
          });
        });
      });
    });
  });

  return colours;
}

export const COLOURS = buildColours();
