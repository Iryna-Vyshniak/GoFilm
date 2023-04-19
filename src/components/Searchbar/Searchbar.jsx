//import React, { useState } from 'react';
import { Icon, SearchFormInput, Wrapper } from './Searchbar.styled';
// import { toast } from 'react-toastify';
// import { notifyOptions } from 'utils/notify';
import PropTypes from 'prop-types';

export const Searchbar = ({ value, onChange }) => {
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

  return (
    <Wrapper>
      <Icon />
      <SearchFormInput
        type="text"
        value={value}
        onChange={e => onChange(e)}
        autoFocus
        placeholder="Search movies"
      />
    </Wrapper>
  );
};

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
