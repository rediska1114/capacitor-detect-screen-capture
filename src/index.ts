import { registerPlugin } from '@capacitor/core';

import type { DetectScreenCapturePlugin } from './definitions';

const CapacitorDetectScreenCapture = registerPlugin<DetectScreenCapturePlugin>(
  'DetectScreenCapture',
  {
    web: () => import('./web').then(m => new m.DetectScreenCaptureWeb()),
  },
);

export class DetectScreenCapture {
  private plugin = CapacitorDetectScreenCapture;

  addListener = this.plugin.addListener;
}

export * from './definitions';
