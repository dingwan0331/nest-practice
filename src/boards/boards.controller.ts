import { Body, Controller, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('content') content: string,
  ): Board {
    return this.boardsService.createBoard(title, content);
  }
}
