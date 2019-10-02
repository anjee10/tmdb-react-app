import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './Search';

const stories = storiesOf('Search', module);
const result = {};

const defaultProps = {
  callback: (searchTerm = '') => {
    return {
      type: 'SEARCH_MOVIES',
      payload: {
        ...result,
        searchTerm
      }
    };
  }
};
stories.add('No input', () => <Search {...defaultProps} />);

const defaultPropsWithInput = {
  searchTerm: 'Avengers',
  callback: (searchTerm = 'Avengers') => {
    return {
      type: 'SEARCH_MOVIES',
      payload: {
        ...result,
        searchTerm
      }
    };
  }
};
stories.add('With input', () => <Search {...defaultPropsWithInput} />);
