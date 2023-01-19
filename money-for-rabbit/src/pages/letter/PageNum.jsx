/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';
import common from '../../styles/common';

function PageNum({ pageNum, onClick, isCurrent }) {
  return (
    <PageNumStyled onClick={onClick} isCurrent={isCurrent}>
      <span>{pageNum}</span>
    </PageNumStyled>
  );
}

export default PageNum;

const PageNumStyled = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.isCurrent ? common.color.brown3 : '')};
  color: ${(props) => (props.isCurrent ? 'white' : common.color.brown3)};
  ${common.align.centerRow}

  span {
    position: relative;
    top: 2px;
  }
`;
