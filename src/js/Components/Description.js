import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { capitalise } from "../utils";

const Refresh = styled.button`
  background: transparent;
  border: 0;
`;

const Reference = styled.p`
  font-size: 13px;
`;

const Description = ({ descriptions }) => {
  const [description, setDescription] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * descriptions.length);
    const description = descriptions[randomNumber];
    setDescription(description);
  }, []);

  const refreshDescription = () => {
    const randomNumber = Math.floor(Math.random() * descriptions.length);
    const description = descriptions[randomNumber];
    setDescription(description);
  };

  if (!description) return <></>;
  return (
    <>
      <h3>
        Description <Refresh onClick={refreshDescription}>🔃</Refresh>
      </h3>
      <p>{description.flavor_text.replace(//g, " ")}</p>
      <Reference>
        Entry from Pokémon{" "}
        <strong>{capitalise(description.version.name)}</strong>
      </Reference>
    </>
  );
};

Description.propTypes = {
  descriptions: PropTypes.array
};

export default Description;
