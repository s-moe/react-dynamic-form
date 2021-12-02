import { useState } from "react";

export default function DynamicForm({ data }) {
  //set state for user input
  const [userData, setUserData] = useState(data);
  //need a handleSubmit for submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({});
    console.log(userData);
  };

  //need a handleChange for user's input
  //need the function for determining date

  //render a dynamic form using the json data
  //render checkbox conditionally (based on birthdate)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {userData.map((data) => {
          return (
            <div>
              {data.tag === "input" && (
                <>
                  <label>{data.human_label}</label>
                  <input name={data.name} />
                </>
              )}
            </div>
          );
        })}
      </form>
    </div>
  );
}
