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
    root.govinfoLinkService.CongressionalRecordDaily = factory(root.govinfoLinkService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * CongressionalRecordDailyCREC service.
   * @module api/CongressionalRecordDaily
   * @version 0.5.0
   */

  /**
   * Constructs a new CongressionalRecordDaily. 
   * @alias module:api/CongressionalRecordDaily
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the crecSectionFetchUsingGET operation.
     * @callback module:api/CongressionalRecordDaily~crecSectionFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: section, publish date OR most recent
     * @param {module:model/String} section This is the Congressional Record section. Values are dailydigest, senate, house, extensions.
     * @param {Object} opts Optional parameters
     * @param {String} opts.publishdate If date is not provided, the most recent version of the Congressional Record section is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are mods, premis, details, context, related. Note: mods, premis, and details are returned at the package level because they are not available for section level granules.
     * @param {module:api/CongressionalRecordDaily~crecSectionFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.crecSectionFetchUsingGET = function(section, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'section' is set
      if (section === undefined || section === null) {
        throw new Error("Missing the required parameter 'section' when calling crecSectionFetchUsingGET");
      }


      var pathParams = {
        'section': section
      };
      var queryParams = {
        'publishdate': opts['publishdate'],
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
        '/crec/section/{section}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the crecTypeFetchUsingGET operation.
     * @callback module:api/CongressionalRecordDaily~crecTypeFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: congress, bill number, bill type
     * @param {String} congress This is the numerical Congress number. Sample value is 115.
     * @param {module:model/String} billtype Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.
     * @param {Number} billnum This is the numerical bill number. Sample value is 997.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is html. Other values are pdf, details, context, related.
     * @param {module:api/CongressionalRecordDaily~crecTypeFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.crecTypeFetchUsingGET = function(congress, billtype, billnum, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'congress' is set
      if (congress === undefined || congress === null) {
        throw new Error("Missing the required parameter 'congress' when calling crecTypeFetchUsingGET");
      }

      // verify the required parameter 'billtype' is set
      if (billtype === undefined || billtype === null) {
        throw new Error("Missing the required parameter 'billtype' when calling crecTypeFetchUsingGET");
      }

      // verify the required parameter 'billnum' is set
      if (billnum === undefined || billnum === null) {
        throw new Error("Missing the required parameter 'billnum' when calling crecTypeFetchUsingGET");
      }


      var pathParams = {
        'congress': congress,
        'billtype': billtype,
        'billnum': billnum
      };
      var queryParams = {
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
        '/crec/cas/{congress}/{billtype}/{billnum}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the crecTypeFetchUsingGET1 operation.
     * @callback module:api/CongressionalRecordDaily~crecTypeFetchUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: document type, publish date OR most recent
     * @param {module:model/String} type This is the type of Congressional Record document within each section. Please see tables below for values.
     * @param {Object} opts Optional parameters
     * @param {String} opts.publishdate If date is not provided, the most recent version of the Congressional Record document is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
     * @param {module:api/CongressionalRecordDaily~crecTypeFetchUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.crecTypeFetchUsingGET1 = function(type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling crecTypeFetchUsingGET1");
      }


      var pathParams = {
        'type': type
      };
      var queryParams = {
        'publishdate': opts['publishdate'],
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
        '/crec/type/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the crecVolumeFetchUsingGET operation.
     * @callback module:api/CongressionalRecordDaily~crecVolumeFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: volume, page prefix, page number
     * @param {Number} volume This is the numerical volume number. Sample value is 158.
     * @param {module:model/String} pageprefix This is the page prefix that corresponds to the Congressional Record section. Sections are Daily Digest, House, Senate, and Extensions of Remarks. Values are d, h, s, e.
     * @param {String} page This is the numerical page number. Congressional record pages are numbered consecutively in a section within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 234.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
     * @param {module:api/CongressionalRecordDaily~crecVolumeFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.crecVolumeFetchUsingGET = function(volume, pageprefix, page, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'volume' is set
      if (volume === undefined || volume === null) {
        throw new Error("Missing the required parameter 'volume' when calling crecVolumeFetchUsingGET");
      }

      // verify the required parameter 'pageprefix' is set
      if (pageprefix === undefined || pageprefix === null) {
        throw new Error("Missing the required parameter 'pageprefix' when calling crecVolumeFetchUsingGET");
      }

      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling crecVolumeFetchUsingGET");
      }


      var pathParams = {
        'volume': volume,
        'pageprefix': pageprefix,
        'page': page
      };
      var queryParams = {
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
        '/crec/{volume}/{pageprefix}/{page}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
