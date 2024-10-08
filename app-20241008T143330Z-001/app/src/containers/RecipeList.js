import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { deleteRecipe } from '../actions';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';


const RecipeList = ({ recipes, onDelete }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  let target_value;


  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);
  
  function handleSearchChange(event) {
    let filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
    setFilteredRecipes(filtered);
    console.log(filteredRecipes);

  }
  
  
  return (
    
        <div  class="text-center">
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearchChange}
        />
        <button className="btn btn-danger"><Link style={{ color: '#FFF' }} to='/new'>Add new recipe</Link></button>
            {recipes.length > 0 && filteredRecipes.map(recipe => {
            return (
                <Recipe recipe={ recipe } onDelete={ onDelete } key={ recipe.id } />
            );
            })}
        </div>
   
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteRecipe(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);