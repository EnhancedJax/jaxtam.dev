import PageWrapper from "../../components/PageWrapper";
import RegularLayout from "../../components/RegularLayout";
import Content from "./containers/Content";

export const metadata = {
  title: "Stack",
  description: "The tools and technologies I use.",
};

export default function Stack() {
  return (
    <PageWrapper>
      <RegularLayout>
        <PageWrapper className="flex flex-col w-full gap-10">
          <Content />
        </PageWrapper>
      </RegularLayout>
    </PageWrapper>
  );
}
