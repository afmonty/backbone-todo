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
	// template: function() {
	// 	const template = `
	// 	<li>${this.item}</li>
	// 	<div class = 'delItem'></div>
	// 	`;
	// 	return template;
	// },
	render: function() {	
		$(".inputItem").val("")
		this.$el.html(this.item);
		$('.list').append(this.$el);
	},
	removeItem: function() { //called on click
		this.$el.remove('li');
	}
});

	$('.add').on('click', () => {
		let todo = $('.inputItem').val();
	    list.push(todo);
	    let item = new TodoList(todo);
	    $('ol').append(item.$el);	
	});


// $(".add").click(function(e){
// 	list.push($(".inputItem").val());
// 	console.log(list)
// 	$('ol').append('<li>'+$(".inputItem").val()+'</li>');
// })




