import Barba from 'barba.js';
import Masonry from 'masonry-layout';

const Illustration = Barba.BaseView.extend({
    namespace: 'illustration',
    onEnter: function () {},
    onEnterCompleted: function () {},
    onLeave: function () {},
    onLeaveCompleted: function () {}
});
export default Illustration;


const grid = document.querySelector('.grid')
const msnry = new Masonry(grid, {
  itemSelector: '.grid-item-container',
  columnWidth: '.grid-sizer',
  percentPosition: true
//   gutter: '.gutter-sizer',
//   gutter: 20,
//   transitionDuration: 0,
//   initLayout: false
})

msnry.once('layoutComplete', () => {
  grid.classList.add('load')
})

msnry.layout()