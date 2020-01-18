import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Evolution = ({ evolution_chain }) => {
  const evolutions = [];
  console.log(evolutions);
  return (
    <>
      <h3>Evolution Chain</h3>
      <div></div>
    </>
  );
};

Evolution.propTypes = {
  evoltion_chain: PropTypes.object
};

export default Evolution;
