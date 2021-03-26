import * as React from 'react';
import RangeSlider, { RangeSliderPosition } from '@gilbarbara/react-range-slider';
import { px, styled } from '../styles';
import { StyledProps, StylesOptions } from '../types/common';

interface Props {
  isMagnified: boolean;
  onToggleMagnify: () => void;
  onChangeRange: (position: number) => void;
  position: number;
  styles: StylesOptions;
  duration: number;
  progress: number;
}

const Wrapper = styled('div')(
  {
    display: 'flex',
    position: 'fixed',
    bottom: '20px',
    transition: 'height 0.3s',
    zIndex: 10,
    width: '100%',
    justifyContent: 'center',
    padding: '0px 33.3333%',
    alignItems: 'center',
  },
  ({ style }: StyledProps) => ({
    height: px(style.sliderHeight),
  }),
  'SliderRSWP',
);

export default class Slider extends React.PureComponent<Props> {
  private handleChangeRange = async ({ x }: RangeSliderPosition) => {
    const { onChangeRange } = this.props;

    onChangeRange(x);
  };

  private millisecondsToMinutes = (ms: number) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return Number(seconds) === 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (Number(seconds) < 10 ? '0' : '') + Number(seconds);
  };

  public render() {
    const { isMagnified, onToggleMagnify, position, styles } = this.props;
    const handleSize = styles.sliderHeight + 6;
    //33.3333%
    return (
      <Wrapper
        onMouseEnter={onToggleMagnify}
        onMouseLeave={onToggleMagnify}
        style={{ sliderHeight: isMagnified ? styles.sliderHeight! + 4 : styles.sliderHeight }}
      >
        <p
          style={{
            color: 'rgb(81, 81, 81)',
            marginRight: '5px',
            fontSize: '12px',
            userSelect: 'none',
          }}
        >
          {this.millisecondsToMinutes(this.props.progress)}
        </p>
        <RangeSlider
          axis="x"
          onChange={this.handleChangeRange}
          styles={{
            options: {
              thumbBorder: 0,
              thumbBorderRadius: styles.sliderHandleBorderRadius,
              thumbColor: styles.sliderHandleColor,
              thumbSize: isMagnified ? handleSize + 4 : handleSize,
              height: isMagnified ? styles.sliderHeight! + 4 : styles.sliderHeight,
              padding: 0,
              rangeColor: styles.sliderColor,
              trackBorderRadius: styles.sliderTrackBorderRadius,
              trackColor: styles.sliderTrackColor,
            },
          }}
          x={position}
          xMin={0}
          xMax={100}
          xStep={0.1}
        />
        <p
          style={{
            color: 'rgb(81, 81, 81)',
            marginLeft: '5px',
            fontSize: '12px',
            userSelect: 'none',
          }}
        >
          {this.millisecondsToMinutes(this.props.duration)}
        </p>
      </Wrapper>
    );
  }
}
