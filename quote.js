function rc(){
	return parseInt(Math.random()*256);
}
$(document).ready(function() {

				
	$("#clickbutton").on("click", function(){
		$.getJSON('https://v1.hitokoto.cn/', function(json) {
			
				/*optional stuff to do after success */
				var color1=rc();
				var color2=rc();
				var color3=rc();
				var sumcolor=String(color1)+","+String(color2)+","+String(color3);
				$(".text").html(" "+json.hitokoto);
				$(".text,.fa-quote-left").css("color","rgb("+sumcolor+")");
				$(".author").css("color","rgb("+sumcolor+")");
				$("body,html").css("background-color","rgb("+sumcolor+")");
				$("#clickbutton").css("background-color","rgb("+sumcolor+")");
				$(".sharetwitterbutton").css("background-color","rgb("+sumcolor+")");
				$(".sharetumblrbutton").css("background-color","rgb("+sumcolor+")");
				$(".author").html("- "+json.creator);



		});	
		});
});

function twitter(){
window.location.href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20optimist%20proclaims%20that%20we%20live%20in%20the%20best%20of%20all%20possible%20worlds%2C%20and%20the%20pessimist%20fears%20this%20is%20true.%22%20James%20Branch%20Cabell';
}
function lumber(){
	window.location.href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DJames%2BBranch%2BCabell%26content%3DThe%2Boptimist%2Bproclaims%2Bthat%2Bwe%2Blive%2Bin%2Bthe%2Bbest%2Bof%2Ball%2Bpossible%2Bworlds%252C%2Band%2Bthe%2Bpessimist%2Bfears%2Bthis%2Bis%2Btrue.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button'
}