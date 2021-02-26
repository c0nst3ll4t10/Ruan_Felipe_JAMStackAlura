/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const HeaderWrapper = styled.nav`
  background-color: ${({ theme }) => theme.palette.header.main.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 26px;
`;

HeaderWrapper.LeftSide = styled.div`
  color: ${({ theme }) => theme.palette.primary.main.color};
  ${breakpointsMedia({
    xs: {
      marginLeft: 10,
    },
    sm: {
      marginLeft: 25,
    },
    md: {
      marginLeft: 270,
    },
    lg: {
      marginLeft: 270,
    },
    xl: {
      marginLeft: 270,
    },
  })}
`;

HeaderWrapper.RightSide = styled.div`
  color: ${({ theme }) => theme.palette.primary.main.contrastText};
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    xs: {
      marginRight: 10,
    },
    sm: {
      marginRight: 25,
    },
    md: {
      marginRight: 270,
    },
    lg: {
      marginRight: 270,
    },
    xl: {
      marginRight: 270,
    },
  })}
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.main.contrastText};
    transition: 200ms ease-in-out;
    cursor: pointer;
    &:hover,
    &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.palette.primary.main.color};
    }
  }
`;