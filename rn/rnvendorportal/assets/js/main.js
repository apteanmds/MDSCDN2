jQuery.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;


	jQuery('#menuToggle').on('click', function(event) {
		jQuery('body').toggleClass('open');
	});

	jQuery('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		jQuery('.search-trigger').parent('.header-left').addClass('open');
	});

	jQuery('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		jQuery('.search-trigger').parent('.header-left').removeClass('open');
	});

	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });


});