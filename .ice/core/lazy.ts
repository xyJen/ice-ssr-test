import { lazy as reactLazy } from 'react';

export function lazy(dynamicImport, isRouteComponent?: boolean): any {
  if (isRouteComponent) {
    return {
      __LOADABLE__: true,

      dynamicImport,
    };
  } else {
    return reactLazy(dynamicImport);
  }
}
