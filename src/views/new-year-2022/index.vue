<template>
  <div :class="containerClasses">
    <div class="edit">
      <div class="html-edit" ref="htmlEditRef">
        <!-- 这是html代码编辑区域 -->
        <pre v-html="htmlEditPre" ref="htmlEditPreRef"></pre>
      </div>
      <div class="css-edit" ref="cssEditRef">
        <!-- 这是css代码编辑区域 -->
        <pre v-html="styleEditPre"></pre>
      </div>
    </div>
    <div class="preview">
      <!-- 这是预览区域，灯笼最终会被画到这里噢 -->
      <div class="preview-html" v-html="previewHtmls">

      </div>

      <div class="tager2" v-if="tiger2===true">
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
        <div class="hands" style="  z-index: 5;
            display: inline-block;
            width: 30px;
            height: 10px;
            border: 1px solid #333;
            /*background-color: rgb(248, 229, 118);*/
            border-radius: 41% 155% 50% 0;
            position: relative;
            top: -67px;
            left: 15px;
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
            /*width: 30px;*/
            height: 26px;
            border-radius: 50%;
            /*background-color: rgb(248, 229, 118);*/
            position: absolute;"></div>
        </div>
        <div class="hands" style="  z-index: 5;
            display: inline-block;
            width: 30px;
            height: 10px;
            border: 1px solid #333;
            /*background-color: rgb(248, 229, 118);*/
            border-radius: 41% 155% 50% 0;
            position: relative;
            top: -67px;
            left: 15px;
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
            /*background-color: rgb(248, 229, 118);*/
            border-radius: 50%;
            position: absolute;
            left: -6px;"></div>
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

      <!-- 这里是样式真正起作用的地方，密码就隐藏... -->
      <div v-html="previewStyles"></div>

    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import htmls from './config/htmls'
import styles from './config/styles'
import { isMobile, delay } from '../../common/utils'

