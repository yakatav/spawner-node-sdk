// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/routing/v1/routing.proto (package spawner.routing.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spawner.routing.v1.EventActorType
 */
export const EventActorType = /*@__PURE__*/ proto3.makeEnum(
  "spawner.routing.v1.EventActorType",
  [
    {no: 0, name: "EVENT_ACTOR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "EVENT_ACTOR_TYPE_PLAYER", localName: "PLAYER"},
    {no: 2, name: "EVENT_ACTOR_TYPE_CHARACTER", localName: "CHARACTER"},
    {no: 3, name: "EVENT_ACTOR_TYPE_HERE", localName: "HERE"},
  ],
);

/**
 * @generated from message spawner.routing.v1.EventPlayer
 */
export const EventPlayer = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.routing.v1.EventPlayer",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message spawner.routing.v1.EventCharacter
 */
export const EventCharacter = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.routing.v1.EventCharacter",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "custom_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message spawner.routing.v1.EventActor
 */
export const EventActor = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.routing.v1.EventActor",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(EventActorType) },
    { no: 2, name: "player", kind: "message", T: EventPlayer },
    { no: 3, name: "character", kind: "message", T: EventCharacter },
  ],
);

/**
 * @generated from message spawner.routing.v1.Routing
 */
export const Routing = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.routing.v1.Routing",
  () => [
    { no: 1, name: "source", kind: "message", T: EventActor },
    { no: 2, name: "target", kind: "message", T: EventActor },
  ],
);

