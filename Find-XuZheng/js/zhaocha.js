//取到多有文字的数组
var jieshaoP = document.getElementsByClassName("js1");
//console.log(jieshaoP[2]);
//文字一行行的显示 
var jsp = 0;
var timerP = setInterval(function() {
		jieshaoP[jsp].style.display = "block";
		jsp++;
		if (jsp >= jieshaoP.length) {
			//当文字显示完清除定时器
			clearInterval(timerP);
		}
	}, 600)
	//徐峥超人动画
$(document).ready(function() {
	//自动更换图片
	function showImg(val) {
		//获取图片数量
		var imgCount = $(".xz>img").length;
		//显示索引为val的图片
		$(".xz>img").hide();
		$(".xz>img").eq(val).fadeIn(0);
		if (num < (imgCount - 1)) {
			num += 1;
		} else {
			num = 0;
		}
		//300毫秒后重新绑定图片    
		setTimeout(function() {
			showImg(num);
		}, 200);
	}
	//加载图片
	var num = 0;
	showImg(num);
});
$(document).ready(function() {
	//自动更换图片
	function showImg(val) {
		//获取图片数量
		var imgCount = $(".xz2>img").length;
		//显示索引为val的图片
		$(".xz2>img").hide();
		$(".xz2>img").eq(val).fadeIn(0);
		if (num < (imgCount - 1)) {
			num += 1;
		} else {
			num = 0;
		}
		//200毫秒后重新绑定图片    
		setTimeout(function() {
			showImg(num);
		}, 200);
	}
	//加载图片
	var num = 0;
	showImg(num);
});
//徐峥超人
var super1 = document.getElementsByClassName("xz")[0];
var xzt = setInterval(function() {
	super1.style.display = "none";
}, 11000);
var super2 = document.getElementsByClassName("xz2")[0];
var xzt2 = setInterval(function() {
	super2.style.display = "block";
}, 11000);

//vivo手机
var vivo = document.getElementsByClassName("vivophone")[0];
var vivo2 = setInterval(function() {
	vivo.style.display = "block";
}, 14000)

//行星5
var star5 = document.getElementsByClassName("star5")[0];
var star6 = document.getElementsByClassName("star5-2")[0];
var xingqiut = setInterval(function() {
	star5.style.display = "none";
	star6.style.display = "block";
}, 11000);
//------------------------------介绍和游戏界面的链接-----------------------------//
$(".xingxing").click(function() {
		$(".wrap_one").hide();
		$(".playgame").show();
		$(".first").show();
	})
	//-----------------------Game Start----------------------------//

//随机函数
function rand(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
};
//------------------------------徐峥随机出现的地方第一关-----------------------------//
//生成4个框
for (var i = 0; i < 4; i++) {
	$("#d1").append("<img src='img/person_kuang.png' id='touxiang1'/>");
}
//生成4个包贝尔
for (var i = 0; i < 4; i++) {
	$("#d1-1").append("<img src='img/baobei.png' class='sj1-1'/>");
}
//徐峥随机出现
var one = rand(0, 4);
$(function() {
	$(".sj1-1").eq(one).attr("src", "img/xuzheng.png");
});
$(".sj1-1").eq(one).click(function() {
		$(".bingo1").show();
	})
	//------------------------------第一关和第二关的衔接-----------------------------//
$(".bingo1").click(function() {
		$(".bingo1").hide();
		$(".first").hide();
		$(".second").show();
	})
	//------------------------------徐峥随机出现的地方第二关-----------------------------//
	//生成9个框
for (var i = 0; i < 9; i++) {
	$("#d2").append("<img src='img/person_kuang.png' id='touxiang2'/>");
}
//生成9个包贝尔
for (var i = 0; i < 9; i++) {
	$("#d2-1").append("<img src='img/baobei.png' class='sj2-1'/>");
}
//徐峥随机出现
var two = rand(0, 9);
$(function() {
	$(".sj2-1").eq(two).attr("src", "img/xuzheng.png");
})
$(".sj2-1").eq(two).click(function() {
		$(".bingo2").show();
	})
	//------------------------------第二关和第三关的衔接-----------------------------//
