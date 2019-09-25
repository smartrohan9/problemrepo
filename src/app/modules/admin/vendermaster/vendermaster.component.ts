import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { VendermasterService } from '../../../Shared/vendermaster.service';
import { VenderInformation } from 'src/app/model/VenderInformation.interface';

@Component({
  selector: 'app-vendermaster',
  templateUrl: './vendermaster.component.html',
  styleUrls: ['./vendermaster.component.scss']
})
export class VendermasterComponent implements OnInit {
//  productprovider: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
 form:FormGroup;
  
  constructor(public vendermaster:VendermasterService,public fb:FormBuilder) { }
//   allStateName : State[];
//   allDistrictName : District[];
 currentvenderinfo : VenderInformation= {
     vendorId:'',vendorName:'',state:'', district:'',vendorAddress:'',vendorContactNumber:null, vendorEmail:'',vendorStatus:'', vendorPincode:null,

  }
 
  ngOnInit() {
   // this.getAllStateName();
this.form=this.fb.group({
  vendorname:['',
  [Validators.required,
   Validators.maxLength(12),
   Validators.minLength(3),
   Validators.pattern('[a-zA-Z]*')
  
  ]

  ],
  vendorcontactno:['',
  [Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
    Validators.pattern('[0-9]*')
   
   ]
 
],
vendorPincode:['',
    [Validators.required,
  
    ]
  ],
  vendorAddress:['',
[Validators.required,
  
]
],
email:['',
[Validators.required,
  Validators.maxLength(20),
  Validators.minLength(5),


]

],
state:['',
[Validators.required,
  
]

],
district:['',
[Validators.required,
  
]

],
status:['',
[Validators.required,
  
]

],

})
  }
public haserror = (controlName:string,errorName:string)=>{
return this.form.controls[controlName].hasError(errorName);

}

  // form: FormGroup = new FormGroup({
  //   $key:new FormControl('null'),
  //   vendorname:new FormControl(''),
  //   email:new FormControl(''),
  //   vendorcontactno:new FormControl(''),
  //  // productprovider:new FormControl(''),
  //  vendorPincode:new FormControl(''),
  //   vendorAddress:new FormControl(''),
  //   status:new FormControl(''),
  //   state:new FormControl(''),
  //   district:new FormControl(''),

  // }); 

    save(venderinfo: VenderInformation) {

          console.log(venderinfo);
          console.log('sasdssdw')
          console.log(venderinfo);
          // if(allvenderinfo.vendorId == null){
        
          this.vendermaster.savedata(venderinfo).subscribe(venderinfo=>{this.save;this.reset();});
          // console.log(venderinfo);
      }
      reset(){
        this.vendermaster.allvenderinfo={vendorId:null,vendorName:'',state:'',district:null,vendorAddress:'', vendorContactNumber:null,vendorEmail:'',vendorStatus:'',vendorPincode:null}; }
       
    }


    //    save(vm: VenderInformation) {

//  console.log('sadfasdfavasdvasdv')
//   this.vendermaster.savedata(vm).subscribe(
//      (data:VenderInformation[])=>{this.allvenderinfo=data});
//        console.log(this.save);
//       console.log('sadfasdfavasdvasdv')
//    }
//   //   
  // state1:State;
  // getstatedata(state:State)
  // {
  //   this.state1=state;
  // }
  // district1:District;
  
  //   getdistrictdata(district:District){
  //     this.district1=district;
  // }
  //  save(allvenderinfo: VenderInformation) {
  //    allvenderinfo.state=this.state1;
  //    allvenderinfo.district=this.district1
  //     console.log(allvenderinfo);
  //     console.log('sasdssdw')
  //     console.log(allvenderinfo);
  //     // if(allvenderinfo.vendorId == null){
  //       console.log('ssssssssss');
  //     this.vendermaster.savedata(allvenderinfo).subscribe((data)=>{this.venderinfo;});
  //     //}
      //console.log(this.save);
      
      //console.table(this.venderinfo);
     // this.vendermaster.savedata(vm).subscribe((data:VenderInformation[])=>{this.allvenderinfo=data});
      //console.log(this.save);
    //  if (allvenderinfo.vendorId == null) {
    //     this.vendermaster.savedata(allvenderinfo).subscribe((data)=>{this.venderinfo;});
    //  }
    //
   
//   getAllStateName(){
//     this.vendermaster.getStateName().subscribe(
//       (data:State[])=>{
//         console.log(data);
//         this.allStateName=data;
//         console.log(this.allStateName);
//         console.table(this.allStateName);
//       }
//     )
//   }
// getStateById(stateId : number)
//   {
//     console.log(stateId);
//     this.vendermaster.getStateById(stateId).subscribe(
//       (data:District[])=>{
//         console.log("district get"); 
//         console.log(data);
//         this.allDistrictName=data;
//         console.log(this.allDistrictName);
//         console.table(this.allDistrictName);


//       }
//     )
//   }
//   getdistrict(dist){
//     console.log("hello")
    
    
//     this.vendermaster.allvenderinfo.district=Object.assign({},dist);
//    console.log(this.vendermaster.allvenderinfo.district);
//    //this.vendermaster.allvenderinfo.state=this.vendermaster.allvenderinfo.district.state.stateName;
  // console.log(this.vendermaster.allvenderinfo.state)
   
// getstate(st)
// {
// console.log(st.state);
// this.vendermaster.allvenderinfo.state=Object.assign({},st);
// console.log(this.vendermaster.allvenderinfo.state);

// }
