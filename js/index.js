import anime from 'animejs';
import Barba from 'barba.js';
import salvattore from 'salvattore';

import Home from './Home';
import Illustration from './Illustration';

const globals = {
  stripAnimationDuration: 400
};

const handleStrip = open => {
  anime({
    targets: '.stripe-top',
    translateY: open ? '-100%' : '0',
    duration: globals.stripAnimationDuration,
    easing: 'easeInOutQuad'
  });
  anime({
    targets: '.stripe-bottom',
    translateY: open ? '100%' :'0',
    duration: globals.stripAnimationDuration,
    easing: 'easeInOutQuad'
  });
};
const transitionHandler = () => new Promise((resolve, reject) => {
  //waits global.stripAnimationDuration ms for wait that the animation triggering
  //on start transition has been finished
  setTimeout(() => {
    handleStrip(true);
    resolve();
  }, globals.stripAnimationDuration + 50);
});
const HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    handleStrip(false);
    this.newContainerLoading
      .then(transitionHandler)
      .then(this.finish.bind(this));
  },
  finish: function() {
    this.done();
  }
});

Home.init();
Illustration.init();

Barba.Pjax.getTransition = () => HideShowTransition;
Barba.Pjax.start();
handleStrip(true);