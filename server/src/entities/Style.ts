import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn } from "typeorm"
import BaseEntity from './Entity';
import { Product } from "./Product";
import {User} from './User';


@Entity("styles")
export class Style extends BaseEntity{

    @PrimaryGeneratedColumn()
    stylePostId : string;

    @Column()
    profileImg : string;

    @Index()
    @Column({type:'text', nullable:false})
    hashtag : String;

    @Column()
    styleImg : String;

    @Column({type:'text', nullable:false})
    content : String;

    @Column({default:0})
    likecount : number;

    @Column()
    productId : string;

    @Column()
    userId : string;

    @ManyToOne(() => Product, (product) => product.styles)
    @JoinColumn({ name: "productId", referencedColumnName: "productId" })
    product: Product;

    @ManyToOne(() => User, (user) => user.styles)
    @JoinColumn({ name: "userId", referencedColumnName: "userId" })
    user: User;

}
