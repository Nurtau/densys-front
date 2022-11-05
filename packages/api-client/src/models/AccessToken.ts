/* tslint:disable */
/* eslint-disable */
/**
 * densys
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccessToken
 */
export interface AccessToken {
    /**
     * 
     * @type {string}
     * @memberof AccessToken
     */
    access_token: string;
    /**
     * 
     * @type {string}
     * @memberof AccessToken
     */
    token_type: string;
}

/**
 * Check if a given object implements the AccessToken interface.
 */
export function instanceOfAccessToken(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "access_token" in value;
    isInstance = isInstance && "token_type" in value;

    return isInstance;
}

export function AccessTokenFromJSON(json: any): AccessToken {
    return AccessTokenFromJSONTyped(json, false);
}

export function AccessTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access_token': json['access_token'],
        'token_type': json['token_type'],
    };
}

export function AccessTokenToJSON(value?: AccessToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.access_token,
        'token_type': value.token_type,
    };
}

