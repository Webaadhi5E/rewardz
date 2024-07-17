import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faChevronDown, faCircleCheck, faChevronUp } from '@fortawesome/free-solid-svg-icons';
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

  public getProductListResponse(resp: any) {
    this.productList = resp;
    console.log(this.productList);

  }
}
