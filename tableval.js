//Bachelors Table validation & Add Button
document.querySelector('#bachelors-degree-add-button').addEventListener('click',function bachelors(){
    let bachelors_major_subject =  document.querySelector('#bachelors-major-subjects').value;
    let bachelors_yop = document.querySelector('#bachelors-yop').value;
    let bachelors_university = document.querySelector('#bachelors-university').value;
    let bachelors_collage = document.querySelector('#bachelors-collage').value;
    let bachelors_cgpa = document.querySelector('#bachelors-cgpa').value;

    if(bachelors_major_subject.length < 3 || bachelors_university.length < 3 || bachelors_collage.length < 3 || bachelors_cgpa.length < 3 || bachelors_yop.length < 3)
    {
        console.log('Invalid Bachelors Input');
    }
    else
    {
        const h2 = document.getElementById("bachelors-degree-data");
        let table = ` <tr data-toggle="collapse" class="collapsed">
                                        <td class="text-white">Bachelor's Degree</td>
                                        <td><input id="bachelors-major-subjects" class="form-control" type="text"></td>
                                        <td><input id="bachelors-university" class="form-control" type="text"></td>
                                        <td><input id="bachelors-collage" class="form-control" type="text"></td>
                                        <td><input id="bachelors-cgpa" class="form-control" type="text"></td>
                                        <td><input id="bachelors-yop" class="form-control" type="text"></td>
                <td>
                  <i class="fa-solid fa-trash-can text-white bachelors-degree-delete-button"></i>
                  </td>
                                    </tr>
       `
       h2.insertAdjacentHTML("beforeend", table);
    }
});

//Masters Table validation & Add Button
document.querySelector('#masters-degree-add-button').addEventListener('click',function bachelors(){
    let major_subject =  document.querySelector('#master-major-subject').value;
    let yop = document.querySelector('#master-yop').value;
    let university = document.querySelector('#master-university').value;
    let collage = document.querySelector('#master-collage').value;
    let cgpa = document.querySelector('#master-cgpa').value;

    if(major_subject.length < 3 || university.length < 3 || collage.length < 3 || cgpa.length < 3 || yop.length < 3)
    {
        console.log('Invalid Bachelors Input');
    }
    else
    {
        const h2 = document.getElementById("masters-degree-data");
        let table = ` <tr data-toggle="collapse" class="collapsed">
        <td class="text-white">Master's Degree</td>
        <td><input class="form-control" type="text"></td>
                                      <td><input class="form-control" type="text"></td>
                                      <td><input class="form-control" type="text"></td>
                                      <td><input class="form-control" type="text"></td>
                                      <td><input class="form-control" type="text"></td>
              <td>
                <i class="fa-solid fa-trash-can text-white masters-degree-delete-button"></i>
              </td>
                                  </tr>
     `
       h2.insertAdjacentHTML("beforeend", table);
    }
});

//phd Validation & add button functions
document.querySelector('#phd-add-button').addEventListener('click',function bachelors(){
    let major_subject =  document.querySelector('#phd-major-subject').value;
    let yop = document.querySelector('#phd-yop').value;
    let university = document.querySelector('#phd-university').value;
    let collage = document.querySelector('#phd-collage').value;
    let cgpa = document.querySelector('#phd-cgpa').value;

    if(major_subject.length < 3 || university.length < 3 || collage.length < 3 || cgpa.length < 3 || yop.length < 3)
    {
        console.log('Invalid Bachelors Input');
    }
    else
    {
        let table = ` <tr data-toggle="collapse" class="collapsed">
        <td class="text-white">PHD</td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td>
           <i class="fa-solid fa-trash-can text-white phd-delete-button"></i>
        </td>
        </tr>`

      document.getElementById('phd-data').insertAdjacentHTML("beforeend", table);
    }
});


//publication add button validation
document.querySelector('#publication-add-button').addEventListener('click',function(){
    let id = document.querySelector('#publication-id').value;
    let role = document.querySelector('#publication-role').value;
    let number_author = document.querySelector('#publication-no-author').value;
    let book_title = document.querySelector('#publication-book-title').value;
    let publisher = document.querySelector('#publication-publisher').value;
    let yop = document.querySelector('#publication-yop').value;

    if( id.length < 3 || role.length < 3 || number_author.length < 3 || book_title.length < 3 || publisher.length < 3 || yop.length < 3)
    {
        console.log('Invalid Bachelors Input');
    }
    else
    {
        const h2 = document.getElementById("publication-data");
        let table = 
         ` <tr data-toggle="collapse" class="collapsed">
                                     <td><input data-title="Title" class="form-control" type="text"></td>
                                     <td><select data-title="Role ?" class="form-control" id="role">
                                             <option>-Select-</option>
                                             <option value="Edited">Edited</option>
                                             <option value="Authored">Authored</option>
                                         </select>
                                     </td>
                                     <td><input data-title="No.-of-Authors" class="form-control" type="text">
                                     </td>
                                     <td><input data-title="Book-Title" class="form-control" type="text"></td>
                                     <td><input data-title="Publisher" class="form-control" type="text"></td>
                                     <td><input data-title="Year-of-publication" class="form-control"
                                             type="text">
                                     </td>
                                     <td> <i class="fa-solid fa-trash-can text-white h4 publication-delete-button" data-title="Action"></i></td>
                                 </tr>
        `
        h2.insertAdjacentHTML("beforeend", table);
    }
});

//Research Paper add button validation
document.querySelector('#research-add-button').addEventListener('click',function(){
    let title = document.querySelector('#research-title').value;
    let research_role = document.querySelector('#research-role').value;
    let research_journal_name = document.querySelector('#research-journal-name').value;
    let research_volume_year = document.querySelector('#research-volume-year').value;
    let research_number = document.querySelector('#research-number').value;
    let research_catagory = document.querySelector('#research-catagory').value;
    
    if( title.length < 3 || research_role.length < 3 || research_journal_name.length < 3 || research_volume_year.length < 3 || research_number.length < 3 || research_catagory.length < 3 )
    {
        console.log('Invalid Bachelors Input');
    }
    else
    {
        const h2 = document.getElementById("research-data");
        let table = `               
        <tr data-toggle="collapse" class="collapsed">
        <td><input data-title="Title" class="form-control" type="text"></td>
        <td><select data-title="Role-?" class="form-control" id="role">
                <option>-Select-</option>
                <option value="Sole">Sole</option>
                <option value="Author">Author</option>
            </select>
        </td>
        <td><input data-title="Journal-name" class="form-control" type="text"></td>
        <td><input data-title="Volume-year" class="form-control" type="text"></td>
        <td><input data-title="Number" class="form-control" type="text"></td>
        <td><input data-title="Category" class="form-control" type="text">
        </td>
        <td class="p-2 !important"> <i class="fa-solid fa-trash-can text-white h4 research-delete-button" data-title=" Action"></i> </td>
        </tr>
        `
        h2.insertAdjacentHTML("beforeend", table);
    }
});

//achivement add button validation
document.querySelector('#achievement-add-button').addEventListener('click',function(){

    let achievement_type = (document).querySelector('#achievement-type').value;
    let achievement_achname = document.querySelector('#achievement-achname').value;
    let achievement_organization = document.querySelector('#achievement-organization').value;
    let achievement_org_type = document.querySelector('#achievement-org-type').value;
    let achievement_place = document.querySelector('#achievement-place').value;
    let achievement_data = document.querySelector('#achievement-data').value;
    let achievement_certificates = document.querySelector('#achievement-certificates').value;

    if( achievement_type.length <3 || achievement_achname.length <3 || achievement_organization.length <3 || achievement_org_type.length <3 || achievement_place.length < 3 || achievement_data < 3 || achievement_certificates.length <3 )
    {
        console.log('Invalid Bachelors Input');
    }
    else
    {
        let table = `   <tr data-toggle="collapse" class="collapsed">
        <td><select class="form-control">
          <option>Select</option>
          <option>Award</option>
          <option>Publication</option>
        </select></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="date"></td>
        <td><input class="form-control" type="file"></td>
        <td class="p-2 !important"><i class="fa-solid fa-trash-can text-white h4 achievement-delete-button"></i></td>
        </tr>
        `
        document.getElementById('achievement-data').insertAdjacentHTML("beforeend", table);
    }
});

