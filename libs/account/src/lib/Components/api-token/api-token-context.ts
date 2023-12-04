import * as React from 'react';
import { TApiContext } from 'Types';
// @ts-expect-error fix this
const ApiTokenContext = React.createContext<TApiContext>({});

export default ApiTokenContext;
