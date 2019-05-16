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
 * The MosaicDefinitionDTO model module.
 * @module model/MosaicDefinitionDTO
 * @version 0.7.15
 */
class MosaicDefinitionDTO {
    /**
     * Constructs a new <code>MosaicDefinitionDTO</code>.
     * @alias module:model/MosaicDefinitionDTO
     * @param mosaicId {Array.<Number>} 
     * @param supply {Array.<Number>} 
     * @param height {Array.<Number>} 
     * @param owner {String} The public key of the mosaic owner.
     * @param revision {Number} The number of definitions for the same mosaic.
     * @param properties {Array.<Array.<Number>>} The array of mosaic properties: * First element - MosaicFlags * Second element - Divisibility * Third element - Duration 
     * @param levy {Object} 
     */
    constructor(mosaicId, supply, height, owner, revision, properties, levy) { 
        
        MosaicDefinitionDTO.initialize(this, mosaicId, supply, height, owner, revision, properties, levy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mosaicId, supply, height, owner, revision, properties, levy) { 
        obj['mosaicId'] = mosaicId;
        obj['supply'] = supply;
        obj['height'] = height;
        obj['owner'] = owner;
        obj['revision'] = revision;
        obj['properties'] = properties;
        obj['levy'] = levy;
    }

    /**
     * Constructs a <code>MosaicDefinitionDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MosaicDefinitionDTO} obj Optional instance to populate.
     * @return {module:model/MosaicDefinitionDTO} The populated <code>MosaicDefinitionDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MosaicDefinitionDTO();

            if (data.hasOwnProperty('mosaicId')) {
                obj['mosaicId'] = ApiClient.convertToType(data['mosaicId'], ['Number']);
            }
            if (data.hasOwnProperty('supply')) {
                obj['supply'] = ApiClient.convertToType(data['supply'], ['Number']);
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], ['Number']);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Array]);
            }
            if (data.hasOwnProperty('levy')) {
                obj['levy'] = ApiClient.convertToType(data['levy'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} mosaicId
 */
MosaicDefinitionDTO.prototype['mosaicId'] = undefined;

/**
 * @member {Array.<Number>} supply
 */
MosaicDefinitionDTO.prototype['supply'] = undefined;

/**
 * @member {Array.<Number>} height
 */
MosaicDefinitionDTO.prototype['height'] = undefined;

/**
 * The public key of the mosaic owner.
 * @member {String} owner
 */
MosaicDefinitionDTO.prototype['owner'] = undefined;

/**
 * The number of definitions for the same mosaic.
 * @member {Number} revision
 */
MosaicDefinitionDTO.prototype['revision'] = undefined;

/**
 * The array of mosaic properties: * First element - MosaicFlags * Second element - Divisibility * Third element - Duration 
 * @member {Array.<Array.<Number>>} properties
 */
MosaicDefinitionDTO.prototype['properties'] = undefined;

/**
 * @member {Object} levy
 */
MosaicDefinitionDTO.prototype['levy'] = undefined;






export default MosaicDefinitionDTO;

