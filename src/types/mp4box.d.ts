declare module "mp4box" {
  export interface MP4File {
    onReady?: (info: any) => void;
    onError?: (e: any) => void;
    onSamples?: (id: number, user: any, samples: any[]) => void;
    appendBuffer(data: ArrayBuffer & { fileStart?: number }): number;
    start(): void;
    flush(): void;
    stop(): void;
    setExtractionOptions(id: number, user?: any, options?: any): void;
  }

  export function createFile(): MP4File;
}
