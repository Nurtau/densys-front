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
 * @interface DoctorPublic
 */
export interface DoctorPublic {
  /**
   *
   * @type {number}
   * @memberof DoctorPublic
   */
  iin: number;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  surname: string;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  middle_name: string;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  contact_number: string;
  /**
   *
   * @type {number}
   * @memberof DoctorPublic
   */
  experience: number;
  /**
   *
   * @type {number}
   * @memberof DoctorPublic
   */
  price: number;
  /**
   *
   * @type {number}
   * @memberof DoctorPublic
   */
  rating: number;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  address: string;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  education: string;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  photo?: string;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  category: string;
  /**
   *
   * @type {number}
   * @memberof DoctorPublic
   */
  specialisation_id: number;
  /**
   *
   * @type {number}
   * @memberof DoctorPublic
   */
  department_id: number;
  /**
   *
   * @type {number}
   * @memberof DoctorPublic
   */
  schedule_id: number;
  /**
   *
   * @type {string}
   * @memberof DoctorPublic
   */
  password: string;
}

/**
 * Check if a given object implements the DoctorPublic interface.
 */
export function instanceOfDoctorPublic(value: object): boolean {
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

  return isInstance;
}

export function DoctorPublicFromJSON(json: any): DoctorPublic {
  return DoctorPublicFromJSONTyped(json, false);
}

export function DoctorPublicFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DoctorPublic {
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
  };
}

export function DoctorPublicToJSON(value?: DoctorPublic | null): any {
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
  };
}
