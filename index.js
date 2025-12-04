function ageCalculator() {
    var input = document.getElementById("input").value;

    var ageDate = new Date(input);
    var nowDate = new Date();
    var diff = nowDate - ageDate;

    var years = Math.floor((diff / (1000 * 60 * 60 * 24 * 30.44 * 12)));
    
    var months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30.44))%12);
    var days = Math.floor((diff / (1000 * 60 * 60 * 24))%30.44);
    var hours = Math.floor((diff / (1000 * 60 * 60))%24);
    var minutes = Math.floor((diff / (1000 * 60 ))%60);
    var seconds = Math.floor((diff / 1000))%60;

    document.getElementById("result").innerHTML = `
        <p><b>Years:</b> ${years}</p>
        <p><b>Months:</b> ${months}</p>
        <p><b>Days:</b> ${days}</p>
        <p><b>Hours:</b> ${hours}</p>
        <p><b>Minutes:</b> ${minutes}</p>
        <p><b>Seconds:</b> ${seconds}</p>
    `;
}
