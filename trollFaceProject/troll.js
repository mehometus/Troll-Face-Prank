let trollImages = [
  "https://imgur.com/a/B8KcSwL",
  "https://imgur.com/a/IfNvrFT",
  "https://imgur.com/a/cZNA1J6",
  "https://imgur.com/a/7dTjHnV",
  "https://imgur.com/a/niNqIRa",
  "https://imgur.com/a/psum6xU",
];
const imgs = document.getElementsByTagName("img");
for (image of imgs) {
  const index = Math.floor(Math.random() * trollImages.length);
  image.src = trollImages[index];
}