import { IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, Index, BeforeInsert, OneToMany } from "typeorm"
import BaseEntity from './Entity';
import bcrypt from 'bcryptjs';
import {Product} from './Product';
import { Style } from './Style';
import { makeId } from '../utils/helpers'

@Entity("user")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    userId: number

    @Index()
    @IsEmail(undefined, { message: "이메일 주소가 잘못되었습니다." })
    @Length(1, 255, { message: "이메일 주소는 비워둘 수 없습니다." })
    @Column({ unique: true })
    email: String;

    @Index()
    @Column({ unique: false })
    identifier: String;

    @Index()
    @Length(3, 32, { message: "사용자 이름은 3자 이상이어야 합니다." })
    @Column({ unique: false })
    nickname: string; 

    @Column({nullable : false})
    password : String;

    @Column({nullable : true})
    profileImg :String | null

    @Column({nullable : true})
    refreshToken :String | null

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6)
    }

    @OneToMany(() => Product, (product) => product.user)
    product: Product[]

    @OneToMany(() => Style, (styles) => styles.user)
    styles: Style[]

    @BeforeInsert()
    makeIdAndBanner() {
        this.identifier = makeId(7);
    }
}


// import { IsEmail, Length } from "class-validator";
// import { Entity, PrimaryGeneratedColumn, Column, Index, BeforeInsert, OneToMany } from "typeorm"
// import BaseEntity from './Entity';
// import bcrypt from 'bcryptjs';
// import {Product} from './Product';
// import { Style } from './Style';
// import { makeId } from '../utils/helpers'
// ​
// @Entity("user")
// export class User extends BaseEntity{
// ​
//     @PrimaryGeneratedColumn()
//     userId: number
// ​
//     @Index()
//     @IsEmail(undefined, { message: "이메일 주소가 잘못되었습니다." })
//     @Length(1, 255, { message: "이메일 주소는 비워둘 수 없습니다." })
//     @Column({ unique: true })
//     email: String;
// ​
//     @Index()
//     @Column({ unique: false })
//     identifier: String;
// ​
//     @Index()
//     @Length(3, 32, { message: "사용자 이름은 3자 이상이어야 합니다." })
//     @Column({ unique: false })
//     nickname: string
// ​
//     @Column({nullable : false})
//     password : String
// ​
//     @Column({nullable : true})
//     profileImg :String | null
// ​
//     @Column({nullable : true})
//     refreshToken :String | null
// ​
//     @BeforeInsert()
//     async hashPassword() {
//         this.password = await bcrypt.hash(this.password, 6)
//     }
// ​
//     @OneToMany(() => Product, (product) => product.user)
//     product: Product[]
// ​
//     @OneToMany(() => Style, (styles) => styles.user)
//     styles: Style[]
// ​
//     @BeforeInsert()
//     makeIdAndBanner() {
//         this.identifier = makeId(7);
//     }
// }
