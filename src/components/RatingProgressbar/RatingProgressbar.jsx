import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { CircleRating } from './RatingProgressbar.styled';

export const RatingProgressbar = ({ rating }) => {
  return (
    <CircularProgressbar
      value={rating}
      maxValue={10}
      text={rating}
      background
      backgroundPadding={6}
      /*  styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orangered' : 'green',
          position: 'absolute',
          height: '100%',
          width: '100%',
          textSize: '44px',
          fontWeight: '700',
          strokeLinecap: 'butt',
          transition: 'stroke-dashoffset 0.5s ease 0s',
          transform: 'rotate(0.25turn)',
          transformOrigin: 'center center',
          pathTransitionDuration: 0.5,
          textColor: '#fd5523',
          trailColor: '#d6d6d6',
          backgroundColor: 'rgba(185, 228, 201, 0.773)',
        })} */
      styles={{
        // Customize the root svg element
        root: {
          position: 'absolute',
          bottom: '18px',
          left: '10px',
          width: '44px',
          height: '44px',
        },
        // Customize the path, i.e. the "completed progress"
        path: {
          stroke: rating < 5 ? 'red' : rating < 7 ? 'orangered' : 'green',
          strokeLinecap: 'butt',
          transition: 'stroke-dashoffset 0.5s ease 0s',
          transform: 'rotate(2turn)',
          transformOrigin: 'center center',
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          stroke: '#fff',
          strokeLinecap: 'butt',
          transform: 'rotate(2.5turn)',
          transformOrigin: 'center center',
        },
        // Customize the text
        text: {
          fill: '#fd5523',
          fontSize: '44px',
        },
        // Customize background - only used when the `background` prop is true
        background: {
          fill: 'rgba(185, 228, 201, 0.773)',
        },
      }}
    />
  );
};
