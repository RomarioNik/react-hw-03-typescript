import { ListItem, Image } from "./ImageGalleryItem.styled";
// types
import { IImageGalleryItemProps } from "./ImageGalleryItem.types";

export const ImageGalleryItem: React.FC<IImageGalleryItemProps> = ({
  webformatURL,
  largeImageURL,
  tags,
  setCurrentImage,
}) => {
  return (
    <ListItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => setCurrentImage({ largeImageURL, tags })}
      />
    </ListItem>
  );
};
