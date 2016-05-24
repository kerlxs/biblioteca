if(Meteor.isClient){
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});

	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});
}
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/',{
name: 'home',
action(){
	if(Meteor.userId()){
		FlowRouter.go('recipe-book');
	}
	GAnalytics.pageview();
	BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {//esta es la pagina
name: 'recipe-book',
action(){
	 GAnalytics.pageview();
	BlazeLayout.render('MainLayout',{main: 'Recipes'});//aqui le envio el template
}
});

FlowRouter.route('/recipe/:id', {//esta es la pagina
name: 'recipe',
action(){
	 GAnalytics.pageview();
	BlazeLayout.render('MainLayout',{main: 'RecipeSingle'});//aqui le envio el template
}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'ShoppingList'});
	}
});