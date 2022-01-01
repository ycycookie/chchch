$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="陳穎臻" &&  pwd=="930102"){
    	$('#h').text("登入成功！");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},4000);
	}
	else{
		alert("用戶名或密碼不正确！");
	}
});
s