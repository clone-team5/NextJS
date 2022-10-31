import { BeforeInsert, Column, CreateDateColumn, Entity, Exclusion, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, UpdateDateColumn } from "typeorm";
import {Exclude,Expose} from 'class-transformer'
import { makeId } from "../utils/helpers";
import { Product } from './Product.ts'

export default class Category {
    @Index()
    @Column()
    categoryId:number

    @Index()
    @Column()
    identifier:string

    @Column()
    Brand:string

    @Column()
    condition:string

    @Column()
    gender:boolean

    @Column()
    size:number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @OneToOne(()=> Products,(product)=>product.category)
    @JoinColumn({name:"identifier",referencedColumnName:"identifier"})
    products:Product[]

    @BeforeInsert()
    makeId(){
        this.identifier = makeId(7)
    }
}