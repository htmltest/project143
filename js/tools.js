$(document).ready(function() {

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $.validator.addMethod('inputDate',
        function(curDate, element) {
            if (this.optional(element) && curDate == '') {
                return true;
            } else {
                if (curDate.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/)) {
                    var userDate = new Date(curDate.substr(6, 4), Number(curDate.substr(3, 2)) - 1, Number(curDate.substr(0, 2)));
                    if ($(element).attr('min')) {
                        var minDateStr = $(element).attr('min');
                        var minDate = new Date(minDateStr.substr(6, 4), Number(minDateStr.substr(3, 2)) - 1, Number(minDateStr.substr(0, 2)));
                        if (userDate < minDate) {
                            $.validator.messages['inputDate'] = 'Минимальная дата - ' + minDateStr;
                            return false;
                        }
                    }
                    if ($(element).attr('max')) {
                        var maxDateStr = $(element).attr('max');
                        var maxDate = new Date(maxDateStr.substr(6, 4), Number(maxDateStr.substr(3, 2)) - 1, Number(maxDateStr.substr(0, 2)));
                        if (userDate > maxDate) {
                            $.validator.messages['inputDate'] = 'Максимальная дата - ' + maxDateStr;
                            return false;
                        }
                    }
                    return true;
                } else {
                    $.validator.messages['inputDate'] = 'Дата введена некорректно';
                    return false;
                }
            }
        },
        ''
    );

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

    $('body').on('change', '.form-file input', function() {
        var curInput = $(this);
        var curField = curInput.parents().filter('.form-file');
        var curName = curInput.val().replace(/.*(\/|\\)/, '');
        if (curName != '') {
            curField.find('.form-file-name').html(curName);
        } else {
            curField.find('.form-file-name').html('');
        }
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('.main-why-container').each(function() {
        $('.main-why-detail-inner').html($('.main-why-item').eq(0).find('.main-why-item-inner').html());
    });

    $('.main-why-item-inner').mouseover(function() {
        var curItem = $(this);
        $('.main-why-detail-inner').html(curItem.html());
        $('.main-why-detail .main-why-item-icon-detail').css({'left': '-30px', 'opacity': '0'}).animate({'left': '0', 'opacity': '1'}, 300);
        $('.main-why-detail .main-why-item-title').css({'left': '-30px', 'opacity': '0'}).delay(100).animate({'left': '0', 'opacity': '1'}, 300);
        $('.main-why-detail .main-why-item-text').css({'left': '-30px', 'opacity': '0'}).delay(200).animate({'left': '0', 'opacity': '1'}, 300);
    });

    $('.main-catalogue .catalogue-inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.73829 2.06836L2.99609 7.84738L9.73829 13.6264" stroke="white" stroke-width="3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26171 12.9316L8.0039 7.15262L1.26171 1.37359" stroke="white" stroke-width="3"/></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.main-press-list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.73829 2.06836L2.99609 7.84738L9.73829 13.6264" stroke="white" stroke-width="3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26171 12.9316L8.0039 7.15262L1.26171 1.37359" stroke="white" stroke-width="3"/></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('body').on('click', '.card-tabs-menu ul li a', function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.card-tabs-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            $('.card-tabs-menu-current').html($(this).html());
            var curIndex = $('.card-tabs-menu ul li').index(curLi);
            $('.card-tab.active').removeClass('active');
            $('.card-tab').eq(curIndex).addClass('active');
            $(window).trigger('resize');
        }
        $('.card-tabs-menu').removeClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.card-tabs-menu-current', function() {
        $('.card-tabs-menu').toggleClass('open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.card-tabs-menu').length == 0) {
            $('.card-tabs-menu').removeClass('open');
        }
    });

    $('.other .catalogue-inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.73829 2.06836L2.99609 7.84738L9.73829 13.6264" stroke="white" stroke-width="3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26171 12.9316L8.0039 7.15262L1.26171 1.37359" stroke="white" stroke-width="3"/></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    if ($('.other').length > 0) {
        $('footer').addClass('without-margin');
    }

    $('body').on('click', '.about-videos-item-link', function(e) {
        $('.about-videos-player').html('');
        $(this).parent().addClass('start');
        $(this).parent().find('.about-videos-player').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        e.preventDefault();
    });

    $('body').on('click', '.about-videos-list-item a', function(e) {
        var curItem = $(this).parent();
        if (!curItem.hasClass('active')) {
            $('.about-videos-list-item.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.about-videos-list-item').index(curItem);
            $('.about-videos-player').html('');
            $('.about-videos-item').removeClass('start');
            $('.about-videos-item.active').removeClass('active');
            $('.about-videos-item').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('.reviews-list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.73829 2.06836L2.99609 7.84738L9.73829 13.6264" stroke="white" stroke-width="3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26171 12.9316L8.0039 7.15262L1.26171 1.37359" stroke="white" stroke-width="3"/></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.reviews-list-item-anonce.with-more.open').removeClass('open');
    });

    $('body').on('click', '.reviews-list-item-detail a', function(e) {
        $(this).parent().prev().toggleClass('open');
        e.preventDefault();
    });

    $('.news-other-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.73829 2.06836L2.99609 7.84738L9.73829 13.6264" stroke="white" stroke-width="3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26171 12.9316L8.0039 7.15262L1.26171 1.37359" stroke="white" stroke-width="3"/></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true,
                    dots: true
                }
            }
        ]
    });

    $('body').on('click', '.faq-item-title', function(e) {
        $(this).parent().toggleClass('open');
        $(this).parent().find('.faq-item-text').stop(true, true).slideToggle();
        e.preventDefault();
    });

    $('.gallery').each(function() {
        var curGallery = $(this);
        curGallery.on('init', function(event, slick) {
            var curSlide = curGallery.find('.slick-current');
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-dots').css({'top': curPhotoHeight});
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
        curGallery.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            adaptiveHeight: true,
            fade: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 1159,
                    settings: {
                        arrows: false
                    }
                }
            ]
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var curSlide = curGallery.find('.slick-slide:not(.slick-cloned)').eq(nextSlide);
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-dots').css({'top': curPhotoHeight});
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
    });

    $('.header-search-link').click(function(e) {
        $('html').addClass('search-window-open');
        $('.search-window-form-input input').trigger('focus');
        e.preventDefault();
    });

    $('.search-window-close').click(function(e) {
        $('html').removeClass('search-window-open');
        e.preventDefault();
    });

    $('body').on('click', '.search-window-bg', function(e) {
        $('html').removeClass('search-window-open');
    });

    $('body').on('click', '.catalogue-filter-link, .catalogue-filter-plus', function() {
        $('html').toggleClass('catalogue-filter-open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.catalogue-filter').length == 0) {
            $('html').removeClass('catalogue-filter-open');
        }
    });

    $('.form-slider').each(function() {
        var curSlider = $(this);
        var curRange = curSlider.find('.form-slider-range-inner')[0];
        var curStartFrom = Number(curSlider.find('.form-slider-min').html());
        if (Number(curSlider.find('.form-slider-from').val()) !== 0) {
            curStartFrom = Number(curSlider.find('.form-slider-from').val());
        }
        var curStartTo = Number(curSlider.find('.form-slider-max').html());
        if (Number(curSlider.find('.form-slider-to').val()) !== 0) {
            curStartTo = Number(curSlider.find('.form-slider-to').val());
        }
        noUiSlider.create(curRange, {
            start: [curStartFrom, curStartTo],
            connect: true,
            range: {
                'min': Number(curSlider.find('.form-slider-min').html()),
                'max': Number(curSlider.find('.form-slider-max').html())
            },
            tooltips: [wNumb({thousand: ' '}), wNumb({thousand: ' '})],
            step: Number(curSlider.find('.form-slider-step').html()),
            format: wNumb({
                decimals: 0
            })
        });
        curRange.noUiSlider.on('update', function(values, handle) {
            if (handle == 0) {
                curSlider.find('.form-slider-from').val(values[handle]);
                curSlider.find('.form-slider-hints-from span').html(String(values[handle]).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            } else {
                curSlider.find('.form-slider-to').val(values[handle]);
                curSlider.find('.form-slider-hints-to span').html(String(values[handle]).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            }
        });
        curRange.noUiSlider.on('end', function(values, handle) {
            filterCatalogue();
        });
    });

    $('.catalogue-filter').each(function() {
        filterCatalogue();
    });

    $('.catalogue-filter-select').each(function() {
        var curSelect = $(this);
        if (curSelect.find('.catalogue-filter-select-item input:checked').length == 0) {
            curSelect.find('.catalogue-filter-select-current').html(curSelect.attr('data-placeholder'));
        } else {
            var newText = '';
            curSelect.find('.catalogue-filter-select-item input:checked').each(function() {
                if (newText !== '') {
                    newText += '; ';
                }
                newText += $(this).parent().find('span').html();
            });
            curSelect.find('.catalogue-filter-select-current').html(newText);
        }
    });

    $('body').on('click', '.catalogue-filter-select-current', function() {
        var curSelect = $(this).parent();
        if (curSelect.hasClass('open')) {
            curSelect.removeClass('open');
        } else {
            $('.catalogue-filter-select.open').removeClass('open');
            curSelect.addClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.catalogue-filter-select').length == 0) {
            $('.catalogue-filter-select.open').removeClass('open');
        }
    });

    $('body').on('change', '.catalogue-filter-select-item input', function() {
        var curSelect = $(this).parents().filter('.catalogue-filter-select');
        if (curSelect.find('.catalogue-filter-select-item input:checked').length == 0) {
            curSelect.find('.catalogue-filter-select-current').html(curSelect.attr('data-placeholder'));
        } else {
            var newText = '';
            curSelect.find('.catalogue-filter-select-item input:checked').each(function() {
                if (newText !== '') {
                    newText += '; ';
                }
                newText += $(this).parent().find('span').html();
            });
            curSelect.find('.catalogue-filter-select-current').html(newText);
        }
        filterCatalogue();
    });

    $('body').on('click', '.catalogue-filter-list-item-remove', function(e) {
        var curGroup = $('.catalogue-filter-item-field').eq($(this).attr('data-group'));
        if (curGroup.find('.catalogue-filter-select').length > 0) {
            curGroup.find('.catalogue-filter-select-item input:checked').prop('checked', false).trigger('change');
        }
        if (curGroup.find('.form-slider').length > 0) {
            curGroup.find('.form-slider-range-inner')[0].noUiSlider.set([Number(curGroup.find('.form-slider-min').html()), Number(curGroup.find('.form-slider-max').html())]);
        }
        filterCatalogue();
    });

    $('.catalogue-filter-item-title').click(function() {
        $(this).parent().toggleClass('open');
    });

    $('.catalogue-filter-reset a').click(function(e) {
        $('.catalogue-filter-list-item-remove').each(function(e) {
            var curGroup = $('.catalogue-filter-item-field').eq($(this).attr('data-group'));
            if (curGroup.find('.catalogue-filter-select').length > 0) {
                curGroup.find('.catalogue-filter-select-item input:checked').prop('checked', false).trigger('change');
            }
            if (curGroup.find('.form-slider').length > 0) {
                curGroup.find('.form-slider-range-inner')[0].noUiSlider.set([Number(curGroup.find('.form-slider-min').html()), Number(curGroup.find('.form-slider-max').html())]);
            }
        });
        filterCatalogue();
        e.preventDefault();
    });

    $('.catalogue-sort-link').click(function() {
        $('html').toggleClass('catalogue-sort-open');
    });

    $('.catalogue-sort-link-mobile').click(function() {
        $('html').toggleClass('catalogue-sort-open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.catalogue-sort').length == 0 || $(e.target).hasClass('catalogue-sort-list')) {
            $('html').removeClass('catalogue-sort-open');
        }
    });

    $('body').on('change', '.catalogue-sort-item input', function() {
        var activeItem = $('.catalogue-sort-item input:checked').parent().parent();
        $('.catalogue-sort-link').html(activeItem.find('span').html());
        $('html').removeClass('catalogue-sort-open');

        filterCatalogue();
    });

    $('body').on('click', '[data-href]', function(e) {
        window.open($(this).attr('data-href'), '_blank');
        e.preventDefault();
    });

    $('.header-lang-link').click(function(e) {
        $('.header-lang').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.header-lang').length == 0) {
            $('.header-lang').removeClass('open');
        }
    });

    $('.card-side-option').click(function(e) {
        var curWindow = $($(this).attr('href'));
        if (curWindow.length == 1) {
            var curPadding = $('.wrapper').width();
            var curWidth = $(window).width();
            if (curWidth < 480) {
                curWidth = 480;
            }
            var curScroll = $(window).scrollTop();
            $('html').addClass('window-options-open');
            curPadding = $('.wrapper').width() - curPadding;
            $('body').css({'margin-right': curPadding + 'px'});
            $('header').css({'padding-right': curPadding + 'px'});

            curWindow.addClass('open');

            $('.wrapper').css({'top': -curScroll});
            $('.wrapper').data('curScroll', curScroll);
            $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        }

        e.preventDefault();
    });

    $('.window-options-close').click(function(e) {
        $('.window-options.open').removeClass('open');
        $('html').removeClass('window-options-open');
        $('body').css({'margin-right': 0});
        $('header').css({'padding-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            if ($('.window-options.open').length > 0) {
                $('.window-options-close').trigger('click');
            }
        }
    });

    $('body').on('click', '.window-options-bg', function(e) {
        $('.window-options-close').trigger('click');
    });

    $('.footer-menu-block').each(function(e) {
        var curBlock = $(this);
        if (curBlock.find('.footer-menu-block-list').length == 1) {
            curBlock.addClass('footer-menu-block-with-submenu');
        }
    });

    $('.footer-menu-block .footer-menu-block-title a').click(function(e) {
        var curBlock = $(this).parents().filter('.footer-menu-block-with-submenu');
        if (curBlock.length == 1) {
            if ($(window).width() < 1170) {
                curBlock.toggleClass('open');
                e.preventDefault();
            }
        }
    });

    $('.footer-contacts .footer-menu-block-title a').click(function(e) {
        var curBlock = $(this).parents().filter('.footer-contacts');
        if (curBlock.length == 1) {
            if ($(window).width() < 1170) {
                curBlock.toggleClass('open');
                e.preventDefault();
            }
        }
    });

    $('.main-why-item-inner').click(function() {
        if ($(window).width() < 1170) {
            $(this).toggleClass('open');
        }
    });

    $('.main-services-item-inner').click(function(e) {
        if ($(window).width() < 1170) {
            e.preventDefault();
        }
    });

    $('.main-services-item-title').click(function() {
        $(this).parents().filter('.main-services-item').toggleClass('open');
    });

    $('.main-services-item-link').click(function() {
        if ($(window).width() < 1170) {
            window.location = $(this).parents().filter('.main-services-item-inner').attr('href');
        }
    });

    $('.tariffs-item-more').click(function() {
        $(this).parents().filter('.tariffs-item').toggleClass('open');
    });

    $('.card-text-more a').click(function(e) {
        $(this).parents().filter('.card-text').toggleClass('open');
        e.preventDefault();
    });

    $('.mobile-menu-link').click(function(e) {
        if ($('html').hasClass('mobile-menu-open')) {
            $('html').removeClass('mobile-menu-open');
            $('meta[name="viewport"]').attr('content', 'width=device-width');
            $('.wrapper').css('margin-top', 0);
            $(window).scrollTop($('html').data('scrollTop'));
        } else {
            var curWidth = $(window).width();
            if (curWidth < 480) {
                curWidth = 480;
            }
            var curScroll = $(window).scrollTop();
            $('html').addClass('mobile-menu-open');
            $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
            $('html').data('scrollTop', curScroll);
            $('.wrapper').css('margin-top', -curScroll);
        }
        e.preventDefault();
    });

    $('.nav ul li a').click(function(e) {
        if ($(window).width() < 1170) {
            if ($(this).parent().find('ul').length > 0) {
                $(this).parent().toggleClass('open');
                e.preventDefault();
            }
        }
    });

    $('.main-catalogue-info').each(function() {
        $('.main-catalogue-info').data('initial', true);
        $('.main-catalogue-info').data('animated', false);
        $('.main-catalogue-info-value span').each(function() {
            var curValue = $(this);
            if (!curValue.parent().hasClass('main-catalogue-info-value-price')) {
                curValue.data('value', parseInt(curValue.html().replace(',', '')));
                curValue.html('0');
            } else {
                curValue.data('value', parseFloat(curValue.html().replace(',', '')));
                curValue.html('0.00');
            }
        });
        $(window).trigger('resize');
    });

    $('.main-welcome-world').each(function() {
        var curBlock = $(this);
        var curZoom = 1;
        var curDiff = 0.0005;
        $(document).on('mousemove', function(e) {
            curZoom += curDiff;
            if (curZoom >= 1.02) {
                curDiff = -0.0005;
            }
            if (curZoom <= 0.98) {
                curDiff = 0.0005;
            }
            curBlock.css({'transform': 'scale(' + curZoom + ')'});
        });
    });

    $('body').on('click', '.catalogue-view a', function(e) {
        var curLink = $(this);
        if (!curLink.hasClass('active')) {
            $('.catalogue-container').stop(true, true);
            $('.catalogue-container').animate({'opacity': 0}, function() {
                $('.catalogue-view a.active').each(function() {
                    $('.catalogue-container').removeClass($(this).attr('data-classlist'));
                });
                $('.catalogue-view a.active').removeClass('active');
                curLink.addClass('active');
                $('.catalogue-container').addClass(curLink.attr('data-classlist'));
                $('.catalogue-container').animate({'opacity': 1});
            });
        }
        e.preventDefault();
    });

    $('.catalogue-view a.active').each(function() {
        var curLink = $(this);
        $('.catalogue-container').addClass(curLink.attr('data-classlist'));
    });

    $('.main-how-item-inner').on('mouseover', function() {
        window.clearTimeout(howTimer);
        curIndex = curIndex - 1;
        howTimer = null;
        $('.main-how-item').removeClass('prev').removeClass('active');
        $(this).parent().addClass('hover');
    });

    $('.main-how-item-inner').on('mouseout', function() {
        $('.main-how-item:lt(' + curIndex + ')').addClass('prev');
        $('.main-how-item').removeClass('hover');
        nextHow();
    });

});

