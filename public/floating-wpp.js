(function ($) {
    $.fn.floatingWhatsApp = function (options) {
        var settings = $.extend({
            phone: '',
            message: '',
            size: '72px',
            backgroundColor: '#25D366',
            position: 'left',
            popupMessage: '',
            showPopup: false,
            showOnIE: true,
            autoOpenTimeout: 0,
            headerColor: '#128C7E',
            headerTitle: 'WhatsApp Chat',
            zIndex: 0,
            buttonImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z  M 85.185 629.444 C 75.959 629.444 68.519 622.004 68.519 612.778 L 68.519 187.222 C 68.519 177.996 75.959 170.556 85.185 170.556 L 714.815 170.556 C 724.041 170.556 731.481 177.996 731.481 187.222 L 731.481 612.778 C 731.481 622.004 724.041 629.444 714.815 629.444 Z  M 85.185 629.444 " fill="rgb(255,255,255)"/></g><g><path d=" M 400 720 C 518.41 720 614.444 623.966 614.444 505.556 C 614.444 387.146 518.41 291.111 400 291.111 C 281.59 291.111 185.556 387.146 185.556 505.556 C 185.556 623.966 281.59 720 400 720 Z  M 400 720 " fill="rgb(37,211,102)"/></g><g><path d=" M 400 680 C 493.933 680 570 603.933 570 510 C 570 416.067 493.933 340 400 340 C 306.067 340 230 416.067 230 510 C 230 603.933 306.067 680 400 680 Z  M 400 680 " fill="rgb(255,255,255)"/></g><g><path d=" M 400 640 C 469.456 640 525.556 583.9 525.556 514.444 C 525.556 444.988 469.456 388.889 400 388.889 C 330.544 388.889 274.444 444.988 274.444 514.444 C 274.444 583.9 330.544 640 400 640 Z  M 400 640 " fill="rgb(37,211,102)"/></g><g><path d=" M 400 600 C 444.979 600 481.111 563.868 481.111 518.889 C 481.111 473.91 444.979 437.778 400 437.778 C 355.021 437.778 318.889 473.91 318.889 518.889 C 318.889 563.868 355.021 600 400 600 Z  M 400 600 " fill="rgb(255,255,255)"/></g><g><path d=" M 400 560 C 420.502 560 437.778 542.724 437.778 522.222 C 437.778 501.72 420.502 484.444 400 484.444 C 379.498 484.444 362.222 501.72 362.222 522.222 C 362.222 542.724 379.498 560 400 560 Z  M 400 560 " fill="rgb(37,211,102)"/></g></g></g></svg>'
        }, options);

        var isMobile = mobilecheck();

        //set the .floating-wpp default class
        this.addClass('floating-wpp');

        //#region jQuery Elements
        var $button = $(document.createElement('div'));
        var $buttonImageContainer = $(document.createElement('div'));
        var $popup = $(document.createElement('div'));
        var $header = $(document.createElement('div'));
        var $popupMessage = $(document.createElement('div'));
        var $btnSend = $(document.createElement('div'));
        var $inputMessage = $(document.createElement('div'));
        //#endregion

        //#region Main Button
        $buttonImageContainer.addClass('floating-wpp-button-image');

        $button.addClass('floating-wpp-button')
            .append($(settings.buttonImage))
            .css({
                'width': settings.size,
                'height': settings.size,
                'background-color': settings.backgroundColor
            });

        if (!isInternetExplorer() || settings.showOnIE) {
            $button.append($buttonImageContainer).appendTo(this);
        }

        $button.on('click', function () {
            if (isMobile && settings.showPopup) {
                openPopup();
            }
            else {
                sendWhatsappMessage();
            }
        });
        //#endregion

        //#region Fake Chat Pop-up
        if (settings.showPopup) {
            var $textarea = $(document.createElement('textarea'));
            var $closeBtn = $(document.createElement('strong'));
            var $sendIcon = $('<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 18" width="20" height="18"><defs><clipPath id="_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G"><rect width="20" height="18"/></clipPath></defs><g clip-path="url(#_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G"><path d=" M 0 0 L 0 7.813 L 16 9 L 0 10.188 L 0 18 L 20 9 L 0 0 Z " fill="rgb(46,46,46)"/></g></svg>')

            $popup.addClass('floating-wpp-popup');
            $header.addClass('floating-wpp-head');
            $popupMessage.addClass('floating-wpp-message');
            $inputMessage.addClass('floating-wpp-input-message');
            $btnSend.addClass('floating-wpp-btn-send');

            $popupMessage.text(settings.popupMessage);
            $textarea.val(settings.message);

            if (!settings.popupMessage) {
                $popupMessage.hide();
            }

            $header.append('<span>' + settings.headerTitle + '</span>', $closeBtn)
                .css('background-color', settings.headerColor);

            $btnSend.append($sendIcon);
            $inputMessage.append($textarea, $btnSend);

            $closeBtn.addClass('close').html('&times;');

            $popup.append(
                $header,
                $popupMessage,
                $inputMessage)
                .appendTo(this);

            $popupMessage.click(function () {
                //sendWhatsappMessage();
            });

            $closeBtn.click(function () {
                //popup.removeClass('active');
            });

            $header.click(function () {
                $popup.removeClass('active');
            });

            $textarea.keypress(function (event) {
                settings.message = $(this).val();

                if (event.keyCode == 13 && !event.shiftKey && !isMobile) {
                    event.preventDefault();
                    $btnSend.click();
                }
            });

            $btnSend.click(function () {
                settings.message = $textarea.val();
                sendWhatsappMessage();
            });

            this.mouseenter(function () {
                openPopup();
            });

            if (settings.autoOpenTimeout > 0) {
                setTimeout(function () {
                    openPopup();
                }, settings.autoOpenTimeout);
            }

            function openPopup() {
                if (!$popup.hasClass('active')) {
                    $popup.addClass('active');
                    $textarea.focus();
                }
            }
        }

        if (settings.zIndex) {
            $(this).css('z-index', settings.zIndex);
        }

        if (settings.position === 'right') {
            this.css({
                left: 'auto',
                right: '15px'
            });
            $popup.css('right', '0');
        }
        //#endregion

        function sendWhatsappMessage() {
            const apilink = 'https://wa.me/' + settings.phone + '?text=' + encodeURI(settings.message);
            window.open(apilink);
        }

        function isInternetExplorer() {
            var userAgent = window.navigator.userAgent;
            return userAgent.indexOf("MSIE") >= 0 || userAgent.match(/Trident.*rv\:11\./);
        }

        function mobilecheck() {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|/*...*/
            return check;
        }
    }
}(jQuery));