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
      display:flex;
      flex: 1;
      height: 100%;
      background-color: #2f1f47;
    }

    .preview-html{
      display: flex;
      margin-top:35%;
      margin-right:5vw;
      margin-left:5vw;

    }

    /* 好啦~ 你应该看到一个编辑器的基本感觉了，我们可以开始画咯 */
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
        .hands .yuan {
            width: 10px;
            height: 10px;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: absolute;
            left: -6px;
        }
        .tail span {
            width: 10px;
            height: 10px;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: absolute;
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

        .tail .black:nth-child(2) {
            width: 12px;
            margin-top: 4px;
        }
        .tail .black:nth-child(3) {
            left: 18px !important;
            top: 1px;
            transform: rotateZ(90deg);
        }
   `,
  // 9
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

      /* 让我们再加上一只母老虎*/
  `,
  // 10
  `
  .tager2 .head,
.tager2 .ears,
.tager2 .yuan,
.tager2 .yuan1,
.tager2 .noseLeft,
.tager2 .noseRight,
.tager2 .belly,
.tager2 .tail,
.tager2 .hands,
.tager2 .foot,
.tager2 .tail span,
.tager2 .hands .yuan {
  background-color: pink;
}
.tager2 .hands .yuan1,
.tager2 .tail .black,
.tager2 .tail .black1 {
  background-color: #000;
}
.tager2 .noseLeft,
.tager2 .noseRight {
  border: 1px solid pink;
  border-bottom: 2px solid #333;
}
  `,
  // 11
  `
            /* 接下来我们让小老虎动起来*/

  `
]
