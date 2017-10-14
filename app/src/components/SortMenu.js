import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import { changeSortOrder } from './../actions'

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
    console.log('newSortOrder',newSortOrder)
    this.props.sortPosts(sortTypes[newSortOrder])
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  };

  render() {
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={this.state.open ? 'sort-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <div>Sort by: {sortTypes[this.state.selectedIndex]}</div>
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
              onClick={event => this.handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default SortMenu;
