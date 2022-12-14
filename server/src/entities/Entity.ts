import { instanceToPlain } from "class-transformer";
import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export default abstract class Entity extends BaseEntity {

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toJSON() {
    return instanceToPlain(this);
  }
}
