// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import Backbone from 'backbone';
import $ from 'jquery';
import TodoCollection from './collections/TodoCollection.js'


//let list = [];

const TodoList = Backbone.View.extend({
	tagName: 'li',
	className: 'listItem',
	events: {
		'click': 'removeItem'
	},
	initialize:  function(item) {
		this.item = item;
		this.status = false;
		this.render();
	},
	render: function() {	
		$(".inputItem").val("")
		this.$el.html(this.item);
		$('.list').append(this.$el);
	},
	removeItem: function() { //called on click
		this.$el.remove('li');
	}
});

	// $('.add').on('click', () => {
	// 	let todo = $('.inputItem').val();
	//     //list.push(todo);
	//     let item = new TodoList(todo);
	//     $('ol').append(item.$el);	
	// });


let list = new TodoCollection();
var settings = {
	success: function() {
		list.forEach((task) => {
			console.log(list.get('task'));
			let newTaskView = new TodoList(
				list.get('task')
			);
			$('ol').append(newTaskView.el);
		});
	}
};
list.fetch(settings);

$('.task-form').on('submit', (e) => {
	e.preventDefault();
	let newTask = {
		task: $('.inputItem').val()
	};
	list.create(newTask);
	let newTaskView = new TodoList(
		newTask.task
	);
	$('ol').append(newTaskView.el);
});



// // $(".add").click(function(e){
// // 	list.push($(".inputItem").val());
// // 	console.log(list)
// // 	$('ol').append('<li>'+$(".inputItem").val()+'</li>');
// // })




