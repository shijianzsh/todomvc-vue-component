;(function () {
	const template = `
		<header class="header">
			<h1>todos</h1>
			<input @keydown.enter="handleKeyDown" class="new-todo" placeholder="What needs to be done?" autofocus>
		</header>
	`
	window.todoHeard = {
		template,
		props: ['todos'],
		methods: {
			handleKeyDown (e) {
				const target = e.target
				const value = target.value.trim()
				if (!value.length) {
					return
				}
				// 子组件给父组件传递信息
				this.$emit('a', value)

				target.value = ''
				// 在子组件可已操作父组件传递来的数据
				// 注意： 只能操作引用类型的数据
				// 在子组件中不能直接为父组件传递下来的值直接赋值
				// 不建议使用这种写法
				// const todos = this.todos
				// todos.push({
				// 	id: todos.length ? todos[todos.length - 1] + 1 : 1,
				// 	title: value,
				// 	completed: false
				// })
			}
		}
	}
})()