var howTimer = null;
var curIndex = 0;

function nextHow() {
    if (curIndex > 4) {
        curIndex = 0;
        $('.main-how-item').removeClass('prev').removeClass('active');
        $('.main-how-item').eq(curIndex).addClass('active');
    } else {
        $('.main-how-item.active').addClass('prev').removeClass('active');
        $('.main-how-item').eq(curIndex).addClass('active');
    }
    curIndex = curIndex + 1;
    howTimer = window.setTimeout(nextHow, 2000);
}

$(window).on('load', function() {
    $('.main-how-container').each(function() {
        nextHow();
    });
});

function filterCatalogue() {
    $('.catalogue-filter-list').html('');
    for (var i = 0; i < $('.catalogue-filter-item-field').length; i++) {
        var curGroup = $('.catalogue-filter-item-field').eq(i);
        var newHTML = '';
        var newText = '';

        if (curGroup.find('.catalogue-filter-select').length > 0 && curGroup.find('.catalogue-filter-select-list input:checked').length > 0) {
            newHTML = '<div class="catalogue-filter-list-item"><div class="catalogue-filter-list-item-text">';
            for (var j = 0; j < curGroup.find('.catalogue-filter-select-list input:checked').length; j++) {
                if (j > 0) {
                    newHTML += '; ';
                    newText += ', ';
                }
                newHTML += curGroup.find('.catalogue-filter-select-list input:checked').eq(j).parent().find('span').html();
                newText += curGroup.find('.catalogue-filter-select-list input:checked').eq(j).parent().find('span').html();
            }
            newHTML += '</div><div class="catalogue-filter-list-item-remove" data-group="' + i + '"></div></div>';
        }

        if (curGroup.find('.form-slider').length > 0) {
            if (!((curGroup.find('.form-slider-from').val() == curGroup.find('.form-slider-min').html()) && (curGroup.find('.form-slider-to').val() == curGroup.find('.form-slider-max').html()))) {
                newHTML = '<div class="catalogue-filter-list-item"><div class="catalogue-filter-list-item-text">';
                newHTML += curGroup.find('.form-slider-hints-from').html() + ' ' + curGroup.find('.form-slider-hints-to').html() + ' ' + curGroup.find('.form-slider-unit').html();
                newText += curGroup.find('.form-slider-hints-from').html() + ' ' + curGroup.find('.form-slider-hints-to').html() + ' ' + curGroup.find('.form-slider-unit').html();
                newHTML += '</div><div class="catalogue-filter-list-item-remove" data-group="' + i + '"></div></div>';
            }
        }

        curGroup.parents().filter('.catalogue-filter-item').find('.catalogue-filter-item-title-values').html(newText);

        $('.catalogue-filter-list').append(newHTML);
    }

    $('.catalogue-container').addClass('loading');
    var curForm = $('.catalogue-ctrl form');
    $.ajax({
        type: 'POST',
        url: curForm.attr('action'),
        dataType: 'html',
        data: curForm.serialize(),
        cache: false
    }).done(function(html) {
        $('.catalogue-container').html(html)
        $('.catalogue-container').removeClass('loading');
        $(window).trigger('resize');
    });
}

