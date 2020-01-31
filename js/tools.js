$(document).ready(function() {

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
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
        $('.main-why-detail-inner').stop(true, true).animate({'opacity': 0}, 200, function() {
            $('.main-why-detail-inner').html(curItem.html());
            $('.main-why-detail-inner').animate({'opacity': 1}, 200);
        });
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
            var curIndex = $('.card-tabs-menu ul li').index(curLi);
            $('.card-tab.active').removeClass('active');
            $('.card-tab').eq(curIndex).addClass('active');
        }
        e.preventDefault();
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
        $('.search-window').addClass('open');
        $('.search-window-form-input input').trigger('focus');
        e.preventDefault();
    });

    $('.search-window-close').click(function(e) {
        $('.search-window').removeClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('search-window')) {
            $('.search-window').removeClass('open');
        }
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
        noUiSlider.create(curRange, {
            start: [Number(curSlider.find('.form-slider-from').val()), Number(curSlider.find('.form-slider-to').val())],
            connect: true,
            range: {
                'min': Number(curSlider.find('.form-slider-min').html()),
                'max': Number(curSlider.find('.form-slider-max').html())
            },
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

    $('body').on('change', '.catalogue-filter select', function() {
        filterCatalogue();
    });

    $('body').on('click', '.catalogue-filter-list-item-remove', function(e) {
        var curGroup = $('.catalogue-filter-item-field').eq($(this).attr('data-group'));
        if (curGroup.find('.form-select').length > 0) {
            curGroup.find('option:selected').prop('selected', false);
            curGroup.find('.form-select select').trigger('change');
        }
        if (curGroup.find('.form-slider').length > 0) {
            curGroup.find('.form-slider-range-inner')[0].noUiSlider.set([Number(curGroup.find('.form-slider-min').html()), Number(curGroup.find('.form-slider-max').html())]);
        }
        filterCatalogue();
    });

    $('.catalogue-sort-link').click(function() {
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

    $(document).click(function(e) {
        if ($(e.target).hasClass('window-options')) {
            $('.window-options-close').trigger('click');
        }
    });

});

function filterCatalogue() {
    $('.catalogue-filter-list').html('');
    for (var i = 0; i < $('.catalogue-filter-item-field').length; i++) {
        var curGroup = $('.catalogue-filter-item-field').eq(i);
        var newHTML = '';

        if (curGroup.find('.form-select').length > 0 && curGroup.find('option:selected').length > 0) {
            newHTML = '<div class="catalogue-filter-list-item"><div class="catalogue-filter-list-item-text">';
            for (var j = 0; j < curGroup.find('option:selected').length; j++) {
                if (j > 0) {
                    newHTML += '; ';
                }
                newHTML += curGroup.find('option:selected').eq(j).html();
            }
            newHTML += '</div><div class="catalogue-filter-list-item-remove" data-group="' + i + '"></div></div>';
        }

        if (curGroup.find('.form-slider').length > 0) {
            if (!((curGroup.find('.form-slider-from').val() == curGroup.find('.form-slider-min').html()) && (curGroup.find('.form-slider-to').val() == curGroup.find('.form-slider-max').html()))) {
                newHTML = '<div class="catalogue-filter-list-item"><div class="catalogue-filter-list-item-text">';
                newHTML += curGroup.find('.form-slider-hints-from').html() + ' ' + curGroup.find('.form-slider-hints-to').html() + ' ' + curGroup.find('.form-slider-unit').html();
                newHTML += '</div><div class="catalogue-filter-list-item-remove" data-group="' + i + '"></div></div>';
            }
        }

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

    $('.search-window').removeClass('open');

    $('.main-services-container').each(function() {
        var curList = $(this);

        curList.find('.main-services-item-content').css({'min-height': '0px'});

        curList.find('.main-services-item-content').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-services-item-content').each(function() {
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

    $('.reviews-list').each(function() {
        var curList = $(this);

        curList.find('.reviews-list-item-content').css({'min-height': '0px'});

        curList.find('.reviews-list-item-content').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.reviews-list-item-content').each(function() {
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

});

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
});

function initForm(curForm) {
    curForm.find('.form-input input, .form-input textarea').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        }
    });

    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

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
        if (curSelect.parents().filter('.catalogue-filter').length == 1) {
            options['dropdownParent'] = $('.catalogue-filter-window-inner');
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
});