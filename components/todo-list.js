;(function () {
	const template = `
		<section class="main">
			<!-- This section should be hidden by default and shown when there are todos -->
			<input id="toggle-all" class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				<!-- These are here just to show the structure of the list items -->
				<!-- List items should get the class \`editing\` when editing and \`completed\` when marked as completed -->
				<li class="completed" v-for="item in todos">
					<div class="view">
						<input class="toggle" type="checkbox" checked>
						<label>{{ item.title }}</label>
						<button class="destroy"></button>
					</div>
					<input class="edit" value="Create a TodoMVC template">
				</li>
			</ul>
		</section>
	`
	window.todoList = {
		template,
		props:['todos'],

	}
})()
