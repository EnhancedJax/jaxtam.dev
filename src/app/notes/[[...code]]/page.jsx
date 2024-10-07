import PageWrapper from "../../../components/PageWrapper";
import SidebarLayout from "../../../components/SidebarLayout";
import SidebarPanel from "../../../components/SidebarPanel";
import { getNoteDetails, getNotes } from "../../../lib";
import Main from "./containers/Main";
import NoteDisplay from "./containers/NoteDisplay";
import NotesSelect from "./containers/NotesSelect";
import { ContextProvider } from "./viewModel";

export const generateMetadata = async ({ params: { code } }) => {
  const defaultMetadata = {
    title: "HKU Notes",
    description: "Jax Tam's notes for HKU courses.",
  };
  const noteCode = code?.[0];

  if (!noteCode) return defaultMetadata;

  const noteDetails = await getNoteDetails(noteCode);

  if (!noteDetails) {
    return defaultMetadata;
  } else {
    return {
      title: `${noteDetails.title} - ${noteDetails.code} - HKU`,
      description: `HKU notes for ${noteDetails.code} - ${noteDetails.title} by Jax Tam, with important concepts and composed in a logical manner.`,
    };
  }
};

export default async function Notes({ params: { code } }) {
  const notes = (await getNotes()) || [];
  const slugCode = code?.[0];
  const noteDetails = slugCode ? await getNoteDetails(slugCode) : null;

  return (
    <PageWrapper>
      <ContextProvider data={{ notes, slugCode }}>
        <SidebarPanel title="HKU Notes">
          <div className="flex flex-col w-full gap-10">
            <Main noteDetails={noteDetails} />
            <NotesSelect />
          </div>
        </SidebarPanel>
        <SidebarLayout>
          <NoteDisplay />
        </SidebarLayout>
      </ContextProvider>
    </PageWrapper>
  );
}
