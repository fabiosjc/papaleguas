// js/models/todo.js

var app = app || {};

app.Todo = Backbone.Model.extends({
	defaults:{
		title: '',
		completed: false;
	}

	toggle: function(){
		this.save({
			completed: !this.get('completed');
		})
	}
})