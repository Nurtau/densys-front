/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AccessToken */
export interface AccessToken {
  /** Access Token */
  access_token: string;
  /** Token Type */
  token_type: string;
}

/** Admin */
export interface Admin {
  /** Id */
  id: number;
  /** Username */
  username: string;
  /** Salt */
  salt: string;
  /** Password */
  password: string;
}

/** AdminCreate */
export interface AdminCreate {
  /** Id */
  id: number;
  /** Username */
  username: string;
  /** Password */
  password: string;
}

/** AdminLogin */
export interface AdminLogin {
  /** Username */
  username: string;
  /**
   * Password
   * @minLength 7
   * @maxLength 100
   */
  password: string;
}

/** AdminPublic */
export interface AdminPublic {
  access_token?: AccessToken;
  /** Username */
  username: string;
}

/** AppointmentRequestCreate */
export interface AppointmentRequestCreate {
  /** Doctor Id */
  doctor_id: number;
  /** Specialisation Id */
  specialisation_id: number;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middlename */
  middlename: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
  /**
   * Time Slots
   * @default []
   */
  time_slots?: DateRange[];
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean;
}

/** AppointmentRequestUpdate */
export interface AppointmentRequestUpdate {
  /** Doctor Id */
  doctor_id: number;
  /** Specialisation Id */
  specialisation_id: number;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middlename */
  middlename: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
  /**
   * Time Slots
   * @default []
   */
  time_slots?: DateRange[];
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean;
  /** Id */
  id: number;
}

/** DateRange */
export interface DateRange {
  /** Start Datetime */
  start_datetime: string;
  /** End Datetime */
  end_datetime: string;
}

/** Department */
export interface Department {
  /** Name */
  name: string;
  /** Id */
  id: number;
}

/** DoctorCreate */
export interface DoctorCreate {
  /** Iin */
  iin: string;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middle Name */
  middle_name: string;
  /** Contact Number */
  contact_number: string;
  /** Id */
  id?: number;
  /** Experience */
  experience: number;
  /** Price */
  price: number;
  /** Rating */
  rating: number;
  /** Url */
  url: string;
  /** Day Start */
  day_start?: string;
  /** Day End */
  day_end?: string;
  /** Address */
  address: string;
  /** Education */
  education: string;
  /**
   * Photo
   * @default "address/sample"
   */
  photo?: string;
  /** Category */
  category: string;
  /** Procedure */
  procedure?: string;
  /** Specialisation Id */
  specialisation_id: number;
  /** Department Id */
  department_id: number;
  /**
   * Password
   * @minLength 7
   * @maxLength 100
   */
  password: string;
  /** Access Token */
  access_token: string;
}

/** DoctorInDB */
export interface DoctorInDB {
  /** Iin */
  iin: string;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middle Name */
  middle_name: string;
  /** Contact Number */
  contact_number: string;
  /** Id */
  id?: number;
  /** Experience */
  experience: number;
  /** Price */
  price: number;
  /** Rating */
  rating: number;
  /** Url */
  url: string;
  /** Day Start */
  day_start?: string;
  /** Day End */
  day_end?: string;
  /** Address */
  address: string;
  /** Education */
  education: string;
  /**
   * Photo
   * @default "address/sample"
   */
  photo?: string;
  /** Category */
  category: string;
  /** Procedure */
  procedure?: string;
  /** Specialisation Id */
  specialisation_id: number;
  /** Department Id */
  department_id: number;
  /**
   * Password
   * @minLength 7
   * @maxLength 100
   */
  password: string;
  /** Salt */
  salt: string;
}

