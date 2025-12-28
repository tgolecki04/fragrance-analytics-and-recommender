import requests
from bs4 import BeautifulSoup
import os

BASE_URL = "https://example.com/perfumes"
SAVE_DIR = "images"

os.makedirs(SAVE_DIR, exist_ok=True)

response = requests.get(BASE_URL, headers={
    "User-Agent": "Mozilla/5.0"
})

soup = BeautifulSoup(response.text, "html.parser")

images = soup.select("img")

for img in images:
    src = img.get("src")

    if not src or not src.startswith("http"):
        continue

    filename = src.split("/")[-1]
    filepath = os.path.join(SAVE_DIR, filename)

    img_data = requests.get(src).content

    with open(filepath, "wb") as f:
        f.write(img_data)

    print(f"Pobrano: {filename}")
