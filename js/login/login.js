/**
 * Created by a on 2016/12/27.
 */
(function () {
    function init() {
        var registerNow = $(".registerNow");
        var status = "login";
        registerNow.click(function () {
            var userID=$("#user").val();
            var password =$("#password").val();

            new Register(" http://datainfo.duapp.com/shopdata/userinfo.php",{status:status,userID:userID,password:password},$(".register"),function (result) {
                //console.log(result);
                if(result == 0){
                    alert("用户名不存在，请重新输入用户名！");

                }else if(result == 2){
                    alert("用户名密码错误，请重新输入密码！");
                }else {
                    window.location.href='index.html?'+userID;
                }
            });

        });

    }
    init();
})();
