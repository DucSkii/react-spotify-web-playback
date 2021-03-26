import * as React from 'react';
import { styled } from '../../styles';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const Wrapper = styled('div')({
  color: 'rgb(158, 158, 158)',
  cursor: 'pointer',
  '&:hover': {
    color: 'white',
  },
});

function Previous() {
  return (
    <Wrapper style={{}}>
      <SkipPreviousIcon fontSize="small" />
    </Wrapper>
  );
}

export default Previous;
