import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useTranslation } from 'react-i18next';

const animatedComponents = makeAnimated();

export const GenresSelect = ({ onSelect, genres, isLoading }) => {
  const { t } = useTranslation();

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontSize: '14px',
      color: state.isSelected ? '#212529' : '#fd5523',
      background: state.isSelected
        ? 'linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%)'
        : '#FFFBE6'
    }),

    control: defaultStyles => ({
      ...defaultStyles,
      background: 'linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%)',
      border: 'none',
      boxShadow: 'none'
    }),
    singleValue: defaultStyles => ({
      ...defaultStyles,
      color: '#FFF',
      background: 'linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%)',
      borderRadius: '30px',
      maxWidth: '45%',
      padding: '5px 10px',
      marginLeft: '30px'
    })
  };

  const options = genres?.map(genre => ({
    value: genre.id,
    label: genre.name
  }));

  return (
    <>
      <Select
        options={options}
        isLoading={isLoading}
        onChange={option => (!option ? '' : onSelect(option.value))}
        placeholder={t('moviesPage.placeholder_genres')}
        components={animatedComponents}
        isClearable={true}
        styles={customStyles}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </>
  );
};

GenresSelect.propTypes = {
  genres: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};