$(".bingo2").click(function() {
		$(".bingo2").hide();
		$(".second").hide();
		$(".third").show();
	})
	//------------------------------徐峥随机出现的地方第三关-----------------------------//
	//生成16个框
for (var i = 0; i < 16; i++) {
	$("#d3").append("<img src='img/person_kuang.png' id='touxiang3'/>");
}
//生成16个包贝尔
for (var i = 0; i < 16; i++) {
	$("#d3-1").append("<img src='img/baobei.png' class='sj3-1'/>");
}
//徐峥随机出现
var three = rand(0, 16);
$(function() {
	$(".sj3-1").eq(three).attr("src", "img/xuzheng.png");
})
$(".sj3-1").eq(three).click(function() {
		$(".bingo3").show();
	})
	//------------------------------第三关和第四关的衔接-----------------------------//
$(".bingo3").click(function() {
		$(".bingo3").hide();
		$(".third").hide();
		$(".fourth").show();
	})
	//------------------------------徐峥随机出现的地方第四关-----------------------------//
for (var i = 0; i < 25; i++) {
	$("#d4").append("<img src='img/person_kuang.png' class='touxiang4'/>");
}
//生成25个包贝尔 
for (var i = 0; i < 25; i++) {
	$("#d4-1").append("<img src='img/baobei.png' class='sj4-1'/>");
}
//徐峥随机出现
var four = rand(0, 25);
$(function() {
	$(".sj4-1").eq(four).attr("src", "img/xuzheng.png");
})
$(".sj4-1").eq(four).click(function() {
		$(".bingo4").show();
	})
	//------------------------------第四关和第五关的衔接-----------------------------//
$(".bingo4").click(function() {
		$(".bingo4").hide();
		$(".fourth").hide();
		$(".fifth").show();
	})
	//------------------------------徐峥随机出现的地方第五关-----------------------------//
	//生成25个框
for (var i = 0; i < 25; i++) {
	$("#h5").append("<img src='img/person_kuang.png' class='touxiang4'/>");
}
//生成25个包贝尔
for (var i = 0; i < 25; i++) {
	$("#d5").append("<img src='img/baobei.png' class='sj5-1'/>");
}
//空的数组
var a = [];
//生成五个不同的随机数
while (a.length < 5) {
	var num = rand(0, 25);
	var bTest = true;
	for (var i = 0; i < a.length; i++) {
		if (num == a[i]) {
			bTest = false;
		}
	}
	//如果不重复，将这个随机数放进数组里面
	if (bTest) {
		a.push(num);
	}
}
var five0 = a[0];
var five1 = a[1];
var five2 = a[2];
var five3 = a[3];
var five4 = a[4];
//徐峥随机出现
$(function() {
	$(".sj5-1").eq(five0).attr("src", "img/tietou.png");
	$(".sj5-1").eq(five1).attr("src", "img/tietou.png");
	$(".sj5-1").eq(five2).attr("src", "img/tietou.png");
	$(".sj5-1").eq(five3).attr("src", "img/tietou.png");
	$(".sj5-1").eq(five4).attr("src", "img/xuzheng.png");
})
$(".sj5-1").eq(five4).click(function() {
		$(".bingo5").show();
	})
	//------------------------------第五关和第六关的衔接-----------------------------//
$(".bingo5").click(function() {
		$(".bingo5").hide();
		$(".fifth").hide();
		$(".sixth").show();
	})
	//------------------------------徐峥随机出现的地方第六关-----------------------------//
	//生成36个框
for (var i = 0; i < 36; i++) {
	$("#h6").append("<img src='img/person_kuang.png' class='touxiang5'/>");
}
//生成36个包贝尔
for (var i = 0; i < 36; i++) {
	$("#d6").append("<img src='img/baobei.png' class='sj6-1'/>");
}
var six = rand(0, 36);
//随机生成徐峥
$(function() {
	$(".sj6-1").eq(six).attr("src", "img/xuzheng.png");
})
$(".sj6-1").eq(six).click(function() {
		$(".bingo6").show();
	})
	//------------------------------第六关和第七关的衔接-----------------------------//
