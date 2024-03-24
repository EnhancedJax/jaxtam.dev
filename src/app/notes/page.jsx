import Content from "@comp/[notes]content";
import { getNotes } from "@src/lib";

export default async function Notes() {
    const notes = (await getNotes()) || [];
    return (
        <Content notes={notes}/>
    )
}