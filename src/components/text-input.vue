<template>
  <div class="background"
    @click="$emit('cancel')">
    <div class="modal">
      <div class="text-wrap" @click.stop="" :data-id="id">
        <textarea class="bottom-text"
          v-model="content"></textarea>
      </div>
      <button class="bottom-text-btn"
        @click.stop="confirm">confirm</button>
      <button class="bottom-text-btn"
        :disabled="id === 1"
        @click.stop="change(true)">prev</button>
      <button class="bottom-text-btn"
        :disabled="isEnd"
        @click.stop="change(false)">next</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['text', 'id', 'isEnd'],
  data () {
    return {
      content: this.text
    }
  },
  watch: {
    id () {
      this.content = this.text
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm', this.content)
    },
    change (isPrev = false) {
      this.$emit('changeTo', isPrev)
    }
  }
}
</script>
<style lang="stylus" scoped>
.text-wrap
  position relative
  &:after
    position absolute
    background white
    bottom 100%
    left 0
    content attr(data-id)
    color black
    border-radius 3px 3px
    padding 0.3em 1em

</style>
