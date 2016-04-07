// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import Backbone from 'backbone';
import $ from 'jquery';

// import a module from another file.
// import tiy from './app.js';

// // Looks like the imported module was a function, because here we're executing it!
// tiy();

let list = [];

const TodoList = Backbone.View.extend({
	className: 'listItem',
	events: {
		'click .add': 'getItem',
		'keyup .input': 'addTodoClick'
	},
	initialize:  (item, status) => {
		this.item = item;
		this.status = false;
		console.log(this);
		this.render();
	},
	getItem:  () => {
		console.log(this.$(".inputItem"));
	    this.list.push(this.$("inputItem")); 
	},
	template: () => {
		const template = `
		<li>${this.item}</li>
		`;
	console.log(this.el);
	},
	render: () => {		
		this.$el.html(this.template());
		$('ol').append(this.el);
	},
	addTodoClick: () => {
	console.log('click');
	}
});
$(".add").click(function(e){
	list.push($(".inputItem").val());
	console.log(list)
	$('ol').append('<li>'+$(".inputItem").val()+'</li>');
})

// var $(".inputItem", this.el) = new todoList('eatme');
// todoList.render();