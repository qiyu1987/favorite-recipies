# FUDI LANDING PAGE

This is a responsize landing page build with HTML CSS Javascript. The library used includes BootStrap v4.4.1,
Waypoints v4.0.1 and CountUp v2.0.4.

## Tools Used:

**[BootStrap](https://getbootstrap.com/)**
**[Waypoints](http://imakewebthings.com/waypoints/)**
**[CountUp](https://inorganik.github.io/countUp.js/)**

## Responsive

This page is tested on all screen sizes. It is achived through BootStrap breakpoints and media query.

## Browser Support:

This project is developed with Chrome 79, also tested on Safari 13, Firefox 70.

## Functionalities

- **Burger Menu opens up dropdown menu**
- **On button click Get started scroll to view element Browse by Cuisines**
- **Slider functionality on Review Section**
- **When element numbers are visible implement a counting functionality from 0 till different amounts for each category (animation).**

## File Structure

```
-root
 -bs4
 -css
    -styles.css
 -images
    -*.png/jpg
 -js
    -countUp.js
    -jquery.waypoints.min.js
    -script.js
 -index.html
 -readme.md
 -.gitignore
```

## Points for improvements and thoughts

**White strip on the right**
There is a white strip on the right only visible when trying to scroll to the right most. It can be fixed by adding

```
html,body
{
    ...
    overflow-x: hidden;
}
```

However this line of code conflicts with waypoint library
[See the Issue of WayPoint](https://github.com/civiccc/react-waypoint/issues/251)

Given more time I could find a way to work around it.

- React library could be used to make component reusable, especially for repeating part such as cuisine image category section. Or when the project scale up to use API calls to get danamic data from the backend.
- I decided not to use React because the majority of the HTML content is static, and functionalities could be easily achieved by BootStrap and extreme light weight JS library such as waypoints and countUp.
