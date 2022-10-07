import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getBoards(): Board[] {
    return this.boards;
  }

  getBoard(id: string): Board {
    const board = this.boards.find((board) => board.id === id);

    if (!board) {
      throw new NotFoundException();
    }

    return board;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, content } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      content,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  deleteBoard(id: string): void {
    const foundBoard = this.getBoard(id);
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoard(id);
    board.status = status;

    return board;
  }
}
