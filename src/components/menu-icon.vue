<template>
  <label class="menu-icon"
    :class="show && 'active'">
    <div class="line"></div>
  </label>
</template>
<script>
export default {
  props: ['show']
}
</script>

<style lang="stylus" scoped>
.menu-icon
  height 50px
  width 50px
  display flex
  align-items center
  justify-content center
  position relative
  text-align center
.line
  width 60%
  height 2px
  line-height 50px
  position relative
  background white
  transition all 0.3s
.menu-icon:before, .menu-icon:after
  background white
  content ''
  width 60%
  position absolute
  height 2px
  top 12px
  bottom 12px
  right 0
  left 0
  display block
  margin auto
  transition all 0.3s
.menu-icon:before
  bottom auto
.menu-icon:after
  top auto
.menu-icon.active .line
  opacity 0
  transform scale(0)
.menu-icon.active:after
  transform translateY(-12px) rotate(135deg)
.menu-icon.active:before
  transform translateY(12px) rotate(-135deg)
</style>
