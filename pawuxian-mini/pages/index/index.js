
Page({
  data: {
    cartPosition: {},
    offsetX: 0,
    offsetY: 0,
    ballX: 0,
    ballY: 0,
    ball: false,
    count:0,
  },
  onLoad() {
    this.getCartBasketRect();
  },
  getCartBasketRect() {
    wx.createSelectorQuery()
      .selectAll('.cart')
      .boundingClientRect(rects => {
        rects.map(rect => {
          this.setData({
            cartPosition: rect
          });
        });
      }).exec();
  },
  addToCart(e) {
    let ballX = e.touches[0].clientX ,
      ballY = e.touches[0].clientY ;
    let offsetX = -Math.abs(this.data.cartPosition.left - ballX+60),
      offsetY = Math.abs(this.data.cartPosition.top - ballY);
    this.setData({
      ballX,
      ballY,
      offsetX,
      offsetY
    });
      let ball = this.data.ball;
      if (!ball) {
        this.setData({ ball:true });
        setTimeout(() => {
          let count=this.data.count;
          count++;
          this.setData({ 
            ball: false ,
            count
          });
        }, 500);
      }
  }
})