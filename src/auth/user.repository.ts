import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async craeteUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    try {
      const { username, password } = authCredentialDto;
      const user = this.create({ username, password });

      await this.save(user);
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
