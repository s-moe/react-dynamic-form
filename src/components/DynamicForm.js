import { useState } from "react";

export default function DynamicForm({ data }) {
  //set state for user input
  const [userData, setUserData] = useState(JSON.parse(JSON.stringify(data)));

  /* on Submit: prevents form from default behavior of submitting
  alerts user we received their info
  resets the state (but not the checkbox if it's been checked - need more time with this)
  logs the user's inputted values to the console per instructions */
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We received your information and will be in touch soon.");
    setUserData(JSON.parse(JSON.stringify(data)));
    console.log(userData);
  };

  //handleChange for user's input. This also manages visibility of showIf

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
  //function for determining whether parental consent is required
  const showIf = (value) => {
    const now = new Date();
    return (
      new Date(value) >=
      new Date(now.getFullYear() - 13, now.getMonth(), now.getDate())
    );
  };

  //renders a dynamic form using the json data
  //renders checkbox conditionally (based on birthdate)
  return (
    <div>
      <pre>{JSON.stringify(userData)}</pre>
      <form onSubmit={handleSubmit} className="form-container">
        {userData.map((data) => {
          return (
            <div key={data.name}>
              {data.tag === "input" && !data.hide && (
                <>
                  <label
                    className={data.human_label}
                    htmlFor={data.human_label}
                  >
                    {data.human_label}
                  </label>
                  <input
                    aria-label={data.human_label}
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
        <button className="btn" aria-label="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
