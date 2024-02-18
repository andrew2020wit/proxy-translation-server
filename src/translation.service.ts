import { Injectable } from "@nestjs/common";
import { translate } from "@vitalets/google-translate-api";
import { TranslationRequestInterface } from "./model/translation-request.interface";
import { TranslationResponseInterface } from "./model/translation-response.interface";
import { TranslateOptions } from "@vitalets/google-translate-api/dist/cjs/types";
import { apiVersionConst } from "./api-version.const";

@Injectable()
export class TranslationService {
  async getTranslation(params: TranslationRequestInterface): Promise<TranslationResponseInterface> {
    const options: TranslateOptions = {to: params.to};

    if (params.from) {
      options.from = params.from;
    }

    const res = await translate(params.text, options);

    const result: TranslationResponseInterface= {
      original: params.text,
      translation: res.text,
      all: res,
      apiVersion: apiVersionConst
    };

    if (res?.raw?.confidence) result.confidence = res.raw.confidence;

    return result;
  }
}
