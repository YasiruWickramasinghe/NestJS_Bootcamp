import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true, nullable: false})
  name: string;

  @Column({unique: true, nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password,10)
  }
}