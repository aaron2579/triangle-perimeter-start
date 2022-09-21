// Triangle Perimeter Assignment Start Code

// Determine Perimeter Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
    // Get Vertices Inputs
    let XA = +document.getElementById('X-A').value;
    let YA = +document.getElementById('Y-A').value;
    let XB = +document.getElementById('X-B').value;
    let YB = +document.getElementById('Y-B').value;
    let XC = +document.getElementById('X-C').value;
    let YC = +document.getElementById('Y-C').value;

    // Calculate Side Lengths
    let AB = dist(XA, YA, XB, YB)
    let AC = dist(XA, YA, XC, YC)
    let BC = dist(XB, YB, XC, YC)

    // Calculate & Output Side and Perimeter 
    document.getElementById("AB-ans").innerHTML = AB
    document.getElementById("AC-ans").innerHTML = AC
    document.getElementById("BC-ans").innerHTML = BC
    document.getElementById("perimeter-ans").innerHTML = AB+AC+BC
}

function dist(xone, yone, xtwo, ytwo) {
    return Math.sqrt((xtwo - xone) ** 2 + (ytwo-yone) ** 2);
}
