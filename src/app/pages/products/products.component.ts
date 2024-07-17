import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faChevronDown, faCircleCheck, faChevronUp,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public faSearch = faSearch;
  public faChevronDown = faChevronDown;
  public faCircleCheck = faCircleCheck;
  public faChevronUp = faChevronUp;
  public faCheckCircleRegular = faCheckCircle;
  public faTimes = faTimes;
  public sortOption: any;
  public placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png';
  public productList: Array<any> = [];
  protected http = inject(HttpClient);

  constructor() {
    this.getProductList()
  }

  public getProductList() {
    this.http.get('assets/products.json').subscribe((data: any) => {
      this.getProductListResponse(data)
    })
  }

  public getProductListResponse(res: any) {
    this.productList = res;

  }

  public productSort() {
    if (this.sortOption === 'option1') {
      this.productList = this.productList.sort((a: any, b: any) => {
        return a.name < b.name ? -1 : 1;
      })
    } else {
      this.productList = this.productList.sort((a: any, b: any) => {
        return a.name > b.name ? -1 : 1;
      })
    }

  }
}
