import React, { useState } from 'react';
import { SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import { notifyOptions } from 'utils/notify';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return toast.info('Please enter key words for search', notifyOptions);
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormBtn>
        <HiMagnifyingGlass size="20" />
      </SearchFormBtn>
      <SearchFormInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleChange}
      />
    </SearchForm>
  );
};

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
