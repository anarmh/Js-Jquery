$(document).ready(function () {

  let students = [];
  if (localStorage.getItem("students")) {
    students = JSON.parse(localStorage.getItem("students"));
  }

  init();

  
  $(".add").click(function () {
    
    let StuName = $(".name").val()
    let StuSurname = $(".surname").val()
    let StuAge = $(".age").val();

    if((StuName=="" || !isNaN(StuName)) || (StuSurname=="" || !isNaN(StuSurname))||StuAge==""){
      alert("Please try again")
      return;
    }
    let id = localStorage.students
      ? ++JSON.parse(localStorage.students).length
      : 1;

    students.push({
      id: id,
      name: StuName,
      surname: StuSurname,
      age: StuAge,
    });

    localStorage.setItem("students", JSON.stringify(students));
    
    init();
  });

  $(document).on('click',".delete", function () {
    let id=parseInt($(this).parents("tr").attr("data-id"));
     students=students.filter(m=>m.id!=id)
     localStorage.setItem("students",JSON.stringify(students))
     init();
   });






  function init() {
    if (students) {
      $(".tbody").empty();
      students.forEach((stu) => {
        $(".tbody").append(`<tr  data-id="${stu.id}"><td>${stu.name}</td>
                <td>${stu.surname}</td>
                <td>${stu.age}</td>
                <td> <button class="btn btn-danger delete">Remove</button> </td>
                <td> <button class="btn btn-success update">Update</button> </td>
                </tr>`);
      });
    }
  }

  $(document).on("click",".update",function(){

    $(".modal").click();
    
    let id = $(this).closest("tr").data("id");
    
    let student = students.find(s => s.id === id);
    $(".modal-name").val(student.name);
    $(".modal-surname").val(student.surname);
    $(".modal-age").val(student.age);
    $(".change").click(function () {
    
      let name = $(".modal-name").val();
      let surname = $(".modal-surname").val();
      let age = $(".modal-age").val();
  
      
      student.name = name;
      student.surname = surname;
      student.age = age;
      if((student.name=="" || !isNaN(student.name)) || (student.surname=="" || !isNaN(student.surname))||student.age==""){
        alert("Please try again")
        return;
      }
  
     
      localStorage.setItem("students", JSON.stringify(students));
  
     
      init();
  
     
      $("#exampleModal").modal("hide");
    });


  })

  
});






    // let listStu = JSON.parse(localStorage.getItem("students"));
    // $(".tbody").empty();
    // if(listStu!=null){
    //   listStu.forEach((stu) => {
    //     $(".tbody").append(`<tr data-id="${stu.id}"><td>${stu.name}</td>
    //       <td>${stu.surname}</td>
    //       <td>${stu.age}</td>
    //       <td> <button class="btn btn-danger delete">Remove</button> </td>
    //       <td> <button class="btn btn-success update">Update</button> </td>
    //       </tr>`);
    //   });
    // }
   




// $(document).ready(function(){

//     addStudents();

//     let students=[];
//     if(localStorage.getItem(`students`)!=null){
//         students=JSON.parse(localStorage.getItem("students"));
//     }
//     $("button").click(function(){

//         let stuName=$(".name").val();
//         let stuSurname=$(".surname").val();
//         let  stuAge=$(".age").val();

//         let stuId=""
//         if(localStorage.students!=null){
//             stuId=++JSON.parse(localStorage.students).length
//         }
//         else{
//             stuId=1
//         }

//         students.push({
//             id:stuId,
//             name:stuName,
//             surname:stuSurname,
//             age:stuAge
//         })

//         localStorage.setItem("students",JSON.stringify(students));

//         let listStu=JSON.parse(localStorage.getItem('students'));

//         $(".tbody").empty();
//         listStu.forEach(stu => {
//           $(".tbody").append(`<tr data-id="${stu.id}">
//           <td>${stu.name}</td>
//           <td>${stu.surname}</td>
//           <td>${stu.age}</td>
//           <td> <button class="btn btn-danger delete">Remove</button> </td>
//           <td> <button class="btn btn-success update">Update</button> </td>
//           </tr>`);
//         });

//         RemoveStu()
//     })

//     function addStudents(){
//         let getStudents=JSON.parse(localStorage.getItem("students"));
//             if(getStudents!=null){
//                 getStudents.forEach(stu => {
//                     $(".tbody").append(`<tr>
//                     <td>${stu.name}</td>
//                     <td>${stu.surname}</td>
//                     <td>${stu.age}</td>
//                     <td> <button class="btn btn-danger delete">Remove</button> </td>
//                     <td> <button class="btn btn-success update">Update</button> </td>
//                   </tr>`)
//                 });
//             }
//     }

//     function RemoveStu(){

//         $(".delete").click(function(){
//            $("tr").remove();
//            deleteStuId=$("tr").atrr("data-id")
//            console.log(deleteStuId);
//         })

//     }
// })
