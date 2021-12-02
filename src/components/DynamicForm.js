import { useState } from "react";

export default function DynamicForm({ data }) {
  //set state for user input
  const [userData, setUserData] = useState(JSON.parse(JSON.stringify(data)));
  //need a handleSubmit for submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We received your information and will be in touch soon.");
    setUserData(JSON.parse(JSON.stringify(data)));
    console.log(userData);
  };

  //need a handleChange for user's input
  const handleChange = (e) => {
    userData.forEach((data) => {});
  };
  //need the function for determining date
  const showIf = (value) => {
    const now = new Date();
    return (
      new Date(value) >=
      new Date(now.getFullYear() - 13, now.getMonth(), now.getDate())
    );
  };

  //render a dynamic form using the json data
  //render checkbox conditionally (based on birthdate)
  return (
    <div>
      <pre>{JSON.stringify(userData)}</pre>
      <form onSubmit={handleSubmit}>
        {userData.map((data) => {
          return (
            <div key={data.name}>
              {data.tag === "input" && (
                <>
                  <label>{data.human_label}</label>
                  <input
                    className={data.name}
                    name={data.name}
                    onChange={handleChange}
                    type={data.type}
                    value={data.value}
                  />
                </>
              )}
            </div>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}
