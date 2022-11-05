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
import type { AccessToken } from './AccessToken';
import {
    AccessTokenFromJSON,
    AccessTokenFromJSONTyped,
    AccessTokenToJSON,
} from './AccessToken';

/**
 * 
 * @export
 * @interface AdminPublic
 */
export interface AdminPublic {
    /**
     * 
     * @type {AccessToken}
     * @memberof AdminPublic
     */
    access_token?: AccessToken;
    /**
     * 
     * @type {string}
     * @memberof AdminPublic
     */
    username: string;
}

/**
 * Check if a given object implements the AdminPublic interface.
 */
export function instanceOfAdminPublic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;

    return isInstance;
}

export function AdminPublicFromJSON(json: any): AdminPublic {
    return AdminPublicFromJSONTyped(json, false);
}

export function AdminPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminPublic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access_token': !exists(json, 'access_token') ? undefined : AccessTokenFromJSON(json['access_token']),
        'username': json['username'],
    };
}

export function AdminPublicToJSON(value?: AdminPublic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': AccessTokenToJSON(value.access_token),
        'username': value.username,
    };
}