//TEACHING EXPERIENCE add button validation
document.querySelector('#teaching-experience-add-button').addEventListener('click',function(){
    let work_experience_university = document.querySelector('#work-experience-university').value;
    let work_experience_subject = document.querySelector('#work-experience-subject').value;
    let work_experience_program = document.querySelector('#work-experience-program').value;
    let work_experience_designation = document.querySelector('#work-experience-designation').value;
    let work_experience_from = document.querySelector('#work-experience-from').value;
    let work_experience_to = document.querySelector('#work-experience-to').value;
    let work_experience_dot = document.querySelector('#work-experience-dot').value;

    if( work_experience_university.length < 3 || work_experience_subject.length < 3 || work_experience_program.length < 3 || work_experience_designation.length < 3 || work_experience_from.length <3 || work_experience_to.length <3 || work_experience_dot.length < 3 )
    {
        console.log('Invalid Bachelors Input');
    }
    else
    {
        let table = ` <tr data-toggle="collapse" class="collapsed">
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="date"></td>
        <td><input class="form-control" type="date"></td>
        <td><input class="form-control" type="text"></td>
        <td class="p-2 !important"><i class="fa-solid fa-trash-can text-white h4 teaching-experience-delete-button"></i></td>
        </tr>
        `
        document.getElementById('teaching-experience-data').insertAdjacentHTML("beforeend", table);
    }
})

//INDUSTRAIAL EXPERIENCE add button validation
document.querySelector('#industrial-experience-add-button').addEventListener('click',function(){
    let industrial_experience_university = document.querySelector('#industrial-experience-university').value;
    let industrial_experience_subject    = document.querySelector('#industrial-experience-subject').value;
    let industrial_experience_program    = document.querySelector('#industrial-experience-program').value;
    let industrial_experience_designation = document.querySelector('#industrial-experience-designation').value;
    let industrial_experience_from = document.querySelector('#industrial-experience-from').value;
    let industrial_experience_to = document.querySelector('#industrial-experience-to').value;
    let industrial_experience_dot = document.querySelector('#industrial-experience-dot').value;

    if(industrial_experience_university.length < 3 || industrial_experience_subject.length < 3 || industrial_experience_program.length < 3 || industrial_experience_designation.length < 3 || industrial_experience_from.length < 3 || industrial_experience_to.length < 3 || industrial_experience_dot.length < 3 )
    {
        console.log('Invalid Bachelors Input');
    }
    else
     {
        let table = ` <tr data-toggle="collapse" class="collapsed">
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="text"></td>
        <td><input class="form-control" type="date"></td>
        <td><input class="form-control" type="date"></td>
        <td><input class="form-control" type="text"></td>
        <td class="p-2 !important"><i class="fa-solid fa-trash-can text-white h4 industrial-experience-delete-button"></i></td>
        </tr>
       `

        document.getElementById('industrial-experience-data').insertAdjacentHTML("beforeend", table);
     }


});




//********************************DELETE BTN FOR TABLE***************************************** */
document.addEventListener('click', function(event){
    let element = event.target;
  
    //Bachelors table Delete event
        if (event.target.matches('.bachelors-degree-delete-button')) 
          {
            console.log("Bachelor Degree Delete Btn");
            element.closest('tr').remove();
          }
    //Masters table Delete event
        if (event.target.matches('.masters-degree-delete-button')) 
          {
            console.log("Masters Degree Delete Btn");
            element.closest('tr').remove();
          }
    //PHD table Delete event
        if (event.target.matches('.phd-delete-button')) 
          {
            console.log("Phd Degree Delete Btn");
            element.closest('tr').remove();
          }
     //Professional certificate table Delete event
        if (event.target.matches('.professionaL-certification-delete-button')) 
          {
            console.log("Professional certificate Delete Btn");
            element.closest('tr').remove();
          }
     //Achievement table Delete event
        if (event.target.matches('.achievement-delete-button')) 
          {
            console.log("achivenemt certificate Delete Btn");
            element.closest('tr').remove();
          }
     //Publication table Delete event
        if (event.target.matches('.publication-delete-button')) 
          {
            console.log("Publication Delete Btn");
            element.closest('tr').remove();
          }
     //Research table Delete event
        if (event.target.matches('.research-delete-button')) 
          {
            console.log("Research delete button");
            element.closest('tr').remove();
          }
     //Industrail Experience table Delete event
        if (event.target.matches('.industrial-experience-delete-button')) 
          {
            console.log("Industrial experience delete button");
            element.closest('tr').remove();
          }
    //Teaching Experience table Delete event
        if (event.target.matches('.teaching-experience-delete-button')) 
          {
            console.log("Teaching experience delete button");
            element.closest('tr').remove();
          }
    });
  