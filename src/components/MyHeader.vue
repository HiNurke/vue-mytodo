<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
    import {nanoid} from 'nanoid'

    export default {
        name: 'MyHeader',
        data() {
            return {
                title: ''
            }
        },
        props: ['recieve'],
        methods: {
            add() {
                // 检验非空数据（等于空时就return）
                if(!this.title.trim()) return alert('输入不能为空')
                // 封装数据为对象元素
                const todoObj = {id:nanoid(), title: this.title, done: false}
                // 调用父级传入的函数，间接传回数据，执行父级的方法
                this.recieve(todoObj)
                // 清空输入
                this.title = ''
            }
        },
    }
</script>

<style scoped>
    /* header */
    .todo-header input {
        width: 100%;
        height: 36px;
        font-size: 16px;
        border: 1px solid #ccc;
        padding: 4px 7px;
        box-sizing: border-box;
    }
    .todo-header input:focus {
        outline: none;
        border-color: rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>