$(window).on('load resize', function() {

    $('.catalogue-inner').each(function() {
        var curList = $(this);

        curList.find('.catalogue-item-content').css({'min-height': '0px'});

        curList.find('.catalogue-item-content').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.catalogue-item-content').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.main-services-container').each(function() {
        var curList = $(this);

        curList.find('.main-services-item-content').css({'height': 'auto'});
        curList.find('.main-services-item-inner').css({'height': 'auto'});

        curList.find('.main-services-item-content').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-services-item-content').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'height': curHeight + 'px'});
                    }
                }
            });
        });

        curList.find('.main-services-item-content').each(function() {
            var curBlock = $(this).parent();
            var curHeight = curBlock.outerHeight();
            curBlock.css({'height': curHeight + 'px'});
        });
    });

    $('.reviews-list-item-anonce').each(function() {
        var curAnonce = $(this);
        curAnonce.removeClass('with-more');
        if (curAnonce.find('.reviews-list-item-anonce-inner').height() > curAnonce.height()) {
            curAnonce.addClass('with-more');
        }
    });

    $('.publishings-why-list').each(function() {
        var curList = $(this);

        curList.find('.publishings-why-item-inner').css({'min-height': '0px'});

        curList.find('.publishings-why-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.publishings-why-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.for-clients-why-list').each(function() {
        var curList = $(this);

        curList.find('.for-clients-why-item-inner').css({'min-height': '0px'});

        curList.find('.for-clients-why-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.for-clients-why-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    if ($(window).width() > 1169) {
        $('.about-videos-big').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });

        $('.about-press-list').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });
    } else {
        $('.about-videos-big').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true,
                    dots: true
                });
            }
        });

        $('.about-press-list').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true,
                    dots: true
                });
            }
        });
    }

    $('.card-text').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open with-more');
        if (curBlock.find('.card-text-wrap').height() > curBlock.find('.card-text-inner').height()) {
            curBlock.addClass('with-more');
        }
    });

    $('.order-company-btn a').click(function(e) {
        $('.order-company-item:not(.order-company-item-add)').remove();
        $('.order-company').addClass('loading').removeClass('error');
        $('.order-company-message').hide();
        $.ajax({
            type: 'POST',
            url: $(this).attr('href'),
            dataType: 'json',
            cache: false,
            success: function(data) {
                if (data.status) {
                    $('.order-company').removeClass('loading').addClass('loading-success');
                    var newHTML = '';
                    var inputName = $('.order-company-list').attr('data-inputname');
                    for (var i = 0; i < data.data.length; i++) {
                        var curCompany = data.data[i];
                        newHTML += '<div class="order-company-item"><label><input type="radio" name="' + inputName + '" value="' + curCompany.ID + '" /><div class="order-company-item-inner"><div class="order-company-item-logo">';
                        if (curCompany.LOGOTYPE_SRC !== '') {
                            newHTML += '<img src="' + curCompany.LOGOTYPE_SRC + '" alt="" />';
                        }
                        newHTML += '</div><div class="order-company-item-title">' + curCompany.NAME + '</div></div></label></div>';
                    }
                    $('.order-company-list form').append(newHTML);
                } else {
                    $('.order-company').removeClass('loading').addClass('error');
                    $('.order-company-message').html('<div class="message message-error"><div class="message-title">Ошибка</div><div class="message-text">' + data.message + '</div></div>');
                    $('.order-company-message').show();
                }
            },
            error: function() {
                $('.order-company').removeClass('loading').addClass('error');
                $('.order-company-message').html('<div class="message message-error"><div class="message-title">Ошибка</div><div class="message-text">Загрузка данных невозможна</div></div>');
                $('.order-company-message').show();
            }
        });
        e.preventDefault();
    });

    $('body').on('change', '.order-company-list .order-company-item input', function() {
        $('.order-company-list .order-company-item input:checked').each(function() {
            var curItem = $(this).parents().filter('.order-company-item').addClass('active');
            $('.order-company').addClass('selected');
            $('.order-press').addClass('active');
            $('.send-company-id').val($(this).val());
        });
    });

    $('.order-company-other a').click(function(e) {
        $('.order-company-list .order-company-item input:checked').prop('checked', false);
        $('.order-company-item.active').removeClass('active');
        $('.order-company').removeClass('selected');
        $('.order-press').removeClass('active');
        $('.send-company-id').val('');

        $('.order-press-list .order-press-item input:checked').prop('checked', false);
        $('.order-press').removeClass('selected');
        $('.send-release-id').val('');
        $('.order-press-item').remove();
        $('.order-press').removeClass('loading-success').removeClass('error');
        $('.order-press-message').hide();

        $('.order-send').removeClass('active');

        e.preventDefault();
    });

    var pressMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    $('.order-press-btn a').click(function(e) {
        $('.order-press-item').remove();
        $('.order-press').addClass('loading').removeClass('error');
        $('.order-press-message').hide();
        var filterData = {'company': $('.order-company-list .order-company-item input:checked').val()};
        if ($('.order-filter-date-from').val() != '') {
            filterData['dateFrom'] = $('.order-filter-date-from').val();
        }
        if ($('.order-filter-date-to').val() != '') {
            filterData['dateTo'] = $('.order-filter-date-to').val();
        }
        for (var i = 0; i < $('.order-press-filter .form-checkbox').length; i++) {
            var curInput = $('.order-press-filter .form-checkbox').eq(i).find('input');
            if (curInput.prop('checked')) {
                filterData[curInput.attr('name')] = 'Y';
            }
        }
        if ($('.order-press-search-window-input input').val() != '') {
            filterData[$('.order-press-search-window-input input').attr('name')] = $('.order-press-search-window-input input').val();
        }
        if ($('.order-press-pager .pager a.active').length > 0) {
            filterData['page'] = 'page-' + $('.order-press-pager .pager a.active').html();
        }
        $.ajax({
            type: 'POST',
            url: $(this).attr('href'),
            dataType: 'json',
            data: filterData,
            cache: false,
            success: function(data) {
                if (data.status) {
                    $('.order-press').removeClass('loading').addClass('loading-success');
                    var newHTML = '';
                    var inputName = $('.order-press-list').attr('data-inputname');
                    for (var i = 0; i < data.data.list.length; i++) {
                        var curPress = data.data.list[i];
                        newHTML += '<div class="order-press-item"><label><input type="radio" name="' + inputName + '" value="' + curPress.ID + '" /><div class="order-press-item-inner">';
                        newHTML += '<div class="order-press-item-title">' + curPress.NAME + '</div>';
                        newHTML += '<div class="order-press-item-text">' + curPress.PREVIEW_TEXT + '</div>';
                        newHTML += '<div class="order-press-item-date">' + curPress.DATE.substr(0, 2) + ' ' + pressMonths[Number(curPress.DATE.substr(3, 2)) - 1] + ' ' + curPress.DATE.substr(6, 4) + '</div>';
                        newHTML += '<div class="order-press-item-media">';
                        if (curPress.PICTURE_COUNT > 0) {
                            newHTML += '<div class="order-press-item-media-item">' +
                                            '<div class="order-press-item-media-preview" style="background-image:url(' + curPress.PICTURE_SRC + ')"></div>' +
                                            '<div class="order-press-item-media-count">' +
                                                '<div class="order-press-item-media-count-value">+' + curPress.PICTURE_COUNT + '</div>' +
                                                '<div class="order-press-item-media-count-unit">фото</div>' +
                                            '</div>' +
                                        '</div>';
                        }
                        if (curPress.VIDEO_COUNT > 0) {
                            newHTML += '<div class="order-press-item-media-item">' +
                                            '<div class="order-press-item-media-preview order-press-item-media-preview-video"" style="background-image:url(' + curPress.VIDEO_SRC + ')"></div>' +
                                            '<div class="order-press-item-media-count">' +
                                                '<div class="order-press-item-media-count-value">+' + curPress.VIDEO_COUNT + '</div>' +
                                                '<div class="order-press-item-media-count-unit">видео</div>' +
                                            '</div>' +
                                        '</div>';
                        }
                        newHTML += '</div>';
                        newHTML += '</div></label></div>';
                    }
                    $('.order-press-list form').append(newHTML);
                    var pagerHTML = '';
                    if (data.data.pageCount > 1) {
                        pagerHTML += '<div class="pager"><a href="#" class="pager-prev"></a>';
                        var newCurPage = data.data.page.replace('page-', '');
                        for (var i = 0; i < data.data.pageCount; i++) {
                            var curPage = i + 1;
                            if (curPage == newCurPage) {
                                pagerHTML += '<a href="#" class="active">' + curPage + '</a>';
                            } else {
                                pagerHTML += '<a href="#">' + curPage + '</a>';
                            }
                        }
                        pagerHTML += '<a href="#" class="pager-next"></a></div>';
                    }
                    $('.order-press-pager').html(pagerHTML);
                } else {
                    $('.order-press').removeClass('loading').addClass('error');
                    $('.order-press-message').html('<div class="message message-error"><div class="message-title">Ошибка</div><div class="message-text">' + data.message + '</div></div>');
                    $('.order-press-message').show();
                }
            },
            error: function() {
                $('.order-press').removeClass('loading').addClass('error');
                $('.order-press-message').html('<div class="message message-error"><div class="message-title">Ошибка</div><div class="message-text">Загрузка данных невозможна</div></div>');
                $('.order-press-message').show();
            }
        });
        e.preventDefault();
    });

    $('body').on('change', '.order-press-list .order-press-item input', function() {
        $('.order-press-list .order-press-item input:checked').each(function() {
            var curItem = $(this).parents().filter('.order-press-item').addClass('active');
            $('.order-press').addClass('selected');
            $('.order-send').addClass('active');
            $('.send-release-id').val($(this).val());
        });
    });

    $('.order-press-other a').click(function(e) {
        $('.order-press-list .order-press-item input:checked').prop('checked', false);
        $('.order-press-item.active').removeClass('active');
        $('.order-press').removeClass('selected');
        $('.send-release-id').val('');

        $('.order-send').removeClass('active');

        e.preventDefault();
    });

    $('body').on('click', '.order-press-filter-link', function() {
        $('html').toggleClass('order-press-fitler-open');
    });

    $(document).click(function(e) {
        var isDatepicker = false;
        var curClass = $(e.target).attr('class');
        if ((curClass !== undefined && curClass.indexOf('datepicker') > -1) || $(e.target).parents().filter('[class^="datepicker"]').length > 0) {
            isDatepicker = true;
        }
        if ($(e.target).parents().filter('.order-press-filter').length == 0 && !isDatepicker) {
            $('html').removeClass('order-press-fitler-open');
        }
    });

    $('.order-press-filter .form-input-date input').each(function() {
        var myDatepicker = $(this).data('datepicker');
        if (myDatepicker) {
            myDatepicker.update('onSelect', function(formattedDate, date, inst) {
                orderFilterUpdate();
            });
        }
    });

    $('body').on('change', '.order-press-filter .form-checkbox input', function(e) {
        orderFilterUpdate();
    });

    $('body').on('change', '.order-press-filter .form-input-date input', function(e) {
        orderFilterUpdate();
    });

    $('.order-press-search-window form').each(function() {
        var curForm = $(this);
        var validator = curForm.validate();
        validator.destroy();
        curForm.validate({
            ignore: '',
            submitHandler: function(form) {
                $('.order-press-btn a').trigger('click');
            }
        });
    });

    $('body').on('click', '.order-press-filter-param span', function() {
        var curId = $(this).attr('data-id');
        var curField = $('.order-press-filter-params-window *[data-id="' + curId + '"]');
        if (curField.parents().filter('.form-checkbox').length > 0) {
            curField.prop('checked', false);
            curField.trigger('change');
        }
        if (curField.hasClass('order-press-filter-params-window-dates')) {
            curField.find('input').val('');
            curField.find('input').trigger('change');
        }
    });

    $('body').on('click', '.order-press-search-link', function(e) {
        $('.order-press-search').toggleClass('open');
        if ($('.order-press-search').hasClass('open')) {
            $('.order-press-search-window-input input').trigger('focus');
        }
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.order-press-search').length == 0) {
            $('.order-press-search').removeClass('open');
        }
    });

    $('body').on('click', '.order-press-pager .pager a', function(e) {
        var curLink = $(this);
        if (!curLink.hasClass('active')) {
            if (!(curLink.hasClass('pager-prev') && $('.order-press-pager .pager-prev').next().hasClass('active')) && !(curLink.hasClass('pager-next') && $('.order-press-pager .pager-next').prev().hasClass('active'))) {
                $('.order-press-pager .pager a.active').removeClass('active');
                curLink.addClass('active');
                $('.order-press-btn a').trigger('click');
            }
        }
        e.preventDefault();
    });

});

