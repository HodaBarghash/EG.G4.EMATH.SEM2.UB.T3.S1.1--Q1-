function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6U7N6NJkuJU":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwR9cg6MWX6Shaz8Cz9ZAA5z7MMaOGqbFIoxwMkkewM6qlmQNHjjdelQCFnjAJssNrk/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

