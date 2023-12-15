import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";
import { ActivityService } from "src/activity/activity.service";

export interface HopefulAiResponse {
    text: string;
}

const minResponseTime = 50;
const maxResponseTime = 100;
const successRate = 1;

@Injectable()
export class HopefulAiService {
    constructor(private readonly activityService: ActivityService) {}

    // This method stubs out making a post request to an actual LLM.
    // Instead we just return some dummy text.
    public async makePostRequest(prompt: string, action: string): Promise<HopefulAiResponse> {
        await this.activityService.recordActivity(action, "hopeful-ai");
        const text = await this.generateText(prompt);
        return { text };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async generateText(input: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const responseTime = minResponseTime + Math.random() * (maxResponseTime - minResponseTime);
            setTimeout(() => {
                if (Math.random() < successRate) {
                    resolve(faker.lorem.paragraph());
                } else {
                    reject("Text generation failed");
                }
            }, responseTime);
        });
    }
}
