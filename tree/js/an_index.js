var winWidth =0;
var winHeight = 0;
/*********************实时监控*****************************/
//document.all("content").width=content.document.body.scrollWidth;	
$(function(){
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if ((document.body) && (document.body.clientHeight)){
		winHeight = document.documentElement.clientHeight;
	}
	var menuheight = winHeight-110;
	document.getElementById('leftdiv').style.height = parseInt(menuheight,10)+"px";
	
	var menuheight2 = menuheight-30;
	
	var contentwidth = winWidth-223;
	document.getElementById('content_index').style.width = contentwidth+"px";
//	var contentheight = winHeight-110;
//	document.getElementById('content').style.height = contentheight+"px";
});
window.onresize=function(){
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}	
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if ((document.body) && (document.body.clientHeight)){
		winHeight = document.documentElement.clientHeight;
	}
//	var menuheight = winHeight-110;
//	document.getElementById('leftdiv').style.height = parseInt(menuheight,10)+"px";
//	
//	var menuheight2 = menuheight-30;
	
	var contentwidth = winWidth-230;
	document.getElementById('content_index').style.width = contentwidth+"px";
//	var contentheight = winHeight-110;
//	document.getElementById('content').style.height = contentheight+"px";
}

$(function() {
	var CookieManager = {//获取cookie里面的UID
		getCookie : function(name) {
			var CookieFound = false;
			var start = 0;
			var end = 0;
			var CookieString = document.cookie;
			var i = 0;
			while (i <= CookieString.length) {
				start = i;
				end = start + name.length;
				if (CookieString.substring(start, end) == name) {
					CookieFound = true;
					break;
				}
				i++;
			}

			if (CookieFound) {
				start = end + 1;
				end = CookieString.indexOf(";", start);
				if (end < start)
					end = CookieString.length;
				return unescape(CookieString.substring(start, end));
			}
			return "";

		}
	};
	cookie = CookieManager.getCookie("UID");
	getMenu();
})

var _temp = "";
var childList;
var hrefLink;
var childrenLink;
var firstLink; 
function getMenu(){
	$.ajax({
		url:"data/dataTree.json",
		type:"get",
		dataType:"json",
		success:function(data){
			var dataTree = data.resultObj;
		 	if(dataTree[0].url!=""&&dataTree[0].url!="N/A"){//通过进来人的权限判断初始化时的第一个页面
		 		firstLink = dataTree[0].url;
		 	}else{
		 		firstLink = dataTree[0].children[0].url;
		 	};
		 	document.getElementById("content_index").src = firstLink+"?UID="+cookie;
		 	$.each(dataTree,function(i,v){
		 		childList = v.children;
		 		var _TEMPURL=v.url;
		 		var _TEMP="";
		 		if (_TEMPURL!=""&&_TEMPURL!="N/A") {
		 			hrefLink = "javascript:toLink(\""+_TEMPURL+"\")";
		 		}else{
		 			hrefLink = "#";
		 		};
		 		if(childList!=""){
		 		$.each(childList,function(i,v){
		 			if(v.type.indexOf("company")!=-1){
		 					childrenLink = "javascript:toParkStatu(\""+_TEMPURL+"\",\""+v.id+"\")";
		 			}else{
		 				childrenLink = "javascript:toLink(\""+v.url+"\")";
		 			}
		 			_TEMP += "<li><img src='images/index.png' alt='' /><a class="+v.id+" href="+childrenLink+">"+v.text+"</a></li>"
		 		})
		 	}else{
		 		_TEMP ="";
		 	}
		 		_temp += "<li><dd class='link'><a href="+hrefLink+">"+v.text+"</a><i class='fa fa-chevron-down'></i></dd>"
		 					+"<ul class='submenu'>"
							+_TEMP
							+"</ul>"
							+"</li>"
		 	})
		 	$("#accordion").append(_temp);
		}
	});
}
$(document).on('click', '.link', function() {
    $this = $(this);
	$next = $this.next();
	$next.slideToggle();
	$this.parent().toggleClass('open');
	$('.submenu').not($next).slideUp().parent().removeClass('open');

});
$(document).on('click', 'a', function() {
	$this = $(this);
	$("a").removeClass("selected");
	$this.addClass("selected");
});


