// Image mapping for local background images
export const imageMapping = {
  "cherry-blossom": "/images/cherry-blossom.jpg",
  "image1": "/images/cherry-blossom.jpg",
  // Add more images here as needed
  // "image2": "/images/another-image.jpg",
};

export function getImageUrl(imageName) {
  if (imageName.startsWith('http')) {
    // If it's already a full URL, return as is
    return imageName;
  }
  
  // If it's a local image name, return the mapped path
  return imageMapping[imageName] || imageName;
}
