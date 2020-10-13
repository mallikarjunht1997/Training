# [CSS](https://www.w3schools.com/w3css/) 

#### CSS Box Model & Structure
```css 
selector {
    property : value
}
```
![box model](images/box-model.png)

Class Selector 
```css 
.special {
   text-transform:uppercase; 
}
```
ID Selector
```css
#main {
   background-color: red;
   color:white;
}
```
Element Selector
```css
p { 
    background: blue;
}
```
Combo Selector
```css 
#main p {}
#main div.special p {}
```
Pseudo Class Selector 
```css
div.special:hover { 
	background:blue 
}
```
![css selectors](images/css-class.png)

#### Pseudo Classes, Pseudo Elements
* :active
* :focus
* :disable
* :checked
* :first-child
* :nth-child(n)
* :last-child
* ::after
* ::before
![psudo class](images/psudo-class.png)

#### Display types
![Display type](images/display-type.svg)
`display:none`  script, style, title etc  
`display:table` flex/grid  
**Inline elements** – no width, height, top/bottom padding, top/bottom margin
a, span, img, strong  
**Inline-block** - button, input  
#### Positioning
![positning](images/position.png)
#### z-index
![Z-index](images/z-index.png)
The z-index property specifies the stack order of an element. 
An element with greater stack order is always in front of an element with a lower stack order. 
> z-index only works on positioned elements
#### Box Sizing
![Box Sizing](images/box-size.jpg)
#### CSS Float
![web layout](images/float.png)
#### CSS Specificity
|Example 1 | Example 2 |  
|--- |--- |  
|![Specificity](images/specipicity1.png)|![Specificity](images/specipicity2.png)|

#### CSS3
Modules include:

**borders** (border-radius, box-shadow)
**backgrounds** (multiple backgrounds)
**box-shadow**
**text-shadow**
**color** (HSL colors, HSLA colors, opacity, RGBA colors)

Also:
* media queries
* multi-column layout
* Web fonts
#### Responsive Design
![responcive](images/responcive.jpg)
#### [Media Query](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
```CSS
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```