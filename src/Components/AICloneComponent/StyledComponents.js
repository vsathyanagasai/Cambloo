import styled from 'styled-components';

export const MainContainer = styled.div`
  text-align: center;
  padding: 10px;
  font-family: Arial, sans-serif;
  margin-top: 400px;
  position: relative;
  z-index: 10;

  &.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const AIImage = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 10px;
  border: 2px solid #d0d7de;
  align-items: center;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-left: 205px;
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  text-align: left;
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
  white-space: pre-line;
`;

export const TrainButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  align-self: flex-start;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
