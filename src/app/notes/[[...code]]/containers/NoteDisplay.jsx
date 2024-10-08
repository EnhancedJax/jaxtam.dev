"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { useContext } from "react";
import { PDF_WORKER_URL } from "../../../../utils/constants";
import { Context } from "../viewModel";

export default function NoteDisplay() {
  const { iframeUrl } = useContext(Context);

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;
  return (
    <Worker workerUrl={PDF_WORKER_URL}>
      <div className="relative w-full h-screen">
        <div className="absolute z-30 flex flex-col items-center px-2 py-4 mt-4 ml-4 rounded-full shadow-lg border-[1px] border-border bg-neutral-100 ">
          <Toolbar>
            {(ToolbarSlot) => {
              const {
                CurrentPageLabel,
                Download,
                EnterFullScreen,
                GoToNextPage,
                GoToPreviousPage,
                NumberOfPages,
                Print,
                ZoomIn,
                ZoomOut,
              } = ToolbarSlot;
              return (
                <>
                  <div>
                    <ZoomOut />
                  </div>
                  <div>
                    <ZoomIn />
                  </div>
                  <div>
                    <GoToPreviousPage />
                  </div>
                  <div className="text-black text-light">
                    <CurrentPageLabel />
                    <span className="text-[8px]">
                      /<NumberOfPages />
                    </span>
                  </div>
                  <div>
                    <GoToNextPage />
                  </div>
                  <div>
                    <EnterFullScreen />
                  </div>
                  <div>
                    <Download />
                  </div>
                  <div>
                    <Print />
                  </div>
                </>
              );
            }}
          </Toolbar>
        </div>
        <Viewer
          fileUrl={iframeUrl}
          plugins={[toolbarPluginInstance]}
          // initialPage={0}
        />
      </div>
    </Worker>
  );
}
