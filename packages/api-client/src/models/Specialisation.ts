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
 * @interface Specialisation
 */
export interface Specialisation {
    /**
     * 
     * @type {string}
     * @memberof Specialisation
     */
    name: string;
}

/**
 * Check if a given object implements the Specialisation interface.
 */
export function instanceOfSpecialisation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SpecialisationFromJSON(json: any): Specialisation {
    return SpecialisationFromJSONTyped(json, false);
}

export function SpecialisationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Specialisation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function SpecialisationToJSON(value?: Specialisation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

