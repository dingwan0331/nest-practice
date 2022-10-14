import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status-enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, content } = createBoardDto;

    const board = this.create({
      title: title,
      content: content,
      status: BoardStatus.PUBLIC,
    });

    return await this.save(board);
  }

  async updateBoardStatus(board: Board, status: BoardStatus): Promise<Board> {
    board.status = status;

    const result = board.save();
    return result;
  }
}
