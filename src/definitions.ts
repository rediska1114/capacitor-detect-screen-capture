import { PluginListenerHandle } from '@capacitor/core';

export interface DetectScreenCapturePlugin {
  addListener(
    eventName: 'didScreenshot',
    listenerFunc: () => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: 'didScreenRecording',
    listenerFunc: () => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
