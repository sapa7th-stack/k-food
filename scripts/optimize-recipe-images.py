import json
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parent.parent
records = json.loads((root / "storage-staging/generated/candidate-source.db.json").read_text(encoding="utf-8"))
source_dir = root / "storage-staging/original-images"
output_dir = root / "storage-staging/upload-images"
output_dir.mkdir(parents=True, exist_ok=True)

for record in records:
    source = source_dir / record["image_original_path"]
    destination = output_dir / record["image_path"]
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=84, method=6)

print(f"Optimized {len(records)} images as WebP.")
