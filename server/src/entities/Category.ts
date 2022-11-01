import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn } from "typeorm"
import BaseEntity from './Entity';

@Entity("categorys")
export class Category extends BaseEntity{

    // 카테고리 이해 불가능
    @PrimaryGeneratedColumn()
    categoryId: number;

    // 관계 : product 1:N category

}