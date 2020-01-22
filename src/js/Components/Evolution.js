import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { capitalise } from "../utils";

import styled from "styled-components";

const Evolution = ({ evolution }) => {
  return (
    <>
      <div>{capitalise(evolution.name)}</div>
    </>
  );
};

Evolution.propTypes = {
  evoltion_chain: PropTypes.object
};

export default Evolution;
