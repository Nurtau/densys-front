const { generateApi } = require("swagger-typescript-api");
const path = require("path");

generateApi({
  name: "Api.ts",
  output: path.resolve(process.cwd(), "./src/api"),
  url: "http://localhost:8000/openapi.json",
  templates: path.resolve(process.cwd(), "./templates"),
  httpClientType: "fetch",
  defaultResponseAsSuccess: false,
  generateClient: true,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  unwrapResponseData: true,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },
  defaultResponseType: "void",
  singleHttpClient: true,
  cleanOutput: false,
  enumNamesAsValues: false,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  typePrefix: "",
  typeSuffix: "",
  enumKeyPrefix: "",
  enumKeySuffix: "",
  addReadonly: false,
  extractingOptions: {
    requestBodySuffix: ["Payload", "Body", "Input"],
    requestParamsSuffix: ["Params"],
    responseBodySuffix: ["Data", "Result", "Output"],
    responseErrorSuffix: [
      "Error",
      "Fail",
      "Fails",
      "ErrorData",
      "HttpError",
      "BadResponse",
    ],
  },
  extraTemplates: [],
  anotherArrayType: false,
  fixInvalidTypeNamePrefix: "Type",
  fixInvalidEnumKeyPrefix: "Value",
  primitiveTypeConstructs: (constructs) => ({
    ...constructs,
    string: {
      date: "Date",
    },
  }),
});
