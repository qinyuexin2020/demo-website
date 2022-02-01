export default [
  // 开头寒暄
  `
  <!--
    👩：︒ᴴᴬᴾᴾᵞ ɴᴇᴡ ʏᴇᴀя
    平安喜乐，万事胜意
    𝟐𝟎𝟐𝟐 新年快乐！🧨
  -->
  `,
  // 说明主旨
  `
  <!--
    以前都是用“手”写代码，今天想尝试一下
    “代码写代码”,自动画一个喜庆的灯笼
  -->
  `,
  // 创建编辑器
  `
  <!--
    第①步，先创建一个编辑器
  -->
  `,
  // 创建编辑器html结构
  `
  <div class="container">
    <div class="edit">
      <div class="html-edit">
        <!-- 这是html代码编辑区域 -->
        <pre v-html="htmlEditPre">
          <!-- htmlStep0 -->
        </pre>
      </div>
      <div class="css-edit">
        <!-- 这是css代码编辑区域 -->
        <pre v-html="cssEditPre"></pre>
      </div>
    </div>
    <div class="preview">
      <div class="preview-html"></div>
      <div v-html="cssEditPre"></div>
    </div>
  </div>
  `,
  // 开始画样式
  `
  <!--
    第②步，给编辑器来点样式，我要开始画了喔~~
  -->
  `,
  // 画灯笼的大肚子
  `
          <!-- 第③步，先画灯笼的大肚子结构 -->
          <div class="lantern-container">
            <!-- htmlStep1 -->
            <!-- 大红灯笼区域 -->
            <div class="lantern-light">
            <!-- htmlStep2 -->
            </div>
          </div>
  `,
  // 提着灯笼的线
  `
            <!-- 第④步，灯笼顶部是有根线的 -->
            <div class="lantern-top-line"></div>
  `,
  `
              <!-- 第⑤步，给灯笼加两个盖子 -->
              <div class="lantern-hat-top"></div>
              <div class="lantern-hat-bottom"></div>
              <!-- htmlStep3 -->
  `,
  `
              <!-- 第⑥步，感觉灯笼快要成了，再给他加上四根线吧 -->
              <div class="lantern-line-out">
                <div class="lantern-line-innner">
                  <!-- htmlStep5 -->
                </div>
              </div>
              <!-- htmlStep4 -->
  `,
  `
              <!-- 第⑦步，灯笼是不是还有底部的小尾巴呀 -->
              <div class="lantern-rope-top">
                <div class="lantern-rope-middle"></div>
                <div class="lantern-rope-bottom"></div>
              </div>
  `,
  `
                <!-- 第⑧步，最后当然少不了送给大家的福啦 -->
                <div class="lantern-fu">福</div>
   `,
  `
    <div class="tager1" style="margin-top: 20%;margin-left: 10%;">
    <div class="head" style="width: 100px;
            height: 90px;
            border-radius: 78% 78% 59% 56%;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            position: relative;">
        <div class="text" style="font-size: 20px;
            color: #000;
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            top: 6px;
            z-index: 11;
            animation: head 0.8s ease-in-out infinite;">王</div>
        <div class="yuan y-left" style="
                width: 30px;
                height: 26px;
                border-radius: 50%;
                background-color: rgb(248, 229, 118);
                position: absolute;
                transform: rotateZ(-45deg);
                margin-top: 6px;
                left: 0;
                z-index: 1;">
            <div class="inside" style="width: 16px;
            height: 10px;
            background-color: rgb(250, 163, 163);
            border: 1px solid #333;
            border-radius: 50% 50% 10% 10%;
            margin-left: 6px;"></div>
        </div>
        <div class="yuan y-right" style="
                width: 30px;
                height: 26px;
                border-radius: 50%;
                background-color: rgb(248, 229, 118);
                position: absolute;
                transform: rotateZ(45deg);
                margin-top: 6px;
                right: 0;
                z-index: 1;">
            <div class="inside" style="width: 16px;
            height: 10px;
            background-color: rgb(250, 163, 163);
            border: 1px solid #333;
            border-radius: 50% 50% 10% 10%;
            margin-left: 6px;"></div>
        </div>

        <!-- 耳朵 -->
        <div class="ears e-left" style="width: 30px;
            height: 26px;
            border-radius: 50%;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            position: absolute;
            z-index: 0;
            transform: rotateZ(-45deg);
            left: -6px;
            top: 0px;"></div>
        <div class="ears e-right" style="width: 30px;
            height: 26px;
            border-radius: 50%;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            position: absolute;
            z-index: 0;
            transform: rotateZ(45deg);
            right: -6px;
            top: 0px;"></div>

        <!-- 眼睛 -->
        <div class="eyes eye-left" style="width: 14px;
            height: 14px;
            background-color: #000;
            border-radius: 50%;
            position: absolute;
            top: 40px;
            z-index: 20;
            left: 24px;
            animation: head 0.8s ease-in-out infinite;">
            <div class="small" style="width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #fff;
            margin-left: 3px;
            margin-top: 3px;"></div>
        </div>
        <div class="eyes eye-right" style="width: 14px;
            height: 14px;
            background-color: #000;
            border-radius: 50%;
            position: absolute;
            top: 40px;
            z-index: 20;
            transform: rotateY(180deg);
            right: 24px;
            animation: head 0.8s ease-in-out infinite;">
            <div class="small" style="width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #fff;
            margin-left: 3px;
            margin-top: 3px;"></div>
        </div>
        <!-- 鼻子 -->
        <div class="nose" style="width: 8px;
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
            z-index: 11;">
            <div class="line" style="position: absolute;
            width: 2px;
            height: 8px;
            background-color: #000;
            transform: rotateZ(-45deg);
            margin-left: 9px;
            margin-top: 7px;"></div>
        </div>
        <div class="noseLeft" style="width: 17px;
            height: 34px;
            background-color: rgb(248, 229, 118);
            position: absolute;
            top: 31px;
            right: 34px;
            border-radius: 50%;
            border: 2px solid rgb(248, 229, 118);
            border-bottom-color: #000;
            z-index: 9;
            left: 32px;"></div>
        <div class="noseRight" style="width: 17px;
            height: 34px;
            background-color: rgb(248, 229, 118);
            position: absolute;
            top: 31px;
            right: 34px;
            border-radius: 50%;
            border: 2px solid rgb(248, 229, 118);
            border-bottom-color: #000;
            z-index: 9;"></div>
        <!-- 牙齿 -->
        <div class="tooth" style="width: 4px;
            height: 10px;
            background: #fff;
            border-radius: 100%;
            position: absolute;
            top: 61px;
            left: 40px;
            border: 1px solid #333;
            z-index: 2;"></div>
        <div class="tooth t-right" style="width: 4px;
            height: 10px;
            background: #fff;
            border-radius: 100%;
            position: absolute;
            top: 61px;

            border: 1px solid #333;
            z-index: 2;
            left: 52px;"></div>
        <!-- 腮帮子 -->
        <div class="f-left">
            <span></span>
            <span></span>
        </div>
        <div class="f-left f-right">
            <span></span>
            <span></span>
        </div>
    </div>

    <div class="belly" style="width: 50px;
            height: 50px;
            border-radius: 43% 43% 43% 42%;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            position: relative;
            left: 23px;
            top: -9px;
            z-index: 3;"></div>
    <!-- 脚 -->
    <div class="foot" style="display: inline-block;
            width: 10px;
            height: 20px;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: relative;
            top: -26px;
            z-index: 1;
            left:28px"></div>
    <div class="foot foot1" style="display: inline-block;
            width: 10px;
            height: 20px;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: relative;
            top: -26px;
            z-index: 1;
            left: 40px;
            transform: rotateZ(-20deg);"></div>
    <!-- 手 -->
    <div class="hands" style="  z-index: 5;
            display: inline-block;
            width: 30px;
            height: 10px;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            border-radius: 41% 155% 50% 0;
            position: relative;
            top: -67px;
            left: 2px;
            transform: rotateZ(230deg);
            animation: arm 1s ease-in-out infinite;">
        <div class="yuan yuan1" style="
            border-radius: 50%;
            position: absolute;
            width: 8px;
            height: 8px;
            bottom: 0;
            background-color: #000;
            left: 10px;
            z-index: 1;"></div>
        <div class="yuan" style="
            width: 30px;
            height: 26px;
            border-radius: 50%;
            background-color: rgb(248, 229, 118);
            position: absolute;"></div>
    </div>
    <div class="hands" style="  z-index: 5;
            display: inline-block;
            width: 30px;
            height: 10px;
            border: 1px solid #333;
            background-color: rgb(248, 229, 118);
            border-radius: 41% 155% 50% 0;
            position: relative;
            top: -67px;
            left: 2px;
            transform: rotateZ(230deg);
            animation: arm 1s ease-in-out infinite;">
        <div class="yuan yuan1" style="
            border-radius: 50%;
            position: absolute;
            width: 8px;
            height: 8px;
            bottom: 0;
            background-color: #000;
            left: 10px;"></div>
        <div class="yuan" style="
            width: 10px;
            height: 10px;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: absolute;
            left: -6px;"></div>
    </div>
    <!-- 尾巴 -->
    <div class="total" style="margin-top: -67px;
            margin-left: 44px;
            position: relative;
            z-index: 1;
            animation: tail 0.8s ease-in-out infinite;">
        <div class="tail" style=" width: 50px;
            height: 25px;
            border-radius: 24px 21px 6px 1px;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transform: rotateX(180deg);">
            <span class="black1" style="
            border-radius: 50%;
            position: absolute;
            z-index: 99;
            background-color: #000;
            width: 8px;
            height: 6px;
            left: 19px;
            top: 4px;
            transform: rotateZ(100deg);"></span>
            <div class="tail-insaide"></div>
        </div>
        <div class="tail tail1" style=" width: 50px;
            height: 25px;
            border-radius: 24px 21px 6px 1px;
            background-color: rgb(248, 229, 118);
            border: 1px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transform: rotateX(360deg);
            margin-left: 40px;
            margin-top: -50px;">
            <span style="width: 10px;
            height: 10px;
            background-color: rgb(248, 229, 118);
            border-radius: 50%;
            position: absolute;
            left: 0px;
            top: 16px;
            z-index: 99;"></span>
            <span class="black"></span>
            <span class="black"></span>
            <div class="tail-insaide" style="width: 30px;
            height: 15px;
            border-radius: 15px 15px 0px 0px;
            background-color: #c5bd98;
            border-top: 1px solid #333;
            margin-top: 10px;"></div>
        </div>
    </div>
</div>

   `
]
