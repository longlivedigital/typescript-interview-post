import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ActivityModule } from "./activity/activity.module";
import { TextCompletionModule } from "./text-completion/text-completion.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SummariseModule } from './summarise/summarise.module';

@Module({
    imports: [ActivityModule, TextCompletionModule, PrismaModule, SummariseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
