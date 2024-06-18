
import '../styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Main';
import Quiz from './Quiz';
import Results from './Result';
import Questions from './Questions';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    }, {
      path:'/Questions',
      element: <Questions/>
    }, {
      path:'/Quiz',
      element: <Quiz/>
    }, {
      path:'/Results',
      element: <Results/>
    }



  ])

  return (
    <div className="App">
     <RouterProvider router={router}/>
        </div>
  );
}

export default App;
