import { registerPlugin } from '@capacitor/core';

import type { DetectScreenCapturePlugin } from './definitions';

const DetectScreenCapture = registerPlugin<DetectScreenCapturePlugin>('DetectScreenCapture', {
  web: () => import('./web').then(m => new m.DetectScreenCaptureWeb()),
});

export * from './definitions';
export { DetectScreenCapture };
