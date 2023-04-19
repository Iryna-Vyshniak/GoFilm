import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircleRating } from './RatingProgressbar.styled';

export const RatingProgressbar = ({ rating }) => {
  return (
    <CircleRating>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        background
        backgroundPadding={6}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orangered' : 'green',
          position: 'absolute',
          height: '100%',
          width: '100%',
          textSize: '44px',
          fontWeight: '700',
          pathTransitionDuration: 0.5,
          textColor: '#fd5523',
          trailColor: '#d6d6d6',
          backgroundColor: 'rgba(185, 228, 201, 0.773)',
        })}
      />
    </CircleRating>
  );
};
