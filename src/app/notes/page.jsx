import Content from "../../components/[notes]content";
import { getNotes } from "../../lib";

export default async function Notes() {
    const notes = (await getNotes()) || [];
    return (
        <Content notes={notes}/>
    )
}