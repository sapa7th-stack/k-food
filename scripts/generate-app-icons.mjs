import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const outputDir = new URL("../public/icons/", import.meta.url);
await mkdir(outputDir, { recursive: true });

function iconSvg(size, maskable = false) {
  const radius = maskable ? 0 : Math.round(size * 0.23);
  const fontSize = Math.round(size * (maskable ? 0.48 : 0.58));
  const y = Math.round(size * 0.68);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${radius}" fill="#dc2626"/>
    <text x="50%" y="${y}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="900" fill="#ffffff">K</text>
  </svg>`);
}

await Promise.all([
  sharp(iconSvg(192)).png().toFile(fileURLToPath(new URL("icon-192.png", outputDir))),
  sharp(iconSvg(512)).png().toFile(fileURLToPath(new URL("icon-512.png", outputDir))),
  sharp(iconSvg(512, true)).png().toFile(fileURLToPath(new URL("icon-maskable-512.png", outputDir))),
  sharp(iconSvg(180)).png().toFile(fileURLToPath(new URL("apple-touch-icon.png", outputDir))),
]);

console.log("Generated K-Food Table app icons in public/icons");
