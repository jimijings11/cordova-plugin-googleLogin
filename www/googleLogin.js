var exec = require('cordova/exec');

exports.isAvailable = function (success) {
    exec(success, null, 'googleLogin', 'isAvailable', []);
};

exports.login = function (options, successCallback, errorCallback) {
    exports.exec(successCallback, errorCallback, 'googleLogin', 'login', [options]);
  };
  
  exports.trySilentLogin = function (options, successCallback, errorCallback) {
    exports.exec(successCallback, errorCallback, 'googleLogin', 'trySilentLogin', [options]);
  };
  
  exports.logout = function (successCallback, errorCallback) {
    exports.exec(successCallback, errorCallback, 'googleLogin', 'logout', []);
  };
  
  exports.disconnect = function (successCallback, errorCallback) {
    exports.exec(successCallback, errorCallback, 'googleLogin', 'disconnect', []);
  };
  
  exports.getSigningCertificateFingerprint = function (successCallback, errorCallback) {
    exports.exec(successCallback, errorCallback, 'googleLogin', 'getSigningCertificateFingerprint', []);
  };
