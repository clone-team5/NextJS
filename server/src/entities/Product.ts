import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import BaseEntity from './Entity';
import { Style } from "./Style";
import {User} from './User';


@Entity("products")
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    productId: number;

    @Index()
    @Column()
    title: string;

    @Column({ type: 'text', nullable: false })
    content: string | null;

    @Column({nullable : true})
    imageUrl: string | null;

    @Column({default: 0})
    likecount: number | null;

    @Column()
    userId: String;

    @ManyToOne(() => User, (user) => user.product)
    @JoinColumn({ name: "userId", referencedColumnName: "userId" })
    user: User;

    @OneToMany(() => Style, (style) => style.product)
    styles: Style [] ;

    // ?
    // @Column()
    // categoriesId: number;
    
}