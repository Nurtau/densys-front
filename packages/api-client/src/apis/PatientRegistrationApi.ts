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

import * as runtime from "../runtime";
import type {
  DoctorCreate,
  DoctorPublic,
  HTTPValidationError,
  PatientCreate,
  PatientPublic,
} from "../models";
import {
  DoctorCreateFromJSON,
  DoctorCreateToJSON,
  DoctorPublicFromJSON,
  DoctorPublicToJSON,
  HTTPValidationErrorFromJSON,
  HTTPValidationErrorToJSON,
  PatientCreateFromJSON,
  PatientCreateToJSON,
  PatientPublicFromJSON,
  PatientPublicToJSON,
} from "../models";

export interface CreateDoctorRequest {
  doctorCreate: DoctorCreate;
}

export interface CreatePatientRequest {
  patientCreate: PatientCreate;
}

/**
 *
 */
export class PatientRegistrationApi extends runtime.BaseAPI {
  /**
   * Register the Patient
   * Doctor Create
   */
  async createDoctorRaw(
    requestParameters: CreateDoctorRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<DoctorPublic>> {
    if (
      requestParameters.doctorCreate === null ||
      requestParameters.doctorCreate === undefined
    ) {
      throw new runtime.RequiredError(
        "doctorCreate",
        "Required parameter requestParameters.doctorCreate was null or undefined when calling createDoctor."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/create_doctor`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: DoctorCreateToJSON(requestParameters.doctorCreate),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DoctorPublicFromJSON(jsonValue)
    );
  }

  /**
   * Register the Patient
   * Doctor Create
   */
  async createDoctor(
    requestParameters: CreateDoctorRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<DoctorPublic> {
    const response = await this.createDoctorRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Register the Patient
   * Patient Create
   */
  async createPatientRaw(
    requestParameters: CreatePatientRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<PatientPublic>> {
    if (
      requestParameters.patientCreate === null ||
      requestParameters.patientCreate === undefined
    ) {
      throw new runtime.RequiredError(
        "patientCreate",
        "Required parameter requestParameters.patientCreate was null or undefined when calling createPatient."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/create_patinet`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: PatientCreateToJSON(requestParameters.patientCreate),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PatientPublicFromJSON(jsonValue)
    );
  }

  /**
   * Register the Patient
   * Patient Create
   */
  async createPatient(
    requestParameters: CreatePatientRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<PatientPublic> {
    const response = await this.createPatientRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