/** DoctorPublic */
export interface DoctorPublic {
  /** Iin */
  iin: string;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middle Name */
  middle_name: string;
  /** Contact Number */
  contact_number: string;
  /** Id */
  id?: number;
  /** Experience */
  experience: number;
  /** Price */
  price: number;
  /** Rating */
  rating: number;
  /** Url */
  url: string;
  /** Day Start */
  day_start?: string;
  /** Day End */
  day_end?: string;
  /** Address */
  address: string;
  /** Education */
  education: string;
  /**
   * Photo
   * @default "address/sample"
   */
  photo?: string;
  /** Category */
  category: string;
  /** Procedure */
  procedure?: string;
  /** Specialisation Id */
  specialisation_id: number;
  /** Department Id */
  department_id: number;
  /** Password */
  password: string;
  access_token?: AccessToken;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** History */
export interface History {
  /** Medications */
  medications?: PrescriptionCreate[];
  /** Procedures */
  procedures?: ProcedureCreate[];
  /** Appointments */
  appointments?: AppointmentRequestUpdate[];
}

/** Message */
export interface Message {
  /** Id */
  id: string;
  /** Sender Iin */
  sender_iin: string;
  /** Receiver Iin */
  receiver_iin: string;
  /** Send Time */
  send_time: string;
  /** Message Text */
  message_text: string;
}

/** OthersLogin */
export interface OthersLogin {
  /** Iin */
  iin: string;
  /**
   * Password
   * @minLength 7
   * @maxLength 100
   */
  password: string;
}

/** PatientCreate */
export interface PatientCreate {
  /** Iin */
  iin: string;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middle Name */
  middle_name: string;
  /** Contact Number */
  contact_number: string;
  /**
   * Day Of Birth
   * @format date
   */
  day_of_birth: Date;
  /** Blood Group */
  blood_group: string;
  /** Emergency Contact Number */
  emergency_contact_number: string;
  /**
   * Email
   * @format email
   */
  email?: string;
  /** Address */
  address: string;
  /**
   * Marital Status
   * @default true
   */
  marital_status?: boolean;
  /** Government Id */
  government_id: string;
  /**
   * Registration Date
   * @format date
   * @default "2022-12-05T18:53:09.649676"
   */
  registration_date?: Date;
  /**
   * Password
   * @minLength 7
   * @maxLength 100
   */
  password: string;
  /** Access Token */
  access_token: string;
}

/** PatientInDB */
export interface PatientInDB {
  /** Iin */
  iin: string;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middle Name */
  middle_name: string;
  /** Contact Number */
  contact_number: string;
  /**
   * Day Of Birth
   * @format date
   */
  day_of_birth: Date;
  /** Blood Group */
  blood_group: string;
  /** Emergency Contact Number */
  emergency_contact_number: string;
  /**
   * Email
   * @format email
   */
  email?: string;
  /** Address */
  address: string;
  /**
   * Marital Status
   * @default true
   */
  marital_status?: boolean;
  /** Government Id */
  government_id: string;
  /**
   * Registration Date
   * @format date
   * @default "2022-12-05T18:53:09.649676"
   */
  registration_date?: Date;
  /**
   * Password
   * @minLength 7
   * @maxLength 100
   */
  password: string;
  /** Salt */
  salt: string;
}

/** PatientListed */
export interface PatientListed {
  /** Iin */
  iin: string;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middle Name */
  middle_name: string;
  /** Contact Number */
  contact_number: string;
  /**
   * Day Of Birth
   * @format date
   */
  day_of_birth: Date;
  /** Blood Group */
  blood_group: string;
  /** Emergency Contact Number */
  emergency_contact_number: string;
  /**
   * Email
   * @format email
   */
  email?: string;
  /** Address */
  address: string;
  /**
   * Marital Status
   * @default true
   */
  marital_status?: boolean;
  /** Government Id */
  government_id: string;
  /**
   * Registration Date
   * @format date
   * @default "2022-12-05T18:53:09.649676"
   */
  registration_date?: Date;
  /** Id */
  id: number;
}

/** PatientPublic */
export interface PatientPublic {
  /** Iin */
  iin: string;
  /** Name */
  name: string;
  /** Surname */
  surname: string;
  /** Middle Name */
  middle_name: string;
  /** Contact Number */
  contact_number: string;
  /**
   * Day Of Birth
   * @format date
   */
  day_of_birth: Date;
  /** Blood Group */
  blood_group: string;
  /** Emergency Contact Number */
  emergency_contact_number: string;
  /**
   * Email
   * @format email
   */
  email?: string;
  /** Address */
  address: string;
  /**
   * Marital Status
   * @default true
   */
  marital_status?: boolean;
  /** Government Id */
  government_id: string;
  /**
   * Registration Date
   * @format date
   * @default "2022-12-05T18:53:09.649676"
   */
  registration_date?: Date;
  access_token?: AccessToken;
}

/** PrescriptionCreate */
export interface PrescriptionCreate {
  /** Doctor Id */
  doctor_id: number;
  /** Patient Id */
  patient_id: number;
  /** Name */
  name: string;
  /** Start Date */
  start_date: string;
  /** End Date */
  end_date: string;
}

/** ProcedureCreate */
export interface ProcedureCreate {
  /** Doctor Id */
  doctor_id: number;
  /** Patient Id */
  patient_id: number;
  /** Name */
  name: string;
  /** Date */
  date: string;
  /** Cost */
  cost: number;
}

/** Report */
export interface Report {
  /** Patient Counts Chart */
  patient_counts_chart?: Record<string, number>;
  /** Procedures Sums Chart */
  procedures_sums_chart?: Record<string, number>;
  /** Procedures Counts Chart */
  procedures_counts_chart?: Record<string, number>;
  /** Procedures By Name */
  procedures_by_name?: Record<string, number>;
  /** Prescriptions Counts Chart */
  prescriptions_counts_chart?: Record<string, number>;
  /** Medications By Name */
  medications_by_name?: Record<string, number>;
}

/** Specialisation */
export interface Specialisation {
  /** Name */
  name: string;
  /** Id */
  id: number;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: string[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title densys
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  users = {
    /**
     * @description Register the Patient
     *
     * @tags patient registration
     * @name CreatePatinet
     * @summary Patient Create
     * @request POST:/users/create_patinet
     * @response `200` `PatientPublic` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    createPatinet: (data: PatientCreate, params: RequestParams = {}) =>
      this.http.request<PatientPublic, HTTPValidationError>({
        path: `/users/create_patinet`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of all patients
     *
     * @tags test
     * @name GetPatients
     * @summary Get Patients
     * @request GET:/users/get_patients
     * @response `200` `(PatientListed)[]` Successful Response
     */
    getPatients: (params: RequestParams = {}) =>
      this.http.request<PatientListed[], any>({
        path: `/users/get_patients`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update patient details
     *
     * @tags update, patients
     * @name UpdatePatient
     * @summary Update Patient
     * @request PUT:/users/update_patient
     * @response `200` `PatientInDB` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    updatePatient: (data: PatientCreate, params: RequestParams = {}) =>
      this.http.request<PatientInDB, HTTPValidationError>({
        path: `/users/update_patient`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update doctor details
     *
     * @tags update, doctors
     * @name UpdateDoctor
     * @summary Update Doctor
     * @request PUT:/users/update_doctor
     * @response `200` `DoctorInDB` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    updateDoctor: (data: DoctorCreate, params: RequestParams = {}) =>
      this.http.request<DoctorInDB, HTTPValidationError>({
        path: `/users/update_doctor`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of all doctors
     *
     * @tags test
     * @name GetDoctors
     * @summary Get Doctors
     * @request GET:/users/get_doctors
     * @response `200` `(DoctorPublic)[]` Successful Response
     */
    getDoctors: (params: RequestParams = {}) =>
      this.http.request<DoctorPublic[], any>({
        path: `/users/get_doctors`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of doctors by search params
     *
     * @tags test
     * @name SearchDoctors
     * @summary Get Doctors Search
     * @request GET:/users/get_doctors/{search}
     * @response `200` `(DoctorPublic)[]` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    searchDoctors: (search: any, params: RequestParams = {}) =>
      this.http.request<DoctorPublic[], HTTPValidationError>({
        path: `/users/get_doctors/${search}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Register the Patient
     *
     * @tags patient registration
     * @name CreateDoctor
     * @summary Doctor Create
     * @request POST:/users/create_doctor
     * @response `200` `DoctorPublic` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    createDoctor: (data: DoctorCreate, params: RequestParams = {}) =>
      this.http.request<DoctorPublic, HTTPValidationError>({
        path: `/users/create_doctor`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Register new department
     *
     * @tags department registration
     * @name CreateDepartment
     * @summary Department Create
     * @request POST:/users/create_department
     * @response `200` `Department` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    createDepartment: (data: Department, params: RequestParams = {}) =>
      this.http.request<Department, HTTPValidationError>({
        path: `/users/create_department`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Request appointment
     *
     * @tags appointment request
     * @name CreateAppointmentRequest
     * @summary Appointment Create
     * @request POST:/users/create_appointment_request
     * @response `200` `AppointmentRequestCreate` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    createAppointmentRequest: (
      data: AppointmentRequestCreate,
      params: RequestParams = {}
    ) =>
      this.http.request<AppointmentRequestCreate, HTTPValidationError>({
        path: `/users/create_appointment_request`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get active appointment requests
     *
     * @tags appointment request
     * @name GetActiveRequests
     * @summary Active Requests Get
     * @request GET:/users/get_active_requests
     * @response `200` `(AppointmentRequestUpdate)[]` Successful Response
     */
    getActiveRequests: (params: RequestParams = {}) =>
      this.http.request<AppointmentRequestUpdate[], any>({
        path: `/users/get_active_requests`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Register new spec
     *
     * @tags specialisation registration
     * @name CreateSpecialisation
     * @summary Department Create
     * @request POST:/users/create_specialisation
     * @response `200` `Specialisation` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    createSpecialisation: (data: Specialisation, params: RequestParams = {}) =>
      this.http.request<Specialisation, HTTPValidationError>({
        path: `/users/create_specialisation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Log in the User
     *
     * @tags user login
     * @name AdminLogin
     * @summary Admin Login
     * @request POST:/users/login
     * @response `200` `AdminPublic` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    adminLogin: (data: AdminLogin, params: RequestParams = {}) =>
      this.http.request<AdminPublic, HTTPValidationError>({
        path: `/users/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add admin
     *
     * @tags user login
     * @name AddAdmin
     * @summary Admin Registration
     * @request POST:/users/add_admin
     * @response `200` `Admin` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    addAdmin: (data: AdminCreate, params: RequestParams = {}) =>
      this.http.request<Admin, HTTPValidationError>({
        path: `/users/add_admin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of departments
     *
     * @tags get, list, departments
     * @name GetDepartments
     * @summary Get Departments List
     * @request GET:/users/get_departments
     * @response `200` `(Department)[]` Successful Response
     */
    getDepartments: (params: RequestParams = {}) =>
      this.http.request<Department[], any>({
        path: `/users/get_departments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of specialisations
     *
     * @tags get, list, specialisations
     * @name GetSpecialisations
     * @summary Get Specialisations List
     * @request GET:/users/get_specialisations
     * @response `200` `(Department)[]` Successful Response
     */
    getSpecialisations: (params: RequestParams = {}) =>
      this.http.request<Department[], any>({
        path: `/users/get_specialisations`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of doctor schedules
     *
     * @tags get, list, schedules
     * @name GetSchedules
     * @summary Get Schedules List
     * @request GET:/users/get_schedules/{doctor_id}
     * @response `200` `(DateRange)[]` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getSchedules: (doctorId: any, params: RequestParams = {}) =>
      this.http.request<DateRange[], HTTPValidationError>({
        path: `/users/get_schedules/${doctorId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Login for patients and doctors
     *
     * @tags post login
     * @name Login
     * @summary Login By Role
     * @request POST:/users/login/{role}
     * @response `200` `(PatientPublic | DoctorPublic | (PatientPublic & DoctorPublic))` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    login: (role: string, data: OthersLogin, params: RequestParams = {}) =>
      this.http.request<
        PatientPublic | DoctorPublic | (PatientPublic & DoctorPublic),
        HTTPValidationError
      >({
        path: `/users/login/${role}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Change appointment status
     *
     * @tags appointment request
     * @name MarkAppointment
     * @summary Accept Appointment
     * @request POST:/users/mark_appointment
     * @response `200` `AppointmentRequestUpdate` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    markAppointment: (
      query: {
        /** Token */
        token: string;
        /** Status */
        status: number;
      },
      data: AppointmentRequestUpdate,
      params: RequestParams = {}
    ) =>
      this.http.request<AppointmentRequestUpdate, HTTPValidationError>({
        path: `/users/mark_appointment`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get appointments for doctor
     *
     * @tags appointment request
     * @name GetDoctorAppointments
     * @summary Get Doctor Appointments
     * @request GET:/users/get_doctor_appointments
     * @response `200` `(AppointmentRequestUpdate)[]` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getDoctorAppointments: (
      query: {
        /** Doctor Id */
        doctor_id: number;
        /** Token */
        token: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<AppointmentRequestUpdate[], HTTPValidationError>({
        path: `/users/get_doctor_appointments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Prescribe medication
     *
     * @tags prescriptions
     * @name PrescribeMedication
     * @summary Get Doctor Appointments
     * @request POST:/users/prescribe_medication
     * @response `200` `PrescriptionCreate` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    prescribeMedication: (
      query: {
        /** Token */
        token: string;
      },
      data: PrescriptionCreate,
      params: RequestParams = {}
    ) =>
      this.http.request<PrescriptionCreate, HTTPValidationError>({
        path: `/users/prescribe_medication`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Prescribe medication
     *
     * @tags prescriptions
     * @name GetPrescriptions
     * @summary Get Doctor Appointments
     * @request GET:/users/get_prescriptions
     * @response `200` `(PrescriptionCreate)[]` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getPrescriptions: (
      query: {
        /** Id */
        id: number;
        /** Token */
        token: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<PrescriptionCreate[], HTTPValidationError>({
        path: `/users/get_prescriptions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Prescribe procedure
     *
     * @tags prescriptions
     * @name PrescribeProcedure
     * @summary Prescribe Procedure Handler
     * @request POST:/users/prescribe_procedure
     * @response `200` `ProcedureCreate` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    prescribeProcedure: (
      query: {
        /** Token */
        token: string;
      },
      data: ProcedureCreate,
      params: RequestParams = {}
    ) =>
      this.http.request<ProcedureCreate, HTTPValidationError>({
        path: `/users/prescribe_procedure`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get procedures
     *
     * @tags prescriptions
     * @name GetProcedures
     * @summary Get Procedures
     * @request GET:/users/get_procedures
     * @response `200` `(ProcedureCreate)[]` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getProcedures: (
      query: {
        /** Id */
        id: number;
        /** Token */
        token: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<ProcedureCreate[], HTTPValidationError>({
        path: `/users/get_procedures`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get treatment history
     *
     * @tags history
     * @name GetTreatmentHistory
     * @summary Get Treatment History
     * @request GET:/users/get_treatment_history
     * @response `200` `History` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getTreatmentHistory: (
      query: {
        /** Token */
        token: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<History, HTTPValidationError>({
        path: `/users/get_treatment_history`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of user messages
     *
     * @tags get, list, messages
     * @name GetMessages
     * @summary Get Messages List
     * @request GET:/users/get_messages/{user_iin}
     * @response `200` `(Message)[]` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    getMessages: (
      userIin: string,
      query?: {
        /**
         * Iin
         * @default 0
         */
        iin?: any;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<Message[], HTTPValidationError>({
        path: `/users/get_messages/${userIin}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Send message
     *
     * @tags send message
     * @name SendMessage
     * @summary Post Message
     * @request POST:/users/send_message
     * @response `200` `Message` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    sendMessage: (data: Message, params: RequestParams = {}) =>
      this.http.request<Message, HTTPValidationError>({
        path: `/users/send_message`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get patients for period
     *
     * @tags report
     * @name PatientsForPeriod
     * @summary Patients For Period
     * @request GET:/users/patients_for_period
     * @response `200` `Report` Successful Response
     * @response `422` `HTTPValidationError` Validation Error
     */
    patientsForPeriod: (
      query: {
        /** Start Date */
        start_date: string;
        /** End Date */
        end_date: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<Report, HTTPValidationError>({
        path: `/users/patients_for_period`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
