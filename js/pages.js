const globals = {
  stripAnimationDuration: 600
};

const handleStrip = open => {
  anime({
    targets: '.stripe-top',
    translateY: open ? '-100%' : '0',
    offset: 200,
    duration: globals.stripAnimationDuration,
    easing: 'easeInOutQuad'
  });
  anime({
    targets: '.stripe-bottom',
    translateY: open ? '100%' :'0',
    offset: 200,
    duration: globals.stripAnimationDuration,
    easing: 'easeInOutQuad'
  });
};

const Home = Barba.BaseView.extend({
  namespace: 'home',
  onEnter: function () {},
  onEnterCompleted: function () {},
  onLeave: function () {},
  onLeaveCompleted: function () {}
});
const Illustration = Barba.BaseView.extend({
  namespace: 'illustration',
  onEnter: function () {},
  onEnterCompleted: function () {},
  onLeave: function () {},
  onLeaveCompleted: function () {}
});

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