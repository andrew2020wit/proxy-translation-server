import { TranslationService } from "./translation.service";
import { TranslationRequestInterface } from "./model/translation-request.interface";
import { TranslationResponseInterface } from "./model/translation-response.interface";
export declare class AppController {
    private readonly translationService;
    constructor(translationService: TranslationService);
    translate(params: TranslationRequestInterface): Promise<TranslationResponseInterface>;
}
