import Backbone from 'backbone';


const ToDoModel = Backbone.Model.extend({
	defaults: {
		task: 'Something to do'
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/annahuntertodos',
	idAttribute: '_id'
});

export default TodoModel;