export default {
  name: 'newYear2022',
  data () {
    return {
      tiger2:false,
      // html代码展示片段
      htmlEditPre: '',
      htmlEditPreSource: '',
      // css代码展示片段
      styleEditPre: '',
      // 实际起作用的css
      previewStylesSource: '',
      previewStyles: '',
      // 预览的html
      previewHtmls: '',

    }
  },
  computed: {
    containerClasses () {
      // 做一个简单的适配
      return [
        'container',
        isMobile() ? 'container-mobile' : ''
      ]
    }
  },
  async mounted () {
    // 1. 打招呼
    // await this.doHtmlStep(0)
    // 2. 说明主旨
    // await this.doHtmlStep(1)
    //
    // await delay(500)
    //
    // 3. 第一步声明
    // await this.doHtmlStep(2)
    //
    // await delay(500)


    // 4. 创建写代码的编辑器
    await this.doSlowHtmlStep(3)
    await delay(10)
    await this.doSlowHtmlStep(4)
    await delay(10)
    await this.doSlowStyleStep(0)
    // await delay(10)
    await this.doSlowStyleStep(1)
    // await delay(50)


    // await Promise.all([
    //   this.doHtmlStep(5, 0),
    //   this.doEffectHtmlsStep(5, 0),
    // ])
    // await delay(500)
    // await this.doStyleStep(2)
    // await delay(500)
    // await Promise.all([
    //   this.doHtmlStep(6, 1),
    //   this.doEffectHtmlsStep(6, 1),
    // ])
    // await delay(500)
    // await this.doStyleStep(3)
    // await delay(500)
    //
    // await Promise.all([
    //   this.doHtmlStep(7, 2),
    //   this.doEffectHtmlsStep(7, 2),
    // ])
    // await delay(500)
    // await this.doStyleStep(4)
    // await delay(500)
    //
    // await Promise.all([
    //   this.doHtmlStep(8, 3),
    //   this.doEffectHtmlsStep(8, 3),
    // ])
    // await delay(500)
    // await this.doStyleStep(5)
    // await delay(500)
    //
    // await Promise.all([
    //   this.doHtmlStep(9, 4),
    //   this.doEffectHtmlsStep(9, 4),
    // ])
    // await delay(500)
    // await this.doStyleStep(6)
    // await delay(500)
    //
    // await Promise.all([
    //   this.doHtmlStep(10, 5),
    //   this.doEffectHtmlsStep(10, 5),
    // ])
    // await delay(500)
    // await this.doStyleStep(7)
    // await delay(500)

    // this.doStyleStep(8)
    // this.doHtmlStep(11, 6)
    // this.doEffectHtmlsStep(11, 6)


    await Promise.all([
      this.doHtmlStep(11, 6),
      this.doEffectHtmlsStep(11, 6),
      await this.doStyleStep(8)
    ])
    await delay(500)

    // await delay(500)

    // await Promise.all([
    //   this.doHtmlStep(12, 7),
    //   this.doEffectHtmlsStep(12, 7),
    // ])
    // await delay(500)
    await this.doSlowStyleStep(11)
    await this.doStyleStep(9)
    await delay(500)

    await this.changeTiger2()
    await delay(500)
    await this.doStyleStep(10)

  },
  methods: {
    changeTiger2 () {
      this.tiger2 = true
    },

    doSlowStyleStep (step) {
      const cssEditRef = this.$refs.cssEditRef

      return new Promise((resolve) => {
        const styleStepConfig = styles[ step ]

        if (!styleStepConfig) {
          return
        }

        let previewStylesSource = this.previewStylesSource
        let start = 0
        let char = styleStepConfig.substring(start, start + 5)
        let timter = setInterval(() => {
          // let char = styleStepConfig.substring(start, start + 1)
          console.log('char:',char)
          previewStylesSource += char
          console.log("previewStylesSource:",previewStylesSource)
          start = start + 5
          char = styleStepConfig.substring(start, start + 6)
          if (start - 5 >= styleStepConfig.length) {
            console.log('css结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.previewStylesSource = previewStylesSource
            this.styleEditPre = Prism.highlight(previewStylesSource, Prism.languages.css)
            this.previewStyles = `
              <style>
                ${previewStylesSource}
              </style>
            `
            start += 1
            document.body.scrollTo({
              top: 10000,
              left: 0,
            })
            document.documentElement.scrollTo({
              top: 10000,
              left: 0,
            })

            cssEditRef && cssEditRef.scrollTo({
              top: 100000,
              left: 0,
            })
          }
        }, 0)
      })
    },
    doSlowEffectHtmlsStep (step, insertStepIndex = -1) {
      const insertStep = insertStepIndex !== -1 ? `<!-- htmlStep${insertStepIndex} -->` : -1
      return new Promise((resolve) => {
        const htmlStepConfig = htmls[ step ]
        let previewHtmls = this.previewHtmls
        const index = previewHtmls.indexOf(insertStep)
        const stepInHtmls = index !== -1

        let frontHtml = stepInHtmls ? previewHtmls.slice(0, index + insertStep.length) : previewHtmls
        let endHtml = stepInHtmls ? previewHtmls.slice(index + insertStep.length) : ''

        let start = 0
        let chars = ''
        let char = htmlStepConfig.substring(start, start + 5)
        let timter = setInterval(() => {
          // let char = htmlStepConfig.substring(start, start + 1)
          console.log('char:',char)
          chars += char
          console.log('chars:',chars)
          start = start + 5
          char = htmlStepConfig.substring(start-1, start + 5)
          previewHtmls = frontHtml + chars + endHtml
          console.log('previewHtmls:',previewHtmls)
          if (start - 5 >= htmlStepConfig.length) {
            console.log('html结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.previewHtmls = previewHtmls
            start += 1
          }
        }, 0)
      })
    },
    doSlowHtmlStep (step, insertStepIndex = -1) {
      const htmlEditRef = this.$refs.htmlEditRef
      const htmlEditPreRef = this.$refs.htmlEditPreRef
      const insertStep = insertStepIndex !== -1 ? `<!-- htmlStep${insertStepIndex} -->` : -1
      return new Promise((resolve) => {
        const htmlStepConfig = htmls[ step ]
        let htmlEditPreSource = this.htmlEditPreSource
        const index = htmlEditPreSource.indexOf(insertStep)
        const stepInHtmls = index !== -1

        let frontHtml = stepInHtmls ? htmlEditPreSource.slice(0, index + insertStep.length) : htmlEditPreSource
        let endHtml = stepInHtmls ? htmlEditPreSource.slice(index + insertStep.length) : ''

        let start = 0
        let chars = ''
        let char = htmlStepConfig.substring(start, start + 5)
        let timter = setInterval(() => {
          // let char = htmlStepConfig.substring(start, start + 5)
          // console.log("char:",char)
          chars += char
          // console.log("chars:",chars)
          start = start + 5
          char = htmlStepConfig.substring(start - 1, start + 5)
          htmlEditPreSource = frontHtml + chars + endHtml
          // console.log("htmlEditPreSource:",htmlEditPreSource)

          if (start - 5 >= htmlStepConfig.length) {
            console.log('html结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.htmlEditPreSource = htmlEditPreSource
            this.htmlEditPre = Prism.highlight(htmlEditPreSource, Prism.languages.html)
            start += 1

            if (insertStep !== -1) {
              htmlEditRef && htmlEditRef.scrollTo({
                top: 100000,
                left: 1000,
              })
            } else {
              htmlEditRef && htmlEditRef.scrollTo({
                top: 100000,
                left: 0,
              })
            }
          }
        }, 0)
      })
    },
    doStyleStep (step) {
      const cssEditRef = this.$refs.cssEditRef

      return new Promise((resolve) => {
        const styleStepConfig = styles[ step ]

        if (!styleStepConfig) {
          return
        }

        let previewStylesSource = this.previewStylesSource
        let start = 0
        let char = styleStepConfig.substring(start, start + 20)
        let timter = setInterval(() => {
          // let char = styleStepConfig.substring(start, start + 1)
          console.log('char:',char)
          previewStylesSource += char
          console.log("previewStylesSource:",previewStylesSource)
          start = start + 20
          char = styleStepConfig.substring(start, start + 21)
          if (start - 20 >= styleStepConfig.length) {
            console.log('css结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.previewStylesSource = previewStylesSource
            this.styleEditPre = Prism.highlight(previewStylesSource, Prism.languages.css)
            this.previewStyles = `
              <style>
                ${previewStylesSource}
              </style>
            `
            start += 1
            document.body.scrollTo({
              top: 10000,
              left: 0,
            })
            document.documentElement.scrollTo({
              top: 10000,
              left: 0,
            })

            cssEditRef && cssEditRef.scrollTo({
              top: 100000,
              left: 0,
            })
          }
        }, 0)
      })
    },
    doEffectHtmlsStep (step, insertStepIndex = -1) {
      const insertStep = insertStepIndex !== -1 ? `<!-- htmlStep${insertStepIndex} -->` : -1
      return new Promise((resolve) => {
        const htmlStepConfig = htmls[ step ]
        let previewHtmls = this.previewHtmls
        const index = previewHtmls.indexOf(insertStep)
        const stepInHtmls = index !== -1

        let frontHtml = stepInHtmls ? previewHtmls.slice(0, index + insertStep.length) : previewHtmls
        let endHtml = stepInHtmls ? previewHtmls.slice(index + insertStep.length) : ''

        let start = 0
        let chars = ''
        let char = htmlStepConfig.substring(start, start + 20)
        let timter = setInterval(() => {
          // let char = htmlStepConfig.substring(start, start + 1)
          console.log('char:',char)
          chars += char
          console.log('chars:',chars)
          start = start + 20
          char = htmlStepConfig.substring(start-1, start + 20)
          previewHtmls = frontHtml + chars + endHtml
          console.log('previewHtmls:',previewHtmls)
          if (start - 20 >= htmlStepConfig.length) {
            console.log('html结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.previewHtmls = previewHtmls
            start += 1
          }
        }, 0)
      })
    },
    doHtmlStep (step, insertStepIndex = -1) {
      const htmlEditRef = this.$refs.htmlEditRef
      const htmlEditPreRef = this.$refs.htmlEditPreRef
      const insertStep = insertStepIndex !== -1 ? `<!-- htmlStep${insertStepIndex} -->` : -1
      return new Promise((resolve) => {
        const htmlStepConfig = htmls[ step ]
        let htmlEditPreSource = this.htmlEditPreSource
        const index = htmlEditPreSource.indexOf(insertStep)
        const stepInHtmls = index !== -1

        let frontHtml = stepInHtmls ? htmlEditPreSource.slice(0, index + insertStep.length) : htmlEditPreSource
        let endHtml = stepInHtmls ? htmlEditPreSource.slice(index + insertStep.length) : ''

        let start = 0
        let chars = ''
        let char = htmlStepConfig.substring(start, start + 20)
        let timter = setInterval(() => {
          // let char = htmlStepConfig.substring(start, start + 5)
          // console.log("char:",char)
          chars += char
          // console.log("chars:",chars)
          start = start + 20
          char = htmlStepConfig.substring(start - 1, start + 20)
          htmlEditPreSource = frontHtml + chars + endHtml
          // console.log("htmlEditPreSource:",htmlEditPreSource)

          if (start - 20 >= htmlStepConfig.length) {
            console.log('html结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.htmlEditPreSource = htmlEditPreSource
            this.htmlEditPre = Prism.highlight(htmlEditPreSource, Prism.languages.html)
            start += 1

            if (insertStep !== -1) {
              htmlEditRef && htmlEditRef.scrollTo({
                top: 100000,
                left: 1000,
              })
            } else {
              htmlEditRef && htmlEditRef.scrollTo({
                top: 100000,
                left: 0,
              })
            }
          }
        }, 0)
      })
    },
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.container-mobile{
  flex-direction: column;
}

.container-mobile .edit{
  width: 100%;
  height: 50%;
}

.container-mobile .preview{
  width: 100%;
}

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
  z-index: -1;
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
  z-index: -2;
}
.foot1 {
  left: 40px;
  transform: rotateZ(-20deg);
}
.hands {
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
  z-index: -2;
  animation: tail 0.8s ease-in-out infinite;
}
.tager2 {
  z-index: 99;
  transform: rotateY(180deg);
  margin-top: 40%;
}

/*.tager2 .head,*/
/*.tager2 .ears,*/
/*.tager2 .yuan,*/
/*.tager2 .yuan1,*/
/*.tager2 .noseLeft,*/
/*.tager2 .noseRight,*/
/*.tager2 .belly,*/
/*.tager2 .tail,*/
/*.tager2 .hands,*/
/*.tager2 .foot,*/
/*.tager2 .tail span,*/
/*.tager2 .hands .yuan {*/
/*  background-color: pink;*/
/*}*/
/*.tager2 .hands .yuan1,*/
/*.tager2 .tail .black,*/
/*.tager2 .tail .black1 {*/
/*  background-color: #000;*/
/*}*/
/*.tager2 .noseLeft,*/
/*.tager2 .noseRight {*/
/*  border: 1px solid pink;*/
/*  border-bottom: 2px solid #333;*/
/*}*/
</style>
