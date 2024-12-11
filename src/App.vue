<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :recieve="recieve"/>
        <MyList :todos="todos" :changeTodo="changeTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearDoneTodo="clearDoneTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import MyList from './components/MyList'
  import MyFooter from './components/MyFooter'

  export default {
    name: 'App',
    components: {MyHeader, MyList, MyFooter},
    data() {
        return {
            // 为避免读取的是null类型数据，采用逻辑或
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
      // 接收并添加一个todo
      recieve(todoObj) {
        this.todos.unshift(todoObj)
      },
      // 接收点击的id并改变checkbox的状况
      changeTodo(id) {
        this.todos.forEach((todo) => {
          if(todo.id === id) todo.done = !todo.done
        })
      },
      // 通过id删除对应数据项
      deleteTodo(id) {
        this.todos = this.todos.filter((todo) => {
          // 返回符合条件（不等于该id）的数组
          return todo.id !== id
        })
      },
      // 全选or全不选
      checkAllTodo(done) {
        this.todos.forEach((todo) => {
          todo.done = done
        })
      },
      // 清除所有已完成的todo
      clearDoneTodo() {
        this.todos = this.todos.filter(todo => todo.done == false)
      }
    },
		watch: {
			// 对于todos的增删改查都同步到本地存储
			todos: {
				// 复杂数据，开启监视属性
				deep: true,
				handler(newValue) {
					localStorage.setItem('todos', JSON.stringify(newValue))
				}
			}
		}
  }
</script>

<style>
  /* base */
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
  .todo-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>