<template>
  <div id="app">
    <div class="ctn"
      v-if="hasImg">
      <div class="ctn">
        <img v-for="(url, j) of imgUrl"
          :src="url"
          :key="j"
          alt=""
          @dblclick="createElement($event)" />
      </div>
      <div v-interact
        class="drag-drop-ele"
        :style="ele.style"
        v-for="(ele) in eles"
        :key="ele.id"
        :ref="`block${ele.id}`"
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
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop=""
        @dragover.prevent.stop=""
        @dragenter.prevent.stop=""
        @dragleave.prevent.stop=""
        @drop.prevent.stop="dropFile($event)"
        class="fileInput">
        {{fileName.length !== 0 ? fileName.join(', ') : '點此檔案上傳'}}
        <input type="file"
          name=""
          id="imgInput"
          multiple
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
      fileName: [],
      imgUrl: [],
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
        window.scroll({ top: this.$refs[`block${this.textBlock.id}`][0].offsetTop, left: 0, behavior: 'smooth' })
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
      window.scroll({ left: 0, top: this.$refs[`block${id}`][0].offsetTop, behavior: 'smooth' })
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
    dropFile (e) {
      e.preventDefault()
      e.stopPropagation()
      let files = e.dataTransfer.files
      let read = file => {
        let reader = new FileReader()
        reader.onload = e => {
          this.imgUrl.push(e.target.result)
        }
        reader.readAsDataURL(file)
      }
      for (let f of files) {
        read(f)
        this.fileName.push(f.name)
      }
    },
    fileChange (event) {
      let files = event.target.files
      console.log(files)
      this.fileName = []
      let read = file => {
        let reader = new FileReader()
        reader.onload = e => {
          this.imgUrl.push(e.target.result)
        }
        reader.readAsDataURL(file)
      }
      for (let f of files) {
        read(f)
        this.fileName.push(f.name)
      }
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
      display block
      max-width 100vw
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
  bottom 10em
  position absolute
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
