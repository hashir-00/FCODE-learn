
import './App.css';
import ClassComp from './component/classComp';
import Clicks from './component/click';
import Click from './component/clickFunc';
import FuncComp from './component/funcComp';
import PropFunc from './component/funcProp';
import ClassProps from './component/props';
import ClassCompRedux from './redux/redux';

function App() {
  return (
    <div>
    <h1>
      hello
      </h1>
      <ClassCompRedux/>
      <ClassProps name="hashir"><p>helllll</p></ClassProps>
      <PropFunc name= " hashirss" year="22" />
      <Clicks/>
      <Click/>
      <FuncComp/>
      <ClassComp/>
      <h1>
      hello
      </h1>
      </div>
  );
}

export default App;
