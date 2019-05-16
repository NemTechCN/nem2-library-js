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

/**
* The MultisigDTO model module.
* @module model/MultisigDTO
* @version 0.7.15
*/
export default class MultisigDTO {
    /**
    * Constructs a new <code>MultisigDTO</code>.
    * @alias module:model/MultisigDTO
    * @class
    * @param account {String} The account public key.
    * @param minApproval {Number} The number of signatures needed to approve a transaction.
    * @param minRemoval {Number} The number of signatures needed to remove a cosignatory.
    * @param cosignatories {Array.<String>} The array of public keys of the cosignatory accounts.
    * @param multisigAccounts {Array.<String>} The array of multisig accounts where the account is cosignatory.
    */

    constructor(account, minApproval, minRemoval, cosignatories, multisigAccounts) {
        
        MultisigDTO.initialize(this, account, minApproval, minRemoval, cosignatories, multisigAccounts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account, minApproval, minRemoval, cosignatories, multisigAccounts) { 
        obj['account'] = account;
        obj['minApproval'] = minApproval;
        obj['minRemoval'] = minRemoval;
        obj['cosignatories'] = cosignatories;
        obj['multisigAccounts'] = multisigAccounts;
    }

    /**
     * Constructs a <code>MultisigDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultisigDTO} obj Optional instance to populate.
     * @return {module:model/MultisigDTO} The populated <code>MultisigDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultisigDTO();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('accountAddress')) {
                obj['accountAddress'] = ApiClient.convertToType(data['accountAddress'], 'String');
            }
            if (data.hasOwnProperty('minApproval')) {
                obj['minApproval'] = ApiClient.convertToType(data['minApproval'], 'Number');
            }
            if (data.hasOwnProperty('minRemoval')) {
                obj['minRemoval'] = ApiClient.convertToType(data['minRemoval'], 'Number');
            }
            if (data.hasOwnProperty('cosignatories')) {
                obj['cosignatories'] = ApiClient.convertToType(data['cosignatories'], ['String']);
            }
            if (data.hasOwnProperty('multisigAccounts')) {
                obj['multisigAccounts'] = ApiClient.convertToType(data['multisigAccounts'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The account public key.
    * @member {String} account
    */
    account = undefined;
    /**
    * The account address in hexadecimal.
    * @member {String} accountAddress
    */
    accountAddress = undefined;
    /**
    * The number of signatures needed to approve a transaction.
    * @member {Number} minApproval
    */
    minApproval = undefined;
    /**
    * The number of signatures needed to remove a cosignatory.
    * @member {Number} minRemoval
    */
    minRemoval = undefined;
    /**
    * The array of public keys of the cosignatory accounts.
    * @member {Array.<String>} cosignatories
    */
    cosignatories = undefined;
    /**
    * The array of multisig accounts where the account is cosignatory.
    * @member {Array.<String>} multisigAccounts
    */
    multisigAccounts = undefined;

}

/**
 * The account public key.
 * @member {String} account
 */
MultisigDTO.prototype['account'] = undefined;

/**
 * The account address in hexadecimal.
 * @member {String} accountAddress
 */
MultisigDTO.prototype['accountAddress'] = undefined;

/**
 * The number of signatures needed to approve a transaction.
 * @member {Number} minApproval
 */
MultisigDTO.prototype['minApproval'] = undefined;

/**
 * The number of signatures needed to remove a cosignatory.
 * @member {Number} minRemoval
 */
MultisigDTO.prototype['minRemoval'] = undefined;

/**
 * The array of public keys of the cosignatory accounts.
 * @member {Array.<String>} cosignatories
 */
MultisigDTO.prototype['cosignatories'] = undefined;

/**
 * The array of multisig accounts where the account is cosignatory.
 * @member {Array.<String>} multisigAccounts
 */
MultisigDTO.prototype['multisigAccounts'] = undefined;






export default MultisigDTO;

