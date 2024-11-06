import { ReportHandler } from 'web-vitals';

import { throttle } from 'lodash';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const throttledOnPerfEntry = throttle(onPerfEntry, 500);
      getCLS(throttledOnPerfEntry);
      getFID(throttledOnPerfEntry);
      getFCP(throttledOnPerfEntry);
      getLCP(throttledOnPerfEntry);
      getTTFB(throttledOnPerfEntry);
    });
  }
};

export default reportWebVitals;
