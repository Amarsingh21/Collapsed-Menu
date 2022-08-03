import './App.css';
import Table from './Comonent/Table';
import Pagination from './Comonent/pagination/Pagination';
import Cmenu from './Comonent/Cmenu';
import Header from './Comonent/Header';
// import Pgtable from './Comonent/Pgtable';

import { BrowserRouter as Routes, Route} from 'react-router-dom';
import Page404 from './Page404';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Table />
      <Cmenu /> */}
      {/* < Pagination /> */}
      {/* <Pgtable /> */}
       
      <Routes>
          <Route exact path="/table" component={Table} />
          <Route exact path="/cmenu" component={Cmenu} />
          <Route exact path="/pgdata" component={Pagination} />
          <Route exact path="/.../*" component={Page404} />
      </Routes>
    </div>
  );
}

export default App;
