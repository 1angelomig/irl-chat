import Header from "@/components/Header";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 0;
  z-index: 50;
  flex-shrink: 0;
`;

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: rgb(203 213 225);
  display: flex;
  flex-direction: column;
`;

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Page>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      {children}
    </Page>
  );
}
