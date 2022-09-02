let Student ={
    
    summaiya:{ 
    math:{
        mid : "30",
        final : "45" ,
        total : "75",
    },
    english: {
        mid : "21",
        final : "48" ,
        total : "69",
    },
    science:{
        mid : "42",
        final : "49" ,
        total : "91",
    }
    },

    fatima:
    {
        math:{
            mid : "41",
            final : "39" ,
            total : "80",
        },
        english : {
            mid : "18",
            final : "45" ,
            total : "63",
        },
        science :{
            mid : "43",
            final : "43" ,
            total : "86",
        }
    },
    
    ali:{
     math:{
        mid : "30",
        final : "40" ,
        total : "70",
    },
    english : {
        mid : "20",
        final : "20" ,
        total : "40",
    },
    science :{
        mid : "30",
        final : "45" ,
        total : "75",
    }
    },

    ahmed :{
        math:{
            mid : "48",
            final : "33" ,
            total : "81",
        },
        english : {
            mid : "30",
            final : "40" ,
            total : "70",
        },
        science :{
           
            mid : "25",
            final : "47" ,
            total : "72 / 100",
        }
    }
};
let Sname = document.getElementById("Sname")
let subj = document.getElementById("Subjects")
let obj= Object.keys(Student);
//console.log(obj);
for (let i = 0; i <obj.length; i++) {
    Sname.innerHTML +=`<option>${obj[i]}</option>`
}

function DropDownb(){
    subj.disabled = false;
    let subject = Object.keys(Student[Sname.value]);

  subj.innerHTML = "";
    for (let i = 0; i < subject.length; i++) {
       subj.innerHTML += `<option>
         ${subject[i]}</option>`};
}

function searchdp(){ 
    row.innerHTML = ''
    let tabl = document.getElementById("tablA");
    tabl.hidden = false;
    let resT =  Student[Sname.value][subj.value] ;
    let res = Object.values(resT);
    for (let a = 0; a < res.length; a++) {
        row.innerHTML += `<td>
          ${res[a]}</td>`};
     }
  

//..........................................................
let nam= document.getElementById("student");
let sub = document.getElementById("subj");
let rowtwo = document.getElementById("rowtwo");

function Search(){
    if(nam.value=="")
    { alert("enter Student name")
}
// else if(nam.value!==obj[i] || sub.value!== obj[i]){
//     alert("wrong input");
// }
else {    
    let tabl = document.getElementById("tabl");
    rowtwo.innerHTML = '';
    tabl.hidden = false;
    // console.log(nam.value);
    // console.log(sub.value);
    let mark = Student[nam.value][sub.value];

    let result = Object.values(mark)
    // console.log(result)
    // rowtwo.innerHTML = "hello";

    for (let i = 0; i < result.length; i++) {
       rowtwo.innerHTML = `<td>
         ${result[0]}</td>
         <td>${result[1]}</td><td>
         ${result[2]}</td>`};
    }

}

// let obj = Object.keys(Student)
// console.log(obj);
