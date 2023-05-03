import {
  Icon,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

import PropTypes from 'prop-types';

export const Searchbar = ({ value, onChange, t }) => {
  return (
    <SearchForm>
      <SearchFormInput
        type="text"
        value={value}
        debounceTimeout={500}
        onChange={onChange}
        autoFocus
        placeholder={t('moviesPage.placeholder_search')}
      />
      <SearchFormBtn type="submit">
        <Icon size="24" />
      </SearchFormBtn>
    </SearchForm>
  );
};

Searchbar.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.any.isRequired,
};
