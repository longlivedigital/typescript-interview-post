import { Body, Controller, Post } from "@nestjs/common";
import { CreateSummariseDto } from "./dto/create-summarise.dto";

@Controller("summarise")
export class SummariseController {
    @Post()
    postSummarise(@Body() createSummariseDto: CreateSummariseDto) {
        return {
            text: createSummariseDto.summariseText,
        };
    }
}
