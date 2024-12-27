import styled from 'styled-components';

// Outer Container
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  margin-top: 20px;
`;

// Individual Section
export const Section = styled.div`
  display: flex;
  width: 1000px;
  height: 450px;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  ${({ reverse }) => reverse && `
    flex-direction: row-reverse;
  `}
`;

// Image Container
export const ImageContainer = styled.div`
  flex: 1;
  height: 75%;
  width: 75%;
  border-radius: 30px;
  overflow: hidden;
  margin-left: 40px;
  margin-right: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Content Container
export const ContentContainer = styled.div`
  flex: 1;
  height: 75%;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 30px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
`;

// Title
export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 2.5em;
  color: #041d34;
  margin: 0;
  line-height: 1;
`;

// Description
export const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #515e71;
  line-height: 1;
`;

export const CtaText = styled.span`
  font-weight: bold;
  color: #041d34;
  margin-top: 10px;
`;
