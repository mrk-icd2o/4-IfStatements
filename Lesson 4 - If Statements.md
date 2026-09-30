# Lesson 4 - If Statements

So far our programs have been able to make values change, and we have used that to display information or move shapes. This lesson covers if statements (or conditional statements), which let us do different things as our variables change value.

## Booleans

A past lesson briefly described `boolean` variables - either `true` or `false`.  This idea will be very important for this lesson.

```javascript

// booleans are true or false, nothing else
let teacherIsMad = true;
let teacherIsHappy = false;

```



## Comparison Operators

Before we get into if statements we need comparison operators. Think about how you compare two objects in everyday life: are they the same, are they different, is one bigger than the other.

- `==` checks for equality. Note the two equals signs, a single one is used to set a value.
- `!=` checks for non-equality.
- `>` and `<` check if one value is greater or less than the other.
- `>=` and `<=` check if one value is greater than or equal to, or less than or equal to.

All of these comparisons, with values on either side, return `true` if true and `false` otherwise.

## If Statements

The structure of an if statement is:

```javascript
if (something is true){
  // run this code
}
```

Inside the brackets we place a condition, using the comparison operators above. Inside the curly braces we place whatever code we want to run if the condition is true.

```javascript
let teacherName = "Mr Kowalczewski";

// this condition is true, so the contained message will log to the console
if (teacherName == "Mr Kowalczewski"){
  console.log("Mr Kowalczewski is your teacher");
}

// this condition is false, so the contained message will NOT log to the console
if (teacherName == "Ms Danish"){
  console.log("Ms Danish is your teacher");
}


```

## Example

The code below in `example/sketch.js` is what we finished with in the Variables and Constants lesson. We will add some code to change the colour of the line after it reaches a certain point:

```javascript
if (xValue > 300){
  stroke(255, 0, 0);
}
```

`if (xValue > 300){ }` means that when `xValue` is greater than 300, the contained code runs (changing the stroke colour).

## Combinations of Conditions

We can combine two or more conditions with:

- `&&` means AND, both conditions must be true
- `||` means OR, only one (or both) condition must be true

```javascript
if (xValue > 300 && xValue < 400){
  stroke(255, 0, 0);
}
```

## Else

We can also use `else`, which means otherwise. It must be paired with an if statement, because it means if the original condition isn't true, do this instead. There is no condition attached, it simply means "otherwise do this".

```javascript
let teacherName = "Mr Kowalczewski";

if(teacherName == "Mr Kowalczewski"){
  console.log("Mr Kowalczewski is your teacher");
}
else{
  console.log("Mr Kowalczewski is not your teacher");
}
```

## Else If

Finally we have `else if`, used to add additional conditions after the first ("otherwise if"). You can have as many `else if` conditions as you want after an `if` and before an `else`. When you do this, only one condition can be true.

```javascript
let score = 45;

// Check grade - ORDER MATTERS!
if (score >= 80) {
  console.log("Grade: A - Excellent work!");
}
else if (score >= 70) {
  console.log("Grade: B - Good job!");
}
else if (score >= 60) {
  console.log("Grade: C - Satisfactory");
}
else if (score >= 50) {
  console.log("Grade: D - Needs improvement");
}
else {
  console.log("Grade: F - Please see teacher");
}
```

Consider the code above. Even though a score of 85 is greater than 70, it will not show "Grade B". The first condition is true, and the chain stops there.

The example code adds a couple of `else if`s to the growing line. Pay attention to the order in which the code runs.

## Built in Variables

In the previous lesson you were shown different built in variables that can be used in if statements:

```javascript
// keyIsPressed is a boolean - either true or false!
if(keyIsPressed){
    // do something
}

// key stores the last key pressed as a string
if(key == 'a'){
    // do something
}