import { useEffect, useState } from "react";
// components
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal";
// services
import { fetchPhotos } from "../services/pixabay-api";
// styled
import { Container, Picture } from "./App.styled";
// types
import { IPhotoHits, ICurrentImage } from "./App.types";

export const App = () => {
  const [search, setSearch] = useState<string>("");
  const [photos, setPhotos] = useState<IPhotoHits[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState<ICurrentImage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  useEffect(() => {
    if (search === "") {
      return;
    }
    setIsLoading(true);
    setIsButtonActive(false);

    fetchPhotos(search, activePage)
      .then(({ hits, total, totalHits }) => {
        if (hits.length === 0 && total === 0) {
          setPhotos(hits);
          setIsLoading(false);
          setError("We didn't find anything. Try again");
          return;
        }

        setPhotos((prev) => [...prev, ...hits]);
        setIsLoading(false);

        if (total !== photos.length + totalHits) {
          setIsButtonActive(true);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [search, activePage]);

  const handleSubmitForm = (searchParam: string): void => {
    setActivePage(1);
    setPhotos([]);
    setError(null);
    setSearch(searchParam);
  };

  const openModal = (data: ICurrentImage): void => {
    setCurrentImage(data);
  };

  const closeModal = (): void => {
    setCurrentImage(null);
  };

  const setCurrentPage = (): void => {
    setActivePage((prev) => prev + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmitForm} />
      <ImageGallery
        isButtonActive={isButtonActive}
        isLoading={isLoading}
        error={error}
        photos={photos}
        setCurrentPage={setCurrentPage}
        onOpenleModal={openModal}
      />
      {currentImage && (
        <Modal closeModal={closeModal}>
          <Picture src={currentImage.largeImageURL} alt={currentImage.tags} />
        </Modal>
      )}
    </Container>
  );
};
