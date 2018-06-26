;(function () {
	const template = `
		<div>
			<section class="todoapp">
			<todo-heard></todo-heard>
			<todo-list></todo-list>
			<todo-footer></todo-footer>
			</section>
			<app-footer></app-footer>
		</div>
	`
	window.app = {
		template,
		components: {
			todoHeard,
			todoList,
			todoFooter,
			appFooter
		}
	}
})()
