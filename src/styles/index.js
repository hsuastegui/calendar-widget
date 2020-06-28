import styled from "styled-components";
import { brightBlue, darkishBlue, powderBlue, white } from "./colors";

export const Container = styled.div`
  border-radius: 4px;
  border: solid 2px ${darkishBlue};
  background-color: ${white};
  padding: 46px 136px 46px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: ${darkishBlue};
  margin-bottom: 4px;
  margin-top: 0;
`;

export const Subtitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${darkishBlue};
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${brightBlue};
  text-shadow: 1px 1px 1px rgba(0, 28, 64, 0.25);
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${white};
  width: 99px;
  height: 48px;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  background-color: ${powderBlue};
  border: none;
  height: 44px;
  width: 40px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  border-left: 2px solid ${darkishBlue};
`;

export const Input = styled.div`
  width: 245px;
  border-radius: 4px;
  border: solid 2px ${darkishBlue};
  background-color: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  margin-right: 18px;
  position: relative;
`;

export const InpuText = styled.span`
  opacity: 0.5;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 44px;
  color: ${darkishBlue};
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
`;
