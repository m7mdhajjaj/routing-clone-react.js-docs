import { useState } from 'react'
import './App.css'
import Router from "../Routes/index";
import { RouterProvider } from 'react-router-dom'
 import Navbar from './component/Navbar'; // Uncomment if you have a Navbar component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App

// Link Component Problem Outside Router Context  can be resolved by wrapping the RouterProvider around the Navbar component or any other components that use the Link component from react-router-dom.
// This ensures that the Link component has access to the router context, allowing it to function correctly without throwing an error.
// If you encounter the error "Link Component Problem Outside Router Context", it means that the Link component is being used outside of a Router context. To fix this, ensure that your components that use Link are wrapped in a RouterProvider or a similar router context provider.