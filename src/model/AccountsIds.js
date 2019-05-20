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
* The AccountsIds model module.
* @module model/AccountsIds
* @version 0.7.15
*/
export default class AccountsIds {
    /**
    * Constructs a new <code>AccountsIds</code>.
    * @alias module:model/AccountsIds
    * @class
    */

    constructor() {
        

        
        

        
        Addresses.initialize(this);
    }



        

        
    }

    /**
    * Constructs a <code>AccountsIds</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountsIds} obj Optional instance to populate.
    * @return {module:model/AccountsIds} The populated <code>AccountsIds</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsIds();

            
            
            

            if (data.hasOwnProperty('publicKeys')) {
                obj['publicKeys'] = ApiClient.convertToType(data['publicKeys'], ['String']);
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The array of public keys.
    * @member {Array.<String>} publicKeys
    */
    publicKeys = undefined;
    /**
    * The array of addresses.
    * @member {Array.<String>} addresses
    */
    addresses = undefined;


/**
 * The array of addresses.
 * @member {Array.<String>} addresses
 */
Addresses.prototype['addresses'] = undefined;





}

export default Addresses;

