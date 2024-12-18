export const getYoutubeVideoId = (url: string) => {
  const patterns = [
    /youtu\.be\/([^?]+)/, // youtu.be/xxxxx 형식
    /youtube\.com\/watch\?v=([^&]+)/, // youtube.com/watch?v=xxxxx 형식
    /youtube\.com\/embed\/([^?]+)/, // youtube.com/embed/xxxxx 형식
    /youtube\.com\/v\/([^?]+)/, // youtube.com/v/xxxxx 형식
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};
export const makeThumbnailUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/0.jpg`;
