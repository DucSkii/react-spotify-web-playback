import * as React from 'react';
import { styled } from '../../styles';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const Wrapper = styled('div')({
  color: 'rgb(158, 158, 158)',
  cursor: 'pointer',
  '&:hover': {
    color: 'white',
  },
});

function Next() {
  return (
    <Wrapper style={{}}>
      <SkipNextIcon fontSize="small" />
    </Wrapper>
  );
}

export default Next;
