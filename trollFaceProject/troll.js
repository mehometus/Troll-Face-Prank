let trollImages = [
 "https://bit.ly/3Ck6DTU",
  "https://bit.ly/3ozQCVk",
  "https://bit.ly/3omYDN6",
  "https://bit.ly/3osrfoi",
  "https://bit.ly/3qCPjax",
  "https://bit.ly/3CkRXE6",
];
const imgs = document.getElementsByTagName("img");
for (image of imgs) {
  const index = Math.floor(Math.random() * trollImages.length);
  image.src = trollImages[index];
}

// Replace images immediately when page loads
replaceImages();

// Keep replacing images every 2 seconds to catch new ones as you scroll
setInterval(replaceImages, 2000);
