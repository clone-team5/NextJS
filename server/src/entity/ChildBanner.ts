import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm"
import BaseEntity from './Entity';
import { makeId } from '../utils/helpers'
​
@Entity("childBanner")
export class ChildBanner extends BaseEntity{
​
    @PrimaryGeneratedColumn()
    childId: number;
​
    @Column()
    childIdentifier : String;
​
    @Column({nullable : false})
    image : String;
​
    @Column({nullable : false})
    name : String;
​
    @BeforeInsert()
    makeIdAndBanner() {
        this.childIdentifier = makeId(7);
    }
​
}