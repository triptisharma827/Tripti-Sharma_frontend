import React from "react";
import List from "./List";


const items = [
    { text: 'item 1    ---->  click here' },
    { text: 'item 2    ---->  click here' },
    { text: 'item 3    ---->  click here' },
    { text: 'item 4    ---->  click here' },
    { text: 'item 5    ---->  click here' },
  ];


function App(){
    return (
        <div>
        <List  items={items}/>
        </div>
    );
}

export default App;