import { mkdir, readFile, writeFile } from "node:fs/promises";

const source = JSON.parse(await readFile(new URL("../storage-staging/generated/candidate-source.db.json", import.meta.url), "utf8"));
const outputDirectory = new URL("../storage-staging/original-images/", import.meta.url);
await mkdir(outputDirectory, { recursive: true });

let cursor = 0;
let downloaded = 0;

async function worker() {
  while (cursor < source.length) {
    const row = source[cursor++];
    const output = new URL(row.image_original_path, outputDirectory);
    if (row.image_original_url.startsWith("/images/")) continue;

    const url = row.image_original_url.replace(/^http:/, "https:");
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`${row.source_id}: HTTP ${response.status}`);
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) throw new Error(`${row.source_id}: ${contentType}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (bytes.length < 1000 || bytes.length > 50 * 1024 * 1024) throw new Error(`${row.source_id}: invalid size ${bytes.length}`);
    await writeFile(output, bytes);
    downloaded += 1;
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));
console.log(`Images ready: ${source.length}; downloaded: ${downloaded}; local approved: ${source.length - downloaded}.`);
