import styled from "@emotion/styled";

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default function Layout(props: any) {
  return (
    <Wrapper>
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
