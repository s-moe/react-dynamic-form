import { useState } from "react";

export default function DynamicForm({ data }) {
  //set state for user input
  const [userData, setUserData] = useState(JSON.parse(JSON.stringify(data)));

  //on Submit: prevents form from default behavior of submitting
  //alerts user we received their info
  //resets the state (not the checkbox???)
  //logs the user's inputted values to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We received your information and will be in touch soon.");
    setUserData(JSON.parse(JSON.stringify(data)));
    console.log(userData);
  };

  //need a handleChange for user's input
  //need to create conditional to only show checkbox based on date of birth
  const handleChange = (e) => {
    userData.forEach((data) => {
      if (data.conditional && data.conditional.name === e.target.name) {
        data.hide = !showIf(e.target.value);
      }
      if (data.name === e.target.name) {
        data.value = e.target.value;
      }
    });
    setUserData([...userData]);
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
              {data.tag === "input" && !data.hide && (
                <>
                  <label>{data.human_label}</label>
                  <input
                    className={data.name}
                    name={data.name}
                    onChange={handleChange}
                    type={data.type}
                    value={data.value || ""}
                    required={
                      data.name === "email" ||
                      data.name === "date_of_birth" ||
                      data.name === "parental_consent"
                    }
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
