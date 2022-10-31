import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm"
import BaseEntity from './Entity';
import { makeId } from '../utils/helpers'
​
@Entity("mainBanner")
export class MainBanner extends BaseEntity{
​
    @PrimaryGeneratedColumn()
    mainId: number;
​
    @Column()
    mainIdentifier : String;
​
    @Column({nullable : false})
    image : String;
​
    
    @BeforeInsert()
    makeIdAndBanner() {
        this.mainIdentifier = makeId(7);
    }
​
}