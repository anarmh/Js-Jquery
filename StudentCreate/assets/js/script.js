

// $(document).ready(function(){
//     init();

//     let students = [];
//     if(localStorage.getItem('students')){
//         students=JSON.parse(localStorage.getItem("students"));
//     }
//     $("button").click(function(){

//         let StuName= $(".name").val()
//         let StuSurname=$(".surname").val();
//         let StuAge=$(".age").val();
//         let id = (localStorage.students) ? ++(JSON.parse(localStorage.students).length) : 1;
      
//         students.push({
//             id:id,
//             name:StuName,
//             surname:StuSurname,
//             age:StuAge
//         })
        
//         localStorage.setItem("students",JSON.stringify(students));


//       let listStu=JSON.parse(localStorage.getItem('students'));

//       $(".tbody").empty();
//       listStu.forEach(stu => {
//         $(".tbody").append(`<tr><td>${stu.name}</td>
//         <td>${stu.surname}</td>
//         <td>${stu.age}</td></tr>`);
//       });

//     })

//     function init(){
//         if(localStorage.getItem('students')){
//             JSON.parse(localStorage.getItem('students')).forEach(stu => {
//                 $(".tbody").append(`<tr><td>${stu.name}</td>
//                 <td>${stu.surname}</td>
//                 <td>${stu.age}</td></tr>`);
//             });
//             }
//         }

// })


$(document).ready(function(){
  

    let students=[];
    if(localStorage.students){
        students=JSON.parse(localStorage.students);
    }
    $("button").click(function(){
        let stuName=$(".name").val();
        let stuSurname=$(".surname").val();
        let  stuAge=$(".age").val();
        
        let stuId=""
        if(localStorage.students!=null){
            stuId=++JSON.parse(localStorage.students).length
        }
        else{
            stuId=1
        }
      

        students.push({
            id:stuId,
            name:stuName,
            surname:stuSurname,
            age:stuAge
        })

        localStorage.setItem("students",JSON.stringify(students));
        addStundets();
        

    })

    function addStundets(){
        let getStudents=JSON.parse(localStorage.getItem("students"));
            
            $(".tbody").empty()
        getStudents.forEach(stu => {
            $(".tbody").append(`<tr>
            <td>${stu.name}</td>
            <td>${stu.surname}</td>
            <td>${stu.age}</td>
            <td> </td>
            <td> </td>
          </tr>`)
        });
    
    }
})
