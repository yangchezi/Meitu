$(function(){
	//===============================侧边栏=======================================
	$.ajax({
		url: '../js/data.json',
		type: 'GET',
		success:function(res){
			var nav = res[0].content;
			var html ="";
			for (var i = 0; i < nav.length; i++) {
				html +="<li><h3>"+ nav[i].title +"</h3>";
				for (var j = 0; j < nav[i].kind.length; j++) {
					html +="<p>"+ nav[i].kind[j].name +"</p>"
				};
				html += "<ul class='ul11'>";
				for (var k = 0; k < nav[i].child.length; k++) {
					html += '<li><b><img src="../images/'+ nav[i].child[k].imgURL+'"></b><span>'+ nav[i].child[k].name +'</span></li>';
				};
				html += "</ul></li>";
                $('.ul1').html(html);
			};

		}
	});
	//=========================轮播图=========================================
	/*$.ajax({
		url: '../js/data.json',
		type: 'GET',
		success:function(res){
			var nav = res[1].content;
			var html ="";
			for(var i = 0 ; i< nav.length ;i++){
				html+= '<li><img src="../images/'+ nav[i].imgURL +'"></li>';
			}
			$(".picture").html(html);
		}
	});*/
	//=================广告图======================================
	$.ajax({
		url: '../js/data.json',
		type: 'GET',
		success:function(res){
			var nav = res[2].content;
			var html = "";
			for(var i = 0; i<nav.length;i++){
				html += '<div><img src="../images/'+ nav[i].imgURL +'"></div>'
			}
			$(".ad").html(html);
			$(".ad div").eq(1).addClass('div2');
		}
	});
	//================商品展示=============================
	$.ajax({
		url: '../js/data.json',
		type: 'GET',
		success:function(res){
			var nav = res[3].content;
			var kind = res[3].kind;
			$(".main-phone h3").html(nav.title);
			$("mp-left").html('<img src="../images/'+ nav.imgURL +'">');
			var html = "";
			//console.log(kind.length)
			
			for(var i = 0; i<kind.length; i++){
				html +='<li><img src="../images/'+ kind[i].imgURL +'"><p>'+ kind[i].name +'</p><span>'+ kind[i].intro +'</span><br><b href="#">'+kind[i].price +'</b></li>'
			}
			$(".mp-right").html(html);
		}
	});
	$.ajax({
		url: '../js/data.json',
		type: 'GET',
		success:function(res){
			var nav = res[4].banner;
			
			var kind = res[4].content;
			$(".main-parts h3").html(nav.title);
			$(".mpa-left").html('<img src="../images/'+ nav[0].imgURL +'"><img src="../images/'+ nav[1].imgURL +'">');

			var html = "";
			//console.log(kind.length)
			
			for(var i = 0; i<kind.length; i++){
				html +='<li><img src="../images/'+ kind[i].imgURL +'"><p>'+ kind[i].name +'</p><span>'+ kind[i].intro +'</span><br><b href="#">'+kind[i].price +'</b></li>'
			}
			$(".mpa-right").html(html);
		}
	});
	$.ajax({
		url: '../js/data.json',
		type: 'GET',
		success:function(res){
			var nav = res[5].banner;
		
			var kind = res[5].content;
			$(".main-family h3").html(nav.title);
			$(".mf-left").html('<img src="../images/'+ nav[0].imgURL +'"><img src="../images/'+ nav[1].imgURL +'">');

			var html = "";
			//console.log(kind.length)
			
			for(var i = 0; i<kind.length; i++){
				html +='<li><img src="../images/'+ kind[i].imgURL +'"><p>'+ kind[i].name +'</p><span>'+ kind[i].intro +'</span><br><b href="#">'+kind[i].price +'</b></li>'
			}
			$(".mf-right").html(html);
		}
	});

})
