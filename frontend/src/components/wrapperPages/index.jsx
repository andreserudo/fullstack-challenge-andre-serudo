import React from 'react';
import PropTypes from 'prop-types';
import Header from '../commom/Header';
import InternalPageWrapper from './styles';

function WebsitePageWrapper({
  pageTitle,
  children,
}) {
  return (
    <InternalPageWrapper>
      <Header />
      <h1>{pageTitle}</h1>
      {children}
    </InternalPageWrapper>
  );
}

WebsitePageWrapper.defaultProps = {
  pageTitle: {},
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
};

export default WebsitePageWrapper;
