// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/knowledge/v1/knowledge.proto (package spawner.knowledge.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spawner.knowledge.v1.KnowledgeSourceType
 */
export const KnowledgeSourceType = /*@__PURE__*/ proto3.makeEnum(
  "spawner.knowledge.v1.KnowledgeSourceType",
  [
    {no: 0, name: "KNOWLEDGE_SOURCE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "KNOWLEDGE_SOURCE_TYPE_MANUAL", localName: "MANUAL"},
    {no: 2, name: "KNOWLEDGE_SOURCE_TYPE_WEB", localName: "WEB"},
  ],
);

/**
 * @generated from message spawner.knowledge.v1.KnowledgeSource
 */
export const KnowledgeSource = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.knowledge.v1.KnowledgeSource",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(KnowledgeSourceType) },
    { no: 2, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message spawner.knowledge.v1.KnowledgeReference
 */
export const KnowledgeReference = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.knowledge.v1.KnowledgeReference",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "source", kind: "message", T: KnowledgeSource },
  ],
);

/**
 * @generated from message spawner.knowledge.v1.KnowledgeEvent
 */
export const KnowledgeEvent = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.knowledge.v1.KnowledgeEvent",
  () => [
    { no: 1, name: "utterance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "references", kind: "message", T: KnowledgeReference, repeated: true },
  ],
);

