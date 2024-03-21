import React from "react";
import { Modal } from "./modal";
const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  return <Modal>{photoId}</Modal>;
};

export default PhotoModal;
