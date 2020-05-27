// Type definitions for cordova-plugin-loginGoogle 2.0
// Project:https://github.com/jimijings11/cordova-plugin-loginGoogle
// Definitions by:Jim Jings
//                 Tim Brust <https://github.com/jimijings11>


/**
 * This plugin defines a global device object, which describes the device's hardware and software.
 * Although the object is in the global scope, it is not available until after the deviceready event.
 */

interface CordovaPlugins {
    googleLogin:GoogleLogin;
}

export interface GoogleLogin {
    /** Get the version of Cordova running on the device. */
    login(option, onSuccess:(dict:Info) => void,
    onError:(message:string) => void):void;
    trySilentLogin(array:[string], onSuccess:(dict:Info) => void,
    onError:(message:string) => void):void;
    logout(onSuccess:(dict:Info) => void,
    onError:(message:string) => void):void;
    /** Indicates that Cordova initialize successfully. */
    isAvailable(onSuccess:(dict:Info) => void):void;
    disconnect(onSuccess:(dict:Info) => void,
    onError:(message:string) => void):void;
    getSigningCertificateFingerprint(onSuccess:(dict:Info) => void,
    onError:(message:string) => void):void;
}

interface LoginOption {
    scopes: string;
    webClientId: string;
    offline: boolean;
  }
  

interface Info { 
    email:string;
    idToken:string;
    serverAuthCode:string;
    accessToken:string;
    refreshToken:string;
    userId:string;
    displayName:string;
    givenName  :string;
    familyName :string;
    imageUrl   :string;
}