function orderFilterUpdate() {
    var newHTML = '';
    var id = -1;
    var countFilters = 0;

    if ($('.order-press-filter-params-window-dates').length == 1) {
        id++;
        $('.order-press-filter-params-window-dates').attr('data-id', id);
        var datesText = '';
        if ($('.order-filter-date-from').val() != '') {
            datesText += 'с ' + $('.order-filter-date-from').val();
            countFilters++;
        }
        if ($('.order-filter-date-to').val() != '') {
            if (datesText != '') {
                datesText += ' ';
            }
            datesText += 'по ' + $('.order-filter-date-to').val();
            countFilters++;
        }
        if (datesText != '') {
            newHTML += '<div class="order-press-filter-param">' + datesText + '<span data-id="' + id + '"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4.5 4.5L8 1" stroke-width="1.2"/><path d="M8 8L4.5 4.5L1 8" stroke-width="1.2"/></svg></span></div>';
        }
    }

    for (var i = 0; i < $('.order-press-filter .form-checkbox').length; i++) {
        var curInput = $('.order-press-filter .form-checkbox').eq(i).find('input');
        id++;
        curInput.attr('data-id', id);
        if (curInput.prop('checked')) {
            newHTML += '<div class="order-press-filter-param">' + curInput.parent().find('span').text() + '<span data-id="' + id + '"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4.5 4.5L8 1" stroke-width="1.2"/><path d="M8 8L4.5 4.5L1 8" stroke-width="1.2"/></svg></span></div>';
            countFilters++;
        }
    }

    if (countFilters == 0) {
        $('.order-press-filter-link span').remove();
    } else {
        $('.order-press-filter-link span').remove();
        $('.order-press-filter-link').append('<span>' + countFilters + '</span>');
    }

    $('.order-press-filter-params').html(newHTML);

    $('.order-press-btn a').trigger('click');
}

