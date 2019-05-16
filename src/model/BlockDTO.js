/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetworkTypeEnum from './NetworkTypeEnum';
import UInt64DTO from './UInt64DTO';





/**
* The BlockDTO model module.
* @module model/BlockDTO
* @version 0.7.15
*/
export default class BlockDTO {
    /**
    * Constructs a new <code>BlockDTO</code>.
    * @alias module:model/BlockDTO
    * @class
    * @param signature {String} The signature of the block. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    * @param signer {String} The public key of the block harvester formatted as hexadecimal.
    * @param version {module:model/NetworkTypeEnum} 
    * @param type {Number} The block type: * 0x8043 (32835 decimal) - Nemesis block. * 0x8143 (33091 decimal) - Regular block. 
    * @param height {module:model/UInt64DTO} 
    * @param timestamp {module:model/UInt64DTO} 
    * @param difficulty {module:model/UInt64DTO} 
    * @param feeMultiplier {Number} The fee multiplier applied to transactions contained in block.
    * @param previousBlockHash {String} The hash of the previous block.
    * @param blockTransactionsHash {String} The transactions included in a block are hashed forming a merkle tree. The root of the tree summarizes them. 
    * @param blockReceiptsHash {String} The collection of receipts  are hashed into a merkle tree and linked to a block. The block header stores the root hash. 
    * @param stateHash {String} For each block, the state of the blockchain is stored in RocksDB, forming a patricia tree. The root of the tree summarizes the state of the blockchain for the given block. 
    * @param beneficiary {String} The public key of the optional beneficiary designated by harvester.
    */

    constructor(signature, signer, version, type, height, timestamp, difficulty, feeMultiplier, previousBlockHash, blockTransactionsHash, blockReceiptsHash, stateHash, beneficiary) {
        

        
        

        this['signature'] = signature;this['signer'] = signer;this['version'] = version;this['type'] = type;this['height'] = height;this['timestamp'] = timestamp;this['difficulty'] = difficulty;this['feeMultiplier'] = feeMultiplier;this['previousBlockHash'] = previousBlockHash;this['blockTransactionsHash'] = blockTransactionsHash;this['blockReceiptsHash'] = blockReceiptsHash;this['stateHash'] = stateHash;this['beneficiary'] = beneficiary;

        
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['signature'] = signature;
        obj['height'] = height;
        obj['timestamp'] = timestamp;
        obj['difficulty'] = difficulty;
        obj['feeMultiplier'] = feeMultiplier;
        obj['previousBlockHash'] = previousBlockHash;
        obj['blockTransactionsHash'] = blockTransactionsHash;
        obj['blockReceiptsHash'] = blockReceiptsHash;
        obj['stateHash'] = stateHash;
        obj['beneficiary'] = beneficiary;
    }

    /**
     * Constructs a <code>BlockDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockDTO} obj Optional instance to populate.
     * @return {module:model/BlockDTO} The populated <code>BlockDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockDTO();
            VerifiableEntityDTO.constructFromObject(data, obj);
            BlockDTOAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('signer')) {
                obj['signer'] = ApiClient.convertToType(data['signer'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = NetworkTypeEnum.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], ['Number']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], ['Number']);
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], ['Number']);
            }
            if (data.hasOwnProperty('feeMultiplier')) {
                obj['feeMultiplier'] = ApiClient.convertToType(data['feeMultiplier'], 'Number');
            }
            if (data.hasOwnProperty('previousBlockHash')) {
                obj['previousBlockHash'] = ApiClient.convertToType(data['previousBlockHash'], 'String');
            }
            if (data.hasOwnProperty('blockTransactionsHash')) {
                obj['blockTransactionsHash'] = ApiClient.convertToType(data['blockTransactionsHash'], 'String');
            }
            if (data.hasOwnProperty('blockReceiptsHash')) {
                obj['blockReceiptsHash'] = ApiClient.convertToType(data['blockReceiptsHash'], 'String');
            }
            if (data.hasOwnProperty('stateHash')) {
                obj['stateHash'] = ApiClient.convertToType(data['stateHash'], 'String');
            }
            if (data.hasOwnProperty('beneficiary')) {
                obj['beneficiary'] = ApiClient.convertToType(data['beneficiary'], 'String');
            }
        }
        return obj;
    }

    /**
    * The signature of the block. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    * @member {String} signature
    */
    signature = undefined;
    /**
    * The public key of the block harvester formatted as hexadecimal.
    * @member {String} signer
    */
    signer = undefined;
    /**
    * @member {module:model/NetworkTypeEnum} version
    */
    version = undefined;
    /**
    * The block type: * 0x8043 (32835 decimal) - Nemesis block. * 0x8143 (33091 decimal) - Regular block. 
    * @member {Number} type
    */
    type = undefined;
    /**
    * @member {module:model/UInt64DTO} height
    */
    height = undefined;
    /**
    * @member {module:model/UInt64DTO} timestamp
    */
    timestamp = undefined;
    /**
    * @member {module:model/UInt64DTO} difficulty
    */
    difficulty = undefined;
    /**
    * The fee multiplier applied to transactions contained in block.
    * @member {Number} feeMultiplier
    */
    feeMultiplier = undefined;
    /**
    * The hash of the previous block.
    * @member {String} previousBlockHash
    */
    previousBlockHash = undefined;
    /**
    * The transactions included in a block are hashed forming a merkle tree. The root of the tree summarizes them. 
    * @member {String} blockTransactionsHash
    */
    blockTransactionsHash = undefined;
    /**
    * The collection of receipts  are hashed into a merkle tree and linked to a block. The block header stores the root hash. 
    * @member {String} blockReceiptsHash
    */
    blockReceiptsHash = undefined;
    /**
    * For each block, the state of the blockchain is stored in RocksDB, forming a patricia tree. The root of the tree summarizes the state of the blockchain for the given block. 
    * @member {String} stateHash
    */
    stateHash = undefined;
    /**
    * The public key of the optional beneficiary designated by harvester.
    * @member {String} beneficiary
    */
    beneficiary = undefined;

}

