/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { createReactComponent } from './react-component-lib';

import { JSX } from '@iot-app-kit-visualizations/core';

import { defineCustomElements, applyPolyfills } from '@iot-app-kit-visualizations/core/dist/loader';

applyPolyfills().then(() => defineCustomElements());
export const LineChart = /*@__PURE__*/createReactComponent<JSX.ScLineChart, HTMLScLineChartElement>('sc-line-chart');
export const ScatterChart = /*@__PURE__*/createReactComponent<JSX.ScScatterChart, HTMLScScatterChartElement>('sc-scatter-chart');
export const BarChart = /*@__PURE__*/createReactComponent<JSX.ScBarChart, HTMLScBarChartElement>('sc-bar-chart');
export const StatusTimeline = /*@__PURE__*/createReactComponent<JSX.ScWebglContext, HTMLScWebglContextElement>('sc-status-timeline');
export const WebglContext = /*@__PURE__*/createReactComponent<JSX.ScWebglContext, HTMLScWebglContextElement>('sc-webgl-context');
