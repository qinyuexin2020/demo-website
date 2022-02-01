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
      <!-- 这是预览区域，灯笼最终会被画到这里噢 -->
      <div class="preview-html"></div>
      <!-- 这里是样式真正起作用的地方，密码就隐藏... -->
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
   <div class="tager1">
    <div class="head">
        <div class="text">王</div>
        <div class="yuan y-left">
            <div class="inside"></div>
        </div>
        <div class="yuan y-right">
            <div class="inside"></div>
        </div>
        <!-- 耳朵 -->
        <div class="ears e-left"></div>
        <div class="ears e-right"></div>

        <!-- 眼睛 -->
        <div class="eyes eye-left">
            <div class="small"></div>
        </div>
        <div class="eyes eye-right">
            <div class="small"></div>
        </div>
        <!-- 鼻子 -->
        <div class="nose">
            <div class="line"></div>
        </div>
        <div class="noseLeft"></div>
        <div class="noseRight"></div>
        <!-- 牙齿 -->
        <div class="tooth"></div>
        <div class="tooth t-right"></div>
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

    <div class="belly"></div>
    <!-- 脚 -->
    <div class="foot"></div>
    <div class="foot foot1"></div>
    <!-- 手 -->
    <div class="hands">
        <div class="yuan yuan1"></div>
        <div class="yuan"></div>
    </div>
    <div class="hands">
        <div class="yuan yuan1"></div>
        <div class="yuan"></div>
    </div>
    <!-- 尾巴 -->
    <div class="total">
        <div class="tail">
            <span class="black1"></span>
            <div class="tail-insaide"></div>
        </div>
        <div class="tail tail1">
            <span></span>
            <span class="black"></span>
            <span class="black"></span>
            <div class="tail-insaide"></div>
        </div>
    </div>


</div>

   `
]
