import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.25);
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

const StatName = styled.span`
  padding: 0;
  margin-right: 20px;
`;

const BaseStat = styled.span``;

const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ base_stat, stat }, index) => (
        <ListItem key={index}>
          <StatName>
            {stat.name
              .split("-")
              .join(" ")
              .toUpperCase()}
          </StatName>
          <BaseStat>{base_stat}</BaseStat>
        </ListItem>
      ))}
    </List>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object)
};

export default StatList;
