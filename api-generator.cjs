const { generateApi } = require('swagger-typescript-api');
const path = require("path");
const fs = require("fs");

generateApi({
  name: "Api.ts",
  output: path.resolve(process.cwd(), "./src/api"),
  input: "../swagger.json",
  httpClientType: "fetch", // or "fetch"
  defaultResponseAsSuccess: false,
  generateClient: true,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  unwrapResponseData: true,
  prettier: { // By default prettier config is load from your project
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
  typePrefix: '',
  typeSuffix: '',
  enumKeyPrefix: '',
  enumKeySuffix: '',
  addReadonly: false,
  extractingOptions: {
    requestBodySuffix: ["Payload", "Body", "Input"],
    requestParamsSuffix: ["Params"],
    responseBodySuffix: ["Data", "Result", "Output"],
    responseErrorSuffix: ["Error", "Fail", "Fails", "ErrorData", "HttpError", "BadResponse"],
  },
  /** allow to generate extra files based with this extra templates, see more below */
  extraTemplates: [],
  anotherArrayType: false,
  fixInvalidTypeNamePrefix: "Type",
  fixInvalidEnumKeyPrefix: "Value", 
  codeGenConstructs: (constructs) => ({
    ...constructs,
    RecordType: (key, value) => `MyRecord<key, value>`
  }),
  primitiveTypeConstructs: (constructs) => ({
      ...constructs,
      string: {
        'date-time': 'Date'
      }
  }),
  hooks: {
    onParseSchema: (originalSchema, parsedSchema) => {
      if (originalSchema.type === 'string' && ['date-time', 'date'].indexOf(originalSchema.format) > -1) {
        parsedSchema.content = 'Date';
      }
      return parsedSchema;
    },
  },});
  
