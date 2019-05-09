import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClickOutsideListener extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (event) => {
    const trigger = this.props.triggerRef.current;
    const wrapper = this.wrapperRef.current;

    if (
      this.props.isListening
      && (!wrapper || !wrapper.contains(event.target))
      && (!trigger || !trigger.contains(event.target))
    ) {
      this.props.handleClickOutside(event);
    }
  };

  render() {
    return (
      <div ref={this.wrapperRef} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

ClickOutsideListener.propTypes = {
  id: PropTypes.string.isRequired,
  triggerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  isListening: PropTypes.bool,
  handleClickOutside: PropTypes.func,
  children: PropTypes.node,
};

ClickOutsideListener.defaultProps = {
  isListening: false,
  handleClickOutside: () => null,
  children: null,
};
