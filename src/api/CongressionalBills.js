/**
 * govinfo Link Service
 * <p>The <strong>govinfo</strong> Link Service provides services for developers and webmasters to access content and metadata on <strong>govinfo</strong>. Current and planned services include a link service, list service, and search service. Please contact <a href=\"https://www.gpo.gov/askgpo/\">askGPO</a> for additional information about current or planned services.</p> <p>The link service is used to create embedded links to content and metadata on <strong>govinfo</strong> and is currently enabled for the collections below. The collection code is listed in parenthesis after each collection name, and the available queries are listed below each collection. More information about each query is provided on the individual collection page.</p>
 *
 * OpenAPI spec version: 0.5.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.govinfoLinkService) {
      root.govinfoLinkService = {};
    }
    root.govinfoLinkService.CongressionalBills = factory(root.govinfoLinkService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * CongressionalBillsBILLS service.
   * @module api/CongressionalBills
   * @version 0.5.0
   */

  /**
   * Constructs a new CongressionalBills. 
   * @alias module:api/CongressionalBills
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the billsFetchUsingGET operation.
     * @callback module:api/CongressionalBills~billsFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: bill number, bill type, congress, bill version OR most recent
     * @param {String} congress This is the numerical Congress number. Sample value is 112.
     * @param {module:model/String} billtype Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.
     * @param {Number} billnum This is the numerical bill number. Sample value is 1027.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.billversion If bill version is not provided, the most recent version of a bill is returned. Values are as, ash, ath, ats, cdh, cds, cph, cps, eah, eas, eh, enr, eph, es, fah, fph, fps, hdh, hds, ih, iph, ips, is, lth, lts, nat, oph, ops, pap, pav, pch, pcs, pp, pwah, rah, ras, rch, rcs, rdh, rds, re, reah, renr, res, rfh, rfs, rft, rh, rhuc, rih, ris, rs, rth, rts, s_p, sas, sc, mostrecent.
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, related.
     * @param {module:api/CongressionalBills~billsFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.billsFetchUsingGET = function(congress, billtype, billnum, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'congress' is set
      if (congress === undefined || congress === null) {
        throw new Error("Missing the required parameter 'congress' when calling billsFetchUsingGET");
      }

      // verify the required parameter 'billtype' is set
      if (billtype === undefined || billtype === null) {
        throw new Error("Missing the required parameter 'billtype' when calling billsFetchUsingGET");
      }

      // verify the required parameter 'billnum' is set
      if (billnum === undefined || billnum === null) {
        throw new Error("Missing the required parameter 'billnum' when calling billsFetchUsingGET");
      }


      var pathParams = {
        'congress': congress,
        'billtype': billtype,
        'billnum': billnum
      };
      var queryParams = {
        'billversion': opts['billversion'],
        'link-type': opts['linkType'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/bills/{congress}/{billtype}/{billnum}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));