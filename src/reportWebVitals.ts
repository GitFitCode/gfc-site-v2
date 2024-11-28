import { throttle } from "lodash";
import { Metric, onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    const throttledOnPerfEntry = throttle(onPerfEntry, 500);
    onCLS(throttledOnPerfEntry);
    onFCP(throttledOnPerfEntry);
    onINP(throttledOnPerfEntry);
    onLCP(throttledOnPerfEntry);
    onTTFB(throttledOnPerfEntry);
  }
};

export default reportWebVitals;
