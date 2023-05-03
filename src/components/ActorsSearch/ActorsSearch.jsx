import {
  Icon,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './ActorsSearch.styled';

import PropTypes from 'prop-types';

export const ActorsSearch = ({ value, onChange, t }) => {
  return (
    <SearchForm>
      <SearchFormInput
        type="text"
        value={value}
        debounceTimeout={500}
        onChange={onChange}
        autoFocus
        placeholder={t('actorsPage.placeholder_search')}
      />
      <SearchFormBtn type="submit">
        <Icon size="24" />
      </SearchFormBtn>
    </SearchForm>
  );
};

ActorsSearch.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.any.isRequired,
};
