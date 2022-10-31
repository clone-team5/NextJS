import { BeforeInsert, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import BaseEntity from './Entity';
import { makeId } from "../utils/helpers";
import { Product } from './Product.ts'
import { User} from './User.ts'
import { Comment } from './Comment.ts'



@Entity("Styles")
export default class Style extends BaseEntity {
    
    @Index()
    @Column({ unique: true })
    styleId: number

    @Index()
    @Column()
    identifier:string

    @Column()
    styleImage: string;

    @Column()
    like: number;

    @Column({ nullable: true, type: "text" })
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.style)
    @JoinColumn({ name: "identifier", referencedColumnName: "identifier"})

    @OneToMany(() => Product, (product) => product.product)
    product: Product[];

    @OneToMany(() => Style, (style) => style.comment)
    style: Style[];


    @BeforeInsert()
    makeId(){
        this.identifier = makeId(7)
    }
}   