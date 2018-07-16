import Barba from 'barba.js';
import Parallax from 'parallax-js';
import anime from 'animejs';

const Home = Barba.BaseView.extend({
  namespace: 'home',
  onEnter: function () {
    const parent = document.getElementById('container');
    const parallax = new Parallax(parent, {
      invertX: true,
      invertY: true,
      limitX: 26,
       limitY: 5,
    }); 
    var homeHeadline = anime({
      targets: '#hello-there h2',
      translateY: [100, 0],
      offset: 500,
      duration: 600,
      elasticity: 600,
      easing: [.4,0,.2,1],
      delay: function(el, i) { return i * 40 },
    });
    var homeParagraph = anime({
      targets: '.section-home p',
      translateY: [100, 0],
      opacity: [0.0, 1.0],
      offset: 800,
      duration: 800,
      easing: 'easeOutCubic',
      delay: function(el, i) { return i * 80 },
    }); 
  },
  onEnterCompleted: function () {},
  onLeave: function () {},
  onLeaveCompleted: function () {}
});
export default Home;
