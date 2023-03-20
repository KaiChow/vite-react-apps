import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return <div>Header-{props.title}</div>;
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
