// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Device
 * @header lbServices.Device
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Device` model.
 *
 * **Details**
 *
 * Tablet-Device Management
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbDevice",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/devices/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Device.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/devices/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#replaceOrCreate
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/devices/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#upsertWithWhere
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/devices/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#replaceById
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/devices/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#getToken
             * @methodOf lbServices.Device
             *
             * @description
             *
             * give to Tablet-ID the User AccessToken from UserLogin
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string=}` - Tablet Device-ID
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `token` – `{string=}` - User AccessToken
             */
            "getToken": {
              url: urlBase + "/devices/token",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#postUpdateDevice
             * @methodOf lbServices.Device
             *
             * @description
             *
             * send push notification to specified device
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `deviceNumber` – `{integer=}` - device number
             *
             *  - `version` – `{string=}` - version string to send to the device
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `message` – `{string=}` - Just a nice info for you
             */
            "postUpdateDevice": {
              url: urlBase + "/devices/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#postUpdateAllDevices
             * @methodOf lbServices.Device
             *
             * @description
             *
             * send push notification to all devices
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `version` – `{string=}` - version string to send to the devices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `message` – `{string=}` - Just a nice info for you
             */
            "postUpdateAllDevices": {
              url: urlBase + "/devices/updateAll",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#postCancelUpdate
             * @methodOf lbServices.Device
             *
             * @description
             *
             * send cancel update notification to specified device
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `deviceNumber` – `{integer=}` - device number
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `message` – `{string=}` - Just a nice info for you
             */
            "postCancelUpdate": {
              url: urlBase + "/devices/update/cancel",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#postCancelAllUpdates
             * @methodOf lbServices.Device
             *
             * @description
             *
             * send cancel update notification to all devices
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `message` – `{string=}` - Just a nice info for you
             */
            "postCancelAllUpdates": {
              url: urlBase + "/devices/updateAll/cancel",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#postControlData
             * @methodOf lbServices.Device
             *
             * @description
             *
             * post token for push notification and current running version for a device-id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{string=}` - Tablet Device-ID
             *
             *  - `ionicToken` – `{string=}` - The device token form ionic push notification
             *
             *  - `deviceVersion` – `{string=}` - The device current running version
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "postControlData": {
              url: urlBase + "/devices/controldata",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#postIonicToken
             * @methodOf lbServices.Device
             *
             * @description
             *
             * post ionic token for a device-id. In order to send notifications through ionic push notification service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{string=}` - Tablet Device-ID
             *
             *  - `ionicToken` – `{string=}` - The device token form ionic push notification
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "postIonicToken": {
              url: urlBase + "/devices/ionictoken",
              method: "POST",
            },

            // INTERNAL. Use User.device() instead.
            "::get::User::device": {
              url: urlBase + "/users/:id/device",
              method: "GET",
            },

            // INTERNAL. Use User.device.create() instead.
            "::create::User::device": {
              url: urlBase + "/users/:id/device",
              method: "POST",
            },

            // INTERNAL. Use User.device.createMany() instead.
            "::createMany::User::device": {
              isArray: true,
              url: urlBase + "/users/:id/device",
              method: "POST",
            },

            // INTERNAL. Use User.device.update() instead.
            "::update::User::device": {
              url: urlBase + "/users/:id/device",
              method: "PUT",
            },

            // INTERNAL. Use User.device.destroy() instead.
            "::destroy::User::device": {
              url: urlBase + "/users/:id/device",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Device#patchOrCreateWithWhere
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];


        /**
        * @ngdoc property
        * @name lbServices.Device#modelName
        * @propertyOf lbServices.Device
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Device`.
        */
        R.modelName = "Device";


            /**
             * @ngdoc method
             * @name lbServices.Device#user
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("lbUser");
          var action = TargetResource["::get::Device::user"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbUser",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/users/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use User.device() instead.
            "prototype$__get__device": {
              url: urlBase + "/users/:id/device",
              method: "GET",
            },

            // INTERNAL. Use User.device.create() instead.
            "prototype$__create__device": {
              url: urlBase + "/users/:id/device",
              method: "POST",
            },

            // INTERNAL. Use User.device.update() instead.
            "prototype$__update__device": {
              url: urlBase + "/users/:id/device",
              method: "PUT",
            },

            // INTERNAL. Use User.device.destroy() instead.
            "prototype$__destroy__device": {
              url: urlBase + "/users/:id/device",
              method: "DELETE",
            },

            // INTERNAL. Use User.contacts.findById() instead.
            "prototype$__findById__contacts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/contacts/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.contacts.destroyById() instead.
            "prototype$__destroyById__contacts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/contacts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.contacts.updateById() instead.
            "prototype$__updateById__contacts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/contacts/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__bookmarklinks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for bookmarklinks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bookmarklinks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__bookmarklinks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bookmarklinks/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__bookmarklinks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for bookmarklinks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bookmarklinks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__bookmarklinks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bookmarklinks/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__bookmarklinks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for bookmarklinks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for bookmarklinks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__bookmarklinks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/bookmarklinks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.mailaccounts.findById() instead.
            "prototype$__findById__mailaccounts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/mailaccounts/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.mailaccounts.destroyById() instead.
            "prototype$__destroyById__mailaccounts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/mailaccounts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.mailaccounts.updateById() instead.
            "prototype$__updateById__mailaccounts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/mailaccounts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.messages.findById() instead.
            "prototype$__findById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.messages.destroyById() instead.
            "prototype$__destroyById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.updateById() instead.
            "prototype$__updateById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.picturestore.findById() instead.
            "prototype$__findById__picturestore": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/picturestore/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.picturestore.destroyById() instead.
            "prototype$__destroyById__picturestore": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/picturestore/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.picturestore.updateById() instead.
            "prototype$__updateById__picturestore": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/picturestore/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.pictures.findById() instead.
            "prototype$__findById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/pictures/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.pictures.destroyById() instead.
            "prototype$__destroyById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/pictures/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.pictures.updateById() instead.
            "prototype$__updateById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/pictures/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.videocalls.findById() instead.
            "prototype$__findById__videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/videocalls/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.videocalls.destroyById() instead.
            "prototype$__destroyById__videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/videocalls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.videocalls.updateById() instead.
            "prototype$__updateById__videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/videocalls/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__favoriteVideos
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for favoriteVideos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for favoriteVideos
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__favoriteVideos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/favoriteVideos/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__favoriteVideos
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for favoriteVideos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for favoriteVideos
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__favoriteVideos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/favoriteVideos/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__favoriteVideos
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for favoriteVideos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for favoriteVideos
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__favoriteVideos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/favoriteVideos/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__abUserBooks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for abUserBooks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for abUserBooks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__abUserBooks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/abUserBooks/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__abUserBooks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for abUserBooks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for abUserBooks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__abUserBooks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/abUserBooks/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__abUserBooks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for abUserBooks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for abUserBooks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__abUserBooks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/abUserBooks/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/users/:id/accessTokens",
              method: "GET",
            },

            // INTERNAL. Use User.contacts() instead.
            "prototype$__get__contacts": {
              isArray: true,
              url: urlBase + "/users/:id/contacts",
              method: "GET",
            },

            // INTERNAL. Use User.contacts.create() instead.
            "prototype$__create__contacts": {
              url: urlBase + "/users/:id/contacts",
              method: "POST",
            },

            // INTERNAL. Use User.contacts.destroyAll() instead.
            "prototype$__delete__contacts": {
              url: urlBase + "/users/:id/contacts",
              method: "DELETE",
            },

            // INTERNAL. Use User.contacts.count() instead.
            "prototype$__count__contacts": {
              url: urlBase + "/users/:id/contacts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__bookmarklinks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries bookmarklinks of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__bookmarklinks": {
              isArray: true,
              url: urlBase + "/users/:id/bookmarklinks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__bookmarklinks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in bookmarklinks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__bookmarklinks": {
              url: urlBase + "/users/:id/bookmarklinks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__bookmarklinks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all bookmarklinks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__bookmarklinks": {
              url: urlBase + "/users/:id/bookmarklinks",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__bookmarklinks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts bookmarklinks of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__bookmarklinks": {
              url: urlBase + "/users/:id/bookmarklinks/count",
              method: "GET",
            },

            // INTERNAL. Use User.mailaccounts() instead.
            "prototype$__get__mailaccounts": {
              isArray: true,
              url: urlBase + "/users/:id/mailaccounts",
              method: "GET",
            },

            // INTERNAL. Use User.mailaccounts.create() instead.
            "prototype$__create__mailaccounts": {
              url: urlBase + "/users/:id/mailaccounts",
              method: "POST",
            },

            // INTERNAL. Use User.mailaccounts.destroyAll() instead.
            "prototype$__delete__mailaccounts": {
              url: urlBase + "/users/:id/mailaccounts",
              method: "DELETE",
            },

            // INTERNAL. Use User.mailaccounts.count() instead.
            "prototype$__count__mailaccounts": {
              url: urlBase + "/users/:id/mailaccounts/count",
              method: "GET",
            },

            // INTERNAL. Use User.messages() instead.
            "prototype$__get__messages": {
              isArray: true,
              url: urlBase + "/users/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use User.messages.create() instead.
            "prototype$__create__messages": {
              url: urlBase + "/users/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use User.messages.destroyAll() instead.
            "prototype$__delete__messages": {
              url: urlBase + "/users/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.count() instead.
            "prototype$__count__messages": {
              url: urlBase + "/users/:id/messages/count",
              method: "GET",
            },

            // INTERNAL. Use User.picturestore() instead.
            "prototype$__get__picturestore": {
              isArray: true,
              url: urlBase + "/users/:id/picturestore",
              method: "GET",
            },

            // INTERNAL. Use User.picturestore.create() instead.
            "prototype$__create__picturestore": {
              url: urlBase + "/users/:id/picturestore",
              method: "POST",
            },

            // INTERNAL. Use User.picturestore.destroyAll() instead.
            "prototype$__delete__picturestore": {
              url: urlBase + "/users/:id/picturestore",
              method: "DELETE",
            },

            // INTERNAL. Use User.picturestore.count() instead.
            "prototype$__count__picturestore": {
              url: urlBase + "/users/:id/picturestore/count",
              method: "GET",
            },

            // INTERNAL. Use User.pictures() instead.
            "prototype$__get__pictures": {
              isArray: true,
              url: urlBase + "/users/:id/pictures",
              method: "GET",
            },

            // INTERNAL. Use User.pictures.create() instead.
            "prototype$__create__pictures": {
              url: urlBase + "/users/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use User.pictures.destroyAll() instead.
            "prototype$__delete__pictures": {
              url: urlBase + "/users/:id/pictures",
              method: "DELETE",
            },

            // INTERNAL. Use User.pictures.count() instead.
            "prototype$__count__pictures": {
              url: urlBase + "/users/:id/pictures/count",
              method: "GET",
            },

            // INTERNAL. Use User.videocalls() instead.
            "prototype$__get__videocalls": {
              isArray: true,
              url: urlBase + "/users/:id/videocalls",
              method: "GET",
            },

            // INTERNAL. Use User.videocalls.create() instead.
            "prototype$__create__videocalls": {
              url: urlBase + "/users/:id/videocalls",
              method: "POST",
            },

            // INTERNAL. Use User.videocalls.destroyAll() instead.
            "prototype$__delete__videocalls": {
              url: urlBase + "/users/:id/videocalls",
              method: "DELETE",
            },

            // INTERNAL. Use User.videocalls.count() instead.
            "prototype$__count__videocalls": {
              url: urlBase + "/users/:id/videocalls/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__favoriteVideos
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries favoriteVideos of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__favoriteVideos": {
              isArray: true,
              url: urlBase + "/users/:id/favoriteVideos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__favoriteVideos
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in favoriteVideos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__favoriteVideos": {
              url: urlBase + "/users/:id/favoriteVideos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__favoriteVideos
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all favoriteVideos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__favoriteVideos": {
              url: urlBase + "/users/:id/favoriteVideos",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__favoriteVideos
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts favoriteVideos of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__favoriteVideos": {
              url: urlBase + "/users/:id/favoriteVideos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__abUserBooks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries abUserBooks of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__abUserBooks": {
              isArray: true,
              url: urlBase + "/users/:id/abUserBooks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__abUserBooks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in abUserBooks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__abUserBooks": {
              url: urlBase + "/users/:id/abUserBooks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__abUserBooks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all abUserBooks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__abUserBooks": {
              url: urlBase + "/users/:id/abUserBooks",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__abUserBooks
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts abUserBooks of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__abUserBooks": {
              url: urlBase + "/users/:id/abUserBooks/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createUser
             * @methodOf lbServices.User
             *
             * @description
             *
             * create user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `username` – `{string=}` - username
             *
             *  - `password` – `{string=}` - password
             *
             *  - `email` – `{string=}` - email
             *
             *  - `token` – `{string=}` - token
             *
             *  - `gender` – `{string=}` - gender
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `user` – `{Object=}` - created user object
             */
            "createUser": {
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#whoami
             * @methodOf lbServices.User
             *
             * @description
             *
             * give current user infos
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `user` – `{object=}` - user info object
             */
            "whoami": {
              url: urlBase + "/users/whoami",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getInbox
             * @methodOf lbServices.User
             *
             * @description
             *
             * give mail inbox + contacts of user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `userId` – `{number=}` - global user number
             *
             *  - `filter` – `{object=}` - filter {limit, skip} for paginaging
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `inbox` – `{object=}` - list of last message + contact for every contact
             */
            "getInbox": {
              url: urlBase + "/users/inbox",
              method: "GET",
            },

            // INTERNAL. Use Device.user() instead.
            "::get::Device::user": {
              url: urlBase + "/devices/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Contact.user() instead.
            "::get::Contact::user": {
              url: urlBase + "/contacts/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Message.user() instead.
            "::get::Message::user": {
              url: urlBase + "/messages/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Picture.user() instead.
            "::get::Picture::user": {
              url: urlBase + "/pictures/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Videocall.user() instead.
            "::get::Videocall::user": {
              url: urlBase + "/videocalls/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.device
     * @header lbServices.User.device
     * @object
     * @description
     *
     * The object `User.device` groups methods
     * manipulating `Device` instances related to `User`.
     *
     * Call {@link lbServices.User#device User.device()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#device
             * @methodOf lbServices.User
             *
             * @description
             *
             * Fetches hasOne relation device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.device = function() {
          var TargetResource = $injector.get("lbDevice");
          var action = TargetResource["::get::User::device"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.device#create
             * @methodOf lbServices.User.device
             *
             * @description
             *
             * Creates a new instance in device of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.device.create = function() {
          var TargetResource = $injector.get("lbDevice");
          var action = TargetResource["::create::User::device"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.device#createMany
             * @methodOf lbServices.User.device
             *
             * @description
             *
             * Creates a new instance in device of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.device.createMany = function() {
          var TargetResource = $injector.get("lbDevice");
          var action = TargetResource["::createMany::User::device"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.device#destroy
             * @methodOf lbServices.User.device
             *
             * @description
             *
             * Deletes device of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.device.destroy = function() {
          var TargetResource = $injector.get("lbDevice");
          var action = TargetResource["::destroy::User::device"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.device#update
             * @methodOf lbServices.User.device
             *
             * @description
             *
             * Update device of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.device.update = function() {
          var TargetResource = $injector.get("lbDevice");
          var action = TargetResource["::update::User::device"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.contacts
     * @header lbServices.User.contacts
     * @object
     * @description
     *
     * The object `User.contacts` groups methods
     * manipulating `Contact` instances related to `User`.
     *
     * Call {@link lbServices.User#contacts User.contacts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#contacts
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries contacts of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contacts = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::get::User::contacts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.contacts#count
             * @methodOf lbServices.User.contacts
             *
             * @description
             *
             * Counts contacts of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.contacts.count = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::count::User::contacts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.contacts#create
             * @methodOf lbServices.User.contacts
             *
             * @description
             *
             * Creates a new instance in contacts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contacts.create = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::create::User::contacts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.contacts#createMany
             * @methodOf lbServices.User.contacts
             *
             * @description
             *
             * Creates a new instance in contacts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contacts.createMany = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::createMany::User::contacts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.contacts#destroyAll
             * @methodOf lbServices.User.contacts
             *
             * @description
             *
             * Deletes all contacts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.contacts.destroyAll = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::delete::User::contacts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.contacts#destroyById
             * @methodOf lbServices.User.contacts
             *
             * @description
             *
             * Delete a related item by id for contacts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for contacts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.contacts.destroyById = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::destroyById::User::contacts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.contacts#findById
             * @methodOf lbServices.User.contacts
             *
             * @description
             *
             * Find a related item by id for contacts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for contacts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contacts.findById = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::findById::User::contacts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.contacts#updateById
             * @methodOf lbServices.User.contacts
             *
             * @description
             *
             * Update a related item by id for contacts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for contacts
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contacts.updateById = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::updateById::User::contacts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.mailaccounts
     * @header lbServices.User.mailaccounts
     * @object
     * @description
     *
     * The object `User.mailaccounts` groups methods
     * manipulating `Mailaccount` instances related to `User`.
     *
     * Call {@link lbServices.User#mailaccounts User.mailaccounts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#mailaccounts
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries mailaccounts of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
        R.mailaccounts = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::get::User::mailaccounts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.mailaccounts#count
             * @methodOf lbServices.User.mailaccounts
             *
             * @description
             *
             * Counts mailaccounts of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.mailaccounts.count = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::count::User::mailaccounts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.mailaccounts#create
             * @methodOf lbServices.User.mailaccounts
             *
             * @description
             *
             * Creates a new instance in mailaccounts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
        R.mailaccounts.create = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::create::User::mailaccounts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.mailaccounts#createMany
             * @methodOf lbServices.User.mailaccounts
             *
             * @description
             *
             * Creates a new instance in mailaccounts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
        R.mailaccounts.createMany = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::createMany::User::mailaccounts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.mailaccounts#destroyAll
             * @methodOf lbServices.User.mailaccounts
             *
             * @description
             *
             * Deletes all mailaccounts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mailaccounts.destroyAll = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::delete::User::mailaccounts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.mailaccounts#destroyById
             * @methodOf lbServices.User.mailaccounts
             *
             * @description
             *
             * Delete a related item by id for mailaccounts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for mailaccounts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mailaccounts.destroyById = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::destroyById::User::mailaccounts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.mailaccounts#findById
             * @methodOf lbServices.User.mailaccounts
             *
             * @description
             *
             * Find a related item by id for mailaccounts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for mailaccounts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
        R.mailaccounts.findById = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::findById::User::mailaccounts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.mailaccounts#updateById
             * @methodOf lbServices.User.mailaccounts
             *
             * @description
             *
             * Update a related item by id for mailaccounts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for mailaccounts
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
        R.mailaccounts.updateById = function() {
          var TargetResource = $injector.get("lbMailaccount");
          var action = TargetResource["::updateById::User::mailaccounts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.messages
     * @header lbServices.User.messages
     * @object
     * @description
     *
     * The object `User.messages` groups methods
     * manipulating `Message` instances related to `User`.
     *
     * Call {@link lbServices.User#messages User.messages()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#messages
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries messages of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::get::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#count
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Counts messages of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.messages.count = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::count::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#create
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.create = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::create::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#createMany
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::createMany::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#destroyAll
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Deletes all messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::delete::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#destroyById
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Delete a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::destroyById::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#findById
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Find a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.findById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::findById::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#updateById
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Update a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::updateById::User::messages"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.picturestore
     * @header lbServices.User.picturestore
     * @object
     * @description
     *
     * The object `User.picturestore` groups methods
     * manipulating `Picturestore` instances related to `User`.
     *
     * Call {@link lbServices.User#picturestore User.picturestore()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#picturestore
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries picturestore of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
        R.picturestore = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::get::User::picturestore"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picturestore#count
             * @methodOf lbServices.User.picturestore
             *
             * @description
             *
             * Counts picturestore of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.picturestore.count = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::count::User::picturestore"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picturestore#create
             * @methodOf lbServices.User.picturestore
             *
             * @description
             *
             * Creates a new instance in picturestore of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
        R.picturestore.create = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::create::User::picturestore"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picturestore#createMany
             * @methodOf lbServices.User.picturestore
             *
             * @description
             *
             * Creates a new instance in picturestore of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
        R.picturestore.createMany = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::createMany::User::picturestore"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picturestore#destroyAll
             * @methodOf lbServices.User.picturestore
             *
             * @description
             *
             * Deletes all picturestore of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.picturestore.destroyAll = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::delete::User::picturestore"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picturestore#destroyById
             * @methodOf lbServices.User.picturestore
             *
             * @description
             *
             * Delete a related item by id for picturestore.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for picturestore
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.picturestore.destroyById = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::destroyById::User::picturestore"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picturestore#findById
             * @methodOf lbServices.User.picturestore
             *
             * @description
             *
             * Find a related item by id for picturestore.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for picturestore
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
        R.picturestore.findById = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::findById::User::picturestore"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picturestore#updateById
             * @methodOf lbServices.User.picturestore
             *
             * @description
             *
             * Update a related item by id for picturestore.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for picturestore
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
        R.picturestore.updateById = function() {
          var TargetResource = $injector.get("lbPicturestore");
          var action = TargetResource["::updateById::User::picturestore"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.pictures
     * @header lbServices.User.pictures
     * @object
     * @description
     *
     * The object `User.pictures` groups methods
     * manipulating `Picture` instances related to `User`.
     *
     * Call {@link lbServices.User#pictures User.pictures()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#pictures
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries pictures of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::get::User::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.pictures#count
             * @methodOf lbServices.User.pictures
             *
             * @description
             *
             * Counts pictures of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.pictures.count = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::count::User::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.pictures#create
             * @methodOf lbServices.User.pictures
             *
             * @description
             *
             * Creates a new instance in pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.create = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::create::User::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.pictures#createMany
             * @methodOf lbServices.User.pictures
             *
             * @description
             *
             * Creates a new instance in pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.createMany = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::createMany::User::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.pictures#destroyAll
             * @methodOf lbServices.User.pictures
             *
             * @description
             *
             * Deletes all pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.pictures.destroyAll = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::delete::User::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.pictures#destroyById
             * @methodOf lbServices.User.pictures
             *
             * @description
             *
             * Delete a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.pictures.destroyById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::destroyById::User::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.pictures#findById
             * @methodOf lbServices.User.pictures
             *
             * @description
             *
             * Find a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.findById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::findById::User::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.pictures#updateById
             * @methodOf lbServices.User.pictures
             *
             * @description
             *
             * Update a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.updateById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::updateById::User::pictures"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.videocalls
     * @header lbServices.User.videocalls
     * @object
     * @description
     *
     * The object `User.videocalls` groups methods
     * manipulating `Videocall` instances related to `User`.
     *
     * Call {@link lbServices.User#videocalls User.videocalls()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#videocalls
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries videocalls of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::get::User::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.videocalls#count
             * @methodOf lbServices.User.videocalls
             *
             * @description
             *
             * Counts videocalls of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.videocalls.count = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::count::User::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.videocalls#create
             * @methodOf lbServices.User.videocalls
             *
             * @description
             *
             * Creates a new instance in videocalls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.create = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::create::User::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.videocalls#createMany
             * @methodOf lbServices.User.videocalls
             *
             * @description
             *
             * Creates a new instance in videocalls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.createMany = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::createMany::User::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.videocalls#destroyAll
             * @methodOf lbServices.User.videocalls
             *
             * @description
             *
             * Deletes all videocalls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.videocalls.destroyAll = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::delete::User::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.videocalls#destroyById
             * @methodOf lbServices.User.videocalls
             *
             * @description
             *
             * Delete a related item by id for videocalls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for videocalls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.videocalls.destroyById = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::destroyById::User::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.videocalls#findById
             * @methodOf lbServices.User.videocalls
             *
             * @description
             *
             * Find a related item by id for videocalls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for videocalls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.findById = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::findById::User::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.videocalls#updateById
             * @methodOf lbServices.User.videocalls
             *
             * @description
             *
             * Update a related item by id for videocalls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for videocalls
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.updateById = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::updateById::User::videocalls"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Mood
 * @header lbServices.Mood
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Mood` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbMood",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/moods/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Mood.tracks() instead.
            "prototype$__get__tracks": {
              isArray: true,
              url: urlBase + "/moods/:id/tracks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mood#replaceOrCreate
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mood` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/moods/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mood#upsertWithWhere
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mood` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/moods/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mood#findById
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mood` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/moods/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mood#replaceById
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mood` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/moods/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mood#find
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mood` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/moods",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mood#count
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/moods/count",
              method: "GET",
            },

            // INTERNAL. Use Category.moods() instead.
            "::get::Category::moods": {
              isArray: true,
              url: urlBase + "/categories/:id/moods",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Mood#patchOrCreateWithWhere
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mood` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];


        /**
        * @ngdoc property
        * @name lbServices.Mood#modelName
        * @propertyOf lbServices.Mood
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Mood`.
        */
        R.modelName = "Mood";


            /**
             * @ngdoc method
             * @name lbServices.Mood#tracks
             * @methodOf lbServices.Mood
             *
             * @description
             *
             * Queries tracks of mood.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
        R.tracks = function() {
          var TargetResource = $injector.get("lbTrack");
          var action = TargetResource["::get::Mood::tracks"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Track
 * @header lbServices.Track
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Track` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbTrack",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/tracks/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Track#replaceOrCreate
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/tracks/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Track#upsertWithWhere
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/tracks/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Track#findById
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/tracks/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Track#replaceById
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/tracks/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Track#find
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/tracks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Track#count
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/tracks/count",
              method: "GET",
            },

            // INTERNAL. Use Mood.tracks() instead.
            "::get::Mood::tracks": {
              isArray: true,
              url: urlBase + "/moods/:id/tracks",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Track#patchOrCreateWithWhere
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];


        /**
        * @ngdoc property
        * @name lbServices.Track#modelName
        * @propertyOf lbServices.Track
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Track`.
        */
        R.modelName = "Track";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbCategory",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/categories/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Category.moods() instead.
            "prototype$__get__moods": {
              isArray: true,
              url: urlBase + "/categories/:id/moods",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#replaceOrCreate
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/categories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#upsertWithWhere
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/categories/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#findById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/categories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#replaceById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/categories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#find
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/categories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#count
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/categories/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Category#patchOrCreateWithWhere
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];


        /**
        * @ngdoc property
        * @name lbServices.Category#modelName
        * @propertyOf lbServices.Category
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Category`.
        */
        R.modelName = "Category";


            /**
             * @ngdoc method
             * @name lbServices.Category#moods
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Queries moods of category.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mood` object.)
             * </em>
             */
        R.moods = function() {
          var TargetResource = $injector.get("lbMood");
          var action = TargetResource["::get::Category::moods"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Contact
 * @header lbServices.Contact
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Contact` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbContact",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/contacts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Contact.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/contacts/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$__findById__bookmarklinks
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Find a related item by id for bookmarklinks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookmarklinks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "prototype$__findById__bookmarklinks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/bookmarklinks/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$__destroyById__bookmarklinks
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Delete a related item by id for bookmarklinks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookmarklinks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__bookmarklinks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/bookmarklinks/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$__updateById__bookmarklinks
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Update a related item by id for bookmarklinks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookmarklinks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "prototype$__updateById__bookmarklinks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/bookmarklinks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Contact.messages.findById() instead.
            "prototype$__findById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Contact.messages.destroyById() instead.
            "prototype$__destroyById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.messages.updateById() instead.
            "prototype$__updateById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/messages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Contact.pictures.findById() instead.
            "prototype$__findById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/pictures/:fk",
              method: "GET",
            },

            // INTERNAL. Use Contact.pictures.destroyById() instead.
            "prototype$__destroyById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/pictures/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.pictures.updateById() instead.
            "prototype$__updateById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/pictures/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Contact.videocalls.findById() instead.
            "prototype$__findById__videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/videocalls/:fk",
              method: "GET",
            },

            // INTERNAL. Use Contact.videocalls.destroyById() instead.
            "prototype$__destroyById__videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/videocalls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.videocalls.updateById() instead.
            "prototype$__updateById__videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/videocalls/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$__get__bookmarklinks
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Queries bookmarklinks of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "prototype$__get__bookmarklinks": {
              isArray: true,
              url: urlBase + "/contacts/:id/bookmarklinks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$__create__bookmarklinks
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Creates a new instance in bookmarklinks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "prototype$__create__bookmarklinks": {
              url: urlBase + "/contacts/:id/bookmarklinks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$__delete__bookmarklinks
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Deletes all bookmarklinks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__bookmarklinks": {
              url: urlBase + "/contacts/:id/bookmarklinks",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$__count__bookmarklinks
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Counts bookmarklinks of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__bookmarklinks": {
              url: urlBase + "/contacts/:id/bookmarklinks/count",
              method: "GET",
            },

            // INTERNAL. Use Contact.messages() instead.
            "prototype$__get__messages": {
              isArray: true,
              url: urlBase + "/contacts/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use Contact.messages.create() instead.
            "prototype$__create__messages": {
              url: urlBase + "/contacts/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use Contact.messages.destroyAll() instead.
            "prototype$__delete__messages": {
              url: urlBase + "/contacts/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.messages.count() instead.
            "prototype$__count__messages": {
              url: urlBase + "/contacts/:id/messages/count",
              method: "GET",
            },

            // INTERNAL. Use Contact.pictures() instead.
            "prototype$__get__pictures": {
              isArray: true,
              url: urlBase + "/contacts/:id/pictures",
              method: "GET",
            },

            // INTERNAL. Use Contact.pictures.create() instead.
            "prototype$__create__pictures": {
              url: urlBase + "/contacts/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use Contact.pictures.destroyAll() instead.
            "prototype$__delete__pictures": {
              url: urlBase + "/contacts/:id/pictures",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.pictures.count() instead.
            "prototype$__count__pictures": {
              url: urlBase + "/contacts/:id/pictures/count",
              method: "GET",
            },

            // INTERNAL. Use Contact.videocalls() instead.
            "prototype$__get__videocalls": {
              isArray: true,
              url: urlBase + "/contacts/:id/videocalls",
              method: "GET",
            },

            // INTERNAL. Use Contact.videocalls.create() instead.
            "prototype$__create__videocalls": {
              url: urlBase + "/contacts/:id/videocalls",
              method: "POST",
            },

            // INTERNAL. Use Contact.videocalls.destroyAll() instead.
            "prototype$__delete__videocalls": {
              url: urlBase + "/contacts/:id/videocalls",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.videocalls.count() instead.
            "prototype$__count__videocalls": {
              url: urlBase + "/contacts/:id/videocalls/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#create
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/contacts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#createMany
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/contacts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#upsert
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/contacts",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#replaceOrCreate
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/contacts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#upsertWithWhere
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/contacts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#findById
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/contacts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#replaceById
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/contacts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#count
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/contacts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$updateAttributes
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/contacts/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#getList
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * get all contacts for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{Object=}` - filter for query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `contactList` – `{object=}` - list of all contacts of the user
             */
            "getList": {
              url: urlBase + "/contacts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#getByEmail
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * get a contact by email
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `email` – `{String=}` - email to get contact
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `contact` – `{object=}` - a contact object
             */
            "getByEmail": {
              url: urlBase + "/contacts/getByEmail",
              method: "GET",
            },

            // INTERNAL. Use User.contacts.findById() instead.
            "::findById::User::contacts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/contacts/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.contacts.destroyById() instead.
            "::destroyById::User::contacts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/contacts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.contacts.updateById() instead.
            "::updateById::User::contacts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/contacts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.contacts() instead.
            "::get::User::contacts": {
              isArray: true,
              url: urlBase + "/users/:id/contacts",
              method: "GET",
            },

            // INTERNAL. Use User.contacts.create() instead.
            "::create::User::contacts": {
              url: urlBase + "/users/:id/contacts",
              method: "POST",
            },

            // INTERNAL. Use User.contacts.createMany() instead.
            "::createMany::User::contacts": {
              isArray: true,
              url: urlBase + "/users/:id/contacts",
              method: "POST",
            },

            // INTERNAL. Use User.contacts.destroyAll() instead.
            "::delete::User::contacts": {
              url: urlBase + "/users/:id/contacts",
              method: "DELETE",
            },

            // INTERNAL. Use User.contacts.count() instead.
            "::count::User::contacts": {
              url: urlBase + "/users/:id/contacts/count",
              method: "GET",
            },

            // INTERNAL. Use Message.contact() instead.
            "::get::Message::contact": {
              url: urlBase + "/messages/:id/contact",
              method: "GET",
            },

            // INTERNAL. Use Picture.contact() instead.
            "::get::Picture::contact": {
              url: urlBase + "/pictures/:id/contact",
              method: "GET",
            },

            // INTERNAL. Use Videocall.contact() instead.
            "::get::Videocall::contact": {
              url: urlBase + "/videocalls/:id/contact",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Contact#patchOrCreate
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#updateOrCreate
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#patchOrCreateWithWhere
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#patchAttributes
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Contact#modelName
        * @propertyOf lbServices.Contact
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Contact`.
        */
        R.modelName = "Contact";


            /**
             * @ngdoc method
             * @name lbServices.Contact#user
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("lbUser");
          var action = TargetResource["::get::Contact::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Contact.messages
     * @header lbServices.Contact.messages
     * @object
     * @description
     *
     * The object `Contact.messages` groups methods
     * manipulating `Message` instances related to `Contact`.
     *
     * Call {@link lbServices.Contact#messages Contact.messages()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Contact#messages
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Queries messages of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::get::Contact::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.messages#count
             * @methodOf lbServices.Contact.messages
             *
             * @description
             *
             * Counts messages of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.messages.count = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::count::Contact::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.messages#create
             * @methodOf lbServices.Contact.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.create = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::create::Contact::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.messages#createMany
             * @methodOf lbServices.Contact.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::createMany::Contact::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.messages#destroyAll
             * @methodOf lbServices.Contact.messages
             *
             * @description
             *
             * Deletes all messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::delete::Contact::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.messages#destroyById
             * @methodOf lbServices.Contact.messages
             *
             * @description
             *
             * Delete a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::destroyById::Contact::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.messages#findById
             * @methodOf lbServices.Contact.messages
             *
             * @description
             *
             * Find a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.findById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::findById::Contact::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.messages#updateById
             * @methodOf lbServices.Contact.messages
             *
             * @description
             *
             * Update a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::updateById::Contact::messages"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Contact.pictures
     * @header lbServices.Contact.pictures
     * @object
     * @description
     *
     * The object `Contact.pictures` groups methods
     * manipulating `Picture` instances related to `Contact`.
     *
     * Call {@link lbServices.Contact#pictures Contact.pictures()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Contact#pictures
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Queries pictures of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::get::Contact::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.pictures#count
             * @methodOf lbServices.Contact.pictures
             *
             * @description
             *
             * Counts pictures of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.pictures.count = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::count::Contact::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.pictures#create
             * @methodOf lbServices.Contact.pictures
             *
             * @description
             *
             * Creates a new instance in pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.create = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::create::Contact::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.pictures#createMany
             * @methodOf lbServices.Contact.pictures
             *
             * @description
             *
             * Creates a new instance in pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.createMany = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::createMany::Contact::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.pictures#destroyAll
             * @methodOf lbServices.Contact.pictures
             *
             * @description
             *
             * Deletes all pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.pictures.destroyAll = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::delete::Contact::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.pictures#destroyById
             * @methodOf lbServices.Contact.pictures
             *
             * @description
             *
             * Delete a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.pictures.destroyById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::destroyById::Contact::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.pictures#findById
             * @methodOf lbServices.Contact.pictures
             *
             * @description
             *
             * Find a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.findById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::findById::Contact::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.pictures#updateById
             * @methodOf lbServices.Contact.pictures
             *
             * @description
             *
             * Update a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.updateById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::updateById::Contact::pictures"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Contact.videocalls
     * @header lbServices.Contact.videocalls
     * @object
     * @description
     *
     * The object `Contact.videocalls` groups methods
     * manipulating `Videocall` instances related to `Contact`.
     *
     * Call {@link lbServices.Contact#videocalls Contact.videocalls()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Contact#videocalls
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Queries videocalls of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::get::Contact::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.videocalls#count
             * @methodOf lbServices.Contact.videocalls
             *
             * @description
             *
             * Counts videocalls of contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.videocalls.count = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::count::Contact::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.videocalls#create
             * @methodOf lbServices.Contact.videocalls
             *
             * @description
             *
             * Creates a new instance in videocalls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.create = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::create::Contact::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.videocalls#createMany
             * @methodOf lbServices.Contact.videocalls
             *
             * @description
             *
             * Creates a new instance in videocalls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.createMany = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::createMany::Contact::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.videocalls#destroyAll
             * @methodOf lbServices.Contact.videocalls
             *
             * @description
             *
             * Deletes all videocalls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.videocalls.destroyAll = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::delete::Contact::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.videocalls#destroyById
             * @methodOf lbServices.Contact.videocalls
             *
             * @description
             *
             * Delete a related item by id for videocalls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for videocalls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.videocalls.destroyById = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::destroyById::Contact::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.videocalls#findById
             * @methodOf lbServices.Contact.videocalls
             *
             * @description
             *
             * Find a related item by id for videocalls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for videocalls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.findById = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::findById::Contact::videocalls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Contact.videocalls#updateById
             * @methodOf lbServices.Contact.videocalls
             *
             * @description
             *
             * Update a related item by id for videocalls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for videocalls
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R.videocalls.updateById = function() {
          var TargetResource = $injector.get("lbVideocall");
          var action = TargetResource["::updateById::Contact::videocalls"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Mailaccount
 * @header lbServices.Mailaccount
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Mailaccount` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbMailaccount",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/mailaccounts/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#replaceOrCreate
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/mailaccounts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#upsertWithWhere
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/mailaccounts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#replaceById
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/mailaccounts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#getStatus
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * check connect state of email address
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `email` – `{String=}` - email address
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `status` – `{Object=}` - give the connect state (true/false)
             */
            "getStatus": {
              url: urlBase + "/mailaccounts/status",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#getConnect
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * give the authenticate redirect url
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `email` – `{String=}` - email address for the user
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `uri` – `{String=}` - give the redirect callback url for client
             */
            "getConnect": {
              url: urlBase + "/mailaccounts/connect",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#getCallback
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * mNylasComponent callback for authenticate query
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `code` – `{String=}` - security code from mNylasComponent
             *
             *  - `state` – `{String=}` - intern user identifer
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `uri` – `{String=}` - url of the mNylasComponent security web-site
             */
            "getCallback": {
              url: urlBase + "/mailaccounts/callback",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#getThreadList
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * give all Threads from User
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `threads` – `{Object=}` - User Mail-Threads
             */
            "getThreadList": {
              url: urlBase + "/mailaccounts/threads",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#send
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * send a E-Mail
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `email` – `{String=}` - receiver of the mail, new contact will be created, if not present
             *
             *  - `subject` – `{String=}` - optional subject of message
             *
             *  - `body` – `{String=}` - mail body
             *
             *  - `fileIdList` – `{Array=}` - file id list for attachment
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `draft` – `{Object=}` - sent draft data
             */
            "send": {
              url: urlBase + "/mailaccounts/send",
              method: "POST",
            },

            // INTERNAL. Use User.mailaccounts.findById() instead.
            "::findById::User::mailaccounts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/mailaccounts/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.mailaccounts.destroyById() instead.
            "::destroyById::User::mailaccounts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/mailaccounts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.mailaccounts.updateById() instead.
            "::updateById::User::mailaccounts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/mailaccounts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.mailaccounts() instead.
            "::get::User::mailaccounts": {
              isArray: true,
              url: urlBase + "/users/:id/mailaccounts",
              method: "GET",
            },

            // INTERNAL. Use User.mailaccounts.create() instead.
            "::create::User::mailaccounts": {
              url: urlBase + "/users/:id/mailaccounts",
              method: "POST",
            },

            // INTERNAL. Use User.mailaccounts.createMany() instead.
            "::createMany::User::mailaccounts": {
              isArray: true,
              url: urlBase + "/users/:id/mailaccounts",
              method: "POST",
            },

            // INTERNAL. Use User.mailaccounts.destroyAll() instead.
            "::delete::User::mailaccounts": {
              url: urlBase + "/users/:id/mailaccounts",
              method: "DELETE",
            },

            // INTERNAL. Use User.mailaccounts.count() instead.
            "::count::User::mailaccounts": {
              url: urlBase + "/users/:id/mailaccounts/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Mailaccount#patchOrCreateWithWhere
             * @methodOf lbServices.Mailaccount
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Mailaccount` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];


        /**
        * @ngdoc property
        * @name lbServices.Mailaccount#modelName
        * @propertyOf lbServices.Mailaccount
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Mailaccount`.
        */
        R.modelName = "Mailaccount";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Message
 * @header lbServices.Message
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Message` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbMessage",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/messages/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Message.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/messages/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Message.contact() instead.
            "prototype$__get__contact": {
              url: urlBase + "/messages/:id/contact",
              method: "GET",
            },

            // INTERNAL. Use Message.pictures.findById() instead.
            "prototype$__findById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/:fk",
              method: "GET",
            },

            // INTERNAL. Use Message.pictures.destroyById() instead.
            "prototype$__destroyById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Message.pictures.updateById() instead.
            "prototype$__updateById__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Message.pictures.link() instead.
            "prototype$__link__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Message.pictures.unlink() instead.
            "prototype$__unlink__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Message.pictures.exists() instead.
            "prototype$__exists__pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Message.pictures() instead.
            "prototype$__get__pictures": {
              isArray: true,
              url: urlBase + "/messages/:id/pictures",
              method: "GET",
            },

            // INTERNAL. Use Message.pictures.create() instead.
            "prototype$__create__pictures": {
              url: urlBase + "/messages/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use Message.pictures.destroyAll() instead.
            "prototype$__delete__pictures": {
              url: urlBase + "/messages/:id/pictures",
              method: "DELETE",
            },

            // INTERNAL. Use Message.pictures.count() instead.
            "prototype$__count__pictures": {
              url: urlBase + "/messages/:id/pictures/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#upsert
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/messages",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#replaceOrCreate
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/messages/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#upsertWithWhere
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/messages/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#findById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/messages/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#replaceById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/messages/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#deleteById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/messages/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#count
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/messages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#deleteList
             * @methodOf lbServices.Message
             *
             * @description
             *
             * delete list of message ids
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `messageList` – `{*=}` - message ids list
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "deleteList": {
              url: urlBase + "/messages/deletelist",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#send
             * @methodOf lbServices.Message
             *
             * @description
             *
             * send a Message
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `email` – `{string=}` - receiver of the mail, new contact will be created, if not present
             *
             *  - `subject` – `{string=}` - optional subject of message
             *
             *  - `body` – `{string=}` - message body (HTML/Text)
             *
             *  - `text` – `{string=}` - message body only text
             *
             *  - `files` – `{*=}` - file id number list for attachments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "send": {
              url: urlBase + "/messages/send",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#getList
             * @methodOf lbServices.Message
             *
             * @description
             *
             * get all messages + contacts for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{Object=}` - filter for query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `messageList` – `{object=}` - list of all messages + contacts of the user
             */
            "getList": {
              url: urlBase + "/messages",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#getListByContactId
             * @methodOf lbServices.Message
             *
             * @description
             *
             * all messages to contact number
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `contactId` – `{number=}` - contact number
             *
             *  - `filter` – `{object=}` - filter {limit, skip} for paginaging
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `messageList` – `{*=}` - list of all messages to contact
             */
            "getListByContactId": {
              url: urlBase + "/messages/listbycontact",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#getListByPictureId
             * @methodOf lbServices.Message
             *
             * @description
             *
             * all messages to picture number
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `pictureId` – `{number=}` - picture number
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `messageList` – `{*=}` - list of all messages to picture
             */
            "getListByPictureId": {
              url: urlBase + "/messages/listbypicture",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#getPictureList
             * @methodOf lbServices.Message
             *
             * @description
             *
             * all pictures to message number
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `messageId` – `{number=}` - message number
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `pictureList` – `{*=}` - list of all pictures to message
             */
            "getPictureList": {
              url: urlBase + "/messages/picturelist",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#viewMessage
             * @methodOf lbServices.Message
             *
             * @description
             *
             * all pictures to message number
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `messageId` – `{number=}` - message number
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * full html for displaying the message
             */
            "viewMessage": {
              url: urlBase + "/messages/view",
              method: "GET",
            },

            // INTERNAL. Use User.messages.findById() instead.
            "::findById::User::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.messages.destroyById() instead.
            "::destroyById::User::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.updateById() instead.
            "::updateById::User::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.messages() instead.
            "::get::User::messages": {
              isArray: true,
              url: urlBase + "/users/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use User.messages.create() instead.
            "::create::User::messages": {
              url: urlBase + "/users/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use User.messages.createMany() instead.
            "::createMany::User::messages": {
              isArray: true,
              url: urlBase + "/users/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use User.messages.destroyAll() instead.
            "::delete::User::messages": {
              url: urlBase + "/users/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.count() instead.
            "::count::User::messages": {
              url: urlBase + "/users/:id/messages/count",
              method: "GET",
            },

            // INTERNAL. Use Contact.messages.findById() instead.
            "::findById::Contact::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Contact.messages.destroyById() instead.
            "::destroyById::Contact::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.messages.updateById() instead.
            "::updateById::Contact::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/messages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Contact.messages() instead.
            "::get::Contact::messages": {
              isArray: true,
              url: urlBase + "/contacts/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use Contact.messages.create() instead.
            "::create::Contact::messages": {
              url: urlBase + "/contacts/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use Contact.messages.createMany() instead.
            "::createMany::Contact::messages": {
              isArray: true,
              url: urlBase + "/contacts/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use Contact.messages.destroyAll() instead.
            "::delete::Contact::messages": {
              url: urlBase + "/contacts/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.messages.count() instead.
            "::count::Contact::messages": {
              url: urlBase + "/contacts/:id/messages/count",
              method: "GET",
            },

            // INTERNAL. Use Picture.messages.findById() instead.
            "::findById::Picture::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Picture.messages.destroyById() instead.
            "::destroyById::Picture::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Picture.messages.updateById() instead.
            "::updateById::Picture::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Picture.messages.link() instead.
            "::link::Picture::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Picture.messages.unlink() instead.
            "::unlink::Picture::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Picture.messages.exists() instead.
            "::exists::Picture::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Picture.messages() instead.
            "::get::Picture::messages": {
              isArray: true,
              url: urlBase + "/pictures/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use Picture.messages.create() instead.
            "::create::Picture::messages": {
              url: urlBase + "/pictures/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use Picture.messages.createMany() instead.
            "::createMany::Picture::messages": {
              isArray: true,
              url: urlBase + "/pictures/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use Picture.messages.destroyAll() instead.
            "::delete::Picture::messages": {
              url: urlBase + "/pictures/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use Picture.messages.count() instead.
            "::count::Picture::messages": {
              url: urlBase + "/pictures/:id/messages/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Message#patchOrCreate
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Message#updateOrCreate
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Message#patchOrCreateWithWhere
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Message#destroyById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Message#removeById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Message#modelName
        * @propertyOf lbServices.Message
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Message`.
        */
        R.modelName = "Message";


            /**
             * @ngdoc method
             * @name lbServices.Message#user
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("lbUser");
          var action = TargetResource["::get::Message::user"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message#contact
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Fetches belongsTo relation contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contact = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::get::Message::contact"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Message.pictures
     * @header lbServices.Message.pictures
     * @object
     * @description
     *
     * The object `Message.pictures` groups methods
     * manipulating `Picture` instances related to `Message`.
     *
     * Call {@link lbServices.Message#pictures Message.pictures()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Message#pictures
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Queries pictures of message.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::get::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#count
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Counts pictures of message.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.pictures.count = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::count::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#create
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Creates a new instance in pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.create = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::create::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#createMany
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Creates a new instance in pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.createMany = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::createMany::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#destroyAll
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Deletes all pictures of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.pictures.destroyAll = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::delete::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#destroyById
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Delete a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.pictures.destroyById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::destroyById::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#exists
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Check the existence of pictures relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.exists = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::exists::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#findById
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Find a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.findById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::findById::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#link
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Add a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.link = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::link::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#unlink
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Remove the pictures relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.pictures.unlink = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::unlink::Message::pictures"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Message.pictures#updateById
             * @methodOf lbServices.Message.pictures
             *
             * @description
             *
             * Update a related item by id for pictures.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for pictures
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R.pictures.updateById = function() {
          var TargetResource = $injector.get("lbPicture");
          var action = TargetResource["::updateById::Message::pictures"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Picturestore
 * @header lbServices.Picturestore
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Picturestore` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbPicturestore",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/picturestores/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#replaceOrCreate
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/picturestores/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#upsertWithWhere
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/picturestores/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#replaceById
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/picturestores/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#getList
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * get all files for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{Object=}` - filter for file query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `fileList` – `{object=}` - list of all files of the user
             */
            "getList": {
              url: urlBase + "/picturestores",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#remove
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * remove file for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `file` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "remove": {
              url: urlBase + "/picturestores/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#uploadLocal
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Upload a image (jpg) and thumnails to user store from local server directory
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `file` – `{string}` - file (jpg) name without extension from local server directory
             *
             *  - `image` – `{string}` - image (jpg) name without extension for cloud
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "uploadLocal": {
              url: urlBase + "/picturestores/uploadlocal",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#uploadRemote
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Upload a image from client
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `ctx` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * file local name for upload to store
             */
            "uploadRemote": {
              url: urlBase + "/picturestores/uploadremote",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#upload
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Uploads a picture
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `options` – `{object=}` -
             *
             * @param {Object} postData Request data.
             *
             *  - `ctx` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
            "upload": {
              url: urlBase + "/picturestores/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picturestore#download
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Download a file from user container
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `ctx` – `{object=}` -
             *
             *  - `file` – `{string}` - file name
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * file object
             */
            "download": {
              url: urlBase + "/picturestores/download/:file",
              method: "GET",
            },

            // INTERNAL. Use User.picturestore.findById() instead.
            "::findById::User::picturestore": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/picturestore/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.picturestore.destroyById() instead.
            "::destroyById::User::picturestore": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/picturestore/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.picturestore.updateById() instead.
            "::updateById::User::picturestore": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/picturestore/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.picturestore() instead.
            "::get::User::picturestore": {
              isArray: true,
              url: urlBase + "/users/:id/picturestore",
              method: "GET",
            },

            // INTERNAL. Use User.picturestore.create() instead.
            "::create::User::picturestore": {
              url: urlBase + "/users/:id/picturestore",
              method: "POST",
            },

            // INTERNAL. Use User.picturestore.createMany() instead.
            "::createMany::User::picturestore": {
              isArray: true,
              url: urlBase + "/users/:id/picturestore",
              method: "POST",
            },

            // INTERNAL. Use User.picturestore.destroyAll() instead.
            "::delete::User::picturestore": {
              url: urlBase + "/users/:id/picturestore",
              method: "DELETE",
            },

            // INTERNAL. Use User.picturestore.count() instead.
            "::count::User::picturestore": {
              url: urlBase + "/users/:id/picturestore/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Picturestore#patchOrCreateWithWhere
             * @methodOf lbServices.Picturestore
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picturestore` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];


        /**
        * @ngdoc property
        * @name lbServices.Picturestore#modelName
        * @propertyOf lbServices.Picturestore
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Picturestore`.
        */
        R.modelName = "Picturestore";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Picture
 * @header lbServices.Picture
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Picture` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbPicture",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/pictures/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Picture.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/pictures/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Picture.contact() instead.
            "prototype$__get__contact": {
              url: urlBase + "/pictures/:id/contact",
              method: "GET",
            },

            // INTERNAL. Use Picture.messages.findById() instead.
            "prototype$__findById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Picture.messages.destroyById() instead.
            "prototype$__destroyById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Picture.messages.updateById() instead.
            "prototype$__updateById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Picture.messages.link() instead.
            "prototype$__link__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Picture.messages.unlink() instead.
            "prototype$__unlink__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Picture.messages.exists() instead.
            "prototype$__exists__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pictures/:id/messages/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Picture.messages() instead.
            "prototype$__get__messages": {
              isArray: true,
              url: urlBase + "/pictures/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use Picture.messages.create() instead.
            "prototype$__create__messages": {
              url: urlBase + "/pictures/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use Picture.messages.destroyAll() instead.
            "prototype$__delete__messages": {
              url: urlBase + "/pictures/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use Picture.messages.count() instead.
            "prototype$__count__messages": {
              url: urlBase + "/pictures/:id/messages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#create
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/pictures",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#createMany
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/pictures",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#upsert
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/pictures",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#replaceOrCreate
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/pictures/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#upsertWithWhere
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/pictures/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#findById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/pictures/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#replaceById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/pictures/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#deleteById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/pictures/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#getFilterList
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * get picture filter for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `filterList` – `{*=}` - filter object list
             */
            "getFilterList": {
              url: urlBase + "/pictures/filter",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#get
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * get picture for id and current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{Number=}` - picture id number
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `picture` – `{object=}` - picture object
             */
            "get": {
              url: urlBase + "/pictures/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#getList
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * get all pictures for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{Object=}` - filter for query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `pictureList` – `{object=}` - list of all pictures of the user
             */
            "getList": {
              url: urlBase + "/pictures",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#getListByMessageId
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * all pictures to message number
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `messageId` – `{number=}` - message number
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `pictureList` – `{*=}` - list of all pictures to message
             */
            "getListByMessageId": {
              url: urlBase + "/pictures/listbymessage",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#deleteList
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * delete all pictures for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `pictureList` – `{*=}` - list of all deleted picture id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "deleteList": {
              url: urlBase + "/pictures/delete",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#uploadLocal
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Upload a image file from local server directory. Default local folder is `./images/`, overwrite it with setting `picturestore.uploadLocalPath`
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `file` – `{string}` - local image file name (no path, no extension)
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "uploadLocal": {
              url: urlBase + "/pictures/uploadlocal",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#upload
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Upload a image from client
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `ctx` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "upload": {
              url: urlBase + "/pictures/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Picture#download
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Download a picture
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `ctx` – `{object=}` -
             *
             *  - `pictureId` – `{number=}` - picture id from picture database object
             *
             *  - `sizeType` – `{string=}` - picture size type for original (empty) full and thumb
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
            "download": {
              url: urlBase + "/pictures/download",
              method: "GET",
            },

            // INTERNAL. Use User.pictures.findById() instead.
            "::findById::User::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/pictures/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.pictures.destroyById() instead.
            "::destroyById::User::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/pictures/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.pictures.updateById() instead.
            "::updateById::User::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/pictures/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.pictures() instead.
            "::get::User::pictures": {
              isArray: true,
              url: urlBase + "/users/:id/pictures",
              method: "GET",
            },

            // INTERNAL. Use User.pictures.create() instead.
            "::create::User::pictures": {
              url: urlBase + "/users/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use User.pictures.createMany() instead.
            "::createMany::User::pictures": {
              isArray: true,
              url: urlBase + "/users/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use User.pictures.destroyAll() instead.
            "::delete::User::pictures": {
              url: urlBase + "/users/:id/pictures",
              method: "DELETE",
            },

            // INTERNAL. Use User.pictures.count() instead.
            "::count::User::pictures": {
              url: urlBase + "/users/:id/pictures/count",
              method: "GET",
            },

            // INTERNAL. Use Contact.pictures.findById() instead.
            "::findById::Contact::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/pictures/:fk",
              method: "GET",
            },

            // INTERNAL. Use Contact.pictures.destroyById() instead.
            "::destroyById::Contact::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/pictures/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.pictures.updateById() instead.
            "::updateById::Contact::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/pictures/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Contact.pictures() instead.
            "::get::Contact::pictures": {
              isArray: true,
              url: urlBase + "/contacts/:id/pictures",
              method: "GET",
            },

            // INTERNAL. Use Contact.pictures.create() instead.
            "::create::Contact::pictures": {
              url: urlBase + "/contacts/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use Contact.pictures.createMany() instead.
            "::createMany::Contact::pictures": {
              isArray: true,
              url: urlBase + "/contacts/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use Contact.pictures.destroyAll() instead.
            "::delete::Contact::pictures": {
              url: urlBase + "/contacts/:id/pictures",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.pictures.count() instead.
            "::count::Contact::pictures": {
              url: urlBase + "/contacts/:id/pictures/count",
              method: "GET",
            },

            // INTERNAL. Use Message.pictures.findById() instead.
            "::findById::Message::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/:fk",
              method: "GET",
            },

            // INTERNAL. Use Message.pictures.destroyById() instead.
            "::destroyById::Message::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Message.pictures.updateById() instead.
            "::updateById::Message::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Message.pictures.link() instead.
            "::link::Message::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Message.pictures.unlink() instead.
            "::unlink::Message::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Message.pictures.exists() instead.
            "::exists::Message::pictures": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/messages/:id/pictures/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Message.pictures() instead.
            "::get::Message::pictures": {
              isArray: true,
              url: urlBase + "/messages/:id/pictures",
              method: "GET",
            },

            // INTERNAL. Use Message.pictures.create() instead.
            "::create::Message::pictures": {
              url: urlBase + "/messages/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use Message.pictures.createMany() instead.
            "::createMany::Message::pictures": {
              isArray: true,
              url: urlBase + "/messages/:id/pictures",
              method: "POST",
            },

            // INTERNAL. Use Message.pictures.destroyAll() instead.
            "::delete::Message::pictures": {
              url: urlBase + "/messages/:id/pictures",
              method: "DELETE",
            },

            // INTERNAL. Use Message.pictures.count() instead.
            "::count::Message::pictures": {
              url: urlBase + "/messages/:id/pictures/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Picture#patchOrCreate
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#updateOrCreate
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#patchOrCreateWithWhere
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#destroyById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Picture#removeById
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Picture` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Picture#modelName
        * @propertyOf lbServices.Picture
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Picture`.
        */
        R.modelName = "Picture";


            /**
             * @ngdoc method
             * @name lbServices.Picture#user
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("lbUser");
          var action = TargetResource["::get::Picture::user"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture#contact
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Fetches belongsTo relation contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contact = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::get::Picture::contact"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Picture.messages
     * @header lbServices.Picture.messages
     * @object
     * @description
     *
     * The object `Picture.messages` groups methods
     * manipulating `Message` instances related to `Picture`.
     *
     * Call {@link lbServices.Picture#messages Picture.messages()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Picture#messages
             * @methodOf lbServices.Picture
             *
             * @description
             *
             * Queries messages of picture.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::get::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#count
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Counts messages of picture.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.messages.count = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::count::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#create
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.create = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::create::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#createMany
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::createMany::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#destroyAll
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Deletes all messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::delete::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#destroyById
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Delete a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::destroyById::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#exists
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Check the existence of messages relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.exists = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::exists::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#findById
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Find a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.findById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::findById::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#link
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Add a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.link = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::link::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#unlink
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Remove the messages relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.unlink = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::unlink::Picture::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Picture.messages#updateById
             * @methodOf lbServices.Picture.messages
             *
             * @description
             *
             * Update a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("lbMessage");
          var action = TargetResource["::updateById::Picture::messages"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Videocall
 * @header lbServices.Videocall
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Videocall` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbVideocall",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/videocalls/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Videocall.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/videocalls/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Videocall.contact() instead.
            "prototype$__get__contact": {
              url: urlBase + "/videocalls/:id/contact",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#upsert
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/videocalls",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#replaceOrCreate
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/videocalls/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#upsertWithWhere
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/videocalls/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#findById
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/videocalls/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#replaceById
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/videocalls/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#deleteById
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/videocalls/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#createCall
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * create video call appointment for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `email` – `{String=}` - email address for video call appointment
             *
             *  - `date` – `{Date=}` - date/time for video cal appointment
             *
             *  - `message` – `{String=}` - message to send to contact
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `appointmentToken` – `{String=}` - appointment token for video call
             */
            "createCall": {
              url: urlBase + "/videocalls",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#setInviteState
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * callback for contact response of invite video call mail
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `appointmentToken` – `{String=}` - hash code for identify video call appointment
             *
             *  - `acceptFlag` – `{String=}` - true/false for accept video call appointment
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setInviteState": {
              url: urlBase + "/videocalls/inviteState",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#getList
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * get all video call appointments for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{Object=}` - filter for appointment query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `appointmentList` – `{Array=}` - list of all video call appointments of the user
             */
            "getList": {
              url: urlBase + "/videocalls",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#getUpcomingList
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * get all upcoming video call appointments for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `appointmentList` – `{Array=}` - list of all video call appointments of the user
             */
            "getUpcomingList": {
              url: urlBase + "/videocalls/upcomingList",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#getFilters
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * get filters for upcoming video calls
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `filters` – `{Array=}` - list of all video call types
             */
            "getFilters": {
              url: urlBase + "/videocalls/filters",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#getByToken
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * get appointments for appointment token
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `appointmentToken` – `{String=}` - video call appointment token
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `appointmentObject` – `{Object=}` - video call appointment object
             */
            "getByToken": {
              url: urlBase + "/videocalls/byToken",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#getAccessToken
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * give access token for twillo REST-API
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `userName` – `{String=}` - unique user name for video call
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `accessToken` – `{String=}` - access token for twillo REST-API
             */
            "getAccessToken": {
              url: urlBase + "/videocalls/accessToken",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#postCallState
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * set a user or contact online
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `aAppointmentToken` – `{String=}` - videocall token for identification
             *
             *  - `aUserType` – `{String=}` - who is setting the state? user or contact
             *
             *  - `aState` – `{String=}` - whats the state? preferred value is "online"
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "postCallState": {
              url: urlBase + "/videocalls/callState",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Videocall#getCallState
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * get state of the other one you want to reach
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `aAppointmentToken` – `{String=}` - videocall token for identification
             *
             *  - `aUserType` – `{String=}` - who is setting the state? user or contact
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `aState` – `{String=}` - status of the other one
             */
            "getCallState": {
              url: urlBase + "/videocalls/callState",
              method: "GET",
            },

            // INTERNAL. Use User.videocalls.findById() instead.
            "::findById::User::videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/videocalls/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.videocalls.destroyById() instead.
            "::destroyById::User::videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/videocalls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.videocalls.updateById() instead.
            "::updateById::User::videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/videocalls/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.videocalls() instead.
            "::get::User::videocalls": {
              isArray: true,
              url: urlBase + "/users/:id/videocalls",
              method: "GET",
            },

            // INTERNAL. Use User.videocalls.create() instead.
            "::create::User::videocalls": {
              url: urlBase + "/users/:id/videocalls",
              method: "POST",
            },

            // INTERNAL. Use User.videocalls.createMany() instead.
            "::createMany::User::videocalls": {
              isArray: true,
              url: urlBase + "/users/:id/videocalls",
              method: "POST",
            },

            // INTERNAL. Use User.videocalls.destroyAll() instead.
            "::delete::User::videocalls": {
              url: urlBase + "/users/:id/videocalls",
              method: "DELETE",
            },

            // INTERNAL. Use User.videocalls.count() instead.
            "::count::User::videocalls": {
              url: urlBase + "/users/:id/videocalls/count",
              method: "GET",
            },

            // INTERNAL. Use Contact.videocalls.findById() instead.
            "::findById::Contact::videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/videocalls/:fk",
              method: "GET",
            },

            // INTERNAL. Use Contact.videocalls.destroyById() instead.
            "::destroyById::Contact::videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/videocalls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.videocalls.updateById() instead.
            "::updateById::Contact::videocalls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/contacts/:id/videocalls/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Contact.videocalls() instead.
            "::get::Contact::videocalls": {
              isArray: true,
              url: urlBase + "/contacts/:id/videocalls",
              method: "GET",
            },

            // INTERNAL. Use Contact.videocalls.create() instead.
            "::create::Contact::videocalls": {
              url: urlBase + "/contacts/:id/videocalls",
              method: "POST",
            },

            // INTERNAL. Use Contact.videocalls.createMany() instead.
            "::createMany::Contact::videocalls": {
              isArray: true,
              url: urlBase + "/contacts/:id/videocalls",
              method: "POST",
            },

            // INTERNAL. Use Contact.videocalls.destroyAll() instead.
            "::delete::Contact::videocalls": {
              url: urlBase + "/contacts/:id/videocalls",
              method: "DELETE",
            },

            // INTERNAL. Use Contact.videocalls.count() instead.
            "::count::Contact::videocalls": {
              url: urlBase + "/contacts/:id/videocalls/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Videocall#patchOrCreate
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Videocall#updateOrCreate
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Videocall#patchOrCreateWithWhere
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Videocall#destroyById
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Videocall#removeById
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Videocall` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Videocall#modelName
        * @propertyOf lbServices.Videocall
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Videocall`.
        */
        R.modelName = "Videocall";


            /**
             * @ngdoc method
             * @name lbServices.Videocall#user
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("lbUser");
          var action = TargetResource["::get::Videocall::user"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Videocall#contact
             * @methodOf lbServices.Videocall
             *
             * @description
             *
             * Fetches belongsTo relation contact.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R.contact = function() {
          var TargetResource = $injector.get("lbContact");
          var action = TargetResource["::get::Videocall::contact"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Bookmark
 * @header lbServices.Bookmark
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Bookmark` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbBookmark",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/bookmarks/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Bookmark#create
             * @methodOf lbServices.Bookmark
             *
             * @description
             *
             * create bookmark for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `bookmarkData` – `{Object=}` - bookmark data object {[contactId], [categoryId], [title], url, [image]}
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookmark` – `{Object=}` - return created bookmark
             */
            "create": {
              url: urlBase + "/bookmarks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bookmark#createMany
             * @methodOf lbServices.Bookmark
             *
             * @description
             *
             * create bookmark for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `bookmarkData` – `{Object=}` - bookmark data object {[contactId], [categoryId], [title], url, [image]}
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookmark` – `{Object=}` - return created bookmark
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/bookmarks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bookmark#postInitUser
             * @methodOf lbServices.Bookmark
             *
             * @description
             *
             * create bookmark for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `aUserId` – `{Integer=}` - user Id that should be initialized
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookmark` – `{Object=}` - return created bookmark
             */
            "postInitUser": {
              url: urlBase + "/bookmarks/initUser",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bookmark#postHistory
             * @methodOf lbServices.Bookmark
             *
             * @description
             *
             * create bookmark for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `historyData` – `{Object=}` - bookmark data object {[title], url}
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookmark` – `{Object=}` - returns created history entry
             */
            "postHistory": {
              url: urlBase + "/bookmarks/history",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bookmark#getByUrl
             * @methodOf lbServices.Bookmark
             *
             * @description
             *
             * get bookmark for url
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `url` – `{String=}` - url for query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookmark` – `{Object=}` - bookmark for url or empty
             */
            "getByUrl": {
              url: urlBase + "/bookmarks/url",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bookmark#getList
             * @methodOf lbServices.Bookmark
             *
             * @description
             *
             * get all bookmarks for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{Object=}` - filter for query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookmarkList` – `{object=}` - list of all bookmarks of the user
             */
            "getList": {
              url: urlBase + "/bookmarks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Bookmark#getCategoryList
             * @methodOf lbServices.Bookmark
             *
             * @description
             *
             * get all bookmark categories for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `categoryList` – `{object=}` - list of all bookmark categories of the user
             */
            "getCategoryList": {
              url: urlBase + "/bookmarks/categories",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Bookmark#modelName
        * @propertyOf lbServices.Bookmark
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Bookmark`.
        */
        R.modelName = "Bookmark";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Notification
 * @header lbServices.Notification
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Notification` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbNotification",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/notifications/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Notification#test
             * @methodOf lbServices.Notification
             *
             * @description
             *
             * send notification
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "test": {
              url: urlBase + "/notifications/test",
              method: "POST",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Notification#modelName
        * @propertyOf lbServices.Notification
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Notification`.
        */
        R.modelName = "Notification";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Context
 * @header lbServices.Context
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Context` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbContext",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/contexts/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Context#get
             * @methodOf lbServices.Context
             *
             * @description
             *
             * get items for a context. pass the position. value is optional
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `position` – `{String=}` - Position where the items belongs to
             *
             *  - `value` – `{String=}` - If a previous context is set, pass the value here
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `content` – `{String=}` - A content to display
             */
            "get": {
              url: urlBase + "/contexts",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Context#modelName
        * @propertyOf lbServices.Context
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Context`.
        */
        R.modelName = "Context";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Video
 * @header lbServices.Video
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Video` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbVideo",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/videos/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Video#getCategories
             * @methodOf lbServices.Video
             *
             * @description
             *
             * get all video categories for the current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `videoCategories` – `{object=}` - list of all video categories of the user
             */
            "getCategories": {
              url: urlBase + "/videos/getCategories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#getPlaylists
             * @methodOf lbServices.Video
             *
             * @description
             *
             * get all available playlists according a channel id
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `categoryName` – `{string}` - category name
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `videoPlaylists` – `{object=}` - list all playlists for one channel
             */
            "getPlaylists": {
              url: urlBase + "/videos/getPlaylists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#isFavourite
             * @methodOf lbServices.Video
             *
             * @description
             *
             * check favourite video for the current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `videoId` – `{string}` - video string id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `isFavourite` – `{boolean=}` - check favourite videos
             */
            "isFavourite": {
              url: urlBase + "/videos/isFavourite",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#addFavourite
             * @methodOf lbServices.Video
             *
             * @description
             *
             * add favourite video for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `videoId` – `{string}` - video string id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `favouriteVideo` – `{Object=}` - return created favouriteVideo
             */
            "addFavourite": {
              url: urlBase + "/videos/addFavourite",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#removeFavourite
             * @methodOf lbServices.Video
             *
             * @description
             *
             * remove favorite video list for current user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `videoIdList` – `{*=}` - array of video id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "removeFavourite": {
              url: urlBase + "/videos/removeFavourite",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#getItem
             * @methodOf lbServices.Video
             *
             * @description
             *
             * get video item Object
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `videoId` – `{string}` - video string id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `videoItem` – `{object=}` - get video item Object
             */
            "getItem": {
              url: urlBase + "/videos/getItem",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#getList
             * @methodOf lbServices.Video
             *
             * @description
             *
             * get video List
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `categoryName` – `{string=}` - category name
             *
             *  - `playlistId` – `{string=}` - eventually playlist string id
             *
             *  - `filter` – `{Object=}` - filter for query
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `videoList` – `{object=}` - get video List
             */
            "getList": {
              url: urlBase + "/videos/getList",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#updateYtAll
             * @methodOf lbServices.Video
             *
             * @description
             *
             * fresh our database with video from API
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `updateWithSuccess` – `{Boolean=}` -
             */
            "updateYtAll": {
              url: urlBase + "/videos/updateAll",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Video#getSuggestions
             * @methodOf lbServices.Video
             *
             * @description
             *
             * get related video List
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `videoId` – `{string=}` - video identifier
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `videoList` – `{object=}` - get related video List
             */
            "getSuggestions": {
              url: urlBase + "/videos/getSuggestions",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Video#modelName
        * @propertyOf lbServices.Video
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Video`.
        */
        R.modelName = "Video";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Audiobook
 * @header lbServices.Audiobook
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Audiobook` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory("lbAudiobook",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/audiobooks/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#syncAudioBooks
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `sync` – `{String=}` - album from google play
             */
            "syncAudioBooks": {
              url: urlBase + "/audiobooks/syncAlbums",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#getCategories
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `categories` – `{Array=}` - The array of audiobook data objects
             */
            "getCategories": {
              url: urlBase + "/audiobooks/getCategories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#getSubcategories
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `categoryName` – `{String=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `subcategories` – `{Array=}` - The array of audiobook data objects
             */
            "getSubcategories": {
              url: urlBase + "/audiobooks/getSubcategories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#getList
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `category` – `{String=}` - one of: new, favourite, lastHeard, author, title
             *
             *  - `subcategory` – `{String=}` - subcategory according to one category
             *
             *  - `filter` – `{Object=}` - query filter object
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookDetails` – `{Array=}` - The array of audiobook data objects
             */
            "getList": {
              url: urlBase + "/audiobooks/getList",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#getContent
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `bookId` – `{Number=}` - id
             *
             *  - `filter` – `{Object=}` - query filter object
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookContent` – `{Object=}` - The array of audiobook data objects
             */
            "getContent": {
              url: urlBase + "/audiobooks/getContent",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#isFavourite
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `audiobookId` – `{Number=}` - the id of audiobook (0 < id < 31)
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `isFavourite` – `{Boolean=}` - self explainatory
             */
            "isFavourite": {
              url: urlBase + "/audiobooks/isFavourite",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#addFavourite
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `audiobookId` – `{Number=}` - The id of audiobook (0 < id < 31)
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `audiobookDetail` – `{Object=}` - The audiobookDetail object
             */
            "addFavourite": {
              url: urlBase + "/audiobooks/addFavourite",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Audiobook#setProgress
             * @methodOf lbServices.Audiobook
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `bookId` – `{Number=}` - id
             *
             *  - `chapter` – `{Number=}` - cahpter
             *
             *  - `time` – `{Number=}` - time in seconds
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `bookContent` – `{Object=}` - The array of audiobook data objects
             */
            "setProgress": {
              url: urlBase + "/audiobooks/setProgress",
              method: "PUT",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Audiobook#modelName
        * @propertyOf lbServices.Audiobook
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Audiobook`.
        */
        R.modelName = "Audiobook";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
