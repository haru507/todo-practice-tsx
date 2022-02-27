import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column('varchar', { length: 20, nullable: false })
  title: string;

  @Column('date', { nullable: false })
  due_date: Date;

  @Column('tinyint', { width: 1, default: 1 })
  status: number;

  @CreateDateColumn()
  readonly created_at?: Date;

  @UpdateDateColumn()
  readonly updated_at?: Date;
}
