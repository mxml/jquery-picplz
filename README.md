# Picplz jQuery Plugin

picplz offers a simple way to take photos and upload them in just a few clicks. It's easy to add a caption, tag your location and check in. Connect and share with your Twitter, Facebook and more. Our apps let you add great looking photo effects for free. Current effects include "Instant Film", "Russian Toy Camera", "the 70s" and "High Contrast Monochrome".

## Picplz API

We are now offering an API. If you want to know more about the API you can check out the [API site](https://sites.google.com/site/picplzapi/). This is a plugin for jQuery. 

## Quickstart

1. Download the plugin, and move jquery.picplz.js to your static asset folder
1. include the jQuery on the page. 
1. include jquery.picplz.js, after you have included jQuery.
1. Write some code that uses the $.picplz

    <script type="text/javascript" charset="utf-8">
        $.picplz.interesting(function(data){
            console.log(data);
        });
    </script>


Pagination 
----------

Any function that returns a list of pics can be paginated. The object that is retuned to you will have two propertys. more_pics, and last_pic_id. 

If more_pics is true, there are more pics. If you pass the last_pic_id as the last argument to the same function, it will return the next set of pics. 

API Reference
-------------

All methods are accessed of $.picplz, so the interesting feed is at $.picplz.interesting 

### interesting(callback [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about the interesting feed.
* **last\_pic_\id** is optional, it's used for pagination.
  
### userById(callback, id, include_detail, include_pics,  [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about the user.
* **id** is a user id.
* **include_detail** (boolean) should the returned data include extra detail.
* **include_pics** (boolean) should the returned data include a list of pics.
* **id** is a user id.
* **last\_pic\_id** is optional, it's used for pagination.
    
### userByUsername(callback, username, include_detail, include_pics, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about the user.
* **username** is a user's username.
* **include_detail** (boolean) should the returned data include extra detail.
* **include_pics** (boolean) should the returned data include a list of pics.
* **last\_pic\_id** is optional, it's used for pagination.
    
### usersByIds(callback, ids, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about the user.
* **ids** ids is either an array of ids, [1,2], or a string with a comma separated list of ids, "1,2".
* **last\_pic\_id** is optional, it's used for pagination.

### usersByUsernames(callback, usernames, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about the user.
* **usernames** usernames is either an array of usernames, ['dalton','bryan'], or a string with a comma separated list of usernames, "dalton,bryan".
* **last\_pic\_id** is optional, it's used for pagination.

### placeById(callback, id, include_detail, include_pics, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a place.
* **id** is a place id.
* **include_detail** (boolean) should the returned data include extra detail.
* **include_pics** (boolean) should the returned data include a list of pics.
* **last\_pic\_id** is optional, it's used for pagination.
    
### placeBySlug(callback, slug, include_detail, include_pics, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a place.
* **slug** is a place's slug.
* **include_detail** (boolean) should the returned data include extra detail.
* **include_pics** (boolean) should the returned data include a list of pics.
* **last\_pic\_id** is optional, it's used for pagination.
    
### placeByIds(callback, ids, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a group of places.
* **ids** ids is either an array of ids, [1,2], or a string with a comma separated list of ids, "1,2".
* **last\_pic\_id** is optional, it's used for pagination

### placeByUsernames(callback, slugs, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a group of places.
* **slugs** is either an array of slugs, or a string with a comma separated list of slugs.
* **last\_pic\_id** is optional, it's used for pagination
  
  
### cityById(callback, id, include_detail, include_pics, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a city.
* **id** is a place id.
* **include_detail** (boolean) should the returned data include extra detail.
* **include_pics** (boolean) should the returned data include a list of pics.
* **last\_pic\_id** is optional, it's used for pagination.

### cityBySlug(callback, slug, include_detail, include_pics, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a city.
* **slug** is a cities slug.
* **include_detail** (boolean) should the returned data include extra detail.
* **include_pics** (boolean) should the returned data include a list of pics.
* **last\_pic\_id** is optional, it's used for pagination.

### citiesByIds(callback, ids, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a group of cities.
* **ids** ids is either an array of ids, [1,2], or a string with a comma separated list of ids, "1,2".
* **last\_pic\_id** is optional, it's used for pagination

### citiesByUsernames(callback, slugs, [, last\_pic\_id])
* **callback** is a function that is passed a data objects with information about a group of cities.
* **slugs** is either an array of slugs, or a string with a comma separated list of slugs.
* **last\_pic\_id** is optional, it's used for pagination
  
  

    
    
    
