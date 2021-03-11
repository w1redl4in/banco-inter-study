import 'styled-components';

import { Theme } from './light';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
