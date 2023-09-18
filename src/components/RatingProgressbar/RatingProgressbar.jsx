import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const RatingProgressbar = ({ rating }) => {
  return (
    <CircularProgressbar
      value={rating}
      maxValue={10}
      text={rating}
      background
      backgroundPadding={6}
      styles={buildStyles({
        pathColor: rating < 5 ? 'red' : rating < 7 ? 'orangered' : 'green',
        height: '100%',
        width: '100%',
        textSize: '38px',
        fontWeight: '700',
        strokeLinecap: 'butt',
        transition: 'stroke-dashoffset 0.5s ease 0s',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
        pathTransitionDuration: 0.5,
        textColor: 'rgb(255, 0, 0)',
        trailColor: '#fff',
        backgroundColor: '#fff'
      })}
    />
  );
};

RatingProgressbar.propTypes = {
  rating: PropTypes.string
};
