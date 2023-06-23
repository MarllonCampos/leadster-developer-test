import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      'blue-50': string;
      'blue-100': string;
      'blue-200': string;
      text: string;
      shadow: string;
    };
  }
}
