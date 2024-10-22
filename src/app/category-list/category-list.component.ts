import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ICategories } from '../model/icategories';
import { CategoryService } from '../services/category.service';
import { MessageErrorComponent } from '../message-error/message-error.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, MessageErrorComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  categoryList = signal<ICategories[]>([]);
  categoryServices = inject(CategoryService);

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryServices.getAllCategories().subscribe((data) => {
      const category = data || [];
      this.categoryList.set(category);
    });
  }
}
