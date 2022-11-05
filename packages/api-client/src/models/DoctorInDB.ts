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
 * @interface DoctorInDB
 */
export interface DoctorInDB {
  /**
   *
   * @type {number}
   * @memberof DoctorInDB
   */
  iin: number;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  surname: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  middle_name: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  contact_number: string;
  /**
   *
   * @type {number}
   * @memberof DoctorInDB
   */
  experience: number;
  /**
   *
   * @type {number}
   * @memberof DoctorInDB
   */
  price: number;
  /**
   *
   * @type {number}
   * @memberof DoctorInDB
   */
  rating: number;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  address: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  education: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  photo?: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  category: string;
  /**
   *
   * @type {number}
   * @memberof DoctorInDB
   */
  specialisation_id: number;
  /**
   *
   * @type {number}
   * @memberof DoctorInDB
   */
  department_id: number;
  /**
   *
   * @type {number}
   * @memberof DoctorInDB
   */
  schedule_id: number;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof DoctorInDB
   */
  salt: string;
}

/**
 * Check if a given object implements the DoctorInDB interface.
 */
export function instanceOfDoctorInDB(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "iin" in value;
  isInstance = isInstance && "name" in value;
  isInstance = isInstance && "surname" in value;
  isInstance = isInstance && "middle_name" in value;
  isInstance = isInstance && "contact_number" in value;
  isInstance = isInstance && "experience" in value;
  isInstance = isInstance && "price" in value;
  isInstance = isInstance && "rating" in value;
  isInstance = isInstance && "url" in value;
  isInstance = isInstance && "address" in value;
  isInstance = isInstance && "education" in value;
  isInstance = isInstance && "category" in value;
  isInstance = isInstance && "specialisation_id" in value;
  isInstance = isInstance && "department_id" in value;
  isInstance = isInstance && "schedule_id" in value;
  isInstance = isInstance && "password" in value;
  isInstance = isInstance && "salt" in value;

  return isInstance;
}

export function DoctorInDBFromJSON(json: any): DoctorInDB {
  return DoctorInDBFromJSONTyped(json, false);
}

export function DoctorInDBFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DoctorInDB {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    iin: json["iin"],
    name: json["name"],
    surname: json["surname"],
    middle_name: json["middle_name"],
    contact_number: json["contact_number"],
    experience: json["experience"],
    price: json["price"],
    rating: json["rating"],
    url: json["url"],
    address: json["address"],
    education: json["education"],
    photo: !exists(json, "photo") ? undefined : json["photo"],
    category: json["category"],
    specialisation_id: json["specialisation_id"],
    department_id: json["department_id"],
    schedule_id: json["schedule_id"],
    password: json["password"],
    salt: json["salt"],
  };
}

export function DoctorInDBToJSON(value?: DoctorInDB | null): any {
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
    experience: value.experience,
    price: value.price,
    rating: value.rating,
    url: value.url,
    address: value.address,
    education: value.education,
    photo: value.photo,
    category: value.category,
    specialisation_id: value.specialisation_id,
    department_id: value.department_id,
    schedule_id: value.schedule_id,
    password: value.password,
    salt: value.salt,
  };
}
