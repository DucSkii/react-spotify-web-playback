import * as React from 'react';
import { px, styled } from '../styles';
// import RangeSlider, { RangeSliderPosition } from '@gilbarbara/react-range-slider';

import { StylesOptions, StyledProps } from '../types/common';

// import ClickOutside from './ClickOutside';

import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import Slider from '@material-ui/core/Slider';

interface Props {
  playerPosition: string;
  setVolume: (volume: number) => any;
  styles: StylesOptions;
  volume: number;
}

interface State {
  isOpen: boolean;
  volume: number;
}

const Wrapper = styled('div')(
  {
    'pointer-events': 'all',
    position: 'relative',
    zIndex: 20,

    '> div': {
      display: 'flex',
      // flexDirection: 'column',
      padding: px(12),
      position: 'absolute',
      right: `-${px(3)}`,
    },

    '> button': {
      fontSize: px(26),
    },

    '@media (max-width: 1023px)': {
      display: 'none',
    },
  },
  ({ style }: StyledProps) => ({
    '> button': {
      color: style.c,
    },
    '> div': {
      backgroundColor: style.bgColor,
      boxShadow: style.altColor ? `1px 1px 10px ${style.altColor}` : 'none',
      [style.p]: '120%',
    },
  }),
  'VolumeRSWP',
);

export default class Volume extends React.PureComponent<Props, State> {
  private timeout: number | undefined;

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      volume: props.volume,
    };
  }

  public componentDidUpdate(prevProps: Props) {
    const { volume: volumeState } = this.state;
    const { volume } = this.props;

    if (prevProps.volume !== volume && volume !== volumeState) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ volume });
    }
  }

  // private handleClick = () => {
  //   this.setState((state) => ({ isOpen: !state.isOpen }));
  // };

  private handleChangeSlider = (newValue: any) => {
    const { setVolume } = this.props;
    const volume = Math.round(newValue) / 100;

    clearTimeout(this.timeout);

    this.timeout = window.setTimeout(() => {
      setVolume(volume);
    }, 250);

    this.setState({ volume });
  };

  // private handleAfterEnd = () => {
  //   setTimeout(() => {
  //     this.setState({ isOpen: false });
  //   }, 100);
  // };

  public render() {
    const { volume } = this.state;
    const {
      playerPosition,
      styles: { altColor, bgColor, color },
    } = this.props;
    let icon = (
      <VolumeUpOutlinedIcon
        style={{ color: 'rgb(158, 158, 158)', marginBottom: '3px', marginRight: '3px' }}
      />
    );

    if (volume === 0) {
      icon = (
        <VolumeOffOutlinedIcon
          style={{ color: 'rgb(158, 158, 158)', marginBottom: '3px', marginRight: '3px' }}
        />
      );
    } else if (volume <= 0.5) {
      icon = (
        <VolumeDownOutlinedIcon
          style={{ color: 'rgb(158, 158, 158)', marginBottom: '3px', marginRight: '3px' }}
        />
      );
    }

    return (
      <Wrapper style={{ altColor, bgColor, c: color, p: playerPosition }}>
        {/* {isOpen && (
          <ClickOutside onClick={this.handleClick}>
            <RangeSlider
              axis="y"
              className="rrs"
              styles={{
                options: {
                  thumbBorder: `2px solid ${color}`,
                  thumbBorderRadius: 12,
                  thumbColor: bgColor,
                  thumbSize: 12,
                  padding: 0,
                  rangeColor: altColor || '#ccc',
                  trackColor: color,
                  width: 6,
                },
              }}
              onAfterEnd={this.handleAfterEnd}
              onChange={this.handleChangeSlider}
              y={volume * 100}
              yMin={0}
              yMax={100}
            />
          </ClickOutside>
        )} */}
        <button type="button">{icon}</button>
        <Slider
          value={volume * 100}
          onChange={(_event, val) => this.handleChangeSlider(val)}
          style={{ color: 'rgb(158, 158, 158)', width: '120px' }}
        />
      </Wrapper>
    );
  }
}
