import { Injectable } from "@nestjs/common";
import { translate } from "@vitalets/google-translate-api";
import { TranslationRequestInterface } from "./model/translation-request.interface";
import { TranslationResponseInterface } from "./model/translation-response.interface";

@Injectable()
export class TranslationService {
  async getTranslation(params: TranslationRequestInterface): Promise<TranslationResponseInterface> {
    const res = await translate(params.text, { to: "ru" });

    return { original: params.text, translation: res.text, all: res };
  }
}
