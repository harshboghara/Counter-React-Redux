import './App.css';
import Counter from './component/counter';
import store from './action/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
