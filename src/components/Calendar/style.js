import styled from "styled-components";
import {
  veryLightBlue,
  brightBlue,
  darkishBlue,
  white,
} from "../../styles/colors";
import { Roboto } from "../../styles/fonts";

export const Container = styled.div`
  width: 392px;
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 53, 124, 0.25);
  border: solid 2px ${darkishBlue};
  background-color: ${white};
  position: absolute;
  top: 46px;
  left: -2px;
  box-sizing: border-box;
  transition: all ease 0.3s;
  overflow: hidden;
  max-height: ${({ open }) => (open ? "500px" : 0)};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

export const Header = styled.div`
  font-family: ${Roboto};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${darkishBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 53, 124, 0.25);
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 58px;
  width: 42px;
  border-right: ${({ prev }) =>
    prev ? " solid 1px rgba(0, 53, 124, 0.25)" : "none"};
  border-left: ${({ next }) =>
    next ? " solid 1px rgba(0, 53, 124, 0.25)" : "none"};
`;

export const WeekDays = styled.div`
  display: flex;
  border-bottom: solid 1px rgba(0, 53, 124, 0.25);
  padding: 16px 0;
`;

export const WeekDay = styled.span`
  font-family: ${Roboto};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  color: ${darkishBlue};
  flex: 1 1 14.28%;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  border-bottom: solid 1px rgba(0, 53, 124, 0.25);
  padding: 8px 0;
`;

export const Day = styled.div`
  flex: 0 1 14.28%;
`;

export const Bubble = styled.span`
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  font-family: ${Roboto};
  font-size: 12px;
  line-height: 32px;
  width: 32px;
  text-align: center;
  font-weight: ${({ current, selected }) => (current || selected ? 700 : 400)};
  color: ${({ selected }) => (selected ? white : darkishBlue)};
  background: ${({ selected }) => (selected ? brightBlue : white)};

  &:hover {
    background: ${({ selected }) => (selected ? brightBlue : veryLightBlue)};
    font-weight: 700;
  }
`;
