(function($, W) {
    var TRUE = true,
    FALSE = false,
    NULL = null,
    BASE_API_URL = "http://picplz.com/api/v2/",
    SECURE_BASE_API_URL = "https://picplz.com/api/v2/",
    BASE_AJAX = {
        dataType: "jsonp",
        url: BASE_API_URL,
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            if (console && console.log) {
                console.log(errorThrown, textStatus, XMLHttpRequest);
            }
        }
    },
    BASE_DATA = {
        pic_page_size: 24
    },
    _getData = function(data, callback) {
        if (data["result"] == "ok") {
            callback(data["value"]);
            return TRUE;
        }

        BASE_AJAX.error({},
        "The ajax failed", data["text"]);
        return false;
    },
    _genericSuccess = function(callback) {
        return function(data) {
            _getData(data, callback);
        };
    },

    Picplz = {

        init: function(oauth_token, global_error) {

            this.oauth_token = (oauth_token) ? oauth_token: NULL;
            if (typeof(global_error) !== "undefined") {
                BASE_AJAX.error = global_error;
            }




        },

        setPicFormats: function(pic_format_list){
            
            pic_format_list = ($.isArray(pic_format_list)) ? pic_format_list.join(",") : pic_format_list;
             
            BASE_DATA = $.extend({}, BASE_DATA, {
                'pic_formats': pic_format_list
            });
        },
        


        _preFetch: function(callback, many, object_type, type, value, include_detail, include_pics, last_pic_id) {
            var data = {};
            if (many) {
                data[type] = ($.isArray(value)) ? value.join(",") : value;
            } else {
                data[type] = value;
            }

            if (include_detail) {
                data.include_detail = 1;
            }

            if (include_pics) {
                data.include_pics = 1;
            }

            if (last_pic_id) {
                data.last_pic_id = last_pic_id;
            }


            this._fetch(callback, object_type, data);
            return TRUE;
        },
        
        
        interesting: function(callback, last_pic_id) {
            var local_ajax = {
                url: BASE_API_URL + "feed.json",
                data: $.extend({},
                BASE_DATA, {
                    type: "interesting",
                    include_geo: 1
                }),
                success: _genericSuccess(callback)
            },
            ajax = $.extend({},
            BASE_AJAX, local_ajax);
            if (last_pic_id) {
                ajax.data.last_pic_id = last_pic_id;
            }
            $.ajax(ajax);
        },
        
        network: function(callback, last_pic_id) {
            var local_ajax = {
                url: SECURE_BASE_API_URL + "feed.json",
                data: $.extend({},
                BASE_DATA, {
                    type: "network",
                    include_geo: 1,
                    oauth_token: this.oauth_token
                }),
                success: _genericSuccess(callback)
            },
            ajax = $.extend({},
            BASE_AJAX, local_ajax);
            if (last_pic_id) {
                ajax.data.last_pic_id = last_pic_id;
            }
            $.ajax(ajax);
        },

        _fetch: function(callback, object_type, data) {
            var local_ajax = {
                url: BASE_API_URL + object_type + ".json",
                data: $.extend({},
                BASE_DATA, data),
                success: _genericSuccess(callback)
            },
            ajax = $.extend({},
            BASE_AJAX, local_ajax);

            $.ajax(ajax);
        },

        userById: function(callback, id, include_detail, include_pics, last_pic_id) {
            this._preFetch(callback, false, "user", "id", id, include_detail, include_pics, last_pic_id);
            return TRUE;
        },

        userByUsername: function(callback, username, include_detail, include_pics, last_pic_id) {
            this._preFetch(callback, false, "user", "username", username, include_detail, include_pics, last_pic_id);
            return TRUE;
        },

        usersByIds: function(callback, ids, last_pic_id) {
            this._preFetch(callback, true, 'user', 'ids', ids, false, false, last_pic_id);
            return TRUE;
        },

        usersByUsernames: function(callback, usernames, last_pic_id) {
            this._preFetch(callback, true, 'user', 'usernames', usernames, false, false, last_pic_id);
            return TRUE;
        },


        placeById: function(callback, place_id, include_detail, include_pics, last_pic_id) {
            this._preFetch(callback, false, 'place', 'id', place_id, include_detail, include_pics, last_pic_id);
            return TRUE;
        },
        placeBySlug: function(callback, slug, include_detail, include_pics, last_pic_id) {
            this._preFetch(callback, false, 'place', 'slug', slug, include_detail, include_pics, last_pic_id);
            return TRUE;
        },
        placesByIds: function(callback, place_ids, last_pic_id) {
            this._preFetch(callback, false, 'place', 'ids', place_ids, false, false, last_pic_id);
            return TRUE;
        },
        placesBySlugs: function(callback, slugs, last_pic_id) {
            this._preFetch(callback, false, 'place', 'slugs', slugs, false, false, last_pic_id);
            return TRUE;
        },


        cityById: function(callback, city_id, include_detail, include_pics, last_pic_id) {
            this._preFetch(callback, false, 'city', 'id', city_id, include_detail, include_pics, last_pic_id);
            return TRUE;
        },
        cityBySlug: function(callback, slug, include_detail, include_pics, last_pic_id) {
            this._preFetch(callback, false, 'city', 'slug', slug, include_detail, include_pics, last_pic_id);
            return TRUE;
        },
        citiesByIds: function(callback, city_ids, last_pic_id) {
            this._preFetch(callback, false, 'city', 'ids', city_ids, false, false, last_pic_id);
            return TRUE;
        },
        citiesBySlugs: function(callback, slugs, last_pic_id) {
            this._preFetch(callback, false, 'city', 'slugs', slugs, false, false, last_pic_id);
            return TRUE;
        }
    };

    jQuery.picplz = Picplz;
    return TRUE;
})(jQuery, window);