$(window).on('load resize scroll', function() {
    var curScroll = $(window).scrollTop();

    $('.card-side').each(function() {
        var curBlock = $(this);
        if (curScroll > curBlock.offset().top - 70) {
            curBlock.addClass('fixed');
            if (curScroll + curBlock.find('.card-side-inner').outerHeight() + 70 > $('.card').offset().top + $('.card').outerHeight()) {
                curBlock.find('.card-side-inner').css({'margin-top': ($('.card').offset().top + $('.card').outerHeight()) - (curScroll + curBlock.find('.card-side-inner').outerHeight() + 70)});
            } else {
                curBlock.find('.card-side-inner').css({'margin-top': 0})
            }
        } else {
            curBlock.removeClass('fixed');
            curBlock.find('.card-side-inner').css({'margin-top': 0})
        }
    });

    $('.basket-side').each(function() {
        var curBlock = $(this);
        if (curScroll > curBlock.offset().top - 70) {
            curBlock.addClass('fixed');
            if (curScroll + curBlock.find('.basket-side-inner').outerHeight() + 70 > $('.basket').offset().top + $('.basket').outerHeight()) {
                curBlock.find('.basket-side-inner').css({'margin-top': ($('.basket').offset().top + $('.basket').outerHeight()) - (curScroll + curBlock.find('.basket-side-inner').outerHeight() + 70)});
            } else {
                curBlock.find('.basket-side-inner').css({'margin-top': 0})
            }
        } else {
            curBlock.removeClass('fixed');
            curBlock.find('.basket-side-inner').css({'margin-top': 0})
        }
    });
});

