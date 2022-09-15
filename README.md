# A simple calculator in a Vanillar JS
<<<<<<< HEAD
# Fuctional requirement
The buttons clicked should be display input on the screen

The calculator should be able to perform arithmetic functions like:

when the button "x" is used, it should Multiply
when the button "-" is used, it should substract
when the button "/" is used, it should divide
when the button "+" is used, it should Add

The results gotten from the aritmetic operation should be displayed on the screen
User should be able to delete entry starting from the recent one 
All the text on the display should be cleared when desired
when the button "=" is clicked on, it should calculate and display the result in the result section(class)

# Use case scenario

User clicks on numbers
User uses arithmetic operator between numbers 
User clicks on the "Equal to" button
User gets results 

=======

# Functional Requirement

A calculator:
- should support operation only on real numbers
- should display input on the screen
- should evaluate and display result
- should evaluate based on the BODMAS principle
    - Multiplication
    - Division
    - Addition
    - Substraction
  In Binary operation of real numbers, multiplication and division is
  distributive over addition and substraction
- should evaluate percentage
- should clear input as needs arise
- should delete input starting from the recent one

# Use case Scenario

- When i click a number it should display on the screen
- When i click an operation it should display
- When i click *, +, /, - before any text and there there is no text before it should not display
- When i click on DEL should delete from the last guy
- When type a number and percentage it should evaluate the numbers percentage
- numbers can only be typed before percentage
- When I press AC it should clear
- When I press equals to should evaluate the text
- no two *, /, should be together
  For example 2 * * 3, 2 / / 3

# Use Case diagram


Display Class
// Displays anything on the screen => result, text

Arithmetic Class
// Takes a test, parse it and evaluate and produce result

Input Class
property
    value: 9
method

// clears 
// displays
// evalutates 
>>>>>>> d95a207877fe248bd4da6431babf7289a0380bad
