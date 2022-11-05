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

import * as runtime from "../runtime";
import type {
  Admin,
  AdminCreate,
  AdminLogin,
  AdminPublic,
  HTTPValidationError,
} from "../models";
import {
  AdminFromJSON,
  AdminToJSON,
  AdminCreateFromJSON,
  AdminCreateToJSON,
  AdminLoginFromJSON,
  AdminLoginToJSON,
  AdminPublicFromJSON,
  AdminPublicToJSON,
  HTTPValidationErrorFromJSON,
  HTTPValidationErrorToJSON,
} from "../models";

export interface CreateAdminRequest {
  adminCreate: AdminCreate;
}

export interface LoginRequest {
  adminLogin: AdminLogin;
}

/**
 *
 */
export class UserLoginApi extends runtime.BaseAPI {
  /**
   * Add admin
   * Admin Registration
   */
  async createAdminRaw(
    requestParameters: CreateAdminRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Admin>> {
    if (
      requestParameters.adminCreate === null ||
      requestParameters.adminCreate === undefined
    ) {
      throw new runtime.RequiredError(
        "adminCreate",
        "Required parameter requestParameters.adminCreate was null or undefined when calling createAdmin."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/add_admin`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: AdminCreateToJSON(requestParameters.adminCreate),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminFromJSON(jsonValue)
    );
  }

  /**
   * Add admin
   * Admin Registration
   */
  async createAdmin(
    requestParameters: CreateAdminRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Admin> {
    const response = await this.createAdminRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Log in the User
   * Admin Login
   */
  async loginRaw(
    requestParameters: LoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AdminPublic>> {
    if (
      requestParameters.adminLogin === null ||
      requestParameters.adminLogin === undefined
    ) {
      throw new runtime.RequiredError(
        "adminLogin",
        "Required parameter requestParameters.adminLogin was null or undefined when calling login."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/login`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: AdminLoginToJSON(requestParameters.adminLogin),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminPublicFromJSON(jsonValue)
    );
  }

  /**
   * Log in the User
   * Admin Login
   */
  async login(
    requestParameters: LoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AdminPublic> {
    const response = await this.loginRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