function initForm(curForm) {
    curForm.find('.form-input input, .form-input textarea').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        }
    });

    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

    curForm.find('.form-input-date input').mask('00.00.0000');
    curForm.find('.form-input-date input').attr('autocomplete', 'off');
    curForm.find('.form-input-date input').addClass('inputDate');

    curForm.find('.form-input-date input').on('keyup', function() {
        var curValue = $(this).val();
        if (curValue.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/)) {
            var isCorrectDate = true;
            var userDate = new Date(curValue.substr(6, 4), Number(curValue.substr(3, 2)) - 1, Number(curValue.substr(0, 2)));
            if ($(this).attr('min')) {
                var minDateStr = $(this).attr('min');
                var minDate = new Date(minDateStr.substr(6, 4), Number(minDateStr.substr(3, 2)) - 1, Number(minDateStr.substr(0, 2)));
                if (userDate < minDate) {
                    isCorrectDate = false;
                }
            }
            if ($(this).attr('max')) {
                var maxDateStr = $(this).attr('max');
                var maxDate = new Date(maxDateStr.substr(6, 4), Number(maxDateStr.substr(3, 2)) - 1, Number(maxDateStr.substr(0, 2)));
                if (userDate > maxDate) {
                    isCorrectDate = false;
                }
            }
            if (isCorrectDate) {
                var myDatepicker = $(this).data('datepicker');
                if (myDatepicker) {
                    var curValueArray = curValue.split('.');
                    myDatepicker.selectDate(new Date(Number(curValueArray[2]), Number(curValueArray[1]) - 1, Number(curValueArray[0])));
                    myDatepicker.show();
                    $(this).focus();
                }
            } else {
                $(this).addClass('error');
                return false;
            }
        }
    });

    curForm.find('.form-input-date input').each(function() {
        var minDateText = $(this).attr('min');
        var minDate = null;
        if (typeof (minDateText) != 'undefined') {
            var minDateArray = minDateText.split('.');
            minDate = new Date(Number(minDateArray[2]), Number(minDateArray[1]) - 1, Number(minDateArray[0]));
        }
        var maxDateText = $(this).attr('max');
        var maxDate = null;
        if (typeof (maxDateText) != 'undefined') {
            var maxDateArray = maxDateText.split('.');
            maxDate = new Date(Number(maxDateArray[2]), Number(maxDateArray[1]) - 1, Number(maxDateArray[0]));
        }
        if ($(this).hasClass('maxDate1Year')) {
            var curDate = new Date();
            curDate.setFullYear(curDate.getFullYear() + 1);
            curDate.setDate(curDate.getDate() - 1);
            maxDate = curDate;
            var maxDay = curDate.getDate();
            if (maxDay < 10) {
                maxDay = '0' + maxDay
            }
            var maxMonth = curDate.getMonth() + 1;
            if (maxMonth < 10) {
                maxMonth = '0' + maxMonth
            }
            $(this).attr('max', maxDay + '.' + maxMonth + '.' + curDate.getFullYear());
        }
        var startDate = new Date();
        if (typeof ($(this).attr('value')) != 'undefined') {
            var curValue = $(this).val();
            if (curValue != '') {
                var startDateArray = curValue.split('.');
                startDate = new Date(Number(startDateArray[2]), Number(startDateArray[1]) - 1 , Number(startDateArray[0]));
            }
        }
        $(this).datepicker({
            language: 'ru',
            minDate: minDate,
            maxDate: maxDate,
            startDate: startDate,
            toggleSelected: false
        });
        if (typeof ($(this).attr('value')) != 'undefined') {
            var curValue = $(this).val();
            if (curValue != '') {
                var startDateArray = curValue.split('.');
                startDate = new Date(Number(startDateArray[2]), Number(startDateArray[1]) - 1 , Number(startDateArray[0]));
                $(this).data('datepicker').selectDate(startDate);
            }
        }
    });

    curForm.find('.form-input textarea').each(function() {
        $(this).css({'height': this.scrollHeight, 'overflow-y': 'hidden'});
        $(this).on('input', function() {
            this.style.height = '99px';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });

    $('.form-reset input').click(function() {
        window.setTimeout(function() {
            curForm.find('.form-input input, .form-input textarea').each(function() {
                $(this).parent().removeClass('focus');
                if ($(this).val() != '') {
                    $(this).parent().addClass('full');
                } else {
                    $(this).parent().removeClass('full');
                }
            });

            curForm.find('.form-input textarea').each(function() {
                $(this).css({'height': this.scrollHeight, 'overflow-y': 'hidden'});
                $(this).on('input', function() {
                    this.style.height = '99px';
                    this.style.height = (this.scrollHeight) + 'px';
                });
            });

            curForm.find('.form-file input').each(function() {
                var curInput = $(this);
                var curField = curInput.parents().filter('.form-file');
                var curName = curInput.val().replace(/.*(\/|\\)/, '');
                if (curName != '') {
                    curField.find('.form-file-name').html(curName);
                } else {
                    curField.find('.form-file-name').html('');
                }
            });

            curForm.find('.form-select select').each(function() {
                var curSelect = $(this);
                curSelect.trigger({type: 'select2:select'});
            });
        }, 100);
    });

    curForm.find('.form-select select').each(function() {
        var curSelect = $(this);
        var options = {
            minimumResultsForSearch: 20
        }
        if (curSelect.prop('multiple')) {
            options['closeOnSelect'] = false;
        }

        if (curSelect.parents().filter('.window').length == 1) {
            options['dropdownParent'] = $('.window-content');
        }

        curSelect.select2(options);
        curSelect.on('select2:selecting', function (e) {
            if (curSelect.prop('multiple')) {
                var $searchfield = $(this).parent().find('.select2-search__field');
                $searchfield.val('').trigger('focus');
            }
        });
        if (curSelect.find('option:selected').legnth > 0 || curSelect.find('option').legnth == 1 || curSelect.find('option:first').html() != '') {
            curSelect.trigger({type: 'select2:select'})
        }
    });

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            if (curForm.hasClass('ajax-form')) {
                curForm.addClass('loading');
                var formData = new FormData(form);

                if (curForm.find('[type=file]').length != 0) {
                    var file = curForm.find('[type=file]')[0].files[0];
                    formData.append('file', file);
                }

                $.ajax({
                    type: 'POST',
                    url: curForm.attr('action'),
                    processData: false,
                    contentType: false,
                    dataType: 'html',
                    data: formData,
                    cache: false
                }).done(function(html) {
                    curForm.replaceWith(html);
                });
            } else {
                form.submit();
            }
        }
    });
}

