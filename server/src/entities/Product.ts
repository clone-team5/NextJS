import basicEntity from './Entity'
import { BeforeInsert, Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from 'typeorm'
import { Category } from './Category';
// import { Exclude, Expose } from 'class-transformer';
import { makeId } from '../../utils/helper';
​
@Entity("products")
export class Product extends basicEntity{
    @Index()
    @Column()
    identifier: string;
​
    @Index()
    @Column()
    name:string;
​
    @Column()
    price:number;
​
    @Column()
    size:number;
​
    @Column()
    releasedDate:Date;
​
    @Column()
    color:string;
​
    @Column()
    likeNumber:number;
​
    @OneToOne(() => Category, (category) => category.products )
    @JoinColumn({name: "identifier", referencedColumnName:"identifier"})
    category: Category[];
​
    @BeforeInsert()
    makeIdAndSlug() {
        this.identifier = makeId(7);
    }
}