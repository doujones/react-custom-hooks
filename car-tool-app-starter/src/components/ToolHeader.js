import React from 'react';
import PropTypes from 'prop-types';

export function ToolHeader({ headerText }) {

  return (
    <header className="tool-header">
      <h1>{headerText}</h1>
    </header>
  );

};

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};

ToolHeader.propTypes = {
  headerText: PropTypes.string,
};