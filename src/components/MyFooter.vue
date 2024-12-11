<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="isAll">
        </label>
        <span>
            <span>已完成 {{ doneTotal }}</span> / 全部 {{ total }}
        </span>
        <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: 'MyFooter',
		props: ['todos', 'checkAllTodo', 'clearDoneTodo'],
		computed: {
			total() {
				return this.todos.length
			},
			doneTotal() {
				return this.todos.reduce((pre, todo) => {
					return pre + (todo.done ? 1 : 0)
				}, 0)
			},
			isAll: {
				// 初始化及只读响应
				get() {
					return this.doneTotal === this.total
				},
				// 由v-bind绑定带来的isAll被修改（写）操作
				set(newValue) {
					this.checkAllTodo(newValue)
				}
			}
		},
		methods: {
			// 不要与传入的数据处理方法同名
			clearDone() {
				if(confirm('请确认是否清除所有已完成任务')) {
					if(this.doneTotal) {
						this.clearDoneTodo()
						alert(`✅ 已清除 ${this.doneTotal} 条记录`)
					} else {
						alert('❗️ 当前没有已完成任务')
					}
				}
			}
		}
    }
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 5px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>