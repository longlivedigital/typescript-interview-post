import { Injectable } from "@nestjs/common";
import { HopefulAiResponse, HopefulAiService } from "./hopeful-ai.service";
import CompletionResponse from "./dto/completion-response.dto";
import CompletionRequest from "./dto/completion-request.dto";

const promptTemplates = [
    (input: string) => `${input}\n\n Summarise the above text.`,
    (input: string) => `${input}\n\n TL;DR:`,
    (input: string) => `${input}\n\n Rewrite the above in a few short sentences.`,
];

@Injectable()
export class TextCompletionService {
    constructor(private readonly hopefulAiService: HopefulAiService) {}

    public async summarise(request: CompletionRequest): Promise<CompletionResponse> {
        const choices: string[] = [];

        const choicesPromises = promptTemplates.map((template) => {
            const prompt = template(request.input);
            return this.hopefulAiService.makePostRequest(prompt, "summarise");
        });

        await Promise.allSettled(choicesPromises).then((results) => {
            results
                .filter((r) => r.status === "fulfilled")
                .forEach((r) => choices.push((r as PromiseFulfilledResult<HopefulAiResponse>).value.text));
        });

        return { choices };
    }
}
