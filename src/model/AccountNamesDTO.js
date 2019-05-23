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
/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The AccountNamesDTO model module.
* @module model/AccountNamesDTO
* @version 0.7.15
*/
export default class AccountNamesDTO {
    /**
    * Constructs a new <code>AccountNamesDTO</code>.
    * @alias module:model/AccountNamesDTO
    * @class
    * @param address {String} The address of the account in base 32.
    * @param names {Array.<String>} The mosaic linked namespace names.
    */

    constructor(address, names) {
        

        
        

        this['address'] = address;this['names'] = names;

        
    }

    /**
    * Constructs a <code>AccountNamesDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountNamesDTO} obj Optional instance to populate.
    * @return {module:model/AccountNamesDTO} The populated <code>AccountNamesDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountNamesDTO();

            
            
            

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The address of the account in base 32.
    * @member {String} address
    */
    address = undefined;
    /**
    * The mosaic linked namespace names.
    * @member {Array.<String>} names
    */
    names = undefined;








}


