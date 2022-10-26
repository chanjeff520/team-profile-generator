# team-profile-generator

  ## Technology Used
  
  <ul>
      <li> JavaScript </li>
      <li> Node.js </li>
      <li> jest </li>
      <li> npm </li>
      <li> inquirer</li>
      <li> Git</li>
      <li> GitHub</li>
  </ul>

  ## Description 

  Generates an HTML page with employees from the same team. Currently, this project is incomplete.


  ## Video Demo

  https://drive.google.com/file/d/13fE110DjGAwq6VKf-f8aykHFRvujpFfc/view
  

  ## Table of Contents

  1.  [Usage](#usage)

  2.  [Installations](#installation)

  3.  [Code Snippet](#code)

  4.  [Author Links](#author)


  ## Installation <a id="installation"></a>

  Dependencies needed: npm, inquirer, node.js<br>
  Installation : 
   - install node.js via (https://nodejs.org/en/download/)
   - In the terminal, do 'npm install' package.json file. Make sure to do this within the directory with index.js.
   - Then install inquirer by 'npm i inquirer'. Again, do this within the directory with index.js
   - Lastly, install jest by 'npm i jest'. Same as before


  ## Usage <a id="usage"></a>
  
  - Install the necessary dependencies from the installation section.
  - From the same directory as the 'index.js', enter 'node index.js' or 'npm run start' in the terminal
  - Fill out the questionnaire
  - The new index.html will be generated to 'index.html' in the './dist/index.html'


  ## Code Snippet <a id="code"></a>

```js
//Takes an array and check what type if employees they are
function generateTeamHTML(employees){

    let htmlStr = ``;

    for(let i=0; i<employees.length; i++){
        if(employees[i].getRole() == "Engineer"){
            htmlStr += generateEngineerHTML() +"\n";
        }
        else if(employees[i].getRole() == "Intern"){
            htmlStr += generateInternHTML() +"\n";
        }
        else if(employees[i].getRole() == "Manager"){
            htmlStr += generateManagerHTML() +"\n";
        }
    }

    return htmlStr
}


```


  ## Author Links <a id="author"></a>

  You can reach me on
  GitHub: [__chanjeff520__](https://github.com/chanjeff520) <br>
  LinkedIn: [__Jeff chan__](https://www.linkedin.com/in/jefflchan/),<br>
  Email:  __chanjeff520@gmail.com__
