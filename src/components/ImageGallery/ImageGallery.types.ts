import { ICurrentImage, IPhotoHits } from "../App.types";

export interface IImageGalleryProps {
  isButtonActive: boolean;
  isLoading: boolean;
  error: string | null;
  photos: IPhotoHits[];
  setCurrentPage: () => void;
  onOpenleModal: (value: ICurrentImage) => void;
}
