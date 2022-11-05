/* tslint:disable */
/* eslint-disable */
/**
 * backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface Department
 */
export interface Department {
  /**
   *
   * @type {string}
   * @memberof Department
   */
  name: string;
}

/**
 * Check if a given object implements the Department interface.
 */
export function instanceOfDepartment(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "name" in value;

  return isInstance;
}

export function DepartmentFromJSON(json: any): Department {
  return DepartmentFromJSONTyped(json, false);
}

export function DepartmentFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Department {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json["name"],
  };
}

export function DepartmentToJSON(value?: Department | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
  };
}
