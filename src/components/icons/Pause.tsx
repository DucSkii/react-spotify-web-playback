import * as React from 'react';
import { styled } from '../../styles';
import PauseIcon from '@material-ui/icons/Pause';

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
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

function Pause() {
  return (
    <Wrapper style={{}}>
      <PauseIcon fontSize="small" />
    </Wrapper>
  );
}

export default Pause;
