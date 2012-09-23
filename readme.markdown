Small screens don't need iframe Google Maps, so they get a static image and link. Large screens get the fully interactive iframe.

This uses [Enquire.js](http://wickynilliams.github.com/enquire.js/) to do the media query testing and jQuery to make an Ajax call for the correct content.