import { WebPlugin } from '@capacitor/core';

import type { DetectScreenCapturePlugin } from './definitions';

export class DetectScreenCaptureWeb
  extends WebPlugin
  implements DetectScreenCapturePlugin {}
