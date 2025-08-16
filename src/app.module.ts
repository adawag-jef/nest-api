import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [PostModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule { }
