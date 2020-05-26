/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2000,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });

    $('.hero__categories ul').slideUp(400);
    $('.dropdown').on('click', function () {
        $(this).parent().find('ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */

    var proQty = $('.pro-qty');
    //proQty.parent().parent().parent().find('.itemName').text();

    // var temp = "Cream of Mushroom"
    // console.log(temp);
    // $.ajax({
    //     type: 'post',
    //     url: 'manage.php',
    //     data: {name : "Cream of Mushroom"},
    //     success: function(data) {
    //         var t2 = temp + data;
    //         console.log(t2);
    //
    //         if (data != 1) {
    //             $('h6:contains("Cream of Mushroom")').parent().css('background-color', 'red');
    //         }
    //         else {
    //             $('h6:contains("Cream of Mushroom")').parent().css('background-color', 'green');
    //         }
    //
    //     }
    // });

    var proQty = $('.pro-qty');
    proQty.hide();
    console.log("bhlal");



    $('.itemName').each(function () {
        console.log("bhlal");
        var itemName = $(this).text();
        //$(this).css('background-color', 'yellow');
        console.log(itemName);
        if ($(this).hasClass('can_drop')) {
            $(this).parent().find('li').each(function () {
                    console.log("here");
                    var selected = $(this).find('p').text();
                    console.log("hello  "+ selected);
                var price = $(this).find('.price');
                var name = itemName + " " + selected;
                console.log(name);

                $.ajax({
                    type: 'post',
                    url: 'price.php',
                    data: {name: name},
                    success: function (data) {
                        console.log("new price" + " " + data);

                        price.html("₹ " + data);

                    }
                });



                });

            console.log("can drop " + itemName);




        }
        else {
            var price = $(this).parent().find('.price');

            //$(this).css('background-color', 'yellow');

            //$("h6:contains("+ itemName +")").parent().css('background-color', 'blue');
            $.ajax({
                type: 'post',
                url: 'price.php',
                data: {name: itemName},
                success: function (data) {
                    console.log("new price" + " " + data);

                    price.html("₹ " + data);

                }
            });

            var tableNumber = sessionStorage.getItem("tableNumber");

            $.ajax({
                type: 'post',
                url: 'check_qty.php',
                data: {name: itemName, tableNumber: tableNumber},
                success: function (data) {
                    console.log("new price" + " " + data);

                    price.html("₹ " + data);

                }
            });



        }
        $.ajax({
            type: 'post',
            url: 'manage.php',
            data: {name: itemName},
            success: function (data) {
                console.log(itemName + " " + data);

                if (data != 1) {
                    $("h6:contains(" + itemName + ")").parent().hide();
                } else {
                    // $("h6:contains("+ itemName +")").parent().css('background-color', 'green');
                }

            }
        });


    });
    console.log("hiiiii");

    // $.ajax({
    //     type: 'post',
    //     url: 'manage.php',
    //     data: {no : no},
    //     success: function(data) {
    //         if(data == 102) {
    //
    //
    //             window.alert("it is was 101");
    //         } else {
    //             //window.alert("removing veg hot and sour");
    //             var proQty = $('.pro-qty');
    //             var itemName = proQty.parent().parent().parent().find('.itemName').each(function() {
    //                 $(this).css('background-color', 'yellow');
    //                 var itemName = $(this).text();
    //                 $("h6:contains("+ itemName +")").parent().css('background-color', 'blue');
    //             });
    //             // var itemName = "Hot N Sour Soup (Vegetables)";
    //             // $("h6:contains("+ itemName +")").parent().css('background-color', 'yellow');
    //             //window.alert(itemName[0].text());
    //
    //             //$("h6:contains("+ itemName +")").parent().css('background-color', 'green');
    //             // $('h6:contains("Hot N Sour Soup (Vegetables)")')
    //             //     .filter(function() { return $(this).children().length === 0;})
    //             //     .parent().css('background-color', 'red');
    //
    //         }
    //     }
    // });


    var table = $('.table');





    var no = 0;

    //console.log(no);


    var tableNo = $('.tableNo');
    //var logNo = $('.logNo');
    console.log("here");




    // logNo.on('click', function () {
    //     no = tableNo.val();
    //
    //     sessionStorage.setItem("tableNumber", no);
    //     //window.alert(no);
    //
    // });
    var button = $('.button_button1');

    button.on('click', function () {
        var no = tableNo.val();
        //var tableNumber = document.querySelector('.tableNo').value;
        sessionStorage.setItem("tableNumber", no);
        window.location.assign("http://3.23.241.214/main_menu.html");

    });
    var button2 = $('.button_button2');
    // button2.css({
    //     "color": "green",
    //     "border": "2px solid green"
    // });
    button2.on('click', function () {
        var no = tableNo.val();
        //var tableNumber = document.querySelector('.tableNo').value;
        //sessionStorage.setItem("tableNumber", no);
        window.location.assign("http://3.23.241.214/checkout.html");

    });

    var place_order = $('.place_order');
    place_order.css({
            "color": "green",
            "border": "2px solid green"
        });
    place_order.on('click', function () {
        var tableNumber = sessionStorage.getItem("tableNumber");
        $.ajax({
            type: 'POST',
            url: "place_order.php",
            data: {tableNo: tableNumber},
            success: function (result) {
                window.alert("Thank you for placeing your order for ₹ " + sessionStorage.getItem("total"));


            }

        });



    });


    var add = $('.add');
    console.log("abc");

    add.on('click', function () {
        var temp = $(this).parent().parent().find(".itemName").text();
        var price = $(this).parent().parent().find(".price").text();
        window.alert(price);
        price = price.substring(2);

        //window.alert(price);

        var tableNumber = sessionStorage.getItem("tableNumber");

        $.ajax({
            type: 'POST',
            url: "test.php",
            data: {name: temp, qty: 1, tableNo: tableNumber, price: price, amount: price},
            success: function (result) {
                console.log('the data was successfully 123 into sent to the server');
            }

        })
        $(this).hide();
        $(this).parent().find('.pro-qty').show();


        //window.alert(temp);


    });

    var add_drop = $('.add_drop');
    console.log("abc");

    add_drop.on('click', function () {
        var name = $(this).parent().parent().parent().parent().parent().parent().parent().find(".itemName").text();
        var selected = $(this).parent().parent().find('p').text();
        var price = $(this).parent().parent().find(".price").text();

        price = price.substring(2);
        name = name + " " + selected;
        console.log(price);
        console.log(name);

        var tableNumber = sessionStorage.getItem("tableNumber");

        $.ajax({
            type: 'POST',
            url: "test.php",
            data: {name: name, qty: 1, tableNo: tableNumber, price: price, amount: price},
            success: function (result) {
                console.log('the data was successfully 123 into sent to the server');
            }

        })
        $(this).hide();
        $(this).parent().find('.pro-qty').show();


        //window.alert(temp);


    });


//    var value = proQty.parent().find('input').val();


//    if (value > 0) {
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    //proQty.append('<span class="inc qtybtn">+</span>');
//    } else {
//
//    }
    proQty.on('click', '.qtybtn', no, function () {
        //window.alert(no);
        var $button = $(this);

        var oldValue = $button.parent().find('input').val();
        // $button.parent().parent().parent().css({
        //     "color": "green",
        //     "border": "2px solid green"
        // });
        oldValue = $button.parent().find('input').val();

        if ($button.parent().hasClass('pro_drop')) {
            var itemName = $button.parent().parent().parent().parent().parent().parent().parent().parent().find('.itemName').text();
            var selected = $button.parent().parent().parent().find('p').text();
            itemName = itemName + " " + selected;
            var price = $button.parent().parent().parent().find('h6').text();

            console.log(price);
        }
        else {
            var itemName = $button.parent().parent().parent().find('.itemName').text();
            var price = $button.parent().parent().parent().find('.price').text();


            }
        price = price.substring(2);




        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        var tableNumber = sessionStorage.getItem("tableNumber");
        console.log(itemName);
        console.log(newVal);
        console.log(tableNumber);
        console.log(price);
        console.log(price*newVal);

        $.ajax({
            type: 'POST',
            url: "qty.php",
            data: {name: itemName, qty: newVal, tableNo: tableNumber, price: price, amount: price * newVal},
            success: function (result) {
                console.log(result);
            }

        });
        $button.parent().find('input').val(newVal);
    });

//     var proQty_drop = $('.po-qty_drop');
//     proQty_drop.hide();
//
//
//     proQty_drop.prepend('<span class="dec qtybtn_drop">-</span>');
//     proQty_drop.append('<span class="inc qtybtn_drop">+</span>');
//     //proQty.append('<span class="inc qtybtn">+</span>');
// //    } else {
// //
// //    }
//     proQty_drop.on('click', '.qtybtn_drop', no, function () {
//         //window.alert(no);
//         var $button = $(this);
//
//         var oldValue = 1;
//         // $button.parent().parent().parent().css({
//         //     "color": "green",
//         //     "border": "2px solid green"
//         // });
//         oldValue = 1;
//         var itemName = $button.parent().parent().parent().find('.itemName').text();
//         var price = $button.parent().parent().parent().find('.price').text();
//         price = price.substring(2);
//         //window.alert(price);
//
//
//         if ($button.hasClass('inc')) {
//             var newVal = parseFloat(oldValue) + 1;
//         } else {
//             // Don't allow decrementing below zero
//             if (oldValue > 0) {
//                 var newVal = parseFloat(oldValue) - 1;
//             } else {
//                 newVal = 0;
//             }
//         }
//         var tableNumber = sessionStorage.getItem("tableNumber");
//
//         $.ajax({
//             type: 'POST',
//             url: "qty.php",
//             data: {name: itemName, qty: newVal, tableNo: tableNumber, price: price, amount: price * newVal},
//             success: function (result) {
//                 console.log('the data was successfully 123 change qt into sent to the server');
//             }
//
//         });
//         $button.parent().find('input').val(newVal);
//     });


    var tableNumber = sessionStorage.getItem("tableNumber");

    $.ajax({
        type: 'POST',
        url: "checkout.php",
        data: {tableNo: tableNumber},
        success: function (result) {
            console.log(result);
            var values = JSON.parse(result);
            console.log(values[0]['item_name']);
            var len = values.length;
            console.log(len)
            var i = 0;
            var sum = 0;
            for(i = 0; i < len; i++) {
                 var checkout_items = $('.checkout_items');
                // checkout_items.parent().find('.checkout__order__subtotal').find('span').html()
                sum = sum + (values[i]['amount'])*1;

                var list_item = "<li>"+values[i]['item_name']+" * "+values[i]['qty']+ "<span> ₹ "+values[i]['amount']+"</span></li>";
                checkout_items.append(list_item);
            }
            var checkout_items = $('.checkout_items');
            checkout_items.parent().find('.checkout__order__subtotal').find('span').html(" ₹ " + sum);
            checkout_items.parent().find('.checkout__order__total').find('span').html(" ₹ " + sum);
            sessionStorage.setItem("total", sum);

        }

        });


})(jQuery);