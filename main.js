
 // Slider img cars 
$('.cars__menus__check').click(() => {
  $('.cars__down').toggleClass('hdn');
  $('.cars__menus__check').toggleClass('rotate');
});


$('.cars__main__title').on('click', function() {
	$('.cars__btn').find('button').removeClass('down');
	$('.cars__btn').find('button').eq($(this).index()).toggleClass('down');
	if($(this).index() == 0){
		$('.cars__img').attr('src','img/ситроен/чистая.jpg');
		path = 'ситроен';
	} else if($(this).index() == 1){
		$('.cars__img').attr('src','img/мазда/чистая.jpg');
		path = 'мазда';
	} else {
		$('.cars__img').attr('src','img/мерседес/чистая.jpg');
		path = 'мерседес';
	}
});


$('body').click(({target}) => {
	const block = $('aside').find('li');		
	if (!block.is(target)) $('li').removeClass('active');
});

// Active click
$('.cars__menus').find('li').click(function(e) {
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else if($(this).index() < 6){
		$('li').removeClass('active');
		$(this).toggleClass('active');
		switch($(this).index()) {
			case 0: $('.cars__img').attr('src',`img/${path}/минимальный.jpg`); break
			case 1: $('.cars__img').attr('src',`img/${path}/стандарт.jpg`); break
			case 2: $('.cars__img').attr('src',`img/${path}/стандарт+.jpg`); break
			case 3: $('.cars__img').attr('src',`img/${path}/стандарт++.jpg`); break
			case 4: $('.cars__img').attr('src',`img/${path}/стандарт+++.jpg`); break
			case 5: $('.cars__img').attr('src',`img/${path}/целиком.jpg`); break
			default: $('.cars__img').attr('src',`img/${path}/чистая.jpg`); break
		}
	}	
});


$('.cars__menus').find('li').hover(function(){
	switch($(this).index()) {
		case 0: $('.cars__img').attr('src',`img/${path}/минимальный.jpg`); break
		case 1: $('.cars__img').attr('src',`img/${path}/стандарт.jpg`); break
		case 2: $('.cars__img').attr('src',`img/${path}/стандарт+.jpg`); break
		case 3: $('.cars__img').attr('src',`img/${path}/стандарт++.jpg`); break
		case 4: $('.cars__img').attr('src',`img/${path}/стандарт+++.jpg`); break
		case 5: $('.cars__img').attr('src',`img/${path}/целиком.jpg`); break
		default: $('.cars__img').attr('src',`img/${path}/чистая.jpg`); break
	};
},
() => {
	if($('aside').find('.cars__menus').hasClass('active')){
		switch($('.cars__menus').find('li.active').index()) {
			case 0: $('.cars__img').attr('src',`img/${path}/минимальный.jpg`); break
			case 1: $('.cars__img').attr('src',`img/${path}/стандарт.jpg`); break
			case 2: $('.cars__img').attr('src',`img/${path}/стандарт+.jpg`); break
			case 3: $('.cars__img').attr('src',`img/${path}/стандарт++.jpg`); break
			case 4: $('.cars__img').attr('src',`img/${path}/стандарт+++.jpg`); break
			case 5: $('.cars__img').attr('src',`img/${path}/целиком.jpg`); break
			default: $('.cars__img').attr('src',`img/${path}/чистая.jpg`); break
		};
	} else $('.cars__img').attr('src',`img/${path}/чистая.jpg`);
});

// Partials
$('.cars__down').find('li').hover(function(){
	if($('.cars__menus__check').hasClass('rotate') && $('aside').find('li').hasClass('active') && $('li.active').index() < 5){
		function addPartials(){
			$('.cars__about_me__item').find('.cars__img').removeClass('mb-strong');
			$('.cars__about_me__item').find('.partials').addClass('hdn');
			$('.cars__about_me__item').find('.partials').eq($('li.active').index()).toggleClass('hdn');
		};
		switch($(this).index()) {
		case 0: $('.cars__img').attr('src',`img/${path}/оптика.jpg`); addPartials(); break
		case 1: $('.cars__img').attr('src',`img/${path}/пороги-внутренние.jpg`); addPartials(); break
		case 2: $('.cars__img').attr('src',`img/${path}/пороги-наружние.jpg`); addPartials(); break
		case 3: $('.cars__img').attr('src',`img/${path}/двери.jpg`); addPartials(); break
		case 4: $('.cars__img').attr('src',`img/${path}/задние-крылья.jpg`); addPartials(); break
		case 5: $('.cars__img').attr('src',`img/${path}/капот.jpg`); addPartials(); break
		case 6: $('.cars__img').attr('src',`img/${path}/передний-бампер.jpg`); addPartials(); break
		case 7: $('.cars__img').attr('src',`img/${path}/задний-бампер.jpg`); addPartials(); break
		default: $('.cars__img').attr('src',`img/${path}/чистая.jpg`); addPartials(); break
		};	
	}	
},
() => {
	if($('.cars__menus').find('li').hasClass('active')){
		switch($('aside').children(":first").find('li.active').index()) {
			case 0: $('.cars__img').attr('src',`img/${path}/минимальный.jpg`); break
			case 1: $('.cars__img').attr('src',`img/${path}/стандарт.jpg`); break
			case 2: $('.cars__img').attr('src',`img/${path}/стандарт+.jpg`); break
			case 3: $('.cars__img').attr('src',`img/${path}/стандарт++.jpg`); break
			case 4: $('.cars__img').attr('src',`img/${path}/стандарт+++.jpg`); break
			case 5: $('.cars__img').attr('src',`img/${path}/целиком.jpg`); break
			default: $('.cars__img').attr('src',`img/${path}/чистая.jpg`); break
		};
		$('.cars__about_me__item').find('.cars__img').addClass('mb-strong');
		$('.cars__about_me__item').find('.partials').addClass('hdn');	
	}
});