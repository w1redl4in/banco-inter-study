import 'styled-components';

import { Theme } from './theme/light';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
