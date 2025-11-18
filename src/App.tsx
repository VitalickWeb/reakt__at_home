import "./App.css";
import { Button } from "./components/Button/Button";
import { Users } from "./components/Users/Users";

export const App = () => {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const title = "My academic project"

  return (
    <div>
     
      
      <Users 
          users={user}
          title={title}    
      />

      <Button title="Button" />

      <div className="avatar_box">
        <img className="avatar" alt="" />
      </div>
    </div>
  );
};
