
import './App.css';
import Nav from './components/Nav';
import Home from './screens/Home'
import Recipes from './screens/Recipes'
import RecipeCreate from './screens/RecipeCreate';
import RecipeDetail from './screens/RecipeDetail';
import RecipeEdit from './screens/RecipeEdit';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={< Home /> }/>
        <Route path="/recipes" element={<Recipes />}/>
        <Route path="/add-recipe" element={<RecipeCreate />}/>
        <Route path="/recipes/:id" element={<RecipeDetail />}/>
        <Route path="/recipes/:id/edit" element={<RecipeEdit />}/>
        <Route path="/RecipeCreate/:id/create" element={<RecipeCreate />}/>
      </Routes>
        
    </div>
  );
}

export default App;
