import * as React from 'react';
import { styled } from '../../styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Wrapper = styled('div')({
  width: '30px',
  height: '30px',
  borderRadius: '100px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: 'black',
  transition: 'all 0.2s',
});

function Play() {
  return (
    <Wrapper style={{}}>
      <PlayArrowIcon fontSize="small" />
    </Wrapper>
  );
}

export default Play;
