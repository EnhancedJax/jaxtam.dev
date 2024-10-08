"use client";

import { Forward } from "lucide-react";
import { useContext } from "react";
import FAB from "../../../../components/FAB";
import { useAppContext } from "../../../provider";
import { Context } from "../viewModel";

export default function ActionButton() {
  const { newAlert } = useAppContext();
  const { selectedNote } = useContext(Context);

  const handleShare = () => {
    if (!selectedNote) return;
    const {
      code,
      title,
      pdf: { url },
    } = selectedNote;
    // Fetch the PDF file
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a File object from the blob
        const file = new File([blob], `${code} Notes by Jax.pdf`, {
          type: "application/pdf",
        });

        // Check if the Web Share API is supported
        if (navigator.share) {
          navigator
            .share({
              title: `${code} Notes by Jax`,
              text: `Check out these notes for ${title}!`,
              files: [file],
            })
            .catch((error) => {
              if (error.name === "AbortError") {
                newAlert({
                  text: "Sharing cancelled",
                  type: "info",
                });
              } else {
                newAlert({
                  text: "Error sharing!",
                  type: "warning",
                  message: error.message,
                });
              }
            });
        } else {
          newAlert({
            text: "Link copied to clipboard!",
            type: "success",
          });
          navigator.clipboard.writeText(`https://jaxtam.dev/notes/${code}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching the PDF:", error);
      });
  };

  return (
    <FAB tooltip="Share with others!" onClick={handleShare}>
      {/* <span className="mr text-[28px]">📲</span> */}
      <Forward size="32" strokeWidth={2} className="mb-1" />
    </FAB>
  );
}
