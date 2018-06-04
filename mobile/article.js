var http = new HTTP();

//增加标签
function addTag(content) {
	if(content){
		
	}
	
	var txt = window.getSelection();
	var content = txt.toString();
	if(content.length <= 0) {
		return;
	}
	var r = txt.getRangeAt(0);
	var df = r.cloneContents();
	var elms = df.children;

	//检查是否选择了图片  检查是否跨段落选择
	for(var i = 0; i < elms.length; i++) {
		if(elms[i].nodeName == 'IMG' || elms[i].nodeName == 'P') {
			txt.removeAllRanges();
			alert("不允许跨段落选取")
			return;
		}
	}

	txt.deleteFromDocument();
	var span = document.createElement('span');
	var num = Math.floor(Math.random()*Math.random()*1000000);
	console.log(num)
	span.setAttribute("dataId","dataId"+num);
	
	span.ontouchend = function() {
		delTag($(this)[0]);
	}
	span.onclick = function() {
		delTag($(this)[0]);
		console.log(span)
	}

	span.appendChild(df);
	r.insertNode(span);
	txt.removeAllRanges();
}

//显示标签
function showTag() {
	alert("aaa");
}

//删除标签
function delTag(obj) {

	
	if(obj.parentNode){
		obj.outerHTML = obj.innerHTML;
	}
	
	if($(obj).find("span")){
		$("span").click(function(){
			delTag($(this)[0]);
		})
	}
//	console.log($(obj).find("span"));
//
//	//其他操作
//	$(obj).find("span").on("click",function(){
//		delTag($(this)[0]);
//	})
}

//点击高亮标签
$("span").on("touchend", function() {
	//检查
	delTag($(this)[0]);
});



//点击高亮标签
$("span").on("click", function() {
	//检查
	delTag($(this)[0]);
});