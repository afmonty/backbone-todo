import Backbone from 'backbone';
import TodoModel from '../models/todoModel';

const TodoCollection = Backbone.Collection.extend({
	model: TodoModel,
	url:  "http://small-tiyfe.herokuapp.com/collections/annahuntertodos"
});

export default TodoCollection;