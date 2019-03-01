/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Catapult = Catapult || {};

/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};

/**
 * @constructor
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer = function () {
	/**
	 * @type {flatbuffers.ByteBuffer}
	 */
	this.bb = null;

	/**
	 * @type {number}
	 */
	this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.PropertyEntityTypeModificationBuffer}
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.prototype.__init = function (i, bb) {
	this.bb_pos = i;
	this.bb = bb;
	return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.PropertyEntityTypeModificationBuffer=} obj
 * @returns {Catapult.Buffers.PropertyEntityTypeModificationBuffer}
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.getRootAsPropertyEntityTypeModificationBuffer = function (bb, obj) {
	return (obj || new Catapult.Buffers.PropertyEntityTypeModificationBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.prototype.modificationType = function () {
	var offset = this.bb.__offset(this.bb_pos, 4);
	return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.prototype.value = function () {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.startPropertyEntityTypeModificationBuffer = function (builder) {
	builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.addModificationType = function (builder, type) {
	builder.addFieldInt8(0, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} valueOffset
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.addValue = function (builder, valueOffset) {
	builder.addFieldInt16(1, valueOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.PropertyEntityTypeModificationBuffer.endPropertyEntityTypeModificationBuffer = function (builder) {
	var offset = builder.endObject();
	return offset;
};

/**
 * @constructor
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer = function () {
	/**
	 * @type {flatbuffers.ByteBuffer}
	 */
	this.bb = null;

	/**
	 * @type {number}
	 */
	this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.__init = function (i, bb) {
	this.bb_pos = i;
	this.bb = bb;
	return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer=} obj
 * @returns {Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.getRootAsAccountPropertiesEntityTypeTransactionBuffer = function (bb, obj) {
	return (obj || new Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.size = function () {
	var offset = this.bb.__offset(this.bb_pos, 4);
	return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.signature = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.signatureLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.signatureArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.signer = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.signerLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.signerArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.version = function () {
	var offset = this.bb.__offset(this.bb_pos, 10);
	return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.type = function () {
	var offset = this.bb.__offset(this.bb_pos, 12);
	return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.fee = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.feeLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.feeArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.deadline = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.deadlineLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.deadlineArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.propertyType = function () {
	var offset = this.bb.__offset(this.bb_pos, 18);
	return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};


/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.modificationCount = function () {
	var offset = this.bb.__offset(this.bb_pos, 20);
	return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Catapult.Buffers.PropertyEntityTypeModificationBuffer=} obj
 * @returns {Catapult.Buffers.PropertyEntityTypeModificationBuffer}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.modifications = function (index, obj) {
	var offset = this.bb.__offset(this.bb_pos, 22);
	return offset ? (obj || new Catapult.Buffers.PropertyEntityTypeModificationBuffer).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.prototype.modificationsLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 22);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.startAccountPropertiesEntityTypeTransactionBuffer = function (builder) {
	builder.startObject(11);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addSize = function (builder, size) {
	builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addSignature = function (builder, signatureOffset) {
	builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.createSignatureVector = function (builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.startSignatureVector = function (builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addSigner = function (builder, signerOffset) {
	builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.createSignerVector = function (builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.startSignerVector = function (builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addVersion = function (builder, version) {
	builder.addFieldInt16(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addType = function (builder, type) {
	builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} feeOffset
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addFee = function (builder, feeOffset) {
	builder.addFieldOffset(5, feeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.createFeeVector = function (builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.startFeeVector = function (builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addDeadline = function (builder, deadlineOffset) {
	builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.createDeadlineVector = function (builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.startDeadlineVector = function (builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} propertyType
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addPropertyType = function (builder, propertyType) {
	builder.addFieldInt8(7, propertyType, 0);
};


/**
 * @param {flatbuffers.Builder} builder
 * @param {number} modificationCount
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addModificationCount = function (builder, modificationCount) {
	builder.addFieldInt8(8, modificationCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} modificationsOffset
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.addModifications = function (builder, modificationsOffset) {
	builder.addFieldOffset(9, modificationsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.createModificationsVector = function (builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addOffset(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.startModificationsVector = function (builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.endAccountPropertiesEntityTypeTransactionBuffer = function (builder) {
	var offset = builder.endObject();
	return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.AccountPropertiesEntityTypeTransactionBuffer.finishAccountPropertiesEntityTypeTransactionBufferBuffer = function (builder, offset) {
	builder.finish(offset);
};

// Exports for Node.js and RequireJS
export default Catapult;