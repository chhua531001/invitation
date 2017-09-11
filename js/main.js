$(function () {

    $('.nav-list>li>a').click(function () {
        //		顯示navbar上activ的page
        $('.nav-list>li>a').removeClass('active');
        $(this).addClass('active');

        //		讀出click page的name
        var $target = $(this).attr('data-target');

        //		顯示active page的內容
        $('.page').removeClass('active');
        $($target).addClass('active');
        console.log($target);
        //        if ($target == '#page3') {
        //            console.log('Enter');
        //            //            $($target).addClass('mapActive');
        //            $('.map').addClass('mapActive');
        //
        //
        //
        //
        //        } else {
        //            console.log('Else');
        //            $('.map').removeClass('mapActive');
        //        }

    });

    // 當.ingredients裡面的li，被點擊時，執行以下...
    $('.clicker>.card').click(function () {
        // .click()
        //function(){}
        //.click(function(){ 要做什麼事情...})
        // 這個東西(被點擊的.ingredient>li)本身.
        // 切換class "done".

        //目前暫時不需要
        //        $(this).toggleClass('showCard');

        // toggle意味原本沒有class done的加入class done; 原本有class done的去除class done字.

    });

    // 建立google map api
    function initMap() {
        //        物件是大括號
        var myLocation = {

            lat: 25.0590374,
            lng: 121.5334559
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLocation,
            //            把scroll的功能關掉, 否則滑動到地圖時, 會無法往下滑動
            scrollwheel: false,
            //            關閉draggable的功能
            draggable: false,
            //            //            關閉google map defaule UI的功能
            //            disableDefaultUI: true,
            zoom: 20,

        });

        //        標識座標位置
        var marker = new google.maps.Marker({
            position: myLocation,
            //            icon: './img/'
            map: map
        });
    }

    //使用initMap
    google.maps.event.addDomListener(window, 'load', initMap);



});
