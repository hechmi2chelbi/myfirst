import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], nameSearch: string, emailSearch: string, companySearch: string){
    if (items && items.length){
    return items.filter(item =>{
    if (nameSearch && item.title.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
    return false;
    }
    if (emailSearch && item.product_type.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1){
    return false;
    }
    if (companySearch && item.entry_date.toLowerCase().indexOf(companySearch.toLowerCase()) === -1){
    return false;
    }
    return true;
    })
    }
    else{
    return items;
    }
   }

}
