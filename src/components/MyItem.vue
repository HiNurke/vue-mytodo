<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: 'MyItem',
		props: ['todo', 'changeTodo', 'deleteTodo'],
		methods: {
			// 通过是否勾选影响元素属性done值
			handleCheck(id) {
				// 思考一个问题，我能不能直接修改传入todo数据流中的done值呢？
				// 回答：不可以，因为违反了【props是单向数据流】的设定
				// 只能通过【数据在哪，操作数据的方法就在哪】的原则
				this.changeTodo(id)
			},
			// 删除数据中元素
			handleDelete(id) {
				// 通知App组件将对应的todo对象删除
				if (confirm('请确认是否删除该任务？')) {
					this.deleteTodo(id)
				}
			}
		}
    }
</script>

<style scoped>
    /* item */
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}
    li label {
		float: left;
		cursor: pointer;
	}
    li label input {
		vertical-align: middle;
		margin-right: 5px;
		position: relative;
		top: -1px;
	}
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
		/* 伪元素插入的内容重置为默认状态，也就是没有内容 */
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>