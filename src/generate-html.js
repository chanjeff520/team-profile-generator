
function generateEngineerHTML(Engineer){
    return `
    <div class="card text-white mb-3 col-3 mx-2" style="max-width: 18rem;">
        <div class="card-header bg-dark">${Engineer.getName()}</div>
        <div class="card-body bg-secondary">
            <p class="card-text"> ${Engineer.getRole()}</p>
            <p class="card-text"> ID: ${Engineer.getId()}</p>
            <p class="card-text"> ${Engineer.getEmail()}</p>
            <a href="${Engineer.getGitHub()}" class="card-text text-white"> GitHub Link</a>
        </div>
    </div>
    
    `
}

function generateInternHTML(Intern){
    return `
    <div class="card text-white mb-3 col-3 mx-2" style="max-width: 18rem;">
        <div class="card-header bg-dark">${Intern.getName()}</div>
        <div class="card-body bg-secondary">
            <p class="card-text"> ${Intern.getRole()}</p>
            <p class="card-text"> ID: ${Intern.getId()}</p>
            <p class="card-text"> ${Intern.getEmail()}</p>
            <p class="card-text"> School: ${Intern.getSchool()}</p>
        </div>
    </div>
    
    `
}

function generateManagerHTML(Manager){
    return `
    <div class="card text-white mb-3 col-3 mx-2" style="max-width: 18rem;">
        <div class="card-header bg-dark">${Manager.getName()}</div>
        <div class="card-body bg-secondary">
            <p class="card-text"> ${Manager.getRole()}</p>
            <p class="card-text"> ID: ${Manager.getId()}</p>
            <p class="card-text"> ${Manager.getEmail()}</p>
            <p class="card-text"> Office: ${Manager.getOfficeNum()}</p>
        </div>
    </div>
    
    `
}

function generateTeamHTML(employees){

}

function generateHTML(){
    return`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
    crossorigin="anonymous"
    >
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="bg-secondary text-white">
        <h1 class="text-center"> Team Profiles </h1>
    </header>

    <!-- This is were our employees html go -->
    <employees class="row d-flex justify-content-center">
    
    
    </employees>

</body>
</html>
    `
}