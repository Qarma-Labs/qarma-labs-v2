import {
  copyFileSync,
  cpSync,
  existsSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const entry = join(dist, "index.html");
const assets = join(dist, "assets");

if (!existsSync(entry) || !existsSync(assets)) {
  throw new Error(
    "Run the Vite production build before syncing GitHub Pages files.",
  );
}

// Manage only generated output; never delete or overwrite editable source.
copyFileSync(entry, join(root, "index.html"));
rmSync(join(root, "assets"), { recursive: true, force: true });
cpSync(assets, join(root, "assets"), { recursive: true });
writeFileSync(join(root, ".nojekyll"), "\n");
writeFileSync(join(dist, ".nojekyll"), "\n");

console.log(
  "Synced the production build to index.html, assets/ and .nojekyll.",
);
