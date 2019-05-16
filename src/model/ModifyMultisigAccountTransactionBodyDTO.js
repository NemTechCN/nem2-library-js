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
import CosignatoryModificationDTO from './CosignatoryModificationDTO';

/**
 * The ModifyMultisigAccountTransactionBodyDTO model module.
 * @module model/ModifyMultisigAccountTransactionBodyDTO
 * @version 0.7.15
 */
class ModifyMultisigAccountTransactionBodyDTO {
    /**
     * Constructs a new <code>ModifyMultisigAccountTransactionBodyDTO</code>.
     * @alias module:model/ModifyMultisigAccountTransactionBodyDTO
     * @param minRemovalDelta {Number} The number of signatures needed to remove a cosignatory. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
     * @param minApprovalDelta {Number} The number of signatures needed to approve a transaction. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
     * @param modifications {Array.<module:model/CosignatoryModificationDTO>} The array of cosignatory accounts to add or delete.
     */
    constructor(minRemovalDelta, minApprovalDelta, modifications) { 
        
        ModifyMultisigAccountTransactionBodyDTO.initialize(this, minRemovalDelta, minApprovalDelta, modifications);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, minRemovalDelta, minApprovalDelta, modifications) { 
        obj['minRemovalDelta'] = minRemovalDelta;
        obj['minApprovalDelta'] = minApprovalDelta;
        obj['modifications'] = modifications;
    }

    /**
     * Constructs a <code>ModifyMultisigAccountTransactionBodyDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyMultisigAccountTransactionBodyDTO} obj Optional instance to populate.
     * @return {module:model/ModifyMultisigAccountTransactionBodyDTO} The populated <code>ModifyMultisigAccountTransactionBodyDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyMultisigAccountTransactionBodyDTO();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('minRemovalDelta')) {
                obj['minRemovalDelta'] = ApiClient.convertToType(data['minRemovalDelta'], 'Number');
            }
            if (data.hasOwnProperty('minApprovalDelta')) {
                obj['minApprovalDelta'] = ApiClient.convertToType(data['minApprovalDelta'], 'Number');
            }
            if (data.hasOwnProperty('modifications')) {
                obj['modifications'] = ApiClient.convertToType(data['modifications'], [CosignatoryModificationDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} type
 */
ModifyMultisigAccountTransactionBodyDTO.prototype['type'] = undefined;

/**
 * The number of signatures needed to remove a cosignatory. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
 * @member {Number} minRemovalDelta
 */
ModifyMultisigAccountTransactionBodyDTO.prototype['minRemovalDelta'] = undefined;

/**
 * The number of signatures needed to approve a transaction. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
 * @member {Number} minApprovalDelta
 */
ModifyMultisigAccountTransactionBodyDTO.prototype['minApprovalDelta'] = undefined;

/**
 * The array of cosignatory accounts to add or delete.
 * @member {Array.<module:model/CosignatoryModificationDTO>} modifications
 */
ModifyMultisigAccountTransactionBodyDTO.prototype['modifications'] = undefined;






export default ModifyMultisigAccountTransactionBodyDTO;

