export type OutputFormat = 'webp' | 'avif' | 'jpg' | 'jpeg' | 'png' | 'heic' | 'svg';

export const FORMAT_MIME: Record<OutputFormat, string> = {
  webp: 'image/webp',
  avif: 'image/avif',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  heic: 'image/heic',
  svg: 'image/svg+xml',
};

export const FORMAT_EXT: Record<OutputFormat, string> = {
  webp: '.webp',
  avif: '.avif',
  jpg: '.jpg',
  jpeg: '.jpeg',
  png: '.png',
  heic: '.heic',
  svg: '.svg',
};

export const FORMAT_LABEL: Record<OutputFormat, string> = {
  webp: 'WebP',
  avif: 'AVIF',
  jpg: 'JPG',
  jpeg: 'JPEG',
  png: 'PNG',
  heic: 'HEIC',
  svg: 'SVG',
};
export type ConversionMode = 'lossy' | 'lossless';
export type Preset = 'extreme' | 'balanced' | 'maxQuality' | 'custom';
export type TaskStatus = 'pending' | 'converting' | 'done' | 'error';

export interface ConversionSettings {
  outputFormat: OutputFormat;
  quality: number;
  scale: number;
  mode: ConversionMode;
  preserveMetadata: boolean;
  preset: Preset;
}

export interface ConversionResult {
  blob: Blob;
  convertedSize: number;
  sizeReduction: number;
  format: OutputFormat;
}

export interface ConversionTask {
  id: string;
  file: File;
  originalName: string;
  originalSize: number;
  originalFormat: string;
  thumbnailUrl: string;
  status: TaskStatus;
  result?: ConversionResult;
  error?: string;
}

export interface HistoryEntry {
  id?: number;
  timestamp: number;
  originalName: string;
  originalFormat: string;
  originalSize: number;
  outputFormat: string;
  convertedSize: number;
  settings: ConversionSettings;
}

export const DEFAULT_SETTINGS: ConversionSettings = {
  outputFormat: 'webp',
  quality: 80,
  scale: 1,
  mode: 'lossy',
  preserveMetadata: false,
  preset: 'balanced',
};

export const PRESET_CONFIGS: Record<Exclude<Preset, 'custom'>, { quality: number; mode: ConversionMode }> = {
  extreme: { quality: 50, mode: 'lossy' },
  balanced: { quality: 80, mode: 'lossy' },
  maxQuality: { quality: 95, mode: 'lossless' },
};

export const SUPPORTED_INPUT_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
  'image/x-icon',
  'image/vnd.microsoft.icon',
  'image/bmp',
  'image/heic',
  'image/heif',
  'image/tiff',
  'image/avif',
  'image/webp',
];

export const SUPPORTED_EXTENSIONS = [
  '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.bmp',
  '.heic', '.heif', '.tiff', '.tif', '.avif', '.webp',
];

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}