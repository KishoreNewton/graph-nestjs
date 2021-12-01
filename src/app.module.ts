import { Module } from '@nestjs/common';
import { GraphModule } from './graph/graph.module';

@Module({
  imports: [GraphModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
