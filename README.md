# React 16 (The Complete Guide incl. React Router 4 & Redux) - Assignments

Assignments for the [Udemy-course](https://www.udemy.com/react-the-complete-guide-incl-redux/) by [Maximilian Schwarzmüller](https://www.academind.com).

## Assignment 01

- Create TWO new components: UserInput and UserOutput.

- UserInput should hold an input element, UserOutput two paragraphs.

- Output multiple UserOutput components in the App component (any paragraph texts of your choice).

- Pass a username (of your choice) to UserOutput via props and display it there.

- Add state to the App component (=> the username) and pass the username to the UserOutput component.

- Add a method to manipulate the state (=> an event-handler method).

- Pass the event-handler method reference to the UserInput component and bind it to the input-change event.

- Ensure that the new input entered by the user overwrites the old username passed to UserOutput.

- Add two-way-binding to your input (in UserInput) to also display the starting username.

- Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets.

## Assignment 02

1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (for example in a paragraph).

2. Create a new component "ValidationComponent", which receives the text length as a prop.

3. Inside the ValidationComponent either output "Text is too short" or "The text is long enough" depending on the text-length. Use 5 chars as minimum.

4. Create another component "CharComponent" and style as an inline-box.

5. Render a list of CharComponents where each CharComponent receives ad different leter of the entered text (in the initial field) as a prop.

6. When you click a CharComponent, it should be removed from the entered text.

## Burger Builder App

Example-application done in the course.
