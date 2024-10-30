/*!
 * @copyright (c) 2024 Magecore
 * @url https://magecore.com.br
 * @author Marcio Maciel <os@magecore.com.br>
 * @license See LICENSE.md in the module root directory for license information.
 */
define([
    'uiComponent',
    'ko',
    'require',
    'mage/translate'
], function (Component, ko, require, $t) {
    "use strict";

    return Component.extend({
        defaults: {
            template: '',
            phoneNumber: '',
            tooltipText: $t('Start support via WhatsApp')
        },
        isVisible: ko.observable(false),
        initialize: function () {
            this._super();
            this.link = this.getLink(this.phoneNumber);
            this.icon = this.getIconSrc();
            this.isVisible(true);
        },
        isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
        },
        getLink: function (phoneNumber) {
            return 'https://wa.me/' + phoneNumber + (!this.isMobile() ? '?app_absent=1' : '');
        },
        getIconSrc: function () {
            return require.toUrl('Magecorebr_WhatsappContactButton/images/whatsapp-icon.svg');
        }
    });
});
