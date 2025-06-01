import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../kernel/modules/inputs/components/button/button.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from '../auth/services/user.service';
import { productActions, selectProducts } from '../../core/store/products';
import { IPagination } from '../../core/models/ApiResponse';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { TableComponent } from '../../kernel/modules/listing/components/table/table.component';
import { PageInfo } from '../../core/classes/PageInfo.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [ CommonModule, RouterModule, ButtonComponent, ReactiveFormsModule, FormsModule, TableComponent ],
})
export class HomeComponent implements OnInit {
  private fb = inject(FormBuilder);
  readonly store = inject(Store);
  readonly userService = inject(UserService);
  form: FormGroup = this.initForm();

  data$: Observable<any> = this.store.select(selectProducts);
  param: Partial<IPagination> = new PageInfo();

  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    this.store.dispatch(productActions.getProducts(this.param));
  }

  onChangePageIndex(index: number) {
    console.log('🚀 ~ HomeComponent ~ onChangePageIndex ~ index:', index);
    this.store.dispatch(productActions.changeCurrentPage(index));
  }

  onChangePageSize(itemsPerPage: number):void {
    this.store.dispatch(productActions.changeItemsPerPage(itemsPerPage));
  }


  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  resetAndClose(): void {
    this.form.reset();
  }
}
