import styled from 'styled-components';

export const FloatingLabel = styled.span`
  color: #8e8e8e;
  color: rgba(var(--f52,142,142,142),1);
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-transition: -webkit-transform ease-out .1s;
  transition: -webkit-transform ease-out .1s;
  transition: transform ease-out .1s;
  transition: transform ease-out .1s,-webkit-transform ease-out .1s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
`;

export const FloatingLabelInputContainer = styled.div`
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-appearance: none;
  background: #fafafa;
  background: rgba(var(--b3f,250,250,250),1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: 14px;
  position: relative;
  width: 100%;
`;

export const FloatingLabelInputSpacingContainer = styled.div`
  margin: 0 40px 6px; 
`;