const htmlTop =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Page</title>

    <!-- Style sheets -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" rel="stylesheet">
    <!-- Frameworks -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body style="font-family: 'PT Sans', sans-serif;">

  <header>
    <nav class="navbar navbar-dark mb-5" style="background-color: #5863F8;">
      <div class="container-fluid justify-content-center">
        <span class="navbar-brand mb-0 h1"><h1>My Team</h1></span>
      </div>
    </nav>
  </header>

  <!-- My Team cards & info -->
  <main style="display: flex; flex-flow: row wrap; justify-content: center;">`

function generateManagerCard(person) {
      return `\n   <div class="card text-white mb-3 mx-5" style="width: 15rem; background-color: #5FBFF9;">
        <h4 class="card-header" style="border-bottom: none;">${person.name}</h4>
        <h5 class="card-header"><i class="fas fa-mug-hot"></i> Manager</h5>
            <div class="card">
            <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: <span>${person.id}</span></li>
                    <li class="list-group-item">Email: <span>${person.email}</span></li>
                    <li class="list-group-item">Office #<span>${person.officeNumber}</span></li>
                </ul>
    </div>
</div>\n`
}

function generateEngineerCard(person) {
  return `\n  <div class="card text-white mb-3 mx-5" style="width: 15rem; background-color: #5FBFF9;">
      <h4 class="card-header" style="border-bottom: none;">${person.name}</h4>
      <h5 class="card-header"><i class="fas fa-glasses"></i> Engineer</h5>
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: <span>${person.id}</span></li>
            <li class="list-group-item">Email: <span>${person.email}</span></li>
            <li class="list-group-item">GitHub: <span>${person.github}</span></li>
          </ul>
        </div>
  </div>\n`
}

function generateInternCard(person) {
  return `\n  <div class="card text-white mb-3 mx-5" style="width: 15rem; background-color: #5FBFF9;">
    <h4 class="card-header" style="border-bottom: none;">${person.name}</h4>
    <h5 class="card-header"><i class="fas fa-user-graduate"></i> Intern</h5>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: <span>${person.id}</span></li>
          <li class="list-group-item">Email: <span>${person.email}</span></li>
          <li class="list-group-item">School: <span>${person.school}</span></li>
        </ul>
      </div>
  </div>\n`
}

const htmlBottom = 
`   </main>

</body>
</html>`



function generateMyTeamPage(allEmployees) {
    console.log("generateMyTeamPage is running!");
    let htmlString = htmlTop;
    for (person of allEmployees) {
        if (person.getRole() === 'Manager') {
            htmlString += generateManagerCard(person);
        } else if (person.getRole() === 'Engineer') {
            htmlString += generateEngineerCard(person);
        } else if (person.getRole() === 'Intern') {
            htmlString += generateInternCard(person);
        }
    }
    console.log(htmlString);
}

module.exports = generateMyTeamPage;