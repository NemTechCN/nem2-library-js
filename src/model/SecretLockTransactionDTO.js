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
import HashAlgorithmEnum from './HashAlgorithmEnum';
import SecretLockTransactionBodyDTO from './SecretLockTransactionBodyDTO';
import TransactionDTO from './TransactionDTO';

/**
 * The SecretLockTransactionDTO model module.
 * @module model/SecretLockTransactionDTO
 * @version 0.7.15
 */
class SecretLockTransactionDTO {
    /**
     * Constructs a new <code>SecretLockTransactionDTO</code>.
     * Transaction that sends mosaics to a recipient if the proof used is revealed. If the duration is reached, the locked funds go back to the sender of the transaction.
     * @alias module:model/SecretLockTransactionDTO
     * @implements module:model/TransactionDTO
     * @implements module:model/SecretLockTransactionBodyDTO
     */
    constructor() { 
        TransactionDTO.initialize(this);SecretLockTransactionBodyDTO.initialize(this, duration, mosaicId, amount, hashAlgorithm, secret, recipient);
        SecretLockTransactionDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['signature'] = signature;
        obj['signer'] = signer;
        obj['version'] = version;
        obj['type'] = type;
        obj['max_fee'] = maxFee;
        obj['deadline'] = deadline;
        obj['duration'] = duration;
        obj['mosaicId'] = mosaicId;
        obj['amount'] = amount;
        obj['hashAlgorithm'] = hashAlgorithm;
        obj['secret'] = secret;
        obj['recipient'] = recipient;
    }

    /**
     * Constructs a <code>SecretLockTransactionDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretLockTransactionDTO} obj Optional instance to populate.
     * @return {module:model/SecretLockTransactionDTO} The populated <code>SecretLockTransactionDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretLockTransactionDTO();
            TransactionDTO.constructFromObject(data, obj);
            SecretLockTransactionBodyDTO.constructFromObject(data, obj);

            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('signer')) {
                obj['signer'] = ApiClient.convertToType(data['signer'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('max_fee')) {
                obj['max_fee'] = ApiClient.convertToType(data['max_fee'], ['Number']);
            }
            if (data.hasOwnProperty('deadline')) {
                obj['deadline'] = ApiClient.convertToType(data['deadline'], ['Number']);
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], ['Number']);
            }
            if (data.hasOwnProperty('mosaicId')) {
                obj['mosaicId'] = ApiClient.convertToType(data['mosaicId'], ['Number']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], ['Number']);
            }
            if (data.hasOwnProperty('hashAlgorithm')) {
                obj['hashAlgorithm'] = HashAlgorithmEnum.constructFromObject(data['hashAlgorithm']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The signature of the entity. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
 * @member {String} signature
 */
SecretLockTransactionDTO.prototype['signature'] = undefined;

/**
 * The public key of the entity signer formatted as hexadecimal.
 * @member {String} signer
 */
SecretLockTransactionDTO.prototype['signer'] = undefined;

/**
 * The entity version. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network. 
 * @member {Number} version
 */
SecretLockTransactionDTO.prototype['version'] = undefined;

/**
 * @member {Object} type
 */
SecretLockTransactionDTO.prototype['type'] = undefined;

/**
 * @member {Array.<Number>} max_fee
 */
SecretLockTransactionDTO.prototype['max_fee'] = undefined;

/**
 * @member {Array.<Number>} deadline
 */
SecretLockTransactionDTO.prototype['deadline'] = undefined;

/**
 * @member {Array.<Number>} duration
 */
SecretLockTransactionDTO.prototype['duration'] = undefined;

/**
 * @member {Array.<Number>} mosaicId
 */
SecretLockTransactionDTO.prototype['mosaicId'] = undefined;

/**
 * @member {Array.<Number>} amount
 */
SecretLockTransactionDTO.prototype['amount'] = undefined;

/**
 * @member {module:model/HashAlgorithmEnum} hashAlgorithm
 */
SecretLockTransactionDTO.prototype['hashAlgorithm'] = undefined;

/**
 * The proof hashed.
 * @member {String} secret
 */
SecretLockTransactionDTO.prototype['secret'] = undefined;

/**
 * The address in hexadecimal that will receive the funds once the transaction is unlocked.
 * @member {String} recipient
 */
SecretLockTransactionDTO.prototype['recipient'] = undefined;


// Implement TransactionDTO interface:
// Implement SecretLockTransactionBodyDTO interface:
/**
 * @member {Object} type
 */
SecretLockTransactionBodyDTO.prototype['type'] = undefined;
/**
 * @member {Array.<Number>} duration
 */
SecretLockTransactionBodyDTO.prototype['duration'] = undefined;
/**
 * @member {Array.<Number>} mosaicId
 */
SecretLockTransactionBodyDTO.prototype['mosaicId'] = undefined;
/**
 * @member {Array.<Number>} amount
 */
SecretLockTransactionBodyDTO.prototype['amount'] = undefined;
/**
 * @member {module:model/HashAlgorithmEnum} hashAlgorithm
 */
SecretLockTransactionBodyDTO.prototype['hashAlgorithm'] = undefined;
/**
 * The proof hashed.
 * @member {String} secret
 */
SecretLockTransactionBodyDTO.prototype['secret'] = undefined;
/**
 * The address in hexadecimal that will receive the funds once the transaction is unlocked.
 * @member {String} recipient
 */
SecretLockTransactionBodyDTO.prototype['recipient'] = undefined;




export default SecretLockTransactionDTO;

