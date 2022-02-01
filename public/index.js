var students = [
    {
        lname: "Perez",
        name: "Lince",
        age: "31",
        birthday: {
            year: 1990,
            month: "August",
            day: 05
        },
        career: "IDYGS"
    }
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++) {
    var temp1 = document.getElementById("tbodytemp1").content.cloneNode(true);
    var tdnum = temp1.querySelector("span[name='tbodynumber']");
    var tdname = temp1.querySelector("span[name='tbodyname']");
    var tdage = temp1.querySelector("span[name='tbodyage']");
    var tdcareer = temp1.querySelector("span[name='tbodycareer']");

    
    tdnum.innerText = i + 1;
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText = students[i].age;
    tdcareer.innerText = students[i].career

    table.append(temp1);
}