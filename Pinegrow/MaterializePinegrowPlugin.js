/*
Created by Mohammed Aljuboori for Pinegrow Web Editor
Licensed under MIT license
Feel free to use the code in your own Pinegrow plugins
Website http://mhdaljuboori.me
Twitter @MhdAljuboori
 */
$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("MaterializePinegrowPlugin", "Materialize");

        f.type = "materialize";
        f.allow_single_type = true;

        //Don't show these files in CSS tab
        f.ignore_css_files = [/materialize/i];

        //Auto detect if font-awesome css is included
        f.detect = function(pgPage) {
          return pgPage.hasStylesheet(/materialize/i);
        }


        var icons = ['mdi-action-3d-rotation', 'mdi-action-accessibility', 'mdi-action-account-balance', 'mdi-action-account-balance-wallet', 'mdi-action-account-box', 'mdi-action-account-child', 'mdi-action-account-circle', 'mdi-action-add-shopping-cart', 'mdi-action-alarm', 'mdi-action-alarm-add', 'mdi-action-alarm-off', 'mdi-action-alarm-on', 'mdi-action-android', 'mdi-action-announcement', 'mdi-action-aspect-ratio', 'mdi-action-assessment', 'mdi-action-assignment', 'mdi-action-assignment-ind', 'mdi-action-assignment-late', 'mdi-action-assignment-return', 'mdi-action-assignment-returned', 'mdi-action-assignment-turned-in', 'mdi-action-autorenew', 'mdi-action-backup', 'mdi-action-book', 'mdi-action-bookmark', 'mdi-action-bookmark-outline', 'mdi-action-bug-report', 'mdi-action-cached', 'mdi-action-class', 'mdi-action-credit-card', 'mdi-action-dashboard', 'mdi-action-delete', 'mdi-action-description', 'mdi-action-dns', 'mdi-action-done', 'mdi-action-done-all', 'mdi-action-event', 'mdi-action-exit-to-app', 'mdi-action-explore', 'mdi-action-extension', 'mdi-action-face-unlock', 'mdi-action-favorite', 'mdi-action-favorite-outline', 'mdi-action-find-in-page', 'mdi-action-find-replace', 'mdi-action-flip-to-back', 'mdi-action-flip-to-front', 'mdi-action-get-app', 'mdi-action-grade', 'mdi-action-group-work', 'mdi-action-help', 'mdi-action-highlight-remove', 'mdi-action-history', 'mdi-action-home', 'mdi-action-https', 'mdi-action-info', 'mdi-action-info-outline', 'mdi-action-input', 'mdi-action-invert-colors', 'mdi-action-label', 'mdi-action-label-outline', 'mdi-action-language', 'mdi-action-launch', 'mdi-action-list', 'mdi-action-lock', 'mdi-action-lock-open', 'mdi-action-lock-outline', 'mdi-action-loyalty', 'mdi-action-markunread-mailbox', 'mdi-action-note-add', 'mdi-action-open-in-browser', 'mdi-action-open-in-new', 'mdi-action-open-with', 'mdi-action-pageview', 'mdi-action-payment', 'mdi-action-perm-camera-mic', 'mdi-action-perm-contact-cal', 'mdi-action-perm-data-setting', 'mdi-action-perm-device-info', 'mdi-action-perm-identity', 'mdi-action-perm-media', 'mdi-action-perm-phone-msg', 'mdi-action-perm-scan-wifi', 'mdi-action-picture-in-picture', 'mdi-action-polymer', 'mdi-action-print', 'mdi-action-query-builder', 'mdi-action-question-answer', 'mdi-action-receipt', 'mdi-action-redeem', 'mdi-action-report-problem', 'mdi-action-restore', 'mdi-action-room', 'mdi-action-schedule', 'mdi-action-search', 'mdi-action-settings', 'mdi-action-settings-applications', 'mdi-action-settings-backup-restore', 'mdi-action-settings-bluetooth', 'mdi-action-settings-cell', 'mdi-action-settings-display', 'mdi-action-settings-ethernet', 'mdi-action-settings-input-antenna', 'mdi-action-settings-input-component', 'mdi-action-settings-input-composite', 'mdi-action-settings-input-hdmi', 'mdi-action-settings-input-svideo', 'mdi-action-settings-overscan', 'mdi-action-settings-phone', 'mdi-action-settings-power', 'mdi-action-settings-remote', 'mdi-action-settings-voice', 'mdi-action-shop', 'mdi-action-shop-two', 'mdi-action-shopping-basket', 'mdi-action-shopping-cart', 'mdi-action-speaker-notes', 'mdi-action-spellcheck', 'mdi-action-star-rate', 'mdi-action-stars', 'mdi-action-store', 'mdi-action-subject', 'mdi-action-swap-horiz', 'mdi-action-swap-vert', 'mdi-action-swap-vert-circle', 'mdi-action-system-update-tv', 'mdi-action-tab', 'mdi-action-tab-unselected', 'mdi-action-theaters', 'mdi-action-thumb-down', 'mdi-action-thumb-up', 'mdi-action-thumbs-up-down', 'mdi-action-toc', 'mdi-action-today', 'mdi-action-track-changes', 'mdi-action-translate', 'mdi-action-trending-down', 'mdi-action-trending-neutral', 'mdi-action-trending-up', 'mdi-action-turned-in', 'mdi-action-turned-in-not', 'mdi-action-verified-user', 'mdi-action-view-agenda', 'mdi-action-view-array', 'mdi-action-view-carousel', 'mdi-action-view-column', 'mdi-action-view-day', 'mdi-action-view-headline', 'mdi-action-view-list', 'mdi-action-view-module', 'mdi-action-view-quilt', 'mdi-action-view-stream', 'mdi-action-view-week', 'mdi-action-visibility', 'mdi-action-visibility-off', 'mdi-action-wallet-giftcard', 'mdi-action-wallet-membership', 'mdi-action-wallet-travel', 'mdi-action-work', 'mdi-alert-error', 'mdi-alert-warning', 'mdi-av-album', 'mdi-av-timer', 'mdi-av-closed-caption', 'mdi-av-equalizer', 'mdi-av-explicit', 'mdi-av-fast-forward', 'mdi-av-fast-rewind', 'mdi-av-games', 'mdi-av-hearing', 'mdi-av-high-quality', 'mdi-av-loop', 'mdi-av-mic', 'mdi-av-mic-none', 'mdi-av-mic-off', 'mdi-av-movie', 'mdi-av-my-library-add', 'mdi-av-my-library-books', 'mdi-av-my-library-music', 'mdi-av-new-releases', 'mdi-av-not-interested', 'mdi-av-pause', 'mdi-av-pause-circle-fill', 'mdi-av-pause-circle-outline', 'mdi-av-play-arrow', 'mdi-av-play-circle-fill', 'mdi-av-play-circle-outline', 'mdi-av-play-shopping-bag', 'mdi-av-playlist-add', 'mdi-av-queue', 'mdi-av-queue-music', 'mdi-av-radio', 'mdi-av-recent-actors', 'mdi-av-repeat', 'mdi-av-repeat-one', 'mdi-av-replay', 'mdi-av-shuffle', 'mdi-av-skip-next', 'mdi-av-skip-previous', 'mdi-av-snooze', 'mdi-av-stop', 'mdi-av-subtitles', 'mdi-av-surround-sound', 'mdi-av-video-collection', 'mdi-av-videocam', 'mdi-av-videocam-off', 'mdi-av-volume-down', 'mdi-av-volume-mute', 'mdi-av-volume-off', 'mdi-av-volume-up', 'mdi-av-web', 'mdi-communication-business', 'mdi-communication-call', 'mdi-communication-call-end', 'mdi-communication-call-made', 'mdi-communication-call-merge', 'mdi-communication-call-missed', 'mdi-communication-call-received', 'mdi-communication-call-split', 'mdi-communication-chat', 'mdi-communication-clear-all', 'mdi-communication-comment', 'mdi-communication-contacts', 'mdi-communication-dialer-sip', 'mdi-communication-dialpad', 'mdi-communication-dnd-on', 'mdi-communication-email', 'mdi-communication-forum', 'mdi-communication-import-export', 'mdi-communication-invert-colors-off', 'mdi-communication-invert-colors-on', 'mdi-communication-live-help', 'mdi-communication-location-off', 'mdi-communication-location-on', 'mdi-communication-message', 'mdi-communication-messenger', 'mdi-communication-no-sim', 'mdi-communication-phone', 'mdi-communication-portable-wifi-off', 'mdi-communication-quick-contacts-dialer', 'mdi-communication-quick-contacts-mail', 'mdi-communication-ring-volume', 'mdi-communication-stay-current-landscape', 'mdi-communication-stay-current-portrait', 'mdi-communication-stay-primary-landscape', 'mdi-communication-stay-primary-portrait', 'mdi-communication-swap-calls', 'mdi-communication-textsms', 'mdi-communication-voicemail', 'mdi-communication-vpn-key', 'mdi-content-add', 'mdi-content-add-box', 'mdi-content-add-circle', 'mdi-content-add-circle-outline', 'mdi-content-archive', 'mdi-content-backspace', 'mdi-content-block', 'mdi-content-clear', 'mdi-content-content-copy', 'mdi-content-content-cut', 'mdi-content-content-paste', 'mdi-content-create', 'mdi-content-drafts', 'mdi-content-filter-list', 'mdi-content-flag', 'mdi-content-forward', 'mdi-content-gesture', 'mdi-content-inbox', 'mdi-content-link', 'mdi-content-mail', 'mdi-content-markunread', 'mdi-content-redo', 'mdi-content-remove', 'mdi-content-remove-circle', 'mdi-content-remove-circle-outline', 'mdi-content-reply', 'mdi-content-reply-all', 'mdi-content-report', 'mdi-content-save', 'mdi-content-select-all', 'mdi-content-send', 'mdi-content-sort', 'mdi-content-text-format', 'mdi-content-undo', 'mdi-device-access-alarm', 'mdi-device-access-alarms', 'mdi-device-access-time', 'mdi-device-add-alarm', 'mdi-device-airplanemode-off', 'mdi-device-airplanemode-on', 'mdi-device-battery-20', 'mdi-device-battery-30', 'mdi-device-battery-50', 'mdi-device-battery-60', 'mdi-device-battery-80', 'mdi-device-battery-90', 'mdi-device-battery-alert', 'mdi-device-battery-charging-20', 'mdi-device-battery-charging-30', 'mdi-device-battery-charging-50', 'mdi-device-battery-charging-60', 'mdi-device-battery-charging-80', 'mdi-device-battery-charging-90', 'mdi-device-battery-charging-full', 'mdi-device-battery-full', 'mdi-device-battery-std', 'mdi-device-battery-unknown', 'mdi-device-bluetooth', 'mdi-device-bluetooth-connected', 'mdi-device-bluetooth-disabled', 'mdi-device-bluetooth-searching', 'mdi-device-brightness-auto', 'mdi-device-brightness-high', 'mdi-device-brightness-low', 'mdi-device-brightness-medium', 'mdi-device-data-usage', 'mdi-device-developer-mode', 'mdi-device-devices', 'mdi-device-dvr', 'mdi-device-gps-fixed', 'mdi-device-gps-not-fixed', 'mdi-device-gps-off', 'mdi-device-location-disabled', 'mdi-device-location-searching', 'mdi-device-multitrack-audio', 'mdi-device-network-cell', 'mdi-device-network-wifi', 'mdi-device-nfc', 'mdi-device-now-wallpaper', 'mdi-device-now-widgets', 'mdi-device-screen-lock-landscape', 'mdi-device-screen-lock-portrait', 'mdi-device-screen-lock-rotation', 'mdi-device-screen-rotation', 'mdi-device-sd-storage', 'mdi-device-settings-system-daydream', 'mdi-device-signal-cellular-0-bar', 'mdi-device-signal-cellular-1-bar', 'mdi-device-signal-cellular-2-bar', 'mdi-device-signal-cellular-3-bar', 'mdi-device-signal-cellular-4-bar', 'mdi-device-signal-cellular-connected-no-internet-0-bar', 'mdi-device-signal-cellular-connected-no-internet-1-bar', 'mdi-device-signal-cellular-connected-no-internet-2-bar', 'mdi-device-signal-cellular-connected-no-internet-3-bar', 'mdi-device-signal-cellular-connected-no-internet-4-bar', 'mdi-device-signal-cellular-no-sim', 'mdi-device-signal-cellular-null', 'mdi-device-signal-cellular-off', 'mdi-device-signal-wifi-0-bar', 'mdi-device-signal-wifi-1-bar', 'mdi-device-signal-wifi-2-bar', 'mdi-device-signal-wifi-3-bar', 'mdi-device-signal-wifi-4-bar', 'mdi-device-signal-wifi-off', 'mdi-device-storage', 'mdi-device-usb', 'mdi-device-wifi-lock', 'mdi-device-wifi-tethering', 'mdi-editor-attach-file', 'mdi-editor-attach-money', 'mdi-editor-border-all', 'mdi-editor-border-bottom', 'mdi-editor-border-clear', 'mdi-editor-border-color', 'mdi-editor-border-horizontal', 'mdi-editor-border-inner', 'mdi-editor-border-left', 'mdi-editor-border-outer', 'mdi-editor-border-right', 'mdi-editor-border-style', 'mdi-editor-border-top', 'mdi-editor-border-vertical', 'mdi-editor-format-align-center', 'mdi-editor-format-align-justify', 'mdi-editor-format-align-left', 'mdi-editor-format-align-right', 'mdi-editor-format-bold', 'mdi-editor-format-clear', 'mdi-editor-format-color-fill', 'mdi-editor-format-color-reset', 'mdi-editor-format-color-text', 'mdi-editor-format-indent-decrease', 'mdi-editor-format-indent-increase', 'mdi-editor-format-italic', 'mdi-editor-format-line-spacing', 'mdi-editor-format-list-bulleted', 'mdi-editor-format-list-numbered', 'mdi-editor-format-paint', 'mdi-editor-format-quote', 'mdi-editor-format-size', 'mdi-editor-format-strikethrough', 'mdi-editor-format-textdirection-l-to-r', 'mdi-editor-format-textdirection-r-to-l', 'mdi-editor-format-underline', 'mdi-editor-functions', 'mdi-editor-insert-chart', 'mdi-editor-insert-comment', 'mdi-editor-insert-drive-file', 'mdi-editor-insert-emoticon', 'mdi-editor-insert-invitation', 'mdi-editor-insert-link', 'mdi-editor-insert-photo', 'mdi-editor-merge-type', 'mdi-editor-mode-comment', 'mdi-editor-mode-edit', 'mdi-editor-publish', 'mdi-editor-vertical-align-bottom', 'mdi-editor-vertical-align-center', 'mdi-editor-vertical-align-top', 'mdi-editor-wrap-text', 'mdi-file-attachment', 'mdi-file-cloud', 'mdi-file-cloud-circle', 'mdi-file-cloud-done', 'mdi-file-cloud-download', 'mdi-file-cloud-off', 'mdi-file-cloud-queue', 'mdi-file-cloud-upload', 'mdi-file-file-download', 'mdi-file-file-upload', 'mdi-file-folder', 'mdi-file-folder-open', 'mdi-file-folder-shared', 'mdi-hardware-cast', 'mdi-hardware-cast-connected', 'mdi-hardware-computer', 'mdi-hardware-desktop-mac', 'mdi-hardware-desktop-windows', 'mdi-hardware-dock', 'mdi-hardware-gamepad', 'mdi-hardware-headset', 'mdi-hardware-headset-mic', 'mdi-hardware-keyboard', 'mdi-hardware-keyboard-alt', 'mdi-hardware-keyboard-arrow-down', 'mdi-hardware-keyboard-arrow-left', 'mdi-hardware-keyboard-arrow-right', 'mdi-hardware-keyboard-arrow-up', 'mdi-hardware-keyboard-backspace', 'mdi-hardware-keyboard-capslock', 'mdi-hardware-keyboard-control', 'mdi-hardware-keyboard-hide', 'mdi-hardware-keyboard-return', 'mdi-hardware-keyboard-tab', 'mdi-hardware-keyboard-voice', 'mdi-hardware-laptop', 'mdi-hardware-laptop-chromebook', 'mdi-hardware-laptop-mac', 'mdi-hardware-laptop-windows', 'mdi-hardware-memory', 'mdi-hardware-mouse', 'mdi-hardware-phone-android', 'mdi-hardware-phone-iphone', 'mdi-hardware-phonelink', 'mdi-hardware-phonelink-off', 'mdi-hardware-security', 'mdi-hardware-sim-card', 'mdi-hardware-smartphone', 'mdi-hardware-speaker', 'mdi-hardware-tablet', 'mdi-hardware-tablet-android', 'mdi-hardware-tablet-mac', 'mdi-hardware-tv', 'mdi-hardware-watch', 'mdi-image-add-to-photos', 'mdi-image-adjust', 'mdi-image-assistant-photo', 'mdi-image-audiotrack', 'mdi-image-blur-circular', 'mdi-image-blur-linear', 'mdi-image-blur-off', 'mdi-image-blur-on', 'mdi-image-brightness-1', 'mdi-image-brightness-2', 'mdi-image-brightness-3', 'mdi-image-brightness-4', 'mdi-image-brightness-5', 'mdi-image-brightness-6', 'mdi-image-brightness-7', 'mdi-image-brush', 'mdi-image-camera', 'mdi-image-camera-alt', 'mdi-image-camera-front', 'mdi-image-camera-rear', 'mdi-image-camera-roll', 'mdi-image-center-focus-strong', 'mdi-image-center-focus-weak', 'mdi-image-collections', 'mdi-image-color-lens', 'mdi-image-colorize', 'mdi-image-compare', 'mdi-image-control-point', 'mdi-image-control-point-duplicate', 'mdi-image-crop-16-9', 'mdi-image-crop', 'mdi-image-crop-3-2', 'mdi-image-crop-5-4', 'mdi-image-crop-7-5', 'mdi-image-crop-din', 'mdi-image-crop-free', 'mdi-image-crop-landscape', 'mdi-image-crop-original', 'mdi-image-crop-portrait', 'mdi-image-crop-square', 'mdi-image-dehaze', 'mdi-image-details', 'mdi-image-edit', 'mdi-image-exposure', 'mdi-image-exposure-minus-1', 'mdi-image-exposure-minus-2', 'mdi-image-exposure-plus-1', 'mdi-image-exposure-plus-2', 'mdi-image-exposure-zero', 'mdi-image-filter-1', 'mdi-image-filter', 'mdi-image-filter-2', 'mdi-image-filter-3', 'mdi-image-filter-4', 'mdi-image-filter-5', 'mdi-image-filter-6', 'mdi-image-filter-7', 'mdi-image-filter-8', 'mdi-image-filter-9', 'mdi-image-filter-9-plus', 'mdi-image-filter-b-and-w', 'mdi-image-filter-center-focus', 'mdi-image-filter-drama', 'mdi-image-filter-frames', 'mdi-image-filter-hdr', 'mdi-image-filter-none', 'mdi-image-filter-tilt-shift', 'mdi-image-filter-vintage', 'mdi-image-flare', 'mdi-image-flash-auto', 'mdi-image-flash-off', 'mdi-image-flash-on', 'mdi-image-flip', 'mdi-image-gradient', 'mdi-image-grain', 'mdi-image-grid-off', 'mdi-image-grid-on', 'mdi-image-hdr-off', 'mdi-image-hdr-on', 'mdi-image-hdr-strong', 'mdi-image-hdr-weak', 'mdi-image-healing', 'mdi-image-image', 'mdi-image-image-aspect-ratio', 'mdi-image-iso', 'mdi-image-landscape', 'mdi-image-leak-add', 'mdi-image-leak-remove', 'mdi-image-lens', 'mdi-image-looks', 'mdi-image-looks-3', 'mdi-image-looks-4', 'mdi-image-looks-5', 'mdi-image-looks-6', 'mdi-image-looks-one', 'mdi-image-looks-two', 'mdi-image-loupe', 'mdi-image-movie-creation', 'mdi-image-nature', 'mdi-image-nature-people', 'mdi-image-navigate-before', 'mdi-image-navigate-next', 'mdi-image-palette', 'mdi-image-panorama', 'mdi-image-panorama-fisheye', 'mdi-image-panorama-horizontal', 'mdi-image-panorama-vertical', 'mdi-image-panorama-wide-angle', 'mdi-image-photo', 'mdi-image-photo-album', 'mdi-image-photo-camera', 'mdi-image-photo-library', 'mdi-image-portrait', 'mdi-image-remove-red-eye', 'mdi-image-rotate-left', 'mdi-image-rotate-right', 'mdi-image-slideshow', 'mdi-image-straighten', 'mdi-image-style', 'mdi-image-switch-camera', 'mdi-image-switch-video', 'mdi-image-tag-faces', 'mdi-image-texture', 'mdi-image-timelapse', 'mdi-image-timer-10', 'mdi-image-timer', 'mdi-image-timer-3', 'mdi-image-timer-auto', 'mdi-image-timer-off', 'mdi-image-tonality', 'mdi-image-transform', 'mdi-image-tune', 'mdi-image-wb-auto', 'mdi-image-wb-cloudy', 'mdi-image-wb-incandescent', 'mdi-image-wb-irradescent', 'mdi-image-wb-sunny', 'mdi-maps-beenhere', 'mdi-maps-directions', 'mdi-maps-directions-bike', 'mdi-maps-directions-bus', 'mdi-maps-directions-car', 'mdi-maps-directions-ferry', 'mdi-maps-directions-subway', 'mdi-maps-directions-train', 'mdi-maps-directions-transit', 'mdi-maps-directions-walk', 'mdi-maps-flight', 'mdi-maps-hotel', 'mdi-maps-layers', 'mdi-maps-layers-clear', 'mdi-maps-local-airport', 'mdi-maps-local-atm', 'mdi-maps-local-attraction', 'mdi-maps-local-bar', 'mdi-maps-local-cafe', 'mdi-maps-local-car-wash', 'mdi-maps-local-convenience-store', 'mdi-maps-local-drink', 'mdi-maps-local-florist', 'mdi-maps-local-gas-station', 'mdi-maps-local-grocery-store', 'mdi-maps-local-hospital', 'mdi-maps-local-hotel', 'mdi-maps-local-laundry-service', 'mdi-maps-local-library', 'mdi-maps-local-mall', 'mdi-maps-local-movies', 'mdi-maps-local-offer', 'mdi-maps-local-parking', 'mdi-maps-local-pharmacy', 'mdi-maps-local-phone', 'mdi-maps-local-pizza', 'mdi-maps-local-play', 'mdi-maps-local-post-office', 'mdi-maps-local-print-shop', 'mdi-maps-local-restaurant', 'mdi-maps-local-see', 'mdi-maps-local-shipping', 'mdi-maps-local-taxi', 'mdi-maps-location-history', 'mdi-maps-map', 'mdi-maps-my-location', 'mdi-maps-navigation', 'mdi-maps-pin-drop', 'mdi-maps-place', 'mdi-maps-rate-review', 'mdi-maps-restaurant-menu', 'mdi-maps-satellite', 'mdi-maps-store-mall-directory', 'mdi-maps-terrain', 'mdi-maps-traffic', 'mdi-navigation-apps', 'mdi-navigation-arrow-back', 'mdi-navigation-arrow-drop-down', 'mdi-navigation-arrow-drop-down-circle', 'mdi-navigation-arrow-drop-up', 'mdi-navigation-arrow-forward', 'mdi-navigation-cancel', 'mdi-navigation-check', 'mdi-navigation-chevron-left', 'mdi-navigation-chevron-right', 'mdi-navigation-close', 'mdi-navigation-expand-less', 'mdi-navigation-expand-more', 'mdi-navigation-fullscreen', 'mdi-navigation-fullscreen-exit', 'mdi-navigation-menu', 'mdi-navigation-more-horiz', 'mdi-navigation-more-vert', 'mdi-navigation-refresh', 'mdi-navigation-unfold-less', 'mdi-navigation-unfold-more', 'mdi-notification-adb', 'mdi-notification-bluetooth-audio', 'mdi-notification-disc-full', 'mdi-notification-dnd-forwardslash', 'mdi-notification-do-not-disturb', 'mdi-notification-drive-eta', 'mdi-notification-event-available', 'mdi-notification-event-busy', 'mdi-notification-event-note', 'mdi-notification-folder-special', 'mdi-notification-mms', 'mdi-notification-more', 'mdi-notification-network-locked', 'mdi-notification-phone-bluetooth-speaker', 'mdi-notification-phone-forwarded', 'mdi-notification-phone-in-talk', 'mdi-notification-phone-locked', 'mdi-notification-phone-missed', 'mdi-notification-phone-paused', 'mdi-notification-play-download', 'mdi-notification-play-install', 'mdi-notification-sd-card', 'mdi-notification-sim-card-alert', 'mdi-notification-sms', 'mdi-notification-sms-failed', 'mdi-notification-sync', 'mdi-notification-sync-disabled', 'mdi-notification-sync-problem', 'mdi-notification-system-update', 'mdi-notification-tap-and-play', 'mdi-notification-time-to-leave', 'mdi-notification-vibration', 'mdi-notification-voice-chat', 'mdi-notification-vpn-lock', 'mdi-social-cake', 'mdi-social-domain', 'mdi-social-group', 'mdi-social-group-add', 'mdi-social-location-city', 'mdi-social-mood', 'mdi-social-notifications', 'mdi-social-notifications-none', 'mdi-social-notifications-off', 'mdi-social-notifications-on', 'mdi-social-notifications-paused', 'mdi-social-pages', 'mdi-social-party-mode', 'mdi-social-people', 'mdi-social-people-outline', 'mdi-social-person', 'mdi-social-person-add', 'mdi-social-person-outline', 'mdi-social-plus-one', 'mdi-social-poll', 'mdi-social-public', 'mdi-social-school', 'mdi-social-share', 'mdi-social-whatshot', 'mdi-toggle-check-box', 'mdi-toggle-check-box-outline-blank', 'mdi-toggle-radio-button-off', 'mdi-toggle-radio-button-on'];
        var icons_options = [];
        for(var i = 0; i < icons.length; i++) {
            var g = icons[i];
            icons_options.push({key: g, name: g.replace('mdi-',''), html: '<i class="' + g + '"></i>'});
        }

        var getMaterializeIconClass = function(pgel) {
            var cls = pgel.attr('class');
            if (cls) {
                cls = cls.split(' ');
                for(var i = 0; i < cls.length; i++) {
                    if(cls[i].indexOf('mdi-') == 0) {
                      return cls[i];
                    }
                }
            }
            return null;
        }

        var icons = new PgComponentType('materialize.icons', 'Icon');
        icons.selector = '[class^="mdi-"]*';
        icons.parent_selector = 'body';
        icons.preview_image = 'icon.png';
        icons.code = '<i class="mdi-action-3d-rotation"></i>';
        icons.tags = 'major';
        icons.sections = {
          'materialize.icons' : {
             name: "Icon options",
             fields: {
                'materialize.icons.select' : {
                    type: 'select',
                    name: 'Icon',
                    options: icons_options,
                    rich: {
                        title: 'Select icon',
                        modal: true,
                        class: 'icon-grid'
                    },
                    action: 'custom',
                    get_value: function(obj) {
                        var $el = obj.data;
                        var pgel = new pgQuery($el);
                        return getMaterializeIconClass(pgel);
                    },
                    set_value: function(obj, value, values) {
                        var $el = obj.data;
                        var pgel = new pgQuery($el);
                        var cls = getMaterializeIconClass(pgel);
                        if(cls) pgel.removeClass(cls);
                        pgel.addClass(value);
                        return value;
                    }
                },
                'materialize.icons.size' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Icon Size',
                    options: [
                        {key: 'tiny', name: "Tiny"},
                        {key: 'small', name: "Small"},
                        {key: 'medium', name: "Medium"},
                        {key: 'large', name: "Large"}
                    ]
                },
                'materialize.icons.align' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Icon Align',
                    options: [
                        {key: 'prefix', name: "Prefix"},
                        {key: 'left', name: "Left"},
                        {key: 'right', name: "Right"}
                    ]
                }
             }
          }
        };
        f.addComponentType(icons);


        var img = new PgComponentType('materialize.img', '');
        img.selector = 'img';
        img.parent_selector = 'body';
        img.sections = {
          'materialize.img' : {
             name: "Image Options",
             fields: {
                'materialize.img.responsive' : {
                    type : 'checkbox',
                    action: 'apply_class',
                    value: 'responsive-img',
                    name: 'Responsive Image'
                },
                'materialize.img.circle' : {
                    type : 'checkbox',
                    action: 'apply_class',
                    value: 'circle',
                    name: 'Circle Image'
                }
             }
          }
        };
        f.addComponentType(img);


        var navbar = new PgComponentType('materialize.navbar', 'Navbar');
        navbar.selector = '.navbar-container';
        navbar.parent_selector = 'body';
        navbar.preview_image = 'navbar.jpg';
        navbar.code = '<div class="navbar-container">\
          <nav>\
            <div class="nav-wrapper">\
              <a href="#" class="brand-logo">Logo</a>\
              <ul id="nav-mobile" class="right hide-on-med-and-down">\
                <li><a href="#">Sass</a></li>\
                <li><a href="#">Components</a></li>\
                <li><a href="#">JavaScript</a></li>\
              </ul>\
            </div>\
          </nav>\
        </div>';
        navbar.tags = 'major';
        navbar.sections = {
            'materialize.navbar' : {
                name : 'Navbar options',
                fields : {
                    'materialize.navbar.captionbck' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'navbar-fixed',
                        name: 'Fixed navbar'
                    }
                }
            }
        };
        f.addComponentType(navbar);


        var navbarLogo = new PgComponentType('materialize.navbar-logo', 'Logo');
        navbarLogo.selector = '.brand-logo';
        navbarLogo.parent_selector = '.nav-wrapper';
        navbarLogo.preview_image = 'logo.png';
        navbarLogo.code = '<a href="#" class="brand-logo">Logo</a>';
        navbarLogo.tags = 'major';
        navbarLogo.sections = {
            'materialize.navbar-logo' : {
                name : 'Navbar logo options',
                fields : {
                    'materialize.navbar-logo.align' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Navbar logo align',
                        options: [
                            {key: 'right', name: "Right"},
                            {key: 'left', name: "Left"},
                            {key: 'center', name: "Center"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(navbarLogo);


        var navMobile = new PgComponentType('materialize.navbar-list', 'Navbar List');
        navMobile.selector = '#nav-mobile';
        navMobile.parent_selector = '.nav-wrapper';
        navMobile.preview_image = 'navMobile.png';
        navMobile.code = '<ul id="nav-mobile" class="right hide-on-med-and-down">\
          <li><a href="#">Sass</a></li>\
          <li><a href="#">Components</a></li>\
          <li><a href="#">JavaScript</a></li>\
        </ul>';
        navMobile.tags = 'major';
        navMobile.sections = {
            'materialize.navbar-list' : {
                name : 'Navbar list options',
                fields : {
                    'materialize.navbar-list.align' : {
                        type : 'select',
                        action: 'apply_class',
                        name: 'Navbar List align',
                        options: [
                            {key: 'right', name: "Right"},
                            {key: 'left', name: "Left"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(navMobile);


        var navMobileElement = new PgComponentType('materialize.navbar-list-element', 'Navbar List Element');
        navMobileElement.selector = '#nav-mobile > li';
        navMobileElement.parent_selector = '#nav-mobile';
        navMobileElement.preview_image = 'navElement.png';
        navMobileElement.code = '<li><a href="#">Element</a></li>';
        navMobileElement.tags = 'major';
        navMobileElement.sections = {
            'materialize.navbar-list-element' : {
                name : 'Navbar Element options',
                fields : {
                    'materialize.navbar-list-element.align' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'active',
                        name: 'Active?'
                    }
                }
            }
        };
        f.addComponentType(navMobileElement);


        var searchBar = new PgComponentType('materialize.search-bar', 'Search Bar');
        searchBar.selector = 'form[data-pg-collapsed]';
        searchBar.parent_selector = '.nav-wrapper';
        searchBar.preview_image = 'searchBar.png';
        searchBar.code = '<form>\
          <div class="input-field">\
            <input id="search" type="search" required>\
            <label for="search"><i class="mdi-action-search"></i></label>\
            <i class="mdi-navigation-close"></i>\
          </div>\
        </form>';
        searchBar.tags = 'major';
        f.addComponentType(searchBar);


        var collapseList = new PgComponentType('materialize.collapse-list', 'Collapse List');
        collapseList.selector = '.side-nav';
        collapseList.parent_selector = '.nav-wrapper';
        collapseList.preview_image = 'collapseList.png';
        collapseList.code = '<ul class="side-nav" id="mobile-demo">\
          <li><a href="#">Sass</a></li>\
          <li><a href="#">Components</a></li>\
          <li><a href="#">Javascript</a></li>\
          <li><a href="#">Mobile</a></li>\
        </ul>';
        collapseList.tags = 'major';
        f.addComponentType(collapseList);


        var collapseButton = new PgComponentType('materialize.collapse-button', 'Collapse Button');
        collapseButton.selector = '.button-collapse';
        collapseButton.parent_selector = '.nav-wrapper';
        collapseButton.preview_image = 'collapseButton.png';
        collapseButton.code = '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="mdi-navigation-menu"></i></a>';
        collapseButton.on_inserted = function() {
          alert('Add $(".button-collapse").sideNav(); to your $(document).ready');
        }
        collapseButton.tags = 'major';
        f.addComponentType(collapseButton);


        var collection = new PgComponentType('materialize.collection', 'Collection');
        collection.selector = '.collection';
        collection.parent_selector = 'body';
        collection.preview_image = 'collection.png';
        collection.code = '<ul class="collection">\
          <li class="collection-item">Alvin<span class="badge">1</span></li>\
          <li class="collection-item">Alvin</li>\
          <li class="collection-item">Alvin<span class="new badge">4</span></li>\
          <li class="collection-item">Alvin</li>\
        </ul>';
        collection.tags = 'major';
        collection.sections = {
            'materialize.collection' : {
                name : 'Collection options',
                fields : {
                    'materialize.collection.with-header' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'with-header',
                        name: 'With header?'
                    }
                }
            }
        };
        f.addComponentType(collection);


        var collectionItem = new PgComponentType('materialize.collection-item', 'Collection Item');
        collectionItem.selector = 'li.collection-item';
        collectionItem.parent_selector = '.collection';
        collectionItem.preview_image = 'collectionItem.png';
        collectionItem.code = '<li class="collection-item">Alvin</li>';
        collectionItem.tags = 'major';
        collectionItem.sections = {
            'materialize.collection-item' : {
                name : 'Collection item options',
                fields : {
                    'materialize.collection-item.dismissable' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'dismissable',
                        name: 'Dismissable'
                    },
                    'materialize.collection-item.active' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'active',
                        name: 'Active?'
                    }
                }
            }
        };
        f.addComponentType(collectionItem);


        var linkCollectionItem = new PgComponentType('materialize.link-collection-item', 'Link Collection Item');
        linkCollectionItem.selector = 'a.collection-item';
        linkCollectionItem.parent_selector = '.collection';
        linkCollectionItem.preview_image = 'linkCollectionItem.png';
        linkCollectionItem.code = '<a href="#!" class="collection-item">Item</a>';
        linkCollectionItem.tags = 'major';
        linkCollectionItem.sections = {
            'materialize.link-collection-item' : {
                name : 'Collection item options',
                fields : {
                    'materialize.collection-item.dismissable' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'dismissable',
                        name: 'Dismissable'
                    }
                }
            }
        };
        f.addComponentType(linkCollectionItem);


        var avatarCollectionItem = new PgComponentType('materialize.avatar-collection-item', 'Avatar Collection Item');
        avatarCollectionItem.selector = '.collection-item.avatar';
        avatarCollectionItem.parent_selector = '.collection';
        avatarCollectionItem.preview_image = 'avatarCollectionItem.png';
        avatarCollectionItem.code = '<li class="collection-item avatar">\
          <img src="images/yuna.jpg" alt="" class="circle">\
          <span class="title">Title</span>\
          <p>First Line <br>\
             Second Line\
          </p>\
          <a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>\
        </li>';
        avatarCollectionItem.tags = 'major';
        f.addComponentType(avatarCollectionItem);


        var collectionHeader = new PgComponentType('materialize.collection-header-item', 'Collection Header Item');
        collectionHeader.selector = '.collection-header';
        collectionHeader.parent_selector = '.collection';
        collectionHeader.preview_image = 'collectionHeader.png';
        collectionHeader.code = '<li class="collection-header"><h4>Collection Header</h4></li>';
        collectionHeader.tags = 'major';
        f.addComponentType(collectionHeader);


        var collectionItemWithSecondary = new PgComponentType('materialize.collection-item-with-secondary', 'Collection Item With Secondary');
        collectionItemWithSecondary.selector = '.has-secondary';
        collectionItemWithSecondary.parent_selector = '.collection';
        collectionItemWithSecondary.preview_image = 'collectionItemWithSecondary.png';
        collectionItemWithSecondary.code = '<li class="collection-item has-secondary"><div>Alvin<a href="#!" class="secondary-content"><i class="mdi-content-send"></i></a></div></li>';
        collectionItemWithSecondary.tags = 'major';
        f.addComponentType(collectionItemWithSecondary);


        var badge = new PgComponentType('materialize.badge', 'Badge');
        badge.selector = '.badge';
        badge.parent_selector = 'body';
        badge.preview_image = 'badge.png';
        badge.code = '<span class="badge">144</span>';
        badge.tags = 'major';
        badge.sections = {
            'materialize.badge' : {
                name : 'Badge Options',
                fields : {
                    'materialize.badge.shape' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'new',
                        name: 'New?'
                    }
                }
            }
        };
        f.addComponentType(badge);


        var button = new PgComponentType('materialize.button', 'Button');
        button.selector = 'a';
        button.parent_selector = 'body';
        button.preview_image = 'button.png';
        button.code = '<a class="btn">Stuff</a>';
        button.tags = 'major';
        button.sections = {
            'materialize.button' : {
                name : 'Button Options',
                fields : {
                    'materialize.button.wavesEffect' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-effect',
                        name: 'Wave Effect'
                    },
                    'materialize.button.wavesLight' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-light',
                        name: 'Wave Light'
                    },
                    'materialize.button.floating' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'btn-floating',
                        name: 'Floating button'
                    },
                    'materialize.button.disabled' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'disabled',
                        name: 'Disabled button'
                    },
                    'materialize.button.type' : {
                        type : 'select',
                        action: 'apply_class',
                        name: 'Button Type',
                        show_empty: true,
                        options: [
                            {key: 'btn', name: "Regular"},
                            {key: 'btn-large', name: "Large"},
                            {key: 'btn-flat', name: "Flat"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(button);


        var fixedActionButton = new PgComponentType('materialize.button', 'Fixed Action Button');
        fixedActionButton.selector = '.fixed-action-btn';
        fixedActionButton.parent_selector = 'body';
        fixedActionButton.preview_image = 'fixedActionButton.png';
        fixedActionButton.code = '<div class="fixed-action-btn" style="bottom: 45px; right: 24px;">\
          <a class="btn-floating btn-large red">\
            <i class="large mdi-editor-mode-edit"></i>\
          </a>\
          <ul>\
            <li><a class="btn-floating red"><i class="large mdi-editor-insert-chart"></i></a></li>\
            <li><a class="btn-floating yellow darken-1"><i class="large mdi-editor-format-quote"></i></a></li>\
            <li><a class="btn-floating green"><i class="large mdi-editor-publish"></i></a></li>\
            <li><a class="btn-floating blue"><i class="large mdi-editor-attach-file"></i></a></li>\
          </ul>\
        </div>';
        fixedActionButton.tags = 'major';
        f.addComponentType(fixedActionButton);


        var dropdown = new PgComponentType('materialize.dropdown', 'Dropdown');
        dropdown.selector = '.dropdown-container';
        dropdown.parent_selector = 'body';
        dropdown.preview_image = 'dropdown.png';
        dropdown.code = '<div class="dropdown-container">\
          <a class="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown<i class="mdi-navigation-arrow-drop-down right"></i></a>\
          <ul id="dropdown2" class="dropdown-content">\
            <li><a href="#!">one<span class="badge">1</span></a></li>\
            <li><a href="#!">two<span class="new badge">1</span></a></li>\
            <li><a href="#!">three</a></li>\
          </ul>\
        </div>';
        dropdown.tags = 'major';
        dropdown.sections = {
            'materialize.dropDown' : {
                name : 'Dropdown Options',
                fields : {
                    'materialize.dropdown.dataActiates' : {
                        type : 'text',
                        name: 'Data Activate',
                        action: 'custom',
                        live_update: false,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropcontent = new pgQuery($el.find('.dropdown-content'));
                            return pgdropcontent.attr('id');
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropcontent = new pgQuery($el.find('.dropdown-content'));
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropcontent.attr('id', value);
                            pgdropbutton.attr('data-activates', value);
                            return value;
                        }
                    },
                    'materialize.dropdown.induration' : {
                        type : 'text',
                        name: 'Induration (ms)',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            return pgdropbutton.attr('data-induration') || 300;
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropbutton.attr('data-induration', value);
                            return value;
                        }
                    },
                    'materialize.dropdown.outduration' : {
                        type : 'text',
                        name: 'Outduration (ms)',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            return pgdropbutton.attr('data-outduration') || 250;
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropbutton.attr('data-outduration', value);
                            return value;
                        }
                    },
                    'materialize.dropdown.constrainwidth' : {
                        type : 'select',
                        name: 'Constrainwidth',
                        action: 'custom',
                        options: [
                            {key: 'true', name: 'True'},
                            {key: 'false', name: 'False'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            return pgdropbutton.attr('data-constrainwidth') || 'true';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropbutton.attr('data-constrainwidth', value);
                            return value;
                        }
                    },
                    'materialize.dropdown.hover' : {
                        type : 'select',
                        name: 'Hover',
                        action: 'custom',
                        options: [
                            {key: 'true', name: 'True'},
                            {key: 'false', name: 'False'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            return pgdropbutton.attr('data-hover') || 'false';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropbutton.attr('data-hover', value);
                            return value;
                        }
                    },
                    'materialize.dropdown.gutter' : {
                        type : 'text',
                        name: 'Spacing from the aligned edge',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            return pgdropbutton.attr('data-gutter') || '0';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropbutton.attr('data-gutter', value);
                            return value;
                        }
                    },
                    'materialize.dropdown-btn.beloworigin' : {
                        type : 'select',
                        name: 'Show below the activator',
                        action: 'custom',
                        options: [
                            {key: 'true', name: 'True'},
                            {key: 'false', name: 'False'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            return pgdropbutton.attr('data-beloworigin') || 'false';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropbutton.attr('data-beloworigin', value);
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(dropdown);


        var dropdownBtn = new PgComponentType('materialize.dropdown-btn', 'Dropdown Button');
        dropdownBtn.selector = '.dropdown-button';
        dropdownBtn.parent_selector = 'body';
        dropdownBtn.preview_image = 'dropdown.png';
        dropdownBtn.code = '<a class="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown<i class="mdi-navigation-arrow-drop-down right"></i></a>';
        dropdownBtn.tags = 'major';
        dropdownBtn.sections = {
            'materialize.dropdown-btn' : {
                name : 'Dropdown Button Options',
                fields : {
                    'materialize.dropdown-btn.induration' : {
                        type : 'text',
                        name: 'Induration (ms)',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            return pgdropbutton.attr('data-induration');
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            pgdropbutton.attr('data-induration', value) || 300;
                            return value;
                        }
                    },
                    'materialize.dropdown-btn.outduration': {
                        type : 'text',
                        name: 'Outduration (ms)',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            return pgdropbutton.attr('data-outduration') || 250;
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            pgdropbutton.attr('data-outduration', value);
                            return value;
                        }
                    },
                    'materialize.dropdown-btn.constrainwidth' : {
                        type : 'select',
                        name: 'Constrainwidth',
                        action: 'custom',
                        options: [
                            {key: 'true', name: 'True'},
                            {key: 'false', name: 'False'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            return pgdropbutton.attr('data-constrainwidth') || 'true';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            pgdropbutton.attr('data-constrainwidth', value);
                            return value;
                        }
                    },
                    'materialize.dropdown-btn.hover' : {
                        type : 'select',
                        name: 'Hover',
                        action: 'custom',
                        options: [
                            {key: 'true', name: 'True'},
                            {key: 'false', name: 'False'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            return pgdropbutton.attr('data-hover') || 'false';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            pgdropbutton.attr('data-hover', value);
                            return value;
                        }
                    },
                    'materialize.dropdown-btn.gutter' : {
                        type : 'text',
                        name: 'Spacing from the aligned edge',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            return pgdropbutton.attr('data-gutter') || '0';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            pgdropbutton.attr('data-gutter', value);
                            return value;
                        }
                    },
                    'materialize.dropdown-btn.beloworigin' : {
                        type : 'select',
                        name: 'Show below the activator',
                        action: 'custom',
                        options: [
                            {key: 'true', name: 'True'},
                            {key: 'false', name: 'False'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            return pgdropbutton.attr('data-beloworigin') || 'false';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropbutton = new pgQuery($el);
                            pgdropbutton.attr('data-beloworigin', value);
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(dropdownBtn);


        var container = new PgComponentType('materialize.container', 'Container');
        container.selector = '.container';
        container.parent_selector = 'body';
        container.code = '<div class="pg-empty-placeholder container"></div>';
        container.tags = 'major';
        f.addComponentType(container);


        var blockquote = new PgComponentType('materialize.blockquote', 'Blockquote');
        blockquote.selector = 'blockquote';
        blockquote.parent_selector = 'body';
        blockquote.preview_image = 'blockquote.png';
        blockquote.code = '<blockquote>\
          This is an example quotation that uses the blockquote tag.\
        </blockquote>';
        blockquote.tags = 'major';
        f.addComponentType(blockquote);


        var verAlign = new PgComponentType('materialize.verAlign', 'Vertical Align');
        verAlign.selector = '.valign-wrapper';
        verAlign.parent_selector = 'body';
        verAlign.code = '<div class="valign-wrapper">\
          <h5 class="valign">This should be vertically aligned</h5>\
        </div>';
        verAlign.tags = 'major';
        f.addComponentType(verAlign);


        var row = new PgComponentType('materialize.row', 'Row');
        row.selector = '.row';
        row.parent_selector = 'body';
        row.code = '<div class="pg-empty-placeholder row"></div>';
        row.tags = 'major';
        f.addComponentType(row);


        var divider = new PgComponentType('materialize.divider', 'Divider');
        divider.selector = '.divider';
        divider.parent_selector = 'body';
        divider.code = '<div class="divider"></div>';
        divider.tags = 'major';
        f.addComponentType(divider);


        var videoContainer = new PgComponentType('materialize.video-container', 'Video Container');
        videoContainer.selector = '.video-container';
        videoContainer.parent_selector = 'body';
        videoContainer.code = '<div class="video-container">\
            <iframe width="853" height="480" src="" frameborder="0" allowfullscreen></iframe>\
        </div>';
        videoContainer.tags = 'major';
        videoContainer.sections = {
            'materialize.video-container' : {
                name : 'Dropdown Options',
                fields : {
                    'materialize.video-container.no-control' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'no-controls',
                        name: 'No Controls'
                    }
                }
            }
        };
        f.addComponentType(videoContainer);


        var videoResponsive = new PgComponentType('materialize.responsive-video', 'Video Responsive');
        videoResponsive.selector = '.responsive-video';
        videoResponsive.parent_selector = 'body';
        videoResponsive.code = '<video class="responsive-video" controls>\
            <source src="" type="video/mp4">\
        </video>';
        videoResponsive.tags = 'major';
        f.addComponentType(videoResponsive);


        var section = new PgComponentType('materialize.section', 'Section');
        section.selector = '.section';
        section.parent_selector = 'body';
        section.code = '<div class="pg-empty-placeholder section"></div>';
        section.tags = 'major';
        f.addComponentType(section);


        var table = new PgComponentType('materialize.table', 'Table');
        table.selector = 'table';
        table.parent_selector = 'body';
        table.preview_image = 'table.png';
        table.code = '<table>\
            <thead>\
              <tr>\
                  <th data-field="id">Name</th>\
                  <th data-field="name">Item Name</th>\
                  <th data-field="price">Item Price</th>\
              </tr>\
            </thead>\
            <tbody>\
              <tr>\
                <td>Alvin</td>\
                <td>Eclair</td>\
                <td>$0.87</td>\
              </tr>\
              <tr>\
                <td>Alan</td>\
                <td>Jellybean</td>\
                <td>$3.76</td>\
              </tr>\
              <tr>\
                <td>Jonathan</td>\
                <td>Lollipop</td>\
                <td>$7.00</td>\
              </tr>\
            </tbody>\
          </table>';
        table.tags = 'major';
        table.sections = {
            'materialize.table' : {
                name : 'Table options',
                fields : {
                    'materialize.table.type' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Table type',
                        options: [
                            {key: 'bordered', name: "Bordered"},
                            {key: 'striped', name: "Striped"},
                            {key: 'hoverable', name: "Hoverable"},
                            {key: 'centered', name: "Centered"},
                            {key: 'responsive-table', name: "Responsive Table"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(table);


        var col = new PgComponentType('materialize.column', 'Column');
        col.selector = '.col';
        col.parent_selector = '.row';
        col.code = '<div class="col s12 m4 l4"><h3>Column Header</h3></div>';
        col.tags = 'major';
        col.sections = {
            'materialize.column' : {
                name : 'Column options',
                fields : {
                    'materialize.column.l-size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Medium Screen Size',
                        options: [
                            {key: 'l1', name: "l1"},
                            {key: 'l2', name: "l2"},
                            {key: 'l3', name: "l3"},
                            {key: 'l4', name: "l4"},
                            {key: 'l5', name: "l5"},
                            {key: 'l6', name: "l6"},
                            {key: 'l7', name: "l7"},
                            {key: 'l8', name: "l8"},
                            {key: 'l9', name: "l9"},
                            {key: 'l10', name: "l10"},
                            {key: 'l11', name: "l11"},
                            {key: 'l12', name: "l12"},
                        ]
                    },
                    'materialize.column.m-size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Medium Screen Size',
                        options: [
                            {key: 'm1', name: "m1"},
                            {key: 'm2', name: "m2"},
                            {key: 'm3', name: "m3"},
                            {key: 'm4', name: "m4"},
                            {key: 'm5', name: "m5"},
                            {key: 'm6', name: "m6"},
                            {key: 'm7', name: "m7"},
                            {key: 'm8', name: "m8"},
                            {key: 'm9', name: "m9"},
                            {key: 'm10', name: "m10"},
                            {key: 'm11', name: "m11"},
                            {key: 'm12', name: "m12"},
                        ]
                    },
                    'materialize.column.s-size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Small Screen Size',
                        options: [
                            {key: 's1', name: "s1"},
                            {key: 's2', name: "s2"},
                            {key: 's3', name: "s3"},
                            {key: 's4', name: "s4"},
                            {key: 's5', name: "s5"},
                            {key: 's6', name: "s6"},
                            {key: 's7', name: "s7"},
                            {key: 's8', name: "s8"},
                            {key: 's9', name: "s9"},
                            {key: 's10', name: "s10"},
                            {key: 's11', name: "s11"},
                            {key: 's12', name: "s12"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(col);


        var card = new PgComponentType('materialize.card', 'Card');
        card.selector = '.card';
        card.parent_selector = 'body';
        card.preview_image = 'card.png';
        card.code = '<div class="card blue-grey darken-1">\
            <div class="card-content white-text">\
              <span class="card-title">Card Title</span>\
              <p>I am a very simple card. I am good at containing small bits of information.\
              I am convenient because I require little markup to use effectively.</p>\
            </div>\
            <div class="card-action">\
              <a href="#">This is a link</a>\
              <a href="#">This is a link</a>\
            </div>\
          </div>';
        card.tags = 'major';
        card.sections = {
            'materialize.card' : {
                name : 'Card options',
                fields : {
                    'materialize.card.size' : {
                        type : 'select',
                        action: 'apply_class',
                        name: 'Card',
                        show_empty: true,
                        options: [
                            {key: 'small', name: "Small"},
                            {key: 'medium', name: "Medium"},
                            {key: 'large', name: "Large"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(card);


        var cardImageContainer = new PgComponentType('materialize.card-image-container', 'Card Image Container');
        cardImageContainer.selector = '.card-image';
        cardImageContainer.parent_selector = '.card';
        cardImageContainer.preview_image = 'cardImage.png';
        cardImageContainer.code = '<div class="card-image">\
          <img src="images/sample-1.jpg">\
          <span class="card-title">Card Title</span>\
        </div>';
        cardImageContainer.tags = 'major';
        cardImageContainer.sections = {
            'materialize.card-image-container' : {
                name : 'Card Image Container Options',
                fields : {
                    'materialize.card-image-container.wavesEffect' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-effect',
                        name: 'Wave Effect'
                    },
                    'materialize.card-image-container.wavesLight' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-light',
                        name: 'Wave Light'
                    },
                    'materialize.card-image-container.wavesBlock' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-block',
                        name: 'Wave Block'
                    }
                }
            }
        };
        f.addComponentType(cardImageContainer);


        var cardImage = new PgComponentType('materialize.card-image', 'Card Image');
        cardImage.selector = '.card-image > img';
        cardImage.parent_selector = '.card-image';
        cardImage.preview_image = 'cardImage.png';
        cardImage.code = '<img src="images/sample-1.jpg">';
        cardImage.sections = {
            'materialize.card-image' : {
                name : 'Card Image Options',
                fields : {
                    'materialize.card-image.wavesEffect' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'activator',
                        name: 'Activator?'
                    }
                }
            }
        };
        f.addComponentType(cardImage);


        var cardContent = new PgComponentType('materialize.card-content', 'Card Content');
        cardContent.selector = '.card-content';
        cardContent.parent_selector = '.card';
        cardContent.preview_image = 'cardContent.png';
        cardContent.code = '<div class="card-content white-text">\
          <span class="card-title">Card Title</span>\
          <p>I am a very simple card. I am good at containing small bits of information.\
          I am convenient because I require little markup to use effectively.</p>\
        </div>';
        cardContent.tags = 'major';
        f.addComponentType(cardContent);


        var cardAction = new PgComponentType('materialize.card-action', 'Card Action');
        cardAction.selector = '.card-action';
        cardAction.parent_selector = '.card';
        cardAction.preview_image = 'cardAction.png';
        cardAction.code = '<div class="card-action">\
          <a href="#">This is a link</a>\
          <a href="#">This is a link</a>\
        </div>';
        cardAction.tags = 'major';
        f.addComponentType(cardAction);


        var cardReveal = new PgComponentType('materialize.card-reveal', 'Card Reveal');
        cardReveal.selector = '.card-reveal';
        cardReveal.parent_selector = '.card';
        cardReveal.preview_image = 'cardReveal.png';
        cardReveal.code = '<div class="card-reveal">\
          <span class="card-title grey-text text-darken-4">Card Title <i class="mdi-navigation-close right"></i></span>\
          <p>Here is some more information about this product that is only revealed once clicked on.</p>\
        </div>';
        cardReveal.tags = 'major';
        f.addComponentType(cardReveal);


        var cardPanel = new PgComponentType('materialize.card-panel', 'Card Panel');
        cardPanel.selector = '.card-panel';
        cardPanel.parent_selector = 'body';
        cardPanel.preview_image = 'cardPanel.png';
        cardPanel.code = '<div class="card-panel teal">\
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.\
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\
          </span>\
        </div>';
        cardPanel.tags = 'major';
        f.addComponentType(cardPanel);


        var form = new PgComponentType('materialize.form', 'Form');
        form.parent_selector = 'body';
        form.preview_image = 'form.png';
        form.code = '<div class="row">\
          <form class="col s12">\
            <div class="row">\
              <div class="input-field col s6">\
                <input placeholder="Placeholder" id="first_name" type="text" class="validate">\
                <label for="first_name">First Name</label>\
              </div>\
              <div class="input-field col s6">\
                <input id="last_name" type="text" class="validate">\
                <label for="last_name">Last Name</label>\
              </div>\
            </div>\
            <div class="row">\
              <div class="input-field col s12">\
                <i class="mdi-action-highlight-remove prefix"></i>\
                <input disabled value="I am not editable" id="disabled" type="text" class="validate">\
                <label for="disabled">Disabled</label>\
              </div>\
            </div>\
            <div class="input-field col s12">\
              <select>\
                <option value="" disabled selected>Choose your option</option>\
                <option value="1">Option 1</option>\
                <option value="2">Option 2</option>\
                <option value="3">Option 3</option>\
              </select>\
              <label>Materialize Select</label>\
            </div>\
            <div class="row">\
              <div class="input-field col s12">\
                <textarea id="textarea1" class="materialize-textarea"></textarea>\
                <label for="textarea1">Message</label>\
              </div>\
            </div>\
            <input type="submit" class="btn red" value="Stuff">\
          </form>\
        </div>';
        form.tags = 'major';
        f.addComponentType(form);


        var radioButton = new PgComponentType('materialize.radio-button', 'Radio Button');
        radioButton.selector = 'input[type="radio"]';
        radioButton.parent_selector = 'body';
        radioButton.sections = {
            'materialize.radio-button' : {
                name : 'Radio Options',
                fields : {
                    'materialize.radio-button.with-gap' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'with-gap',
                        name: 'White Gap?'
                    }
                }
            }
        };
        f.addComponentType(radioButton);


        var checkbox = new PgComponentType('materialize.checkbox', 'Checkbox');
        checkbox.selector = 'input[type="checkbox"]';
        checkbox.parent_selector = 'body';
        checkbox.sections = {
            'materialize.checkbox' : {
                name : 'Checkbox Options',
                fields : {
                    'materialize.checkbox.filled-in' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'filled-in',
                        name: 'Filled in?'
                    }
                }
            }
        };
        f.addComponentType(checkbox);


        var switchInput = new PgComponentType('materialize.switch-input', 'Switch');
        switchInput.selector = '.switch';
        switchInput.parent_selector = 'body';
        switchInput.preview_image = 'switchInput.png';
        switchInput.code = '<div class="switch">\
          <label>\
            Off\
            <input type="checkbox">\
            <span class="lever"></span>\
            On\
          </label>\
        </div>';
        f.addComponentType(switchInput);


        var fileField = new PgComponentType('materialize.file-field', 'File Field');
        fileField.selector = '.file-field';
        fileField.parent_selector = 'body';
        fileField.preview_image = 'fileField.png';
        fileField.code = '<div class="file-field input-field">\
          <input class="file-path validate" type="text"/>\
          <div class="btn">\
            <span>File</span>\
            <input type="file" />\
          </div>\
        </div>';
        f.addComponentType(fileField);


        var rangeField = new PgComponentType('materialize.range-field', 'Range Field');
        rangeField.selector = '.range-field';
        rangeField.parent_selector = 'body';
        rangeField.preview_image = 'rangeField.png';
        rangeField.code = '<p class="range-field">\
          <input type="range" id="test5" min="0" max="100" />\
        </p>';
        rangeField.sections = {
          'materialize.range-field' : {
            name: 'Range Field Options',
            fields : {
              'materialize.range-field.min' : {
                  type : 'text',
                  name : 'Min value',
                  live_update: true,
                  action : 'custom',
                  get_value: function(obj) {
                      var $el = obj.data;
                      var pgel = new pgQuery($el.find('input[type="range"]'));
                      return pgel.attr('min');
                  },
                  set_value: function(obj, value, values, oldValue, eventType) {
                      var $el = obj.data;
                      var pgel = new pgQuery($el.find('input[type="range"]'));
                      pgel.attr('min', value);
                      return value;
                  }
              },
              'materialize.range-field.max' : {
                  type : 'text',
                  name : 'Max value',
                  live_update: true,
                  action : 'custom',
                  get_value: function(obj) {
                      var $el = obj.data;
                      var pgel = new pgQuery($el.find('input[type="range"]'));
                      return pgel.attr('max');
                  },
                  set_value: function(obj, value, values, oldValue, eventType) {
                      var $el = obj.data;
                      var pgel = new pgQuery($el.find('input[type="range"]'));
                      pgel.attr('max', value);
                      return value;
                  }
              }
            }
          }
        };
        f.addComponentType(rangeField);


        var formInput = new PgComponentType('materialize.form-input', 'Form Input');
        formInput.selector = 'input:not([type="submit"])';
        formInput.parent_selector = 'body';
        formInput.sections = {
            'materialize.form-input' : {
                name : 'Form Input Options',
                fields : {
                    'materialize.form-input.validate' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'validate',
                        name: 'Validate?'
                    },
                    'materialize.form-input.length' : {
                        type : 'text',
                        name : 'Character Length',
                        live_update: true,
                        action : 'custom',
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            return pgel.attr('length');
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            pgel.attr('length', value);
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(formInput);


        var progressBar = new PgComponentType('materialize.progress-bar', 'Progress Bar');
        progressBar.selector = '.progress';
        progressBar.parent_selector = 'body';
        progressBar.preview_image = 'progressBar.png';
        progressBar.code = '<div class="progress">\
            <div class="determinate" style="width: 70%"></div>\
        </div>'
        progressBar.sections = {
            'materialize.progress-bar' : {
                name : 'ProgressBar Options',
                fields : {
                    'materialize.progress-bar.width' : {
                        type : 'text',
                        name : 'Progress full (%)',
                        live_update: true,
                        action : 'custom',
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgel = $($el);
                            var chel = $($el.find('.determinate'));
                            if (chel) {
                                var width = chel.width();
                                var parentWidth = pgel.width();
                                var percent = 100*width/parentWidth;
                                return Math.round(percent);
                            }
                            return '';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgel = $($el.find('.determinate'));
                            if (pgel) {
                                pgel.width(value+"%");
                                return value;
                            }
                            return '';
                        }
                    }
                }
            }
        };
        f.addComponentType(progressBar);


        var determinate = new PgComponentType('materialize.determinate-progress-bar', 'Determinate');
        determinate.selector = '.determinate';
        determinate.parent_selector = '.progress';
        determinate.code = '<div class="determinate" style="width: 70%"></div>'
        determinate.sections = {
            'materialize.determinate-progress-bar' : {
                name : 'determinate Options',
                fields : {
                    'materialize.determinate-progress-bar.determinate' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'determinate',
                        name: 'Determinate?'
                    },
                    'materialize.determinate-progress-bar.indeterminate' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'indeterminate',
                        name: 'Indeterminate?'
                    },
                    'materialize.determinate-progress-bar.width' : {
                        type : 'text',
                        name : 'Progress full (%)',
                        live_update: true,
                        action : 'custom',
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgel = $($el).parent();
                            var chel = $($el);
                            if (chel) {
                                var width = chel.width();
                                var parentWidth = pgel.width();
                                var percent = 100*width/parentWidth;
                                return Math.round(percent);
                            }
                            return '';
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgel = $($el.find('.determinate'));
                            if (pgel) {
                                pgel.width(value+"%");
                                return value;
                            }
                            return '';
                        }
                    }
                }
            }
        };
        f.addComponentType(determinate);


        var indeterminate = new PgComponentType('materialize.indeterminate-progress-bar', 'Indeterminate');
        indeterminate.selector = '.indeterminate';
        indeterminate.parent_selector = '.progress';
        indeterminate.code = '<div class="indeterminate"></div>'
        indeterminate.sections = {
            'materialize.indeterminate-progress-bar' : {
                name : 'Indeterminate Options',
                fields : {
                    'materialize.determinate-progress-bar.determinate' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'determinate',
                        name: 'Determinate?'
                    },
                    'materialize.determinate-progress-bar.indeterminate' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'indeterminate',
                        name: 'Indeterminate?'
                    }
                }
            }
        };
        f.addComponentType(indeterminate);


        var inputField = new PgComponentType('materialize.form-input-field', 'Form Input Field');
        inputField.selector = 'input-field';
        inputField.parent_selector = 'body';
        inputField.code = '<div class="input-field"></div>'
        f.addComponentType(inputField);


        var preloadCircular = new PgComponentType('materialize.circular-preload', 'Circular Preload');
        preloadCircular.selector = '.preloader-wrapper';
        preloadCircular.parent_selector = 'body';
        preloadCircular.preview_image = 'preloadCircular.png';
        preloadCircular.code = '<div class="preloader-wrapper big active">\
            <div class="spinner-layer spinner-blue-only">\
              <div class="circle-clipper left">\
                <div class="circle"></div>\
              </div><div class="gap-patch">\
                <div class="circle"></div>\
              </div><div class="circle-clipper right">\
                <div class="circle"></div>\
              </div>\
            </div>\
        </div>';
        preloadCircular.sections = {
            'materialize.circular-preload' : {
                name : 'Circular Preload Options',
                fields : {
                    'materialize.circular-preload.active' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'active',
                        name: 'Active?'
                    },
                    'materialize.circular-preload.size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Icon Size',
                        options: [
                            {key: 'big', name: "Big"},
                            {key: 'small', name: "Small"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(preloadCircular);


        var spinnerLayer = new PgComponentType('materialize.spinner-layer', 'Spinner Layer');
        spinnerLayer.selector = '.spinner-layer';
        spinnerLayer.parent_selector = '.preloader-wrapper';
        spinnerLayer.code = '<div class="spinner-layer spinner-blue-only">\
          <div class="circle-clipper left">\
            <div class="circle"></div>\
          </div><div class="gap-patch">\
            <div class="circle"></div>\
          </div><div class="circle-clipper right">\
            <div class="circle"></div>\
          </div>\
        </div>';
        spinnerLayer.sections = {
            'materialize.spinner-layer' : {
                name : 'Circular Preload Options',
                fields : {
                    'materialize.spinner-layer.color' : {
                        type : 'select',
                        action: 'apply_class',
                        name: 'Spinner Color',
                        options: [
                            {key: 'spinner-blue-only', name: "Blue Only"},
                            {key: 'spinner-blue', name: "Blue"},
                            {key: 'spinner-red-only', name: "Red Only"},
                            {key: 'spinner-red', name: "Red"},
                            {key: 'spinner-yellow-only', name: "Yellow Only"},
                            {key: 'spinner-yellow', name: "Yellow"},
                            {key: 'spinner-green-only', name: "Green Only"},
                            {key: 'spinner-green', name: "Green"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(spinnerLayer);


        var selectField = new PgComponentType('materialize.select-field', 'Select Field');
        selectField.selector = 'select';
        selectField.parent_selector = 'body';
        selectField.preview_image = 'selectField.png';
        selectField.code = '<select class="browser-default">\
          <option value="" disabled selected>Choose your option</option>\
          <option value="1">Option 1</option>\
          <option value="2">Option 2</option>\
          <option value="3">Option 3</option>\
        </select>'
        selectField.sections = {
            'materialize.select-field' : {
                name : 'Select Field Options',
                fields : {
                    'materialize.select-field.browser-default' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'browser-default',
                        name: 'Browser Default?'
                    }
                }
            }
        };
        f.addComponentType(selectField);


        var datePicker = new PgComponentType('materialize.date-picker', 'Date Picker');
        datePicker.selector = 'input[type="date"]';
        datePicker.parent_selector = 'body';
        datePicker.preview_image = 'datePicker.png';
        datePicker.code = '<input type="date" class="datepicker" placeholder="Pick a date">'
        datePicker.sections = {
            'materialize.date-picker' : {
                name : 'Date Picker Options',
                fields : {
                    'materialize.date-picker.style' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'datepicker',
                        name: 'Materialize Date Picker'
                    }
                }
            }
        };
        f.addComponentType(datePicker);


        var pagination = new PgComponentType('materialize.pagination', 'Pagination');
        pagination.selector = '.pagination';
        pagination.parent_selector = 'body';
        pagination.preview_image = 'pagination.png';
        pagination.code = '<ul class="pagination">\
            <li class="disabled"><a href="#!"><i class="mdi-navigation-chevron-left"></i></a></li>\
            <li class="active"><a href="#!">1</a></li>\
            <li class="waves-effect"><a href="#!">2</a></li>\
            <li class="waves-effect"><a href="#!">3</a></li>\
            <li class="waves-effect"><a href="#!">4</a></li>\
            <li class="waves-effect"><a href="#!">5</a></li>\
            <li class="waves-effect"><a href="#!"><i class="mdi-navigation-chevron-right"></i></a></li>\
        </ul>';
        f.addComponentType(pagination);


        var collapsible = new PgComponentType('materialize.collapsible', 'Collapsible');
        collapsible.selector = '.collapsible';
        collapsible.parent_selector = 'body';
        collapsible.preview_image = 'collapsible.png';
        collapsible.code = '<ul class="collapsible" data-collapsible="accordion">\
          <li>\
            <div class="collapsible-header"><i class="mdi-image-filter-drama"></i>First</div>\
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\
          </li>\
          <li>\
            <div class="collapsible-header"><i class="mdi-maps-place"></i>Second</div>\
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\
          </li>\
          <li>\
            <div class="collapsible-header"><i class="mdi-social-whatshot"></i>Third</div>\
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\
          </li>\
        </ul>';
        collapsible.sections = {
            'materialize.collapsible' : {
                name : 'Collapsible Options',
                fields : {
                    'materialize.collapsible.type' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Type',
                        options: [
                          {key: 'popout', name: "Popout"}
                        ]
                    },
                    'materialize.collapsible.style' : {
                        type : 'select',
                        name: 'Style',
                        action: 'custom',
                        show_empty: true,
                        live_update: true,
                        options: [
                            {key: 'accordion', name: 'Accordion'},
                            {key: 'expandable', name: 'Expandable'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            return pgel.attr('data-collapsible');
                        },
                        set_value: function(obj, value, values) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            if (value && value.length > 0)
                                pgel.attr('data-collapsible', value);
                            else
                                pgel.removeAttr('data-collapsible');
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(collapsible);


        var tooltipped = new PgComponentType('materialize.tooltipped', 'Tooltip');
        tooltipped.selector = '.tooltipped';
        tooltipped.parent_selector = 'body';
        tooltipped.sections = {
            'materialize.tooltipped' : {
                name : 'Tooltip Options',
                fields : {
                    'materialize.tooltipped.position' : {
                        type : 'select',
                        name: 'Position',
                        action: 'custom',
                        live_update: true,
                        options: [
                            {key: 'bottom', name: 'Bottom'},
                            {key: 'top', name: 'Top'},
                            {key: 'left', name: 'Left'},
                            {key: 'right', name: 'Right'}
                        ],
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            return pgel.attr('data-position');
                        },
                        set_value: function(obj, value, values) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            pgel.attr('data-position', value);
                            return value;
                        }
                    },
                    'materialize.tooltipped.text' : {
                        type : 'text',
                        name: 'Text',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            return pgel.attr('data-tooltip');
                        },
                        set_value: function(obj, value, values) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            pgel.attr('data-tooltip', value);
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(tooltipped);


        var materialboxed = new PgComponentType('materialize.materialboxed', 'Material Boxed');
        materialboxed.selector = '.materialboxed';
        materialboxed.parent_selector = 'body';
        materialboxed.sections = {
            'materialize.materialboxed' : {
                name : 'Tooltip Options',
                fields : {
                    'materialize.materialboxed.caption' : {
                        type : 'text',
                        name: 'Caption',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            return pgel.attr('data-caption');
                        },
                        set_value: function(obj, value, values) {
                            var $el = obj.data;
                            var pgel = new pgQuery($el);
                            pgel.attr('data-caption', value);
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(materialboxed);


        var slider = new PgComponentType('materialize.slider', 'Slider');
        slider.selector = '.slider';
        slider.parent_selector = 'body';
        slider.preview_image = 'slider.png';
        slider.code = '<div class="slider">\
            <ul class="slides">\
              <li>\
                <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->\
                <div class="caption center-align">\
                  <h3>This is our big Tagline!</h3>\
                  <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                </div>\
              </li>\
              <li>\
                <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->\
                <div class="caption left-align">\
                  <h3>Left Aligned Caption</h3>\
                  <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                </div>\
              </li>\
              <li>\
                <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->\
                <div class="caption right-align">\
                  <h3>Right Aligned Caption</h3>\
                  <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                </div>\
              </li>\
              <li>\
                <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->\
                <div class="caption center-align">\
                  <h3>This is our big Tagline!</h3>\
                  <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                </div>\
              </li>\
            </ul>\
          </div>';
        f.addComponentType(slider);


        var modal = new PgComponentType('materialize.modal', 'Modal');
        modal.selector = '.modal-container';
        modal.parent_selector = 'body';
        modal.preview_image = 'modal.png';
        modal.code = '<div class="modal-container">\
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>\
          <div id="modal1" class="modal">\
            <div class="modal-content">\
              <h4>Modal Header</h4>\
              <p>A bunch of text</p>\
            </div>\
            <div class="modal-footer">\
              <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>\
            </div>\
          </div>\
        </div>';
        modal.sections = {
            'materialize.modal' : {
                name : 'Modal Options',
                fields : {
                    'materialize.modal.modal_name' : {
                        type : 'text',
                        name: 'Modal Name',
                        action: 'custom',
                        live_update: true,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgmodal = new pgQuery($el.find('.modal'));
                            return pgmodal.attr('id');
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgmodal = new pgQuery($el.find('.modal'));
                            var pgtrigger = new pgQuery($el.find('.modal-trigger'));
                            pgmodal.attr('id', value);
                            pgtrigger.attr('href', "#" + value);
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(modal);


        var modalBody = new PgComponentType('materialize.modal-body', 'Modal Body');
        modalBody.selector = '.modal';
        modalBody.parent_selector = 'body';
        modalBody.sections = {
            'materialize.modal-body' : {
                name : 'Modal Body Options',
                fields : {
                    'materialize.modal-body.footer-style' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'modal-fixed-footer',
                        name: 'Fixed Footer'
                    },
                    'materialize.modal-body.bottom-sheet' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'bottom-sheet',
                        name: 'Bottom Sheet'
                    }
                }
            }
        };
        f.addComponentType(modalBody);


        var footer = new PgComponentType('materialize.footer', 'Footer');
        footer.selector = '.page-footer';
        footer.parent_selector = 'body';
        footer.preview_image = 'footer.png';
        footer.code = '<footer class="page-footer">\
          <div class="container">\
            <div class="row">\
              <div class="col l6 s12">\
                <h5 class="white-text">Footer Content</h5>\
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>\
              </div>\
              <div class="col l4 offset-l2 s12">\
                <h5 class="white-text">Links</h5>\
                <ul>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>\
                </ul>\
              </div>\
            </div>\
          </div>\
          <div class="footer-copyright">\
            <div class="container">\
            © 2014 Copyright Text\
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>\
            </div>\
          </div>\
        </footer>';
        footer.tags = 'major';
        f.addComponentType(footer);


        var anything = new PgComponentType('materialize.anything', '');
        anything.selector = '*';
        anything.parent_selector = 'body';
        anything.sections = {
          'materialize.anything' : {
             name: "General Options",
             fields: {
                'materialize.anything.align' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Align',
                    options: [
                        {key: 'left-align', name: "Align Left"},
                        {key: 'right-align', name: "Align Right"},
                        {key: 'center-align', name: "Align Center"}
                    ]
                },
                'materialize.anything.floating' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Floating',
                    options: [
                        {key: 'left', name: "Left"},
                        {key: 'right', name: "Right"}
                    ]
                },
                'materialize.anything.hide' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Hide',
                    options: [
                        {key: 'hide', name: "Hidden for all Devices"},
                        {key: 'hide-on-small-only', name: "Hidden for Mobile Only"},
                        {key: 'hide-on-med-only', name: "Hidden for Tablet Only"},
                        {key: 'hide-on-med-and-down', name: "Hidden for Tablet and Below"},
                        {key: 'hide-on-med-and-up', name: "Hidden for Tablet and Above"},
                        {key: 'hide-on-large-only', name: "Hidden for Desktop Only"}
                    ]
                },
                'materialize.anything.bg-color' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Background Color',
                    options: [
                        {key: 'red', name: "Red"},
                        {key: 'pink', name: "Pink"},
                        {key: 'purple', name: "Purple"},
                        {key: 'deep-purple', name: "Deep Purple"},
                        {key: 'indigo', name: "Indigo"},
                        {key: 'blue', name: "Blue"},
                        {key: 'light-blue', name: "Light Blue"},
                        {key: 'cyan', name: "Cyan"},
                        {key: 'teal', name: "Teal"},
                        {key: 'green', name: "Green"},
                        {key: 'light-green', name: "Light Green"},
                        {key: 'lime', name: "Lime"},
                        {key: 'yellow', name: "Yellow"},
                        {key: 'amber', name: "Amber"},
                        {key: 'orange', name: "Orange"},
                        {key: 'deep-orange', name: "Deep Orange"},
                        {key: 'brown', name: "Brown"},
                        {key: 'grey', name: "Grey"},
                        {key: 'blue-grey', name: "Blue Grey"},
                        {key: 'black', name: "Black"},
                        {key: 'white', name: "White"},
                        {key: 'transparent', name: "Transparent"}
                    ]
                },
                'materialize.anything.color-degree' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Color Degree',
                    options: [
                        {key: 'lighten-5', name: "Lighten 5"},
                        {key: 'lighten-4', name: "Lighten 4"},
                        {key: 'lighten-3', name: "Lighten 3"},
                        {key: 'lighten-2', name: "Lighten 2"},
                        {key: 'lighten-1', name: "Lighten 1"},
                        {key: 'darken-1', name: "Darken 1"},
                        {key: 'darken-2', name: "Darken 2"},
                        {key: 'darken-3', name: "Darken 3"},
                        {key: 'darken-4', name: "Darken 4"},
                        {key: 'accent-1', name: "Accent 1"},
                        {key: 'accent-2', name: "Accent 2"},
                        {key: 'accent-3', name: "Accent 3"},
                        {key: 'accent-4', name: "Accent 4"},
                    ]
                },
                'materialize.anything.text-color' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Text Color',
                    options: [
                        {key: 'red-text', name: "Red"},
                        {key: 'pink-text', name: "Pink"},
                        {key: 'purple-text', name: "Purple"},
                        {key: 'deep-purple-text', name: "Deep Purple"},
                        {key: 'indigo-text', name: "Indigo"},
                        {key: 'blue-text', name: "Blue"},
                        {key: 'light-blue-text', name: "Light Blue"},
                        {key: 'cyan-text', name: "Cyan"},
                        {key: 'teal-text', name: "Teal"},
                        {key: 'green-text', name: "Green"},
                        {key: 'light-green-text', name: "Light Green"},
                        {key: 'lime-text', name: "Lime"},
                        {key: 'yellow-text', name: "Yellow"},
                        {key: 'amber-text', name: "Amber"},
                        {key: 'orange-text', name: "Orange"},
                        {key: 'deep-orange-text', name: "Deep Orange"},
                        {key: 'brown-text', name: "Brown"},
                        {key: 'grey-text', name: "Grey"},
                        {key: 'blue-grey-text', name: "Blue Grey"},
                        {key: 'black-text', name: "Black"},
                        {key: 'white-text', name: "White"},
                        {key: 'transparent-text', name: "Transparent"}
                    ]
                },
                'materialize.anything.shadow' : {
                    type : 'select',
                    action: 'apply_class',
                    show_empty: true,
                    name: 'Shadow',
                    options: [
                        {key: 'z-depth-1', name: "Z Depth 1"},
                        {key: 'z-depth-2', name: "Z Depth 2"},
                        {key: 'z-depth-3', name: "Z Depth 3"},
                        {key: 'z-depth-4', name: "Z Depth 4"},
                        {key: 'z-depth-5', name: "Z Depth 5"}
                    ]
                },
                'materialize.anything.truncate' : {
                    type : 'checkbox',
                    action: 'apply_class',
                    value: 'truncate',
                    name: 'Truncate?'
                },
                'materialize.anything.flow-text' : {
                    type : 'checkbox',
                    action: 'apply_class',
                    value: 'flow-text',
                    name: 'Flow Text'
                }
             }
          },
          'materialize.anything_js' : {
            name: "Javascript Options",
            fields: {
                'materialize.anything_js.tooltipped' : {
                    type : 'checkbox',
                    action: 'apply_class',
                    value: 'tooltipped',
                    name: 'Tooltip'
                },
                'materialize.anything_js.materialboxed' : {
                    type : 'checkbox',
                    action: 'apply_class',
                    value: 'materialboxed',
                    name: 'Material Boxed'
                }
            }
          }
        };
        f.addComponentType(anything);

        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);

        var libsection = new PgFrameworkLibSection("MaterializePinegrowPlugin_lib", "Components");
        //Pass components in array
        libsection.setComponentTypes([icons, navbar, navbarLogo, navMobile, searchBar, collapseList, collapseButton, collection, collectionItem, linkCollectionItem, avatarCollectionItem, collectionHeader, collectionItemWithSecondary, badge, dropdown, button, fixedActionButton, divider, table, videoContainer, videoResponsive, blockquote, section, verAlign, container, row, col, card, cardImageContainer, cardImage, cardContent, cardAction, cardReveal, cardPanel, form, inputField, selectField, switchInput, fileField, rangeField, datePicker, progressBar, preloadCircular, spinnerLayer, pagination, collapsible, slider, modal, footer]);

        f.addLibSection(libsection);
   });
});