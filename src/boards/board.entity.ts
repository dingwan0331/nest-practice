import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { BoardStatus } from './board-status-enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  status: BoardStatus;
}
