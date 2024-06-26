// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/main/v1/main.proto (package spawner.main.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { LanguageCode } from "../../language_code/v1/language_code_pb.js";
import type { ErrorEvent } from "../../error/v1/error_pb.js";

/**
 * Configuration to control the features enabled. If set to false,
 * the process will be skipped. Note that enabling some features may
 * result in noticeably longer processing times.
 *
 * @generated from message spawner.main.v1.FeatureConfiguration
 */
export declare class FeatureConfiguration extends Message<FeatureConfiguration> {
  /**
   * @generated from field: bool emotion = 1;
   */
  emotion: boolean;

  /**
   * @generated from field: bool input_filter = 2;
   */
  inputFilter: boolean;

  /**
   * @generated from field: bool command = 3;
   */
  command: boolean;

  constructor(data?: PartialMessage<FeatureConfiguration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.main.v1.FeatureConfiguration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeatureConfiguration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeatureConfiguration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeatureConfiguration;

  static equals(a: FeatureConfiguration | PlainMessage<FeatureConfiguration> | undefined, b: FeatureConfiguration | PlainMessage<FeatureConfiguration> | undefined): boolean;
}

/**
 * @generated from message spawner.main.v1.GenerateSessionTokenRequest
 */
export declare class GenerateSessionTokenRequest extends Message<GenerateSessionTokenRequest> {
  /**
   * @generated from field: string api_key = 1;
   */
  apiKey: string;

  /**
   * @generated from field: string api_secret = 2;
   */
  apiSecret: string;

  /**
   * @generated from field: string workspace_id = 3;
   */
  workspaceId: string;

  /**
   * @generated from field: string player_id = 4;
   */
  playerId: string;

  /**
   * @generated from field: spawner.main.v1.FeatureConfiguration feature_configuration = 5;
   */
  featureConfiguration?: FeatureConfiguration;

  /**
   * @generated from field: spawner.language_code.v1.LanguageCode language_code = 6;
   */
  languageCode: LanguageCode;

  constructor(data?: PartialMessage<GenerateSessionTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.main.v1.GenerateSessionTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateSessionTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateSessionTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateSessionTokenRequest;

  static equals(a: GenerateSessionTokenRequest | PlainMessage<GenerateSessionTokenRequest> | undefined, b: GenerateSessionTokenRequest | PlainMessage<GenerateSessionTokenRequest> | undefined): boolean;
}

/**
 * @generated from message spawner.main.v1.GenerateSessionTokenResponse
 */
export declare class GenerateSessionTokenResponse extends Message<GenerateSessionTokenResponse> {
  /**
   * Unique identifier for the session.
   *
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * JWT token representing a session.
   *
   * @generated from field: string token = 2;
   */
  token: string;

  /**
   * Indicates the type of token. i.e. 'Bearer'
   *
   * @generated from field: string token_type = 3;
   */
  tokenType: string;

  /**
   * Timestamp indicating when the session token expires.
   *
   * @generated from field: google.protobuf.Timestamp expire_time = 4;
   */
  expireTime?: Timestamp;

  /**
   * Set to true if the session token has been generated successfully.
   *
   * @generated from field: bool success = 5;
   */
  success: boolean;

  /**
   * @generated from field: spawner.error.v1.ErrorEvent error = 6;
   */
  error?: ErrorEvent;

  constructor(data?: PartialMessage<GenerateSessionTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.main.v1.GenerateSessionTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateSessionTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateSessionTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateSessionTokenResponse;

  static equals(a: GenerateSessionTokenResponse | PlainMessage<GenerateSessionTokenResponse> | undefined, b: GenerateSessionTokenResponse | PlainMessage<GenerateSessionTokenResponse> | undefined): boolean;
}

/**
 * @generated from message spawner.main.v1.GetSessionRequest
 */
export declare class GetSessionRequest extends Message<GetSessionRequest> {
  /**
   * JWT token representing a session.
   *
   * @generated from field: string session_token = 1;
   */
  sessionToken: string;

  constructor(data?: PartialMessage<GetSessionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.main.v1.GetSessionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSessionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSessionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSessionRequest;

  static equals(a: GetSessionRequest | PlainMessage<GetSessionRequest> | undefined, b: GetSessionRequest | PlainMessage<GetSessionRequest> | undefined): boolean;
}

/**
 * @generated from message spawner.main.v1.GetSessionResponse
 */
export declare class GetSessionResponse extends Message<GetSessionResponse> {
  /**
   * Unique identifier for the session.
   *
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * Timestamp indicating when the session token expires.
   *
   * @generated from field: google.protobuf.Timestamp expire_time = 2;
   */
  expireTime?: Timestamp;

  /**
   * Boolean indicating whether the session is currently expired. Implements
   * a buffer period where value is `True` before the actual `expire_time`.
   *
   * @generated from field: bool is_expired = 3;
   */
  isExpired: boolean;

  /**
   * Indicates channel id currently publishing to / is subscribed to.
   *
   * @generated from field: string current_channel_id = 4;
   */
  currentChannelId: string;

  constructor(data?: PartialMessage<GetSessionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.main.v1.GetSessionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSessionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSessionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSessionResponse;

  static equals(a: GetSessionResponse | PlainMessage<GetSessionResponse> | undefined, b: GetSessionResponse | PlainMessage<GetSessionResponse> | undefined): boolean;
}

/**
 * @generated from message spawner.main.v1.LeaveChannelRequest
 */
export declare class LeaveChannelRequest extends Message<LeaveChannelRequest> {
  constructor(data?: PartialMessage<LeaveChannelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.main.v1.LeaveChannelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveChannelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveChannelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveChannelRequest;

  static equals(a: LeaveChannelRequest | PlainMessage<LeaveChannelRequest> | undefined, b: LeaveChannelRequest | PlainMessage<LeaveChannelRequest> | undefined): boolean;
}

/**
 * @generated from message spawner.main.v1.LeaveChannelResponse
 */
export declare class LeaveChannelResponse extends Message<LeaveChannelResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success: boolean;

  /**
   * @generated from field: string message = 2;
   */
  message: string;

  constructor(data?: PartialMessage<LeaveChannelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.main.v1.LeaveChannelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveChannelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveChannelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveChannelResponse;

  static equals(a: LeaveChannelResponse | PlainMessage<LeaveChannelResponse> | undefined, b: LeaveChannelResponse | PlainMessage<LeaveChannelResponse> | undefined): boolean;
}

