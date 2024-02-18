import { Injectable } from "@nestjs/common";
import { translate } from "@vitalets/google-translate-api";
import { TranslationRequestInterface } from "./model/translation-request.interface";
import { TranslationResponseInterface } from "./model/translation-response.interface";
import { TranslateOptions } from "@vitalets/google-translate-api/dist/cjs/types";

@Injectable()
export class TranslationService {
  async getTranslation(params: TranslationRequestInterface): Promise<TranslationResponseInterface> {
    const options: TranslateOptions = {to: params.to};

    if (params.from) {
      options.from = params.from;
    }

    const res = await translate(params.text, options);

    const result: TranslationResponseInterface= { original: params.text, translation: res.text, all: res };

    if (res?.raw?.confidence) result.confidence = res.raw.confidence;

    return result;
  }
}
