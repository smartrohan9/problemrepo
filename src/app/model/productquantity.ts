import{AbstractControl} from '@angular/forms';
import { isError } from 'util';


export function productquantity(control:AbstractControl)
    {
     
      const qt=control.value;
       const tq=control.root.get('currentStock');
      
       if(tq)
      {
       
        const totalQ=tq.value;
        
          if(totalQ<=qt)
          {
          
            return{ isError:true};
            
          }
      }
      return null;
    } 