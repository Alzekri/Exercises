//------------------   1 Hello Word ---------------------------//
// export function hello(): string {
//   return "Hello, World!";
// }
// console.log(hello());

// -----------------  2 Two Fer ----------------------------------//
// export function twoFer(name?: string): string {
//   return !name ? `One for you, one for me.` : `One for ${name}, one for me.`;
// }
// console.log(twoFer(""));
// console.log(twoFer("Alice"));

//------------------   3 Resistor Color Duo -----------------------//
// const enum color_coded {
//   Black = 0,
//   Brown = 1,
//   Red = 2,
//   Orange = 3,
//   Yellow = 4,
//   Green = 5,
//   Blue = 6,
//   Violet = 7,
//   Grey = 8,
//   White = 9,
// }
// export function decodedValue(...colors: color_coded[]): string {
//   return `${colors[0]}${colors[1]}`;
// }
// console.log(
//   decodedValue(
//     color_coded.Brown,
//     color_coded.Green,
//     color_coded.Yellow,
//     color_coded.Black
//   )
// );

//------------------   3 Resistor Color Duo (Other solution)-----------------------//
// const colors: string[] = [
//   "Black",
//   "Brown",
//   "Red",
//   "Orange",
//   "Yellow",
//   "Green",
//   "Blue",
//   "Violet",
//   "Grey",
//   "White",
// ];
// function decodedValue(colors: string[], ...color: string[]): string {
//   let color1: Number = 0;
//   let color2: Number = 0;

//   for (let i = 0; i < colors.length; i++) {
//     if (color[0] == colors[i]) {
//       color1 = i;
//     } else if (color[1] == colors[i]) {
//       color2 = i;
//     }
//   }

//   return `${color1}${color2}`;
// }
// console.log(decodedValue(colors, "Brown", "Green", "Blue"));

//------------------   4 Resistor Color Trio -----------------------//
// const colors: string[] = [
//   "Black",
//   "Brown",
//   "Red",
//   "Orange",
//   "Yellow",
//   "Green",
//   "Blue",
//   "Violet",
//   "Grey",
//   "White",
// ];
// function decodedValue(colors: string[], ...color: string[]): string {
//   let color1: Number = 0;
//   let color2: Number = 0;
//   let zerro_account: string = "";

//   for (let i = 0; i < colors.length; i++) {
//     if (color[0] == colors[i]) {
//       color1 = i;
//       if (color[1] == colors[i]) {
//         color2 = i;
//       }
//     }
//     if (color[2] == colors[i]) {
//       if (i == 3) {
//         zerro_account = "kiloohms";
//       } else {
//         for (let j = 0; j < i; j++) {
//           zerro_account = `0${zerro_account}`;
//         }
//         zerro_account = `${zerro_account}ohms`;
//       }
//     }
//   }

//   return color1 === color2 ? `${color1}${color2}${zerro_account}` : `No Match`;
// }
// console.log(decodedValue(colors, "Red", "Red", "Orange"));
