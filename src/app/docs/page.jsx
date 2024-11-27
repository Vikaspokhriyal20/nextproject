import React from 'react'

const page = () => {
  return (
    <section>
      <div className='container'>
        <h4 className='title-text'>Docs</h4>
        <h4 className='question'>The Document Object Model (Dom)</h4>
        <p>As you already know the backbone of an HTML document is elements</p>
        <p>When an HTML document is loaded, the browser creates an HTML Document Object Model</p>
        <h4 className='question'>What is the Dom</h4>
        <p>The DOM is created by the browser when an HTML document is loaded</p>
        <p>It is a 'tree structure' representation of an HTML structure</p>
        <p>The DOM Tree contains all the elements in a docuemnt</p>
        <h4 className='question'>DOM and Javascript</h4>
        <p>With Javascript we can do many useful things to the DOM</p>
 
        <ul>
          <li>Javascript can change an HTML elements's content</li>
          <li>Javascript can add attributes to an HTML elements</li>
          <li>Javascript can change an HTML element's attributes value</li>
          <li>Javascript can remove an HTML element</li>
          <li>Javascript can add HTML element to other HTML elements</li>
        </ul>
        <h4 className='question'>Javascript Dom Events</h4>
        <p>With Javascript and dom we can listen to event that happen to elements</p>
        <h4 className='question'>The addEventListener Method</h4>
        <p>The addEventListener method sets up a function that will</p>
        <p>Click Event</p>
        <p>Load Event</p>
        <p>Change Event</p>
        <h4 className='question'>Select Element By Class Name</h4>
        <p>The document.getElementByClassName() selects all elements with the given class name</p>
        <p>Select Elements By Tag Name</p>
        <p>The Document.getElementsByTagName() selects all elements with the given tag name</p>
        <p>Select Elements By Name</p>
        <h4 className='question'>Javascript Bom Location</h4>
        <p>The <kbd>window.location()</kbd> object is used to return information about the current location of the page</p>
        <p>The location object contains the following properties</p>
        <p>Deep Down of the function in the main section of departments on area vice they feel good for art in the section </p>
        <ul>
          <li><kbd>href</kbd></li>
          <li><kbd>protocol</kbd></li>
          <li><kbd>hostname</kbd></li>
          <li><kbd>pathname</kbd></li>
        </ul>
        <p>The href property returns whole url of the current page</p>
        <p>The protocol property returns the protocol scheme of the url of the page e.g "http" and "https"</p>
        <p>The hostname property returns the domain name of the url of the page</p>
        <kbd>const x = location.hostname;</kbd><br></br>
        <kbd>x return 'www.example.com'</kbd>
        <h4 className='question'>Javascript Break and Continue</h4>
        <p>The break and continue statements are often used in loops</p>
        <h4 className='question'>The break Satement</h4>
        <p>You have already learned that the break statement is used to shop the execution of the switch statement</p>
        <h4 className='question'>Javascript Bom history</h4> 
        <p>The window.history object provides an interface for manipulation the browser history</p>
        <h4 className='question'>What is Parallel Routes</h4>
        <p>Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout. They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites.</p>
        <h4 className='question'>React JS Introduction to JSX</h4>
        <p>JSX (JavaScript XML) is a syntax extension for React.js that allows developers to write HTML elements.</p>
        <h4 className='question'>React JS Rendering Elements</h4>
        <p>Rendering Elements in React involves efficiently updating the user interface by creating and updating virtual representations of the UI components</p>
        <h4 className='question'>React JS Components</h4>
        <p>Components in React are modular, reusable building blocks for UI elements.</p>
        <h4 className='question'>React JS Fragments</h4>
        <p>We may render a single element or multiple elements, though rendering multiple elements will require a ‘div’ tag called Fragment</p>
        </div>
    </section>
  )
}

export default page
