class ImageService {
  public revokeUrl(url: string) {
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    URL.revokeObjectURL(url);
  }
}
export const imageService = new ImageService();
