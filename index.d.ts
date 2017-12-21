declare module 'ember-metrics/services/metrics' {
  import Service from '@ember/service';
  import { FacebookPixelMetricsAdapter } from 'ember-metrics/metrics-adapters/facebook-pixel';
  import { GoogleAnalyticsMetricsAdapter } from 'ember-metrics/metrics-adapters/google-analytics';
  import { GoogleTagManagerMetricsAdapter } from 'ember-metrics/metrics-adapters/google-tag-manager';
  import { IntercomMetricsAdapter } from 'ember-metrics/metrics-adapters/intercom';
  import { MixpanelMetricsAdapter } from 'ember-metrics/metrics-adapters/mixpanel';
  import { PiwikMetricsAdapter } from 'ember-metrics/metrics-adapters/piwik';
  import { SegmentMetricsAdapter } from 'ember-metrics/metrics-adapters/segment';
  interface AdapterMap {
    segmSegmentent: SegmentMetricsAdapter;
    GoogleAnalytics: GoogleAnalyticsMetricsAdapter;
    FacebookPixel: FacebookPixelMetricsAdapter;
    GoogleTagManager: GoogleTagManagerMetricsAdapter;
    Intercom: IntercomMetricsAdapter;
    Mixpanel: MixpanelMetricsAdapter;
    Piwik: PiwikMetricsAdapter;
  }
  type AdapterName = keyof AdapterMap;

  export default class MetricsService extends Service {
    public enabled: boolean;
    public identify(options: any): void;
    public alias(options: any): void;
    public trackEvent(options: any): void;
    public trackPage(options: any): void;
    public identify(serviceName: AdapterName, options: any): void;
    public alias(serviceName: AdapterName, options: any): void;
    public trackEvent(serviceName: AdapterName, options: any): void;
    public trackPage(serviceName: AdapterName, options: any): void;
  }
}

declare module 'ember-metrics/metrics-adapters/base' {
  import EmberObject from '@ember/object';
  export default class BaseMetricsAdapter extends EmberObject {
    public metrics: any;
    public config: any;
    public toStringExtension?: () => string;
    public identify?: (opts?: any) => void;
    public trackEvent?: (opts?: any) => void;
    public trackPage?: (opts?: any) => void;
    public alias?: (opts?: any) => void;
  }
}

declare module 'ember-metrics/metrics-adapters/facebook-pixel' {
  import BaseMetricsAdapter from 'ember-metrics/metrics-adapters/base';
  export class FacebookPixelMetricsAdapter extends BaseMetricsAdapter {
    public trackEvent: (opts?: any) => void;
    public trackPage: (opts?: any) => void;
  }
}

declare module 'ember-metrics/metrics-adapters/google-analytics' {
  import BaseMetricsAdapter from 'ember-metrics/metrics-adapters/base';
  export class GoogleAnalyticsMetricsAdapter extends BaseMetricsAdapter {
    public trackEvent: (opts?: any) => void;
    public identify: (opts?: any) => void;
    public trackPage: (opts?: any) => void;
  }
}

declare module 'ember-metrics/metrics-adapters/google-tag-manager' {
  import BaseMetricsAdapter from 'ember-metrics/metrics-adapters/base';
  export class GoogleTagManagerMetricsAdapter extends BaseMetricsAdapter {
    public trackEvent: (opts?: any) => void;
    public trackPage: (opts?: any) => void;
  }
}

declare module 'ember-metrics/metrics-adapters/intercom' {
  import BaseMetricsAdapter from 'ember-metrics/metrics-adapters/base';
  export class IntercomMetricsAdapter extends BaseMetricsAdapter {
    public trackEvent: (opts?: any) => void;
    public identify: (opts?: any) => void;
    public trackPage: (opts?: any) => void;
  }
}

declare module 'ember-metrics/metrics-adapters/mixpanel' {
  import BaseMetricsAdapter from 'ember-metrics/metrics-adapters/base';
  export class MixpanelMetricsAdapter extends BaseMetricsAdapter {
    public alias: (opts?: any) => void;
    public trackEvent: (opts?: any) => void;
    public identify: (opts?: any) => void;
    public trackPage: (opts?: any) => void;
  }
}

declare module 'ember-metrics/metrics-adapters/piwik' {
  import BaseMetricsAdapter from 'ember-metrics/metrics-adapters/base';
  export class PiwikMetricsAdapter extends BaseMetricsAdapter {
    public trackEvent: (opts?: any) => void;
    public identify: (opts?: any) => void;
    public trackPage: (opts?: any) => void;
  }
}

declare module 'ember-metrics/metrics-adapters/segment' {
  import BaseMetricsAdapter from 'ember-metrics/metrics-adapters/base';
  export class SegmentMetricsAdapter extends BaseMetricsAdapter {
    public alias: (opts?: any) => void;
    public trackEvent: (opts?: any) => void;
    public identify: (opts?: any) => void;
    public trackPage: (opts?: any) => void;
  }
}
