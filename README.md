README for Sarah Moe's react-dynamic-form

Purpose: to dynamically build a form from a given JSON array of objects, each representing a form field. Conditional fields should render when condition is met. Data is to be returned, logged to the console, or rendered in the browser.

Library used: React.js

** Notes **

Criteria 1:

Provided data is saved in data folder per your request.
Form is rendered dynamically based on the provided JSON data.
Conditional field of "parental consent" renders conditionally.
Form data is logged to the console (and is also in a pre tag) on submit.
Criteria 2:

Comments made throughout code.
Criteria 3:

UX/UI designed based off of your company's Book a Demo form.
Criteria 4:

Validation done via "require", though there are more sophisticated ways included in react-hook-form and/or using regex. For times' sake I simply added "require" to certain fields that I believe are necessary.
If a field is empty that is required the user will receive a prompt upon attempting to submit the form similar in style to the Book a Demo form on your website.
Otherwise, if a field is empty and not required the user will be able to submit the form without issue. This is esspecially important for fields like "Job Title" which may not apply to all users.
** How Would I Improve My Project **

I would redirect the user to another page upon submitting the form.
I would likely use react-hook-form for validation, submission, registration.
If I was directed to not have the page redirect upon submission, I would make sure the checkbox was unchecked once the form was submitted. Right now, if you check the box and submit the form the checkbox remains checked. This is a compliance issue and can be fixed using state and toggling the checkbox.
To improve upon design I would adjust the size of the checkbox to be slightly larger and provide more space between the submit button and the checkbox (for mobile and tablet users). I would also make sure all colors and fonts matched the brand assets of the company. I would also include a title (or presume the form would be on a page that would explain the purpose of the form). I would consider using placeholders, especially for phone numbers, so users would know if they needed to include their country codes and/or only area codes. I would also use another color of border for the selected field.
I would include comments in my CSS to help readers understand the code better.
Thank you for this fun problem. I would love to hear your feedback on how my code could improve.

Sarah Moe
