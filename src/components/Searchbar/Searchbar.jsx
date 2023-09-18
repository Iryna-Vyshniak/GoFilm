import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import { Icon, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled';

export const Searchbar = ({ value, onChange }) => {
  const { t } = useTranslation();
  return (
    <SearchForm>
      <SearchFormInput
        type="text"
        value={value}
        debounceTimeout={500}
        onChange={onChange}
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
  t: PropTypes.any.isRequired
};
