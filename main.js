function validateData()
{
    let elements = document.getElementById("my-form").elements;

    const allowed_ch = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7'];
    let valid = true;
    let scores = [];
    let name = "";
    for (let i = 0, element; element = elements[i++];) {
        if (element.type === "text" && element.id === "name")
        {
            name = element.value;
        }
        if (element.type === "text" && element.id !== "name")
        {
            result = element.value;
            result = result.toUpperCase();
            scores.push(result);
            if(!allowed_ch.includes(result))
            {
                valid = false;
                alert("At least one of your input fields did not contain a valid Leaving Certificate result.");
                break;
            }
        }
    }

    if(valid)
    {
        calculateScore(scores, name);
    }
}

function calculateScore(scores, name)
{
    let score_to_val = {
        "H1": 36,
        "H2": 30,
        "H3": 24,
        "H4": 18,
        "H5": 12,
        "H6": 9,
        "H7": 0,
        "O1": 12,
        "O2": 10,
        "O3": 8,
        "O4": 6,
        "O5": 0,
        "O6": 0,
        "O7": 0
    };

    let score = 0;
    for(let i = 0, res; res = scores[i++];)
    {
        score += score_to_val[res];
    }
    alert(name + ", your UCAS Tariff points are: " + score);
}