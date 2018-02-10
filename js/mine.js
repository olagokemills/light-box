$(function(){

	var current_li;

	function setImg(src, id){
		$("#main").attr("src", src);

		var path = "text/" + id + ".txt";
		$.get(path, function(data){
			$("#description p").html(data);
		});

	}


	$("#portfolio img").click(function(){

		var id= $(this).attr("id");

		var src= $(this).attr("src");
		current_li = $(this).parent();
		
		setImg(src, id);

		$("#frame").fadeIn();
		$("#overlay").fadeIn();

	});

	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();
	});

	$("#left").click(function(){


		if(current_li.is(":first-child")){

			var prev_li = $("#portfolio li").last();
		}else{
			var prev_li = current_li.prev();
		}


		var prev_li = current_li.prev();

		var prev_src = prev_li.children("img").attr("src");

		var id = prev_li.children("img").attr("id");

		setImg(prev_src, id);

		current_li = prev_li;
	});

	$("#right").click(function(){

		if(current_li.is(":last-child")){

			var next_li = $("#portfolio li").first();
		}else{
			var next_li = current_li.next();
		}

		var next_src = next_li.children("img").attr("src");

		var id = next_li.children("img").attr("id");

		$("#main").attr("src", next_src);

		setImg(next_src, id);

		current_li = next_li;
	});


	$("#right, #left").mouseover(function(){
		$(this).css("opacity", "0.75");
	})
	$("#right, #left").mouseleave(function(){
		$(this).css("opacity", "0.5");
	})



});