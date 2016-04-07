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
	tagName: 'ol',
	className: 'listItem',
	events: {
		'click': 'removeItem'
	},
	initialize:  function(item, status) {
		this.item = item;
		this.status = false;
		this.render();
	},
	template: function() {
		const template = `
		<li>${this.item}</li>
		<div class = 'delItem>'</div>
		`;
	console.log(this.$el);
	},
	render: function() {		
		this.$el.html(this.template());
		$('.list').append(this.el);
	},
	removeItem: function() { //called on click
		this.item.remove();
	}
});

//var item = '';

$('.add').on ('click', (e) => {
		let todo = $('.inputItem').val();
		console.log(todo);
	   // list.push($('.inputItem').va()));
	   let item = new TodoList(todo);
	   console.log(item);
	   $('ol').append(todo.$el);
	});


// $(".add").click(function(e){
// 	list.push($(".inputItem").val());
// 	console.log(list)
// 	$('ol').append('<li>'+$(".inputItem").val()+'</li>');
// })




