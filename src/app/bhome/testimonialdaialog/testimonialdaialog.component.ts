import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-testimonialdaialog',
  templateUrl: './testimonialdaialog.component.html',
  styleUrls: ['./testimonialdaialog.component.css']
})
export class TestimonialdaialogComponent implements OnInit {

  constructor( public home:HomeService) { }

  ngOnInit(): void {
  }
  formGroup =new FormGroup({ // define form grpo with form controles= proparity of object record in create procedue 

    //define each proparity as controler with validation 
        
        userid:new FormControl(''),
     
        Feedback:new FormControl(''),
  
      })
      
      //define variables to save the value from controlers in it
      userid:any=0;
   
      Feedback:any;
      //function save to assign the value of variables
      
      saveItem(){
        debugger
        this.userid=this.formGroup.value.userid;
        this.Feedback=this.formGroup.value.Feedback;
      
     
        // define object to convert the data type of variables to same it in postman
    
        const data2={
          userid:parseInt(this.userid),
          Feedback: this.Feedback.toString(),
        
        
        }
        //send the object to Admin Service to use post method 
        this.home.createTestimoneal(data2);
        window.location.reload(); //reload the page after addd post 
    
      }
    
    
    

}
