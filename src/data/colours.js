export const COLOUR_FAMILIES = ["All", "Warm Tones", "Cool Tones", "Neutrals", "Earth Tones"];

function buildColours() {
  const families = [
    { family: "Warm Tones", hexes: ["#C9A27A", "#D8B48F", "#B98B66", "#E0C4A3", "#CBA06F", "#AE7F55"] },
    { family: "Cool Tones", hexes: ["#7D96A3", "#96AAB4", "#6B8894", "#A9BCC4", "#5F7C89", "#89A2AC"] },
    { family: "Neutrals", hexes: ["#E7E2D6", "#D8D2C3", "#C9C2AF", "#BEB7A2", "#EDE8DC", "#D2CBB9"] },
    { family: "Earth Tones", hexes: ["#A9805F", "#946B4C", "#BE9370", "#8C6448", "#B28362", "#7C593E"] },
  ];

  const colours = [];
  let counter = 1;
  families.forEach(({ family, hexes }) => {
    hexes.forEach((hex) => {
      colours.push({
        name: `${family.replace(" Tones", "")} ${String(counter).padStart(2, "0")}`,
        code: `KP-${String(counter).padStart(2, "0")}`,
        hex,
        family,
      });
      counter += 1;
    });
  });
  return colours;
}

export const COLOURS = buildColours();
