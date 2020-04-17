import 'i18next';

import { translations } from './i18n';

type TranslationsType = typeof translations;
export type LanguageKeys = keyof TranslationsType;
type TranslationKeys = keyof TranslationsType['en']['translation'];

declare module 'i18next' {
  export interface i18n {
    changeLanguage(lng: LanguageKeys, callback?: Callback): Promise<TFunction>;
  }

  export interface TFunction {
    // typed key values
    <
      TResult extends TFunctionResult = string,
      TInterpolationMap extends object = StringMap
    >(
      key: TranslationKeys,
      options?: TOptions<TInterpolationMap> | string,
    ): TResult;
  }
}
