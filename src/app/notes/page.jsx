import OptViewLayout from "../../components/OptViewLayout";
import OptViewPanel from "../../components/OptViewPanel";
import PageWrapper from "../../components/PageWrapper";
import { getNotes } from "../../lib/";
import Main from "./containers/Main";
import NoteDisplay from "./containers/NoteDisplay";
import NotesSelect from "./containers/NotesSelect";
import { ContextProvider } from "./viewModel";

export const metadata = {
  title: "Typed Notes",
  description: "A collection of my typed notes.",
};

export const dynamic = "force-dynamic";

export default async function Notes() {
  const notes = (await getNotes()) || [];
  return (
    <PageWrapper>
      <ContextProvider data={{ notes }}>
        <OptViewPanel>
          <div className="flex flex-col w-full gap-10">
            <Main />
            <NotesSelect />
          </div>
        </OptViewPanel>
        <OptViewLayout>
          <NoteDisplay />
        </OptViewLayout>
      </ContextProvider>
    </PageWrapper>
  );
}