$(".bingo6").click(function() {
		$(".bingo6").hide();
		$(".sixth").hide();
		$(".seventh").show();
	})
	//------------------------------徐峥随机出现的地方第七关-----------------------------//
	//生成36个框
for (var i = 0; i < 36; i++) {
	$("#h7").append("<img src='img/person_kuang.png' class='touxiang7'/>");
}
//生成36个包贝尔
for (var i = 0; i < 36; i++) {
	$("#d7").append("<img src='img/baobei.png' class='sj7-1'/>");
}
//随机生成徐峥
//空的数组
var b = [];
//生成五个不同的随机数
while (b.length < 6) {
	var num = rand(0, 36);
	var bTest = true;
	for (var i = 0; i < b.length; i++) {
		if (num == a[i]) {
			bTest = false;
		}
	}
	//如果不重复，将这个随机数放进数组里面
	if (bTest) {
		b.push(num);
	}
}
var seven0 = b[0];
var seven1 = b[1];
var seven2 = b[2];
var seven3 = b[3];
var seven4 = b[4];
var seven5 = b[5];
//alert(b);
$(function() {
	$(".sj7-1").eq(seven0).attr("src", "img/tietou.png");
	$(".sj7-1").eq(seven1).attr("src", "img/tietou.png");
	$(".sj7-1").eq(seven2).attr("src", "img/tietou.png");
	$(".sj7-1").eq(seven3).attr("src", "img/tietou.png");
	$(".sj7-1").eq(seven4).attr("src", "img/tietou.png");
	$(".sj7-1").eq(seven5).attr("src", "img/xuzheng.png");
});
$(".sj7-1").eq(seven5).click(function() {
		$(".bingo7").show();
	})
	//------------------------------第七关和第八关的衔接-----------------------------//
$(".bingo7").click(function() {
		$(".bingo7").hide();
		$(".seventh").hide();
		$(".eighth").show();
	})
	//------------------------------徐峥随机出现的地方第八关-----------------------------//
	//生成49个框
for (var i = 0; i < 49; i++) {
	$("#h8").append("<img src='img/person_kuang.png' class='touxiang8'/>");
}
//生成49个包贝尔
for (var i = 0; i < 49; i++) {
	$("#d8").append("<img src='img/baobei.png' class='sj8-1'/>");
}
//随机生成徐峥
var eigth = rand(0, 49);
$(function() {
	$(".sj8-1").eq(eigth).attr("src", "img/xuzheng.png");
})
$(".sj8-1").eq(eigth).click(function() {
		$(".bingo8").show();
	})
	//------------------------------第八关和合体文字的衔接-----------------------------//
var fit = document.getElementsByClassName("fit-txt")[0];
$(".bingo8").click(function() {
	$(".bingo8").hide();
	$(".eighth").hide();
	$(".fit-txt").show();
	if ($(".fit-txt").show()) {
		var index = 0;
		var msg = document.getElementById("fit-txt2").innerHTML;

		function type() {
			document.getElementById("fit-txt3").innerHTML = msg.substring(0, index++);
		}
		setInterval(type, 100);
		var index = 0;
		var msg = document.getElementById("fit-txt2").innerHTML;

		function type() {
			document.getElementById("fit-txt3").innerHTML = msg.substring(0, index++);
		}
		setInterval(type, 100);
		var timer = setInterval(function() {
			$(".fit-txt1").hide();
			$(".chipsss").show();
		}, 5000);
		setInterval(function() {
			clearInterval(timer);
			$(".chipsss").hide();
		}, 11000);
		var timer1 = setInterval(function() {
			$(".vivo_mobile").show();
		}, 12000);

		$(".divkuang").on("click", function() {
			$(".vivo_mobile").hide();
			$(".choujiang1").show();
		});
		$(".divkuang2").on("click", function() {
			clearInterval(timer1);
			$(".vivo_mobile").hide();
			$(".shuoming").show();
		});
		$(".shanchude").on("click", function() {
			$(".shuoming").hide();
			$(".vivo_mobile").fadeIn();
		});
	}
})