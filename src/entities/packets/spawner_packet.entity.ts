import { ChannelController as ProtoChannelController } from "../../../proto/spawner/channel/v1/channel_pb";
import { EmotionEvent as ProtoEmotionEvent } from "../../../proto/spawner/emotion/v1/emotion_pb";
import { InputFilterEvent as ProtoInputFilterEvent } from "../../../proto/spawner/input_filter/v1/input_filter_pb";
import { KnowledgeEvent as ProtoKnowledgeEvent } from "../../../proto/spawner/knowledge/v1/knowledge_pb";
import {
	type SpawnerPacket as ProtoPacket,
	SpawnerPacketType as ProtoSpawnerPacketType,
} from "../../../proto/spawner/packet/v1/packet_pb";
import { SessionController as ProtoSessionController } from "../../../proto/spawner/session/v1/session_pb";
import { TextEvent as ProtoTextEvent } from "../../../proto/spawner/text/v1/text_pb";
import { ChannelController } from "./channel_controller";
import { EmotionEvent } from "./emotion.entity";
import { PacketError } from "./error.entity";
import { InputFilterEvent } from "./input_filter.entity";
import { KnowledgeEvent } from "./knowledge.entity";
import { Routing } from "./routing.entity";
import { SessionController } from "./session_controller.entity";
import { TextEvent } from "./text.entity";

enum SpawnerPacketType {
	UNSPECIFIED = "UNSPECIFIED",
	SESSION_CONTROLLER = "SESSION_CONTROLLER",
	CHANNEL_CONTROLLER = "CHANNEL_CONTROLLER",
	TEXT = "TEXT",
	INPUT_FILTER = "INPUT_FILTER",
	EMOTION = "EMOTION",
	KNOWLEDGE = "KNOWLEDGE",
}

export interface SpawnerPacketProps {
	type: SpawnerPacketType;
	date?: Date;
	routing?: Routing;
	success: boolean;
	error?: PacketError;
	text?: TextEvent;
	emotion?: EmotionEvent;
	knowledge?: KnowledgeEvent;
	inputFilter?: InputFilterEvent;
	sessionController?: SessionController;
	channelController?: ChannelController;
}

export class SpawnerPacket {
	private type: SpawnerPacketType = SpawnerPacketType.UNSPECIFIED;

	readonly date?: Date;
	readonly routing?: Routing;
	readonly success: boolean;
	readonly error?: PacketError;

	readonly text?: TextEvent;
	readonly emotion?: EmotionEvent;
	readonly knowledge?: KnowledgeEvent;
	readonly inputFilter?: InputFilterEvent;
	readonly sessionController?: SessionController;
	readonly channelController?: ChannelController;

	constructor(props: SpawnerPacketProps) {
		const { date, type, routing, success, error } = props;
		this.date = date;
		this.type = type;
		this.routing = routing;
		this.success = success;

		if (!success) {
			this.error = error;
		}

		if (this.isText()) {
			this.text = props.text;
		}
		if (this.isEmotion()) {
			this.emotion = props.emotion;
		}
		if (this.isKnowledge()) {
			this.knowledge = props.knowledge;
		}
		if (this.isInputFilter()) {
			this.inputFilter = props.inputFilter;
		}
		if (this.isSessionController()) {
			this.sessionController = props.sessionController;
		}
		if (this.isChannelController()) {
			this.channelController = props.channelController;
		}
	}

	isText() {
		return this.type === SpawnerPacketType.TEXT;
	}

	isEmotion() {
		return this.type === SpawnerPacketType.EMOTION;
	}

	isKnowledge() {
		return this.type === SpawnerPacketType.KNOWLEDGE;
	}

	isInputFilter() {
		return this.type === SpawnerPacketType.INPUT_FILTER;
	}

	isSessionController() {
		return this.type === SpawnerPacketType.SESSION_CONTROLLER;
	}

	isChannelController() {
		return this.type === SpawnerPacketType.CHANNEL_CONTROLLER;
	}

	static convertProto(proto: ProtoPacket): SpawnerPacket {
		const type = SpawnerPacket.getType(proto);
		const { timestamp, routing, success, error, payload } = proto;
		const { value } = payload;

		return new SpawnerPacket({
			type,
			date: timestamp?.toDate(),
			routing: routing && Routing.convertProto(routing),
			success,
			...(success && {
				error: error && PacketError.convertProto(error),
			}),
			...(value instanceof ProtoTextEvent && {
				text: TextEvent.convertProto(value),
			}),
			...(value instanceof ProtoEmotionEvent && {
				emotion: EmotionEvent.convertProto(value),
			}),
			...(value instanceof ProtoKnowledgeEvent && {
				knowledge: KnowledgeEvent.convertProto(value),
			}),
			...(value instanceof ProtoInputFilterEvent && {
				inputFilter: InputFilterEvent.convertProto(value),
			}),
			...(value instanceof ProtoSessionController && {
				sessionController: SessionController.convertProto(value),
			}),
			...(value instanceof ProtoChannelController && {
				channelController: ChannelController.convertProto(value),
			}),
		});
	}

	private static getType(proto: ProtoPacket) {
		const { type } = proto;
		switch (type) {
			case ProtoSpawnerPacketType.TEXT:
				return SpawnerPacketType.TEXT;
			case ProtoSpawnerPacketType.EMOTION:
				return SpawnerPacketType.EMOTION;
			case ProtoSpawnerPacketType.KNOWLEDGE:
				return SpawnerPacketType.KNOWLEDGE;
			case ProtoSpawnerPacketType.INPUT_FILTER:
				return SpawnerPacketType.INPUT_FILTER;
			case ProtoSpawnerPacketType.SESSION_CONTROLLER:
				return SpawnerPacketType.SESSION_CONTROLLER;
			case ProtoSpawnerPacketType.CHANNEL_CONTROLLER:
				return SpawnerPacketType.CHANNEL_CONTROLLER;
			default:
				return SpawnerPacketType.UNSPECIFIED;
		}
	}
}
