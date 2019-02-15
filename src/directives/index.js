import interact from './interact'

const install = function (Vue) {
  Vue.directive('interact', interact)
}

interact.install = install
export {
  interact
}
