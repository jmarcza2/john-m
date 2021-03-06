import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, Power3 } from 'gsap';
import isEqual from 'lodash/isEqual';

class Name extends Component {
  constructor(props) {
    super(props);

    const { text1, text2, open, fill1, fill2 } = this.props;
    this.fill1 = fill1;
    this.fill2 = fill2;
    this.texts = [];
    this.rects = [];

    this.state = {
      scales: [0, 0],
      gaps: [0, 0],
      open,
      close: !open,
      texts: [text1, text2],
    };

    const barWidth = 2.5;

    this.barWidth = Math.ceil((this.props.size * barWidth) / 100);

    this.timeline = null;
    this.isFirefox = typeof InstallTrigger !== 'undefined';
  }

  static propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
    size: PropTypes.number,
  };

  static getDerivedStateFromProps(
    { open, text1, text2 },
    { open: prevOpen, texts },
  ) {
    if (open !== prevOpen) return { open, close: false };
    if (!isEqual([text1, text2], texts)) return { texts: [text1, text2] };

    return null;
  }

  shouldComponentUpdate(nextProps, { open, texts, scales, close }) {
    return (
      open !== this.state.open ||
      close !== this.state.close ||
      !isEqual(this.state.scales, scales) ||
      !isEqual(this.state.texts, texts)
    );
  }

  componentDidMount() {
    this.recalculate();
  }

  componentDidUpdate(
    prevProps,
    { open: pOpen, close: wasClosed, scales: pScales, texts },
  ) {
    const { scales, close, open } = this.state;

    if (!isEqual(scales, pScales) || wasClosed) {
      if (this.timeline) this.timeline.kill();
      this.animate();
    }

    if (!isEqual(scales, pScales) || open !== pOpen) {
      if (open) this.timeline.play();
      else this.timeline.reverse();
    }

    if (!close && !isEqual(this.state.texts, texts)) this.recalculate();
  }

  recalculate = () => {
    const bboxs = this.texts.map(text => text.getBBox());

    const { scales, gaps } = this.getScalesAndGaps(bboxs);

    this.setState({ scales, gaps });
  };

  animate = () => {
    const { gaps } = this.state;
    const { scales } = this.state;
    const ease = Power3.easeOut;

    this.timeline = new TimelineMax({
      paused: true,
      onReverseComplete: this.handleRest,
    });

    this.timeline
      .fromTo(this.rects[1], 0.7, { scaleY: 0, y: 0 }, { scaleY: 1 })
      .fromTo(
        this.rects[1],
        0.7,
        { x: 0 },
        { x: this.props.size - this.barWidth },
      )
      .from(this.rects[2], 0.7, { scaleX: 0 }, '-=0.7')
      .to(this.rects[1], 0.7, { y: gaps[1] * 2, scaleY: 0 })
      .from(
        this.rects[0],
        0.7,
        { scaleX: 0, transformOrigin: 'right' },
        '-=0.7',
      )
      .fromTo(
        this.texts[0],
        0.7,
        {
          scale: scales[0],
          x: this.props.size / 2,
          y: (gaps[1] - gaps[0]) * 2 + this.barWidth,
          transformOrigin: 'center',
        },
        { y: gaps[1] * 2 + gaps[0] + this.barWidth, ease },
        '-=0.7',
      );
  };

  handleRest = () => {
    const { onComplete } = this.props;

    this.setState({ close: true });
    if (onComplete) onComplete(this.state.open);
  };

  getScalesAndGaps = bboxs =>
    bboxs.reduce(
      ({ scales, gaps }, { width = 0, height = 0 }) => {
        const scale = width ? (this.props.size * 0.9) / width : 1;
        const gap = (height * 0.75 * scale) / 2;

        return {
          scales: [...scales, scale],
          gaps: [...gaps, gap],
        };
      },
      { scales: [], gaps: [] },
    );

  render() {
    const { size, style } = this.props;
    const { texts, scales, gaps, close } = this.state;
    const height = Math.min((gaps[1] + gaps[0]) * 2 + 10, size);

    return (
      !close && (
        <svg width={size} height={height} style={style}>
          <defs>
            <clipPath id="clip1">
              <rect
                ref={el => (this.rects[2] = el)}
                width={size}
                height={gaps[1] * 2}
              />
            </clipPath>
            <clipPath id="clip2">
              <rect
                y={gaps[1] * 2 + this.barWidth}
                ref={el => (this.rects[3] = el)}
                width={size}
                height={gaps[0] * 2}
              />
            </clipPath>
          </defs>
          <g clipPath="url(#clip2)">
            <text
              id="text-1"
              ref={el => (this.texts[0] = el)}
              fill={this.fill1}
              fontWeight="bold"
              textAnchor="middle"
              alignmentBaseline="central" // vertical centering in firefox
              dominantBaseline="central"
            >
              {texts[0]}
            </text>
          </g>
          <g clipPath="url(#clip1)">
            {this.isFirefox && (
              <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
            )}
            <text
              id="text-2"
              ref={el => (this.texts[1] = el)}
              fill={this.fill1}
              alignmentBaseline="central"
              dominantBaseline="central" // vertical centering in firefox
              fontWeight="bold"
              textAnchor="middle"
              style={{
                transform: `translate(${size / 2}px, ${gaps[1]}px) scale(${
                  scales[1]
                })`,
              }}
            >
              {texts[1]}
            </text>
          </g>
          <rect
            ref={el => (this.rects[1] = el)}
            width={this.barWidth}
            height={gaps[1] * 2}
            fill={this.fill2}
          />
          <rect
            y={gaps[1] * 2}
            ref={el => (this.rects[0] = el)}
            width={size}
            height={this.barWidth}
            fill={this.fill2}
          />
        </svg>
      )
    );
  }
}

export default Name;
