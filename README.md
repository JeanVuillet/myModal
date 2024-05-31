MyModal4

A simple, customizable modal component for React.

Version
Current Node.js version: v21.7.3

Recommended Text Editor
Visual Studio Code (VS Code)

Installation
To install the package, run:
-npm install mymodal4

Usage
Import the modal component in your React project:
import React, { useState } from 'react';
import Modal from 'mymodal4';

function App() {
const [isOpen, setIsOpen] = useState(false);

return (

<div>
<button onClick={() => setIsOpen(true)}>Open Modal</button>
<Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        modalMessage="This is a modal" 
        buttonMessage="Close"
      />
</div>
);
}

export default App;

Props
-isOpen
Type: boolean
Description: Controls the visibility of the modal.
Usage: Should be tied to a state in the parent component.
-setIsOpen
Type: function
Description: Function to update the visibility state of the modal.
Usage: Should be tied to the state setter in the parent component.
-modalMessage
Type: string
Description: The message displayed inside the modal.
-buttonMessage
Type: string
Description: The text displayed on the modal's close button.
-modalContainer
Type: object
Description: Custom styles for the modal container.
Example:
modalContainer={{ backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
-messageContainer
Type: object
Description: Custom styles for the modal itself.
Example:
messageContainer={{ backgroundColor: 'blue', color: 'red', width: '150px', padding: '20px', borderRadius: '10px' }}
-buttonContainer
Type: object
Description: Custom styles for the close button.
Example:
buttonContainer={{ backgroundColor: 'red', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}

Customization 

Message and Button Text
Customize the message inside the modal and the text of the button using modalMessage and buttonMessage props.
<Modal 
  isOpen={isOpen} 
  setIsOpen={setIsOpen} 
  modalMessage="Your custom message" 
  buttonMessage="Your custom button text" 
/>

Styles
You can customize the styles of the modal container, the modal itself, and the close button using modalContainer, messageContainer, and buttonContainer props.
<Modal
isOpen={isOpen}
setIsOpen={setIsOpen}
modalMessage="Styled Modal"
buttonMessage="Close"
modalContainer={{ backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
messageContainer={{ backgroundColor: 'white', color: 'black', width: '300px', padding: '20px', borderRadius: '10px' }}
buttonContainer={{ backgroundColor: 'blue', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}
/>

License
This project is licensed under the MIT License. See the LICENSE file for details.
