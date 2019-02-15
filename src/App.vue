<template>
  <div id="app">
    <div class="ctn"
      v-if="hasImg">
      <img :src="imgUrl"
        alt=""
        v-if="hasImg"
        @dblclick="createElement($event)" />
      <div v-interact
        class="drag-drop-ele"
        :style="ele.style"
        v-for="(ele, i) in eles"
        :key="i"
        @dblclick="ele.show && textBlockTrigger(ele.id)"
        :data-id="ele.id">
        <button style="top:0;right:0;position:absolute;"
          @click.stop="(ele.style.opacity='0.2', ele.show=false)"
          v-if="ele.show">X</button>
        <button style="top:0;right:0;position:absolute;"
          @click.stop="(ele.style.opacity='1', ele.show=true)"
          v-else>O</button>
        {{ ele.text }}
      </div>
      <text-input v-if="inputIsShow"
        :id="textBlock.id"
        :text="textBlock.content"
        :isEnd="textBlock.id === eles.length"
        @confirm="textBlockOnConfirm"
        @cancel="inputIsShow = false"
        @changeTo="changeTo"
        :value="textBlock.content"></text-input>
    </div>
    <div class="start"
      v-if="!hasImg">
      <label for="imgInput"
        class="fileInput">
        {{fileName !== '' ? fileName:'點此檔案上傳'}}
        <input type="file"
          name=""
          id="imgInput"
          @change="fileChange($event)" />
      </label>
      <button @click="hasImg = true">confirm</button>
    </div>
    <sidebar @addBlock="createElement()"
      v-if="hasImg"
      @toExcel="exportToExcel()"></sidebar>
  </div>
</template>
<script>
import TextInput from './components/text-input'
import sidebar from './components/menu'
import Xlsx from 'xlsx'
export default {
  name: 'app',
  components: {
    TextInput,
    sidebar
  },
  data () {
    return {
      eles: [],
      inputIsShow: false,
      fileName: '',
      imgUrl: '',
      hasImg: false,
      textBlock: {
        id: -1,
        content: ''
      }
    }
  },
  methods: {
    changeTo (isPrev) {
      if (this.textBlock.id <= this.eles.length) {
        if (!isPrev) {
          this.textBlock.id += 1
        } else {
          this.textBlock.id -= 1
        }
        this.textBlock.content = this.eles[this.textBlock.id - 1].text
      }
    },
    /** @param {MouseEvent} */
    createElement ($event) {
      let style = {}
      if ($event) {
        console.log($event)
        style = {
          top: `${$event.layerY}px`,
          left: `${$event.layerX}px`
        }
        console.log(style)
      }
      this.eles = this.eles.concat([{
        id: this.eles.length + 1,
        text: '',
        style,
        show: true
      }])
    },
    textBlockTrigger (id) {
      console.log(id)
      this.textBlock.id = id
      this.textBlock.content = this.eles.find(e => e.id === id).text
      this.inputIsShow = !this.inputIsShow
    },
    textBlockOnConfirm (content) {
      this.eles.find(e => e.id === this.textBlock.id).text = content
      console.log(this.eles)
      if (this.textBlock.id === this.eles[this.eles.length - 1].id) {
        this.inputIsShow = false
      } else {
        this.textBlock.id = this.eles.find(e => e.id >= this.textBlock.id + 1).id
      }
    },
    fileChange (event) {
      let files = event.target.files[0]
      console.log(files.name)
      this.fileName = files.name
      let reader = new FileReader()
      let self = this
      reader.onload = e => {
        self.imgUrl = e.target.result
      }
      reader.readAsDataURL(files)
    },
    exportToExcel () {
      let table = document.createElement('table')
      let tr = () => document.createElement('tr')
      let th = (text) => { let th = document.createElement('th'); th.innerText = text; return th }
      let td = text => { let td = document.createElement('td'); td.innerText = text; return td }
      let head = document.createElement('thead')
      let body = document.createElement('tbody')
      let thr = tr()
      thr.append(th('No'))
      thr.append(th('text'))
      head.append(thr)
      table.append(head)
      this.eles.forEach(e => {
        console.log(e.id)
        console.log(e.text)
        if (!e.show) return
        let { id, text } = e
        let t = tr()
        t.append(td(id))
        t.append(td(text))
        body.append(t)
      })
      table.append(body)
      console.log(table)
      let wb = Xlsx.utils.book_new()
      Xlsx.utils.book_append_sheet(wb, Xlsx.utils.table_to_sheet(table), 'tes')
      Xlsx.writeFile(wb, 'test.xlsx')
    }
  }
}
</script>
<style lang="stylus">
html, body
  position relative
  margin 0
  height 100%
  width 100%
#app
  display flex
  justify-content center
  align-items center
  min-height 100vh
  position relative
  margin 0
  .ctn
    position relative
    img
      user-select none
  .start
    display inline-block
    padding 2em 5em
    box-sizing border-box
    width 70vw
    label
      border solid black 1px
      input[type='file']
        display none
      padding 2em 2em
      box-sizing border-box
      width 100%
      display flex
      align-items center
      justify-content center
    button
      padding 1.3em 2em
      box-sizing border-box
      width 100%
.drag-drop-ele
  position absolute
  box-sizing border-box
  border solid black 2px
  padding 2em
  color white
  top 5em
  left 50%
  width 10em
  height 10em
  background rgba(0, 0, 0, 0.3)
  &:after
    content attr(data-id)
    position absolute
    top 0
    left 0
    max-width 40px
    padding 2px 10px
    border solid black 1px
    border-radius 0 0 4px 0
button.addBlock
  position absolute
  right 0
.background
  z-index 1
  height 100%
  width 100%
  display flex
  justify-content center
  align-items center
  position fixed
  top 0
  left 0
  background rgba(0, 0, 0, 0.3)
.modal
  display inline-block
.bottom-text
  width 80vw
  height 10em
.bottom-text-btn
  height 3em
  width 80vw
  box-sizing border-box
  display flex
  justify-content center
  align-items center
</style>
