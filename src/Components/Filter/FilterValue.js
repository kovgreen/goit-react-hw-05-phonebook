import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './FilterValue.module.css';
import filterTransition from '../../transitionStyles/Filter.module.css';

const FilterValue = ({ value, onChangeFilter, isFiltered }) => (
  <CSSTransition
    in={isFiltered}
    classNames={filterTransition}
    timeout={{ enter: 250, exit: 250 }}
    mountOnEnter
    unmountOnExit
  >
    <div className={styles.FilterBlock}>
      <label className={styles.Label}>Find contacts by name</label>
      <input
        className={styles.Input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  </CSSTransition>
);

FilterValue.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default FilterValue;
