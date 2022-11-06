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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface PatientInDB
 */
export interface PatientInDB {
  /**
   *
   * @type {number}
   * @memberof PatientInDB
   */
  iin: number;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  surname: string;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  middle_name: string;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  contact_number: string;
  /**
   *
   * @type {Date}
   * @memberof PatientInDB
   */
  day_of_birth: Date;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  blood_group: string;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  emergency_contact_number: string;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  address: string;
  /**
   *
   * @type {boolean}
   * @memberof PatientInDB
   */
  marital_status?: boolean;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  government_id: string;
  /**
   *
   * @type {Date}
   * @memberof PatientInDB
   */
  registration_date?: Date;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof PatientInDB
   */
  salt: string;
}

/**
 * Check if a given object implements the PatientInDB interface.
 */
export function instanceOfPatientInDB(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "iin" in value;
  isInstance = isInstance && "name" in value;
  isInstance = isInstance && "surname" in value;
  isInstance = isInstance && "middle_name" in value;
  isInstance = isInstance && "contact_number" in value;
  isInstance = isInstance && "day_of_birth" in value;
  isInstance = isInstance && "blood_group" in value;
  isInstance = isInstance && "emergency_contact_number" in value;
  isInstance = isInstance && "address" in value;
  isInstance = isInstance && "government_id" in value;
  isInstance = isInstance && "password" in value;
  isInstance = isInstance && "salt" in value;

  return isInstance;
}

export function PatientInDBFromJSON(json: any): PatientInDB {
  return PatientInDBFromJSONTyped(json, false);
}

export function PatientInDBFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PatientInDB {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    iin: json["iin"],
    name: json["name"],
    surname: json["surname"],
    middle_name: json["middle_name"],
    contact_number: json["contact_number"],
    day_of_birth: new Date(json["day_of_birth"]),
    blood_group: json["blood_group"],
    emergency_contact_number: json["emergency_contact_number"],
    email: !exists(json, "email") ? undefined : json["email"],
    address: json["address"],
    marital_status: !exists(json, "marital_status")
      ? undefined
      : json["marital_status"],
    government_id: json["government_id"],
    registration_date: !exists(json, "registration_date")
      ? undefined
      : new Date(json["registration_date"]),
    password: json["password"],
    salt: json["salt"],
  };
}

export function PatientInDBToJSON(value?: PatientInDB | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    iin: value.iin,
    name: value.name,
    surname: value.surname,
    middle_name: value.middle_name,
    contact_number: value.contact_number,
    day_of_birth: value.day_of_birth.toISOString().substr(0, 10),
    blood_group: value.blood_group,
    emergency_contact_number: value.emergency_contact_number,
    email: value.email,
    address: value.address,
    marital_status: value.marital_status,
    government_id: value.government_id,
    registration_date:
      value.registration_date === undefined
        ? undefined
        : value.registration_date.toISOString().substr(0, 10),
    password: value.password,
    salt: value.salt,
  };
}
