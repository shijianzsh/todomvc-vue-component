;(function () {
	const template = `
		<div>
			<section class="todoapp">
			<todo-heard @a="addTodo"></todo-heard>
			<!--只有 v-bind 才能传递动态数据-->
			<todo-list v-bind:todos="todos"></todo-list>
			<todo-footer></todo-footer>
			</section>
			<app-footer></app-footer>
		</div>
	`

	const todos = [
		{
			id: 1,
			title: '吃饭',
			completed: true
		},
		{
			id: 2,
			title: '玩游戏',
			completed: true
		},
		{
			id: 3,
			title: '打代码',
			completed: false
		}
	]

	window.App = {
		template,
		components: {
			todoHeard,
			todoList,
			todoFooter,
			appFooter
		},
		data () {
			return {
				todos
			}
		},
		// 在子组件中发布一个自定义事件，通知父组件可以去调用了
		// 在父组件使用子组件的标签上订阅子组件内部发布的自定义事件
		methods: {
			addTodo(titleText) {
				titleText = titleText.trim()
				if (!titleText.length) {
					return
				}
				const todos = this.todos
				todos.push({
					id: todos[todos.length - 1] + 1,
					title: titleText,
					completed: false
				})
			}
		}
	}
})()
