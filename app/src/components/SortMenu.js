import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'

const sortTypes = [
  'VOTE_SCORE',
  'TIME_STAMP'
];

const ITEM_HEIGHT = 48;

class SortMenu extends Component {

  state = {
    anchorEl: null,
    open: false,
    selectedIndex: 0,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, open: false })
    const newSortOrder = index
    this.props.sortPosts(sortTypes[newSortOrder])
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  };

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.sortWrapper}>
        <IconButton
          aria-label="More"
          aria-owns={this.state.open ? 'sort-menu' : null}
          aria-haspopup="true"
          className={classes.iconButton}
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <div className={classes.sortBy}>Sort by
          <span className={classes.sortType}> {sortTypes[this.state.selectedIndex].replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, " ")}</span>
        </div>
        <Menu
          id="sort-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {sortTypes.map((option, index) => (
            <MenuItem key={option} selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)} className={classes.sortMenuItem}>
              {option.replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, " ")}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

SortMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SortMenu);