$(window).on('load resize scroll', function() {
    var curScroll = $(window).scrollTop();
    if (curScroll > 0) {
        $('html').addClass('header-fixed');
        var lastScroll = $('header').data('lastScroll');
        if (typeof (lastScroll) == 'undefined') {
            lastScroll = 0;
        }

        if (Math.abs(lastScroll - curScroll) > 5) {
            if (curScroll > lastScroll){
                $('header').addClass('header-up');
            } else {
                $('header').removeClass('header-up');
            }
            $('header').data('lastScroll', curScroll);
        }
    } else {
        $('html').removeClass('header-fixed');
    }

    $('.about-header-bg, .main-welcome-bg').each(function() {
        $(this).css({'transform': 'translate3d(0px, ' + curScroll / 2 + 'px, 0px)'});
    });

    $('.main-catalogue-info').each(function() {
        var curBlock = $(this);
        if (curBlock.data('initial') && !curBlock.data('animated') && (curScroll + $(window).height() > curBlock.offset().top)) {
            curBlock.data('animated', true);

            var infoInterval = window.setInterval(function() {
                $('.main-catalogue-info-value span').each(function() {
                    var curSpan = $(this);
                    var maxValue = curSpan.data('value');
                    if (!curSpan.parent().hasClass('main-catalogue-info-value-price')) {
                        var curValue = parseInt(curSpan.html().replace(',', ''));
                        var Format = wNumb({
                            decimals: 0,
                            thousand: ','
                        });
                        var curDiff = Math.ceil(maxValue / 100);
                    } else {
                        var curValue = parseFloat(curSpan.html());
                        var Format = wNumb({
                            decimals: 2
                        });
                        var curDiff = maxValue / 100;
                    }
                    curValue += curDiff;
                    if (curValue > maxValue) {
                        curValue = maxValue;
                    }
                    curSpan.html(Format.to(curValue));
                });
            }, 5);

            window.setTimeout(function() {
                window.clearInterval(infoInterval);
                $('.main-catalogue-info-value span').each(function() {
                    var curSpan = $(this);
                    if (!curSpan.parent().hasClass('main-catalogue-info-value-price')) {
                        var Format = wNumb({
                            decimals: 0,
                            thousand: ','
                        });
                        curSpan.html(Format.to(curSpan.data('value')));
                    } else {
                        curSpan.html(curSpan.data('value'));
                    }
                });
            }, 2000);
        }
    });
});