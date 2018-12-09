## React 16 (The Complete Guide incl. React Router 4 & Redux) - Assignments

My assignment-solutions for the [Udemy-course](https://www.udemy.com/react-the-complete-guide-incl-redux/) by [Maximilian Schwarzmüller](https://www.academind.com).

### Assignment 01

1. Create TWO new components: UserInput and UserOutput.

2. UserInput should hold an input element, UserOutput two paragraphs.

3. Output multiple UserOutput components in the App component (any paragraph texts of your choice).

4. Pass a username (of your choice) to UserOutput via props and display it there.

5. Add state to the App component (=> the username) and pass the username to the UserOutput component.

6. Add a method to manipulate the state (=> an event-handler method).

7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event.

8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput.

9. Add two-way-binding to your input (in UserInput) to also display the starting username.

10. Add styling of your choice to your components and then elements in the components. Use both: Inline styles and stylesheets.

### Assignment 02

1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (for example in a paragraph).

2. Create a new component "ValidationComponent", which receives the text length as a prop.

3. Inside the ValidationComponent either output "Text is too short" or "The text is long enough" depending on the text-length. Use 5 chars as minimum.

4. Create another component "CharComponent" and style as an inline-box.

5. Render a list of CharComponents where each CharComponent receives ad different leter of the entered text (in the initial field) as a prop.

6. When you click a CharComponent, it should be removed from the entered text.

### Assignment 03

1. Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)

2. Add a simple navigation with two links => One leading to "Users", one leading to "Courses"

3. Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)

4. Pass the course ID to the "Course" page and output it there

5. Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)

6. Load the "Course" component as a nested component of "Courses"

7. Add a 404 error page and render it for any unknown routes

8. Redirect requests to /all-courses to /courses (=> Your "Courses" page)

### Assignment 04

Enhance the provided project with additional functionality.

Add the cases DECREMENT, ADD and SUBTRACT to the Reducer-function.
Connect these three Action-types to the component-file "Connect.js" by adding props to "mapDispatchToProps".

### Assignment 05

Turn the provided React-app into one which does NOT use local state (in components) but instead uses Redux.

## Self-invented exercises. Not part of the actual course.

### Fibonacci Counter

Create a React-Redux app which counts up the [Fibonacci-numbers](https://en.wikipedia.org/wiki/Fibonacci_number).
