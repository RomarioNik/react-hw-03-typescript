import { ICurrentImage } from "../App.types";

export interface IImageGalleryItemProps {
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  setCurrentImage: (value: ICurrentImage) => void;
}
