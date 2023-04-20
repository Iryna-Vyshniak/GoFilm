//import React, { useState } from 'react';
import {
  Icon,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
// import { toast } from 'react-toastify';
// import { notifyOptions } from 'utils/notify';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  // const [value, setValue] = useState('');

  // const handleChange = ({ target: { value } }) => {
  //   setValue(value.toLowerCase());
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (value.trim() === '') {
  //     return toast.info('Please enter key words for search', notifyOptions);
  //   }
  //   onSubmit(value);
  //   setValue('');
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    onSubmit(query.value);
    e.target.reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormBtn type="submit">
        <Icon size="24" />
      </SearchFormBtn>
      <SearchFormInput
        type="text"
        autoFocus
        placeholder="Search movies..."
        name="query"
      />
    </SearchForm>
  );
};

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
