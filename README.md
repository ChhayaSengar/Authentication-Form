# Authentication-Form

<h4>Task</h4>
<hr>
<ul type="number">
<li>Handle authentication using local storage.</li>
<li>Create a UI as shown in Figma, and make 2 pages - signup and profile.</li>
<li>On clicking signup, use local storage to create the state of the user - it should contain all the details taken in signup.</li>
<li>The state of the user saved in localstorage should contain all the properties of the user, plus should also consist of an access token - let this access token be a random 16-byte string generated by you randomly.</li>
<li>Once there is a state of the user in the local storage, redirect the user to a page called /profile. Display the user’s details there.</li>
<li>On clicking the logout button, set the local storage back to null and also get rid of the access token.</li>
<li>Using scripts ensure that when a user manually tries to go to /profile, if the local storage does not contain the accesstoken the user is redirected to the signup page</li>
<li>Similarly if the localstorage has an accesstoken and tries to go to the signup page, using scripts ensures that the user can't do so and is redirected to the profile page.</li>
<li>Show success and errors as well as shown in the UI. All fields are mandatory for signup and similarly on successfully signing up show the message in green text and then redirect to /profile</li>
</ul>
Relevant Links
Figma Link- https://www.figma.com/file/GWUrnugwWlzzxjMJewgoR8/Contest?node-id=0%3A1&t=9DWJ1y9QOUIhl2OD-1


