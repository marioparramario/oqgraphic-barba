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
  onEnter: function () {
    console.log('home on enter')
  },
  onEnterCompleted: function () {
    console.log('home completed');
  },
  onLeave: function () {
    console.log('home leaving');
  },
  onLeaveCompleted: function () {}
});
const Illustration = Barba.BaseView.extend({
  namespace: 'illustration',
  onEnter: function () {
    console.log('illustration on enter')
  },
  onEnterCompleted: function () {
    console.log('entering illustration');
  },
  onLeave: function () {
    console.log('leaving illustration');
  },
  onLeaveCompleted: function () {}
});
const HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    console.log("start page change");
    handleStrip(false);
    this.newContainerLoading.then(this.finish.bind(this));
  },
  finish: function() {
    //waits global.stripAnimationDuration ms for wait that the animation triggering
    //on start transition has been finished
    setTimeout(handleStrip, globals.stripAnimationDuration, true);
    console.log("finish page change");
    this.done();
  }
});

Home.init();
Illustration.init();

Barba.Pjax.getTransition = () => HideShowTransition;
Barba.Pjax.start();
handleStrip(true);