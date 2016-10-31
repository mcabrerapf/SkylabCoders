import angular from 'angular';

const homeConfig = ($stateProvider) => {
	'use struct';
	$stateProvider
		.state('home', {
			url:'/',
			template: 'Welcome to Home section!'
		});
};
const home = angular
	.module('home', [])
	.config(homeConfig);

export {home};



