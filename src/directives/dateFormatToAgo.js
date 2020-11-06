import dateUtil from '@/utils/dateUtil'
const dateFormatToAgo = {
    bind(el, binding){
        el.innerHTML = dateUtil.dateFormatToAgo(binding.value);
    }
}
export default dateFormatToAgo;