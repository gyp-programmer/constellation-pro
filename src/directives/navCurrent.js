export default {
    mounted (el, binding) {
        const cur = binding.value.curIdx
        const items = el.getElementsByClassName('item-nav')
        items[cur].className += ` ${binding.value.activeClassName}`
    },
    updated (el, binding) {
        const cur = binding.value.curIdx
        const items = el.getElementsByClassName('item-nav')
        items[binding.oldValue.curIdx].className = binding.value.className
        items[cur].className += ` ${binding.value.activeClassName}`
    }
}