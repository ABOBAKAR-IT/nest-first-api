import { Module } from '@nestjs/common';
import { BookModule } from './book/book.modules';


@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
