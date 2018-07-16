import Barba from 'barba.js';

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
    },
    onEnterCompleted: function () {},
    onLeave: function () {},
    onLeaveCompleted: function () {}
});
export default Home;
