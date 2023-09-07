import { createContext, useEffect, useState } from "react";

const MyContext = createContext({});

export function ContextProvider(props) {
  const [recipes, setRecipes] = useState(null);
  const [userInput, setUserInput] = useState("sausage");

  useEffect(() => {
    fetch(
      ` https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=31af3656&app_key=%202087dcf1fbc00d944d9a8a942f819c57&diet=balanced&random=false`
    )
      .then((respponse) => {
        console.log(respponse.ok);
        return respponse.json();
      })
      .then((data) => setRecipes(data));
  }, [userInput]);

  console.log(recipes);
  return (
    <MyContext.Provider value={{ setUserInput: setUserInput }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContext;
