import { TranslationRequestInterface } from "./model/translation-request.interface";
import { TranslationResponseInterface } from "./model/translation-response.interface";
export declare class TranslationService {
    getTranslation(params: TranslationRequestInterface): Promise<TranslationResponseInterface>;
}
