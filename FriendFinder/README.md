# Friend-Finder---Node
_______________________
What has been completed
_______________________

For the most part the application has been complete. The home page works perfectly and the survey pulls up once you start a connection. All of the files are nested as intended and are using the express and path classes along with the apiRoutes, htmlRoutes, and Server.js being setup correctly. All pages run as intended and the users entries in the surveys are being recorded. The submit button also pops up the modal showing the results of the survey and the information the user enters is console.logged to their terminal. Even the database updates in real time on the console.log. The friendds.js is also formatted correctly as well. 

_______________________
What has not be completed
_______________________

What hasn't been completed for this homework is the testing of the total difference and ensuring that a match returns to the user. The other thing that hasn't been completed is how to display that match in the modal-body class for the modal button that pops up once someone clicks submit for the survey entries. I am also still working on deploying the app to heroku so will provide that link once i have done the heroku deploy.


_______________________
Original Homework instructions
_______________________
1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`. -COMPLETE

3. Your `htmlRoutes.js` file should include two routes: - COMPLETE

   * A GET Route to `/survey` which should display the survey page. -COMPLETE
   * A default, catch-all route that leads to `home.html` which displays the home page. -COMPLETE

4. Your `apiRoutes.js` file should contain two routes: - PARTIALLY COMPLETE

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends. - COMPLETE
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below. - COMPLETE

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. Determine the user's most compatible friend using the following as a guide: - INCOMPLETE

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up. - PARTIALLY COMPLETE
   * The modal should display both the name and picture of the closest match. - NEED TO display the match data