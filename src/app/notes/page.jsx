import OptViewLayout from "../../components/OptViewLayout";
import OptViewPanel from "../../components/OptViewPanel";
import StaggerWrapper from "../../components/StaggerWrapper";
import { getNotes } from "../../lib/";
import Head from "./containers/Head";
import NoteDisplay from "./containers/NoteDisplay";
import NotesSelect from "./containers/NotesSelect";
import { ContextProvider } from "./viewModel";

export const dynamic = "force-dynamic";

export default async function Notes() {
  const notes = (await getNotes()) || [];
  return (
    <ContextProvider data={{ notes }}>
      <OptViewPanel>
        <StaggerWrapper className="flex flex-col w-full gap-10">
          <Head />
          <NotesSelect />
        </StaggerWrapper>
      </OptViewPanel>
      <OptViewLayout>
        <NoteDisplay />
      </OptViewLayout>
    </ContextProvider>
  );
}
