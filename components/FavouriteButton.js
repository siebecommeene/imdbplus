import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import styles from './FavouriteButton.module.scss';

/**
 * # Favourite Button
 * Simple Foodbomb Button with Heart Component
 *
 * ## Modifiers
 * ### Variants
 * ```
 * ['default', 'green']
 * ```
 *
 * ### IsFavourited
 * ```
 * [true, false]
 * ```
 *
 * ## PropTypes:
 * ```js
 * FavouriteButton.propTypes = {
 *    onClick: PropTypes.func,
 *    isFavourited: PropTypes.bool,
 *    className: PropTypes.string,
 *    variant: PropTypes.string,
 *  };
 * ```
 */

const FavouriteButton = ({ onClick, variant, isFavourited, className, ...props }) => {
  const ButtonStyles = [styles.Button];
  if (variant === 'green') {
    ButtonStyles.push(styles.green);
  }
  if (isFavourited) {
    ButtonStyles.push(styles.clicked);
  }
  if (!onClick) {
    ButtonStyles.push(styles.inactive);
  }
  ButtonStyles.push(className);

  return (
    <IconButton onClick={onClick} className={ButtonStyles.join(' ')} aria-label="delete" {...props}>
      {isFavourited ? <FavoriteIcon className={styles.Icon} /> : <FavoriteBorderIcon className={styles.Icon} />}
    </IconButton>
  );
};

FavouriteButton.propTypes = {
  onClick: PropTypes.func,
  isFavourited: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default FavouriteButton;