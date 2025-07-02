import { Outlet } from 'react-router-dom'
import Bar from './components/Bar';
const App = () => {
  return (
      <>
      <Bar/>
          <Outlet/>
      </>
  );
};
export default App