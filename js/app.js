ts.ui.ready(function() {
	$('#branding').click(function(){
		toggleMenu();
	});
});

var toggleMenu = function(){
	$('.chrome-container.ng-scope').toggleClass('active');
	$('.chrome-container.ng-scope').toggleClass('menu-full');
	$('.chrome-menu').toggleClass('open');
	$('#branding').toggleClass('open');
};

$(function(){
	$("#select-basket-card-1").change(function() {
		$("#basket-card-container-1").toggleClass("selected", this.checked)
	}).change();
})
$(function(){
	$("#select-basket-card-2").change(function() {
		$("#basket-card-container-2").toggleClass("selected", this.checked)
	}).change();
})
$(function(){
	$("#select-basket-card-3").change(function() {
		$("#basket-card-container-3").toggleClass("selected", this.checked);
		$("#order-ready-items").prop('disabled', this.checked);
	}).change();
})
$(function(){
	$("#select-basket-card-4").change(function() {
		$("#basket-card-container-4").toggleClass("selected", this.checked)
	}).change();
})
$(function(){
	$("#select-basket-card-5").change(function() {
		$("#basket-card-container-5").toggleClass("selected", this.checked);
		$("#contact-supplier-button").prop('disabled', !this.checked);
		$('.card-footer').toggleClass("hidden", this.checked);
	}).change();
})
