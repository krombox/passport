'use strict';

System.register('flagrow/passport/components/PassportSettingsModal', ['flarum/app', 'flarum/components/SettingsModal'], function (_export, _context) {
    "use strict";

    var app, SettingsModal, PassportSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal.default;
        }],
        execute: function () {
            PassportSettingsModal = function (_SettingsModal) {
                babelHelpers.inherits(PassportSettingsModal, _SettingsModal);

                function PassportSettingsModal() {
                    babelHelpers.classCallCheck(this, PassportSettingsModal);
                    return babelHelpers.possibleConstructorReturn(this, (PassportSettingsModal.__proto__ || Object.getPrototypeOf(PassportSettingsModal)).apply(this, arguments));
                }

                babelHelpers.createClass(PassportSettingsModal, [{
                    key: 'title',
                    value: function title() {
                        return app.translator.trans('flagrow-passport.admin.popup.title');
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        return [m('div', { className: 'Form-group' }, [m('label', { for: 'passport-app-auth-url' }, app.translator.trans('flagrow-passport.admin.popup.field.app-auth-url')), m('input', {
                            id: 'passport-app-auth-url',
                            className: 'FormControl',
                            bidi: this.setting('flagrow.passport.app_auth_url')
                        })]), m('div', { className: 'Form-group' }, [m('label', { for: 'passport-app-token-url' }, app.translator.trans('flagrow-passport.admin.popup.field.app-token-url')), m('input', {
                            id: 'passport-app-token-url',
                            className: 'FormControl',
                            bidi: this.setting('flagrow.passport.app_token_url')
                        })]), m('div', { className: 'Form-group' }, [m('label', { for: 'passport-app-user-url' }, app.translator.trans('flagrow-passport.admin.popup.field.app-user-url')), m('input', {
                            id: 'passport-app-user-url',
                            className: 'FormControl',
                            bidi: this.setting('flagrow.passport.app_user_url')
                        })]), m('div', { className: 'Form-group' }, [m('label', { for: 'passport-app-id' }, app.translator.trans('flagrow-passport.admin.popup.field.app-id')), m('input', {
                            id: 'passport-app-key',
                            className: 'FormControl',
                            bidi: this.setting('flagrow.passport.app_id')
                        })]), m('div', { className: 'Form-group' }, [m('label', { for: 'passport-app-secret' }, app.translator.trans('flagrow-passport.admin.popup.field.app-secret')), m('input', {
                            id: 'passport-app-secret',
                            className: 'FormControl',
                            bidi: this.setting('flagrow.passport.app_secret')
                        })]), m('div', { className: 'Form-group' }, [m('label', { for: 'passport-app-scopes' }, app.translator.trans('flagrow-passport.admin.popup.field.app-scopes')), m('input', {
                            id: 'passport-app-scopes',
                            className: 'FormControl',
                            bidi: this.setting('flagrow.passport.app_oauth_scopes')
                        })]), m('div', { className: 'Form-group' }, [m('label', { for: 'passport-button-title' }, app.translator.trans('flagrow-passport.admin.popup.field.button-title')), m('input', {
                            id: 'passport-button-title',
                            className: 'FormControl',
                            bidi: this.setting('flagrow.passport.button_title')
                        })])];
                    }
                }]);
                return PassportSettingsModal;
            }(SettingsModal);

            _export('default', PassportSettingsModal);
        }
    };
});;
'use strict';

System.register('flagrow/passport/main', ['flarum/extend', 'flarum/app', 'flagrow/passport/components/PassportSettingsModal'], function (_export, _context) {
    "use strict";

    var extend, app, PassportSettingsModal;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flagrowPassportComponentsPassportSettingsModal) {
            PassportSettingsModal = _flagrowPassportComponentsPassportSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-passport', function (app) {
                app.extensionSettings['flagrow-passport'] = function () {
                    return app.modal.show(new PassportSettingsModal());
                };
            });
        }
    };
});