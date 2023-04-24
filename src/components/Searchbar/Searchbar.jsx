//import React, { useState } from 'react';
import {
  Icon,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import { notifyOptions } from 'utils/notify';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    if (query.value.trim() === '') {
      return toast.info('Please enter key words for search', notifyOptions);
    }
    onSubmit(query.value);
    e.target.reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoFocus
        placeholder="Search movies..."
        name="query"
      />
      <SearchFormBtn type="submit">
        <Icon size="24" />
      </SearchFormBtn>
    </SearchForm>
  );
};

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
