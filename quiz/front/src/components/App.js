
import '../styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Main';
import Quiz from './Quiz';
import Results from './Result';
import Questions from './Questions';
import { CheckUserExist } from '../helper/helper';

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
      element:<CheckUserExist><Quiz/></CheckUserExist>
    }, {
      path:'/Results',
      element: <CheckUserExist><Results/></CheckUserExist>
    }



  ])

  return (
    <div className="App">
     <RouterProvider router={router}/>
        </div>
  );
}

export default App;
