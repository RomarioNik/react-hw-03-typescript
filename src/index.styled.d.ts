import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainText: string;
      secondText: string;
      borderColor: string;
      bg: string;
      bgComponent: string;
      bgItems: string;
    };
    shadow: {
      shadowComponent: string;
      shadowButton: string;
    };
  }
}
