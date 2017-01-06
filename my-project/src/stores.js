/**
 * Created by Administrator on 2017/1/5 0005.
 */
const STORAGE_KEY = 'todoS-vuejs';

export default{
    fetch :function () {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save :function(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}
