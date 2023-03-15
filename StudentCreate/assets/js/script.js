$(document).ready(function () {
  init();

  let students = [];
  if (localStorage.getItem("students")) {
    students = JSON.parse(localStorage.getItem("students"));
  }
  $("button").click(function () {
    let StuName = $(".name").val();
    let StuSurname = $(".surname").val();
    let StuAge = $(".age").val();
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

    let listStu = JSON.parse(localStorage.getItem("students"));

    $(".tbody").empty();
    if(listStu!=null){
      listStu.forEach((stu) => {
        $(".tbody").append(`<tr data-id="${stu.id}"><td>${stu.name}</td>
          <td>${stu.surname}</td>
          <td>${stu.age}</td>
          <td> <button class="btn btn-danger delete">Remove</button> </td>
          <td> <button class="btn btn-success update">Update</button> </td>
          </tr>`);
      });
    }
   
    RemoveStu()
  });

  function init() {
    if (localStorage.getItem("students")) {
      JSON.parse(localStorage.getItem("students")).forEach((stu) => {
        $(".tbody").append(`<tr  data-id="${stu.id}"><td>${stu.name}</td>
                <td>${stu.surname}</td>
                <td>${stu.age}</td>
                <td> <button class="btn btn-danger delete">Remove</button> </td>
                <td> <button class="btn btn-success update">Update</button> </td>
                </tr>`);
      });
    }
  }
  function RemoveStu() {
    $(".delete").click(function () {
     let id=parseInt($(this).parents("tr").attr("data-id"));
      students=JSON.parse(localStorage.getItem("students"))
      let result=students.filter(m=>m.id!=id)
      localStorage.setItem("students",JSON.stringify(result))
      $(this).parents("tr").remove();
    });
  }
});

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
