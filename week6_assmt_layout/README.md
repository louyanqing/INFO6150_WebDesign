
#### This assignment aims to learn about CSS Grid layout, Flexbox, and SASS/SCSS Features.

##### Summary:
- Layout: 
    a. Two CSS Grid: MyLikePage: PhotoWall/Footer
    b. Three Flexbox: HomePage: Navbar/Category Nav/Display All Books
    
- All Used SASS Features:
Variables, Custom Properties, Nesting, Interpolation, Placeholder Selectors, Mixins,
Functions, Conditional Directive, Loop, Media Query etc;

##### SASS/SCSS Folder Structure: 
- style.css: Main file; All SCSS files starting with an underscore have been imported;
- _base.scss: Defines common variables;
- _config.scss:  defines mixin and function; 
- _default.scss: Defines default styles; 
- _mobile.scss: Responsive changes to page styles;
- _photowall.scss: Displays images like a photo wall; 

##### Used SASS/SCSS Features:
1. Variables `$`: as common variables that defined in _base.scss file, e.g.,
    ```scss
    $primary-color: #0e3b5e;
    $font-stack: Arial, Helvetica, sans-serif;
    $font-default: 16px;
    ```

2. Custom Properties: 
    - defined in _base.scss, used throughout the project using the var() function in files like _default.scss,  and for layout in navbar etc;
    ```scss
    :root{
        --light-color: orange;
        --radius-rem-navbar:5rem;
    }
    ```

3. Nesting:  used throughout the project, e.g.,
    ```scss
    .book-card{
        @extend %card-style;
        img{
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin-bottom:8px;
            transition: transform 0.3s ease-in-out;
        }
        h3,p{
            color:$font-holder-color;
        }
    }
    ```
4. Interpolation `#{$i}`: This project mainly uses it in conjunction with @for

5. Loop`@for`: 
    - used in all books display section : to set each item margin-bottom;
    - used in category navigation section : dynamically generated classes and set each item's background-size property;
    - used in photo wall section : to set grid-area
    e.g.,
        ```scss
        @for $i from 1 through 6 {
                .book-row-#{$i} {
                margin-bottom: 13px; 
                }
            }
        ```


6. Placeholder Selectors `%`  and  `@extend`: used in _default.scss file, e.g.,
    ```scss
    %a{
        display:inline-block;
        height:35px;
        color:$font-dark-color;
        &:hover{
            @extend .link-active;
        }
    }
    .link-primary{
        @extend %a;  
    }
    ```
7. Mixins `@mixin`: used in _config.scss, e.g.,
    ```scss
    @mixin set-background($color1,$color2) {
        background:linear-gradient(to bottom,$color1,$color2); 
    }
    ```
8. Function `@function` and `@return`: used in _config.scss, e.g.,
    ```scss
    @function set-background-right($color1, $color2) {
        @return linear-gradient(to right, $color1, $color2);
    }
    ```
9. `@include`: used in _mobile.scss,  e.g,
`@include respond-to('mobile');`

10. `Media Query` and `@if`: used in _mobile.scss,  e.g,
    ```scss
    @mixin respond-to($breakpoint) {
        @if $breakpoint == mobile { 
            @media (max-width: 780px) {
                @content;
            }
        }
    }
    ```

##### Home page: 
- ##### section navbar: `Flex` 
    a. use `display: flex;` to design the main navbar in a row;
    b. use `flex: 1;` to to allocate the remaining space in the middle and align both ends;

- ##### section category nav: `Flex`
    a. use `display: flex;` and `flex: 1;` to design the category navbar in a row and ensure that the items within the navbar are evenly distributing space among them;
    b. use `gap: 10px;` to create spacing between the items;
    d. use `flex-direction: column;` to arrange the icon and text vertically

- ##### section display all books: `Flex`
    a. use
    ```css
    [class^="book-row"] {
        display: flex;
    }
    ```
    selects all rows whose class names start with 'book-row' (e.g., book-row-1, book-row-2) and applies a flexbox layout to them;
    b. 
    ```css
    @for $i from 1 through 6 {
        .book-row-#{$i} {
          margin-bottom: 13px; 
        }
    }
    ```
    use SCSS loop @for to dynamically generates classes: .book-row-1, .book-row-2, up to .book-row-6;
    c. use `flex: 1;` and `flex-direction: column;` to arrange the child elements within each item vertically;

- ##### section footer: `Grid`
    a. use `display: grid;` to layout;
    b. use `grid-template-columns: repeat(3, 80px);` to set three columns, each 80 pixels wide;
    c. use `justify-content: center;` and `align-items: center;` to center the content both horizontally and vertically;

#### My like page:
- ##### section photo wall: `Grid`
    a. use `display: grid;` to layout;
    b. use `grid-template-columns: repeat(3, 1fr);` define three equal-width columns (1 fraction each);
    c. use `gap: 10px;` to add a 10-pixel gap between grid items (both rows and columns);
    d. use `grid-template-rows: 150px 150px 150px 150px 150px 150px;` to define six rows, each with a height of 150px;
    e. use
    ```css
    grid-template-areas: "img1 img3 img4" 
                         "img1 img3 img5" 
                         "img2 img3 img5" 
                         "img2 img6 img7"
                         "img8 img10 img11"
                         "img9 img10 img11";
    ```
    to define named grid areas for layout in a grid format, each subsequent line specifies the arrangement of grid items. For example:

        - "img1 img3 img4": in the first row,
                - img1 occupies the first column,
                - img3 occupies the second column,
                - img4 occupies the third column.

    f. 
    ```css

    @for $i from 1 through 11 {
        .img#{$i} {
            grid-area: img#{$i};
        }
    }
    ```
    - use SCSS loop `@for` to iterates from 1 to 11, to creat classes from .img1 up to .img11;
    - use `#{$i}` to interpolate the value of $i into each class name;
    - use `grid-area: img#{$i};` to assign each image class to its corresponding grid area based on the loop index;
    

