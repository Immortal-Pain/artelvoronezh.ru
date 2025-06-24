$(document).on("click", ".qa-header", function() {
    $(this).next().toggle(400);
    $(this).toggleClass('active')
});
$(document).on("click", ".header .hamburger", function() {
    $(this).parent().find('.menu').toggle(400);
    $(this).toggleClass('active')
});
$(document).on("click", ".header .menu .close", function() {
    $(this).parent().toggle(400);
    $('.header .hamburger').toggleClass('active');
});

$(document).on("click", ".get-smeta", function() {
    const title = $(this).data().title;
    $("#tariff-dialog").dialog({
        title: "Тариф "+title,
        draggable: false,
        modal: true,
        resizable: false,
        width: 390,
        height: 844,
        closeText: "",
        classes: {
            "ui-dialog": "tariff-dialog",
            "ui-dialog-titlebar": "tariff-dialog-titlebar",
            "ui-dialog-titlebar-close": "close",
            "ui-dialog-title": "tariff-dialog-title",
        }
    });
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#remont-pod-kluch-carousel', {
        pagination: false,
    }).mount();
} );

$(document).on("click", ".portfolio-item", function() {
    let kp_panorama = ['kp_panorama1.png','kp_panorama2.png','kp_panorama3.png','kp_panorama4.png','kp_panorama5.png','kp_panorama6.png','kp_panorama7.png','kp_panorama8.png','kp_panorama9.png','kp_panorama10.png','kp_panorama11.png','kp_panorama12.png','kp_panorama13.png','kp_panorama14.png','kp_panorama15.png','kp_panorama16.png','kp_panorama17.png'];
    let kvartal = ['kvartal1.png','kvartal2.png','kvartal3.png','kvartal4.png','kvartal5.png','kvartal6.png','kvartal7.png','kvartal8.png','kvartal9.png'];
    let zhk_gor_sady = ['zhk_gor_sady1.png','zhk_gor_sady2.png','zhk_gor_sady3.png','zhk_gor_sady4.png','zhk_gor_sady5.png','zhk_gor_sady6.png','zhk_gor_sady7.png','zhk_gor_sady8.png','zhk_gor_sady9.png'];
    let st_yabl_sady = ['st_yabl_sady1.png','st_yabl_sady2.png','st_yabl_sady3.png','st_yabl_sady4.png','st_yabl_sady5.png','st_yabl_sady6.png','st_yabl_sady7.png','st_yabl_sady8.png','st_yabl_sady9.png','st_yabl_sady10.png'];
    let kolesnichenko = ['kolesnichenko1.png','kolesnichenko2.png','kolesnichenko3.png','kolesnichenko4.png','kolesnichenko5.png','kolesnichenko6.png','kolesnichenko7.png','kolesnichenko8.png','kolesnichenko9.png'];
    let imglist = new Map([
        ['kp_panorama', kp_panorama],
        ['kvartal', kvartal],
        ['zhk_gor_sady', zhk_gor_sady],
        ['st_yabl_sady', st_yabl_sady],
        ['kolesnichenko', kolesnichenko],
    ]);
    imglist.get($(this).data().portfolio).forEach(element => {
        $('#carousel-dialog #main-carousel .splide__track .splide__list').append('<li class="splide__slide"><img src="img/'+element+'" alt=""></li>')
        $('#carousel-dialog #thumbnail-carousel .splide__track .splide__list').append('<li class="splide__slide"><img src="img/'+element+'" alt=""></li>')
    });

    var main= new Splide( '#main-carousel', { pagination: false, } );
    var thumbnails = new Splide( '#thumbnail-carousel', {
        fixedWidth: 100,
        gap       : 10,
        rewind    : true,
        pagination: false,
    } );

    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();

    $("#carousel-dialog").dialog({
        title: "",
        draggable: false,
        modal: true,
        resizable: false,
        width: 390,
        height: 844,
        closeText: "",
        classes: {
            "ui-dialog": "tariff-dialog",
            "ui-dialog-titlebar": "tariff-dialog-titlebar",
            "ui-dialog-titlebar-close": "close",
            "ui-dialog-title": "tariff-dialog-title",
        },
        beforeClose: function( event, ui ) {
            $('#carousel-dialog #main-carousel .splide__track .splide__list').html('');
            $('#carousel-dialog #thumbnail-carousel .splide__track .splide__list').html('');
        }
    });
});

$(document).on("click", ".chat-wa", function() {
    document.location.href='https://wa.me/79066786873';
});