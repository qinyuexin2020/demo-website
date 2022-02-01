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
      .ears {
        width: 30px;
        height: 26px;
        border-radius: 50%;
        background-color: rgb(248, 229, 118);
        border: 1px solid #333;
        position: absolute;
        z-index: -1;
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

  `,
  // 3
  `


  `,
  // 4
  `
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


  `,
  // 5
  `
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

  `,
  // 6
  `
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

  `,
  // 7
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

  `
]
