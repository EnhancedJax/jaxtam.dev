// import OptViewLayout from "../../../components/OptViewLayout";
// import OptViewPanel from "../../../components/OptViewPanel";
// import PageWrapper from "../../../components/PageWrapper";
// import { getNotes } from "../../../lib/";
// import Main from "../containers/Main";
// import NoteDisplay from "../containers/NoteDisplay";
// import NotesSelect from "../containers/NotesSelect";
// import { ContextProvider } from "../viewModel";

// export async function generateMetadata({ params }) {
//   const notes = await getNotes();
//   const note = notes.find(
//     (n) => n.node.code.toLowerCase() === params.slug.toLowerCase()
//   );

//   if (!note) {
//     return {
//       title: "Note Not Found",
//       description: "The requested course note could not be found.",
//     };
//   }

//   return {
//     title: `${note.node.code} - ${note.node.title} | University Course Notes`,
//     description: `Detailed notes for ${note.node.code}: ${note.node.title}. Part of the university course notes collection.`,
//   };
// }

// export async function generateStaticParams() {
//   const notes = await getNotes();
//   return notes.map((note) => ({
//     slug: note.node.code.toLowerCase(),
//   }));
// }

export default async function NotePage() {
  //   const notes = await getNotes();

  return (
    <></>
    //     <PageWrapper>
    //       <ContextProvider data={{ notes }}>
    //         <OptViewPanel>
    //           <div className="flex flex-col w-full gap-10">
    //             <Main />
    //             <NotesSelect />
    //           </div>
    //         </OptViewPanel>
    //         <OptViewLayout>
    //           <NoteDisplay />
    //         </OptViewLayout>
    //       </ContextProvider>
    //     </PageWrapper>
  );
}
