FOR DEVELOPMENT:
- To run "live-server" package, cd into the proj root-dir and run "live-server" in the command line

- SASS: run "npm run compile:sass" in command line to run library to monitor real-time changes made in SASS



GENERAL:

- Since most browsersd come with default element CSS settings, I can use an element reset to make sure the browser's settings are overwritten with my query element reset. 
        - The "*" selector will select every element on the page.

- FONT: When setting a font-family for you elements, it is a best practice to put all font realted stylings into the "body" selector.  THIS IS BECAUSE MOST FONTS STYLES ARE INHERITED

* When search engines are scrapping results, the "h1" element is the primary search parameter.

- POSITIONING: When using absolute postioning on a child element, its postions will be relative to the FIRST element that has a position value of relative.(VERIFY?)

- CHILD ELEMENTS: When child elements are given 'percentage' base dimensions, they are pecentages based on the PARENT element they are ineheriting from.
        * When the "transform" propery is called, it's output dimensions are based on the element itself, NOT the parent element.





********************************************************************************************************************************************************************************

CSS ANIMATIONS:

* In CSS, the Y-axis begins at the top and moves downward; therefore when passing intergers, if they are positive ---> moves element downward; if they are 
negative ---> moves the element upward.

* There are primarily 2 types of animations: (1) transition property, (2) custom keyframe functions.

* TRANSFORM PROPERTY
    (3 most common)
    - The transfrom property lets you move, warp, rotate, and scale HTML elements.

    - transform: "translate(X,Y)" ---> allow us to do is essentially shift something across the screen up or down left or right or any combination of those using x and y coordinates.

    - transform: "scale(X, Y)" ---> will increase the size of the element based on the argument is passed. If single interger is passes as argument, it applies to both axes.

    - transfrom:  "rotate()" ---> rotate takes 1 parameter, which is a specified unit quanity w/unit declaration ---> transform: rotate(45deg);

* Use tansform-origin: to change the default base point in reference to the property that has been called.  


* TRANSITIONS BASICS
    - There are 4 transition properties:
        1. transition-property
            - allows us to specify which of the properties that are being changed, do we actually want to transition.
        2. transition-duration
            - the length of time of the duration. Can accept multiple arguments, which scale from first(arg) --> last(arg)  
        3. transition-timing-function
            -  controls the acceleration of the animation. 
        4. transition-delay
            - allows us to specify how long of pause to take before the transition actually begins. 

        * The transition property can accept up to 4 values, when written on 1-line and seperate by a comma:
            Ex:
                transition: <property><duration><timing-fx><delay>;
                                * <multiple transitions can be added with comma(s)>
                    

* KEYFRAMES

- Keyframes allow for much more complex multi state animations so that we don't just have a beginning and end point but we can define as many in-between points as we want.

- 

-  When creating the "@keyframe" property, we set 2 base-line cases:
        - (1) first case of 0%
            * further animations can be assigned between 0(start) and 100(finish)
        - (2) last case of 100%

- Browsers are inherently programmed to accomodate 2 CSS props; (1) opacity, (2) tansform.

- Custom animation functions allow us to manipulate elements on the "X" and "Y" axis, along with timing cues, or based on events.  These animation function can be used multiple time for any other properties that accept them.

* MORE ANIMATION PROPERTIES 

********************************************************************************************************************************************************************************

Conceptuals of CSS:

- There are 3 pillars to help guide us to better CSS code:
    1. Responsive Design
        - Ideally we want one website that works well across all types of screen sizes on all devices. 

    2. Maintainable & Scalable Code
        - The concept of writting simple, clean, easy to understand, supports future growth, and ABOVE ALL is REUSEABLE.

    3. Web Performace
        - We always want to seek ways to make our website/app faster & to make it lighter in data-weight.
        - Generally, we want to find way to replace the taxing use of images on websites. Images are usually what makes up the biggest data percentage of the website. We want to both continously reduce the amount of images on the site, and comporess as much as we can to reduce the user's bandwidth usage.

********************************************************************************************************************************************************************************


CSSOM (CSS Object Model)

- After the responce has arrived from the server we made the request too, both the HTML and CSS are parsed, and mapped out in their respective Object Models

- After the CSS and HTML are parsed, they are stored together in the "Render Tree". In order to actually render the page, the browser uses something called the "Visual Formatting Model".

* THE CASCADE & SPECIFICITY
    - The process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element. 

    - The cascade starts by giving the conflict declarations individual levels of PRIORITY BASED ON WHERE THE ARE DECLARED.

    - The most important declarations are made using the "!important" keyword. This gives the declaration precendece over other declarations. 

    - Most commonly we find in our stylesheets that all declarations have the same level of priority. ---> In this case, the cascade calculates and compares the specificities of the declaration selectors.  

    - The specifity of a selector is pre-set by CSS as is as follows:
        1. Inline Styles
        2. IDs
        3. Classes, pseudo-classes, attributes
        4. Elements, psuedo-elements
    
        * Each declration has a 4-digit specificty score (0, 0, 0, 0), where each of the above categories is counted in terms of occurences within the declaration. CSS uses the scores to prioiritze the declaration blocks. 

        * It;s mor important to rely on specificty than order of the selectors.  That way is the code is ever re-arranged, it won't affect the expected output of the CSS code. 

* My stylesheets should be the last import into the HTML.  This will ensure my stylesheets are prioiritized over 3rd-party stylesheets.


FOR CSS DEBUGGING:

* Specificity is the primary reason behind CSS bugs!  It an CSS declaration block is not producing the expected/desired output, it is very likely that the blocks specificity score is being outranked by another declaration block.  


PARSING: VALUE PROCESSING

- How CSS values are parsed:
    1. Declared value: author declarations
    2. Cascaded value: value after the cascade
    3. Specified value: Defaulting, if there is no cascaded value
    4. Computed value: converting relative values to absolute
    5. final calculations, based on layout
    6. Actual value: browser and device restrictions applied (rounding up or down of decimal valued pixels, etc..)

- Each CSS property has something called an initial value, which is simply the value used if there is NO cascaded value.

- Some CSS properties, like font related props, inherit their computed value from their parent elements.


********************************************************************************************************************************************************************************

CSS Rendering of Website & The Visual Formatting Model

- The CSS "visual formatting model" is an algorithm that calculates boxes and determines the layout of these boxes for each element in the "render tree", in order to determine the final layout of the page.

The Box Model:
    - The box model is one of the factors that defines how elements are displayed on a webpage and how they are sized.
    - Each box can have width, height, padding, margin, and a border
    - See Diagram

* KEY TECHNIQUE: 
    If we set "box-sizing: border-box" --> this will allow the set width and height to account for the ENTIRE BOX, not just the content-area



ARCHITECTURE MINDSET

Think --> Build --> File Architecture

- Component driven design ideal for CSS
- Building a personal librabry of component should be reusable in other projects!


********************************************************************************************************************************************************************************























