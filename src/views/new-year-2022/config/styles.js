export default [
  // 0. 添加基本样式
  `
  /* 首先给所有元素加上过渡效果 */
  * {
    transition: all .3s;
    -webkit-transition: all .3s;
  }
  /* 白色背景太单调了，我们来点背景 */
  html {
    color: rgb(222,222,222);
    background: rgb(0,43,54);
  }
  /* 代码高亮 */
  .token.selector{
    color: rgb(133,153,0);
  }
  .token.property{
    color: rgb(187,137,0);
  }
  .token.punctuation{
    color: yellow;
  }
  .token.function{
    color: rgb(42,161,152);
  }
  `,
  // 1.创建编辑器本身的样式
  `
  /* 我们需要做一个铺满全屏的容器 */
    .container{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 代码编辑区域50%宽度，留一些空间给预览区域 */
    .edit{
      width: 50%;
      height: 100%;
      background-color: #1d1f20;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .html-edit, .css-edit{
      flex: 1;
      overflow: scroll;
      padding: 10px;
    }

    .html-edit{
      border-bottom: 5px solid #2b2e2f;
    }
    /* 预览区域有50%的空间 */
    .preview{
      flex: 1;
      height: 100%;
      background-color: #2f1f47;
    }

    .preview-html{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    /* 好啦~ 你应该看到一个编辑器的基本感觉了，我们要开始画灯笼咯 */
  `,
  // 2
  `
  /* 给灯笼的大肚子整样式 */
  .lantern-container {
    position: relative;
  }

  .lantern-light {
    position: relative;
    width: 120px;
    height: 90px;
    background-color: #ff0844;
    border-radius: 50%;
    box-shadow: -5px 5px 100px 4px #fa6c00;
    animation: wobble 2.5s infinite ease-in-out;
    transform-style: preserve-3d;
  }
  /* 让他动起来吧 */
  @keyframes wobble {
    0% {
      transform: rotate(-6deg);
    }

    50% {
      transform: rotate(6deg);
    }

    100% {
      transform: rotate(-6deg);
    }
  }
  `,
  // 3
  `
  /* 顶部的灯笼线 */
  .lantern-top-line {
    width: 4px;
    height: 50px;
    background-color: #d1bb73;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    border-radius: 2px 2px 0 0;
  }
  `,
  // 4
  `
  /* 灯笼顶部、底部盖子样式 */
  .lantern-hat-top,
  .lantern-hat-bottom {
    content: "";
    position: absolute;
    width: 60px;
    height: 12px;
    background-color: #ffa500;
    left: 50%;
    transform: translateX(-50%);
  }
  /* 顶部位置 */
  .lantern-hat-top {
    top: -8px;
    border-radius: 6px 6px 0 0;
  }
  /* 底部位置 */
  .lantern-hat-bottom {
    bottom: -8px;
    border-radius: 0 0 6px 6px;
  }
  `,
  // 5
  `
  /* 灯笼中间的线条 */
  .lantern-line-out,
  .lantern-line-innner {
    height: 90px;
    border-radius: 50%;
    border: 2px solid #ffa500;
    background-color: rgba(216, 0, 15, 0.1);
  }
  /* 线条外层 */
  .lantern-line-out {
    width: 100px;
    margin: 12px 8px 8px 10px;
  }
  /* 线条内层 */
  .lantern-line-innner {
    margin: -2px 8px 8px 26px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `,
  // 6
  `
  /* 灯笼底部线条 */
  .lantern-rope-top {
    width: 6px;
    height: 18px;
    background-color: #ffa500;
    border-radius: 0 0 5px 5px;
    position: relative;
    margin: -5px 0 0 60px;
    /* 让灯穗也有一个动画效果 */
    animation: wobble 2.5s infinite ease-in-out;
  }

  .lantern-rope-middle,
  .lantern-rope-bottom {
    position: absolute;
    width: 10px;
    left: -2px;
  }

  .lantern-rope-middle {
    border-radius: 50%;
    top: 14px;
    height: 10px;
    background-color: #dc8f03;
    z-index: 2;
  }

  .lantern-rope-bottom {
    background-color: #ffa500;
    border-bottom-left-radius: 5px;
    height: 35px;
    top: 18px;
    z-index: 1;
  }
  `,
  // 7
  `
  /* 福样式 */
  .lantern-fu {
    font-size: 30px;
    font-weight: bold;
    color: #ffa500;
  }
  `,
  // 8
  `
      .head {
            width: 100px;
            height: 90px;
            border-radius: 78% 78% 59% 56%;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            position: relative;
        }
        .text {
            font-size: 20px;
            color: #000;
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            top: 6px;
            z-index: 11;
            animation: head 0.8s ease-in-out infinite;
        }
        .ears {
            width: 30px;
            height: 26px;
            border-radius: 50%;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            position: absolute;
            z-index: 1;
        }
        .e-right {
            transform: rotateZ(45deg);
            right: -6px;
            top: 0px;
        }
        .e-left {
            transform: rotateZ(-45deg);
            left: -6px;
            top: 0px;
        }
        .yuan {
            width: 30px;
            height: 26px;
            border-radius: 50%;
            background-color: rgb(248, 229, 118);
            position: absolute;
        }
        .y-left {
            transform: rotateZ(-45deg);
            margin-top: 6px;
            left: 0;
        }
        .y-right {
            transform: rotateZ(45deg);
            margin-top: 6px;
            right: 0;
        }
        .inside {
            width: 16px;
            height: 10px;
            background-color: rgb(250, 163, 163);
            border: 1px solid #333;
            border-radius: 50% 50% 10% 10%;
            margin-left: 6px;
        }
        .eyes {
            width: 14px;
            height: 14px;
            background-color: #000;
            border-radius: 50%;
            position: absolute;
            top: 40px;
            z-index: 20;
            animation: head 0.8s ease-in-out infinite;
        }
        .eye-left {
            left: 24px;
        }
        .eye-right {
            transform: rotateY(180deg);
            right: 24px;
        }
        .small {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #fff;
            margin-left: 3px;
            margin-top: 3px;
        }
        .nose {
            width: 8px;
            height: 8px;
            border-radius: 100% 50% 50%;
            background-color: rgb(250, 163, 163);
            border: 1px solid #333;
            position: relative;
            top: 46px;
            margin: 0 auto;
            left: 0;
            right: 0;
            transform: rotateZ(45deg);
            z-index: 11;
        }
        .line {
            position: absolute;
            width: 2px;
            height: 8px;
            background-color: #000;
            transform: rotateZ(-45deg);
            margin-left: 9px;
            margin-top: 7px;
        }
        .noseLeft,
        .noseRight {
            width: 17px;
            height: 34px;
            background-color: rgb(248, 229, 118);
            position: absolute;
            top: 31px;
            right: 34px;
            border-radius: 50%;
            border: 2px solid rgb(248, 229, 118);
            border-bottom-color: #000;
            z-index: 9;
        }
        .noseLeft {
            left: 32px;
        }
        .tooth {
            width: 4px;
            height: 10px;
            background: #fff;
            border-radius: 100%;
            position: absolute;
            top: 61px;
            left: 40px;
            border: 1px solid #333;
            z-index: 2;
        }
        .t-right {
            left: 52px;
        }
        .f-left span {
            width: 18px;
            height: 8px;
            border-radius: 0 50% 50% 0;
            background-color: #000;
            position: absolute;
            bottom: 28px;
            left: -1px;
            transform: rotateZ(-23deg);
        }
        .f-left span:nth-child(2) {
            width: 14px;
            bottom: 18px;
            left: 2px;
        }
        .f-right {
            transform: rotateY(180deg) translateY(80px);
        }




        .belly {
            width: 50px;
            height: 50px;
            border-radius: 43% 43% 43% 42%;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            position: relative;
            left: 23px;
            top: -9px;
            z-index: 3;
        }
        .foot {
            display: inline-block;
            width: 10px;
            height: 20px;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            transform: rotateZ(20deg);
            position: relative;
            left: 28px;
            top: -26px;
            z-index: 1;
        }
        .foot1 {
            left: 40px;
            transform: rotateZ(-20deg);
        }
        .hands {
            z-index: 5;
            display: inline-block;
            width: 30px;
            height: 10px;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            border-radius: 41% 155% 50% 0;
            transform: rotateX(-180deg);
            position: relative;
            top: -67px;
            left: 2px;
            transform: rotateZ(230deg);
            animation: arm 1s ease-in-out infinite;
        }
        .hands .yuan {
            width: 10px;
            height: 10px;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: absolute;
            left: -6px;
        }
        .hands .yuan1 {
            width: 8px;
            height: 8px;
            bottom: 0;
            background-color: #000;
            left: 10px;
        }
        .tail {
            width: 50px;
            height: 25px;
            border-radius: 24px 21px 6px 1px;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transform: rotateX(180deg);
        }
        .tail span {
            width: 10px;
            height: 10px;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: absolute;
            z-index: 9;
            left: 0px;
            top: 16px;
            z-index: 99;
        }
        .tail .black {
            width: 8px;
            height: 6px;
            background-color: #000;
            left: -1px;
            top: 20px;
        }
        .tail .black1 {
            background-color: #000;
            width: 8px;
            height: 6px;
            left: 19px;
            top: 4px;
            transform: rotateZ(100deg);
        }
        .tail .black:nth-child(2) {
            width: 12px;
            margin-top: 4px;
        }
        .tail .black:nth-child(3) {
            left: 18px !important;
            top: 1px;
            transform: rotateZ(90deg);
        }
        .tail-insaide {
            width: 30px;
            height: 15px;
            border-radius: 15px 15px 0px 0px;
            background-color: #c5bd98;
            border-top: 1px solid #333;
            margin-top: 10px;
        }
        .tail1 {
            transform: rotateX(360deg);
            margin-left: 40px;
            margin-top: -50px;
        }
        .total {
            margin-top: -67px;
            margin-left: 44px;
            position: relative;
            z-index: 1;
            animation: tail 0.8s ease-in-out infinite;
        }




   `,
  `

        /* 尾巴摇摆动画*/
        @keyframes tail {
            0% {
                transform-origin: 20px;
                transform: rotateZ(0deg);
            }

            60% {
                transform-origin: 20px;
                transform: rotateZ(10deg);
            }

            100% {
                transform-origin: 20px;
                transform: rotateZ(0deg);
            }
        }
        /* 手臂摇摆动画*/
        @keyframes arm {
            0% {
                transform-origin: 0 100%;
                transform: rotateZ(220deg);
            }

            60% {
                transform-origin: 0 100%;
                transform: rotateZ(350deg);
            }

            100% {
                transform-origin: 0 100%;
                transform: rotateZ(220deg);
            }
        }
        /* 放大摇摆动画*/
        @keyframes head {
            0% {
                transform: scale(1);
            }

            60% {
                transform: scale(1.2);
            }

            100% {
                transform: scale(1);
            }
        }

  `
]
