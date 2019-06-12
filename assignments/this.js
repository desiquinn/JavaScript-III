/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding sets 'this' to refer to the window/console object.
* 2. Implicit binding is found when a function that uses the "this" keyword is called proceeding by the dot notation of an object.  The object to the left of that dot notation is the object that "this" refers to.
* 3. New Binding is found when a constructor function (that already uses the 'this' keyword) is called using the 'new' keyword.  The 'this' keyword then refers to each specific object that is being created at that time.
* 4. Explicit binding is also found with contructor functions. However it uses .call .bind and .apply to alter the exsisting object. The 'this' keyword then refers specifically to the altered object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding : No object has to be created because the window object is the object. 

function assignColor(color) {
    console.log(this);
    return color;
};

assignColor('purple');

// Principle 2

// code example for Implicit Binding

const book = {
    title: "The Handmaid's Tale",
    theme: "Dystopian",
    protagonist: "June",
    author: "Margaret Atwood",
    review: function(opinion) {
        console.log( `${this.title} is ${opinion}!`);
        console.log(this);
    },
};

book.review("so good");

// Principle 3

// code example for New Binding

function Subscriber(name, email) {
    this.name = name;
    this.email = email;
    this.welcome = function() {
        console.log(`Welcome to the list ${this.name} is your email ( ${this.email} ) correct?`);
        console.log(this);
    }

}; 

const newSub1 = new Subscriber('Miranda', 'mmatthews@gmail.com');
const newSub2 = new Subscriber('Andrew', 'andystoys@fakemail.com');

newSub1.welcome();
newSub2.welcome();

// Principle 4

// code example for Explicit Binding

newSub1.welcome.call(newSub2);
newSub2.welcome.apply(newSub1);