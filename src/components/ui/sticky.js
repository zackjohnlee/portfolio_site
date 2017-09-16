import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Sticky extends Component {

  componentDidMount() {
    const setInitialHeights = (elements) => {
      [].forEach.call(elements, (sticky) => {
        const stickTop = sticky.getBoundingClientRect().top;
        sticky.setAttribute('data-sticky-initial', stickTop);
        console.log(`${elements} top is ${stickTop}`);
      });
    };

    const stickies = document.querySelectorAll('[data-sticky]');
    
    setInitialHeights(stickies);


    document.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;
      console.log("top:", top);
      console.log("bottom:", bottom);

      [].forEach.call(stickies, (sticky) => {
        const stickyInitial = parseInt(sticky.getAttribute('data-sticky-initial'), 10);
        const stickyEnter = parseInt(sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
        const stickyExit = parseInt(sticky.getAttribute('data-sticky-exit'), 10) || bottom;

        if (top >= stickyEnter && top <= stickyExit) {
          sticky.classList.add('sticky');
        } else {
          sticky.classList.remove('sticky');
        }
      });
    });
  }
  // componentWillUnmount() {
  //   document.removeEventListener('scroll');
  // }

  render() {
    const { className, enter, exit, children } = this.props;
    return (
      <div
        className={`Sticky ${className}`}
        data-sticky
        data-sticky-enter={enter}
        data-sticky-exit={exit}>

        {children}

      </div>);
  }
}

Sticky.propTypes = {
  className: PropTypes.string,
  enter: PropTypes.string,
  exit: PropTypes.string,
  children: PropTypes.node,
};