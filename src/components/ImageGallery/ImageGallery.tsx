import { Bars } from "react-loader-spinner";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { Button } from "../Button";
// styled
import { List, TextError, ButtonWrapper } from "./ImageGallery.styled";
// types
import { IImageGalleryProps } from "./ImageGallery.types";

export const ImageGallery: React.FC<IImageGalleryProps> = ({
  isButtonActive,
  isLoading,
  error,
  photos,
  setCurrentPage,
  onOpenleModal,
}) => {
  const loader = (
    <Bars
      height="80"
      width="80"
      color="#4253b0"
      ariaLabel="bars-loading"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      visible={true}
    />
  );

  return (
    <>
      {error && <TextError>{error}</TextError>}

      <List>
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            setCurrentImage={onOpenleModal}
          />
        ))}
      </List>

      {isLoading && loader}

      {isButtonActive && (
        <ButtonWrapper>
          <Button onHandleClickButtonLoad={setCurrentPage} />
        </ButtonWrapper>
      )}
    </>
  );
};
