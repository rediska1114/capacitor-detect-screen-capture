export interface DetectScreenCapturePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
