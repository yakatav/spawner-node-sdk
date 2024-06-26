// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/error/v1/error.proto (package spawner.error.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spawner.error.v1.StatusCode
 */
export const StatusCode = /*@__PURE__*/ proto3.makeEnum(
  "spawner.error.v1.StatusCode",
  [
    {no: 0, name: "STATUS_CODE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "STATUS_CODE_OK", localName: "OK"},
    {no: 2, name: "STATUS_CODE_CANCELLED", localName: "CANCELLED"},
    {no: 3, name: "STATUS_CODE_UNKNOWN", localName: "UNKNOWN"},
    {no: 4, name: "STATUS_CODE_INVALID_ARGUMENT", localName: "INVALID_ARGUMENT"},
    {no: 5, name: "STATUS_CODE_DEADLINE_EXCEEDED", localName: "DEADLINE_EXCEEDED"},
    {no: 6, name: "STATUS_CODE_NOT_FOUND", localName: "NOT_FOUND"},
    {no: 7, name: "STATUS_CODE_ALREADY_EXISTS", localName: "ALREADY_EXISTS"},
    {no: 8, name: "STATUS_CODE_PERMISSION_DENIED", localName: "PERMISSION_DENIED"},
    {no: 9, name: "STATUS_CODE_RESOURCE_EXHAUSTED", localName: "RESOURCE_EXHAUSTED"},
    {no: 10, name: "STATUS_CODE_FAILED_PRECONDITION", localName: "FAILED_PRECONDITION"},
    {no: 11, name: "STATUS_CODE_ABORTED", localName: "ABORTED"},
    {no: 12, name: "STATUS_CODE_OUT_OF_RANGE", localName: "OUT_OF_RANGE"},
    {no: 13, name: "STATUS_CODE_UNIMPLEMENTED", localName: "UNIMPLEMENTED"},
    {no: 14, name: "STATUS_CODE_INTERNAL", localName: "INTERNAL"},
    {no: 15, name: "STATUS_CODE_UNAVAILABLE", localName: "UNAVAILABLE"},
    {no: 16, name: "STATUS_CODE_DATA_LOSS", localName: "DATA_LOSS"},
    {no: 17, name: "STATUS_CODE_UNAUTHENTICATED", localName: "UNAUTHENTICATED"},
  ],
);

/**
 * Indicates and provides information on errors.
 *
 * @generated from message spawner.error.v1.ErrorEvent
 */
export const ErrorEvent = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.error.v1.ErrorEvent",
  () => [
    { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(StatusCode) },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