/**
 * The signature of the entity. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
 * @member {String} signature
 */
BlockDTO.prototype['signature'] = undefined;

/**
 * @member {Array.<Number>} height
 */
BlockDTO.prototype['height'] = undefined;

/**
 * @member {Array.<Number>} timestamp
 */
BlockDTO.prototype['timestamp'] = undefined;

/**
 * @member {Array.<Number>} difficulty
 */
BlockDTO.prototype['difficulty'] = undefined;

/**
 * The fee multiplier applied to transactions contained in block.
 * @member {Number} feeMultiplier
 */
BlockDTO.prototype['feeMultiplier'] = undefined;

/**
 * The hash of the previous block.
 * @member {String} previousBlockHash
 */
BlockDTO.prototype['previousBlockHash'] = undefined;

/**
 * The transactions included in a block are hashed forming a merkle tree. The root of the tree summarizes them. 
 * @member {String} blockTransactionsHash
 */
BlockDTO.prototype['blockTransactionsHash'] = undefined;

/**
 * The collection of receipts  are hashed into a merkle tree and linked to a block. The block header stores the root hash. 
 * @member {String} blockReceiptsHash
 */
BlockDTO.prototype['blockReceiptsHash'] = undefined;

/**
 * For each block, the state of the blockchain is stored in RocksDB, forming a patricia tree. The root of the tree summarizes the state of the blockchain for the given block. 
 * @member {String} stateHash
 */
BlockDTO.prototype['stateHash'] = undefined;

/**
 * The public key of the optional beneficiary designated by harvester.
 * @member {String} beneficiary
 */
BlockDTO.prototype['beneficiary'] = undefined;


// Implement VerifiableEntityDTO interface:
/**
 * The signature of the entity. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
 * @member {String} signature
 */
VerifiableEntityDTO.prototype['signature'] = undefined;
// Implement BlockDTOAllOf interface:
/**
 * @member {Array.<Number>} height
 */
BlockDTOAllOf.prototype['height'] = undefined;
/**
 * @member {Array.<Number>} timestamp
 */
BlockDTOAllOf.prototype['timestamp'] = undefined;
/**
 * @member {Array.<Number>} difficulty
 */
BlockDTOAllOf.prototype['difficulty'] = undefined;
/**
 * The fee multiplier applied to transactions contained in block.
 * @member {Number} feeMultiplier
 */
BlockDTOAllOf.prototype['feeMultiplier'] = undefined;
/**
 * The hash of the previous block.
 * @member {String} previousBlockHash
 */
BlockDTOAllOf.prototype['previousBlockHash'] = undefined;
/**
 * The transactions included in a block are hashed forming a merkle tree. The root of the tree summarizes them. 
 * @member {String} blockTransactionsHash
 */
BlockDTOAllOf.prototype['blockTransactionsHash'] = undefined;
/**
 * The collection of receipts  are hashed into a merkle tree and linked to a block. The block header stores the root hash. 
 * @member {String} blockReceiptsHash
 */
BlockDTOAllOf.prototype['blockReceiptsHash'] = undefined;
/**
 * For each block, the state of the blockchain is stored in RocksDB, forming a patricia tree. The root of the tree summarizes the state of the blockchain for the given block. 
 * @member {String} stateHash
 */
BlockDTOAllOf.prototype['stateHash'] = undefined;
/**
 * The public key of the optional beneficiary designated by harvester.
 * @member {String} beneficiary
 */
BlockDTOAllOf.prototype['beneficiary'] = undefined;




export default BlockDTO;

