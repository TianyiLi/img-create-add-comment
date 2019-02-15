<template>
  <div class="left-side-menu">
    <div class="background"
      :class="!isOpen && 'hide'"
      @click="closeSideMenu">
    </div>
    <div class="side-menu-ctn" :class="!isOpen && 'hide'">
      <ul class="side-menu-list" :class="!isOpen && 'hide'">
        <li @click="emitCommend('toExcel')">export to excel</li>
      </ul>
    </div>
    <div class="menu-ctn"
      @click="isOpen = !isOpen">
      <menu-icon :show="isOpen"></menu-icon>
    </div>
  </div>
</template>
<script>
import menuIcon from './menu-icon'
export default {
  data () {
    return {
      isOpen: false
    }
  },
  components: {
    menuIcon
  },
  methods: {
    closeSideMenu () {
      this.isOpen = false
    },
    emitCommend (arg) {
      this.isOpen = false
      this.$emit(arg)
    }
  }
}
</script>
<style lang="stylus" scoped>
.background.hide
  display none
.menu-ctn
  position fixed
  display inline-block
  background rgba(0,0,0,0.5)
  top 0.5em
  left 1em
  z-index 2
  border solid rgba(0, 0, 0, 0.4) 1px
  border-radius 0.2em
.side-menu-ctn
  position fixed
  left 0
  top 0
  &.hide
    width 0
    height 0
    z-index unset
  .side-menu-list
    padding-top calc(0.5em + 50px + 1.5em)
    font-size 1.5em
    height 100vh
    margin 0
    width 20vw
    min-width 15em
    box-shadow 0 0 1em black
    background white
    transition all 1s
    &.hide
      transform translateX(-100%)
      box-shadow unset
  z-index 2
ul
  list-style-type none
  padding 0
  li
    box-sizing border-box
    padding 0.3em 0em 0.3em 1em
    background rgba(0, 0, 0, 0.1)
    cursor pointer
    border-bottom 1px solid white
    &:hover
      background black
      color white
</style>
