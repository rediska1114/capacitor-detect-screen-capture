import { WebPlugin } from '@capacitor/core';

import type { DetectScreenCapturePlugin } from './definitions';

export class DetectScreenCaptureWeb extends WebPlugin implements DetectScreenCapturePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
