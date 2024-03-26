import Content from '@comp/[about]content'
import { getLatest3Work } from '@src/lib/index'

export default async function Home() {
  const works = (await getLatest3Work()) || [];
  return (
    <Content works={works} />
  );
}
