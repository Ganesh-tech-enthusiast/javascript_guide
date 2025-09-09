//creating a arrow function inside another funtion

//creating object
let students = {
    CLAss:"te computer",
    stud_names: ["ganesh","pratik","om","pranav"],
    //creating function inside object 
    show_information: function (){
        this.stud_names.forEach(elements =>{
            console.log(elements + " is in " + this.CLAss);
            
        });
    }
}
//calling the function
students.show_information();