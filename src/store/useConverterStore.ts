import { create } from 'zustand';
import type { ConversionTask, ConversionSettings, OutputFormat, Preset, ConversionMode } from '@/types';
import { DEFAULT_SETTINGS, PRESET_CONFIGS } from '@/types';

/**
 * 设置变更后，将已转换/失败的任务重置为待转换，
 * 使新设置（质量/尺寸/格式等）能通过自动转换立即生效
 */
function resetStaleTasks(tasks: ConversionTask[]): ConversionTask[] {
  if (!tasks.some((t) => t.status === 'done' || t.status === 'error')) return tasks;
  return tasks.map((t) =>
    t.status === 'done' || t.status === 'error'
      ? { ...t, status: 'pending' as const, error: undefined }
      : t
  );
}

interface ConverterState {
  tasks: ConversionTask[];
  settings: ConversionSettings;
  selectedTaskId: string | null;
  isDark: boolean;

  addTasks: (tasks: ConversionTask[]) => void;
  removeTask: (id: string) => void;
  clearTasks: () => void;
  updateTaskResult: (id: string, result: ConversionTask['result'], status: ConversionTask['status']) => void;
  setTaskError: (id: string, error: string) => void;

  setSettings: (settings: Partial<ConversionSettings>) => void;
  setOutputFormat: (format: OutputFormat) => void;
  setQuality: (quality: number) => void;
  setScale: (scale: number) => void;
  setMode: (mode: ConversionMode) => void;
  setPreserveMetadata: (preserve: boolean) => void;
  setPreset: (preset: Preset) => void;

  selectTask: (id: string | null) => void;
  toggleDark: () => void;
  setDark: (dark: boolean) => void;
}

export const useConverterStore = create<ConverterState>((set) => ({
  tasks: [],
  settings: { ...DEFAULT_SETTINGS },
  selectedTaskId: null,
  isDark: true,

  addTasks: (newTasks) =>
    set((state) => ({ tasks: [...state.tasks, ...newTasks] })),

  removeTask: (id) =>
    set((state) => {
      const task = state.tasks.find((t) => t.id === id);
      if (task?.thumbnailUrl) URL.revokeObjectURL(task.thumbnailUrl);
      return {
        tasks: state.tasks.filter((t) => t.id !== id),
        selectedTaskId: state.selectedTaskId === id ? null : state.selectedTaskId,
      };
    }),

  clearTasks: () =>
    set((state) => {
      state.tasks.forEach((t) => {
        if (t.thumbnailUrl) URL.revokeObjectURL(t.thumbnailUrl);
      });
      return { tasks: [], selectedTaskId: null };
    }),

  updateTaskResult: (id, result, status) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, result, status } : t
      ),
    })),

  setTaskError: (id, error) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, status: 'error' as const, error } : t
      ),
    })),

  setSettings: (partial) =>
    set((state) => ({
      settings: { ...state.settings, ...partial, preset: 'custom' as const },
      tasks: resetStaleTasks(state.tasks),
    })),

  setOutputFormat: (format) =>
    set((state) => ({
      settings: { ...state.settings, outputFormat: format, preset: 'custom' as const },
      tasks: resetStaleTasks(state.tasks),
    })),

  setQuality: (quality) =>
    set((state) => ({
      settings: { ...state.settings, quality, preset: 'custom' as const },
      tasks: resetStaleTasks(state.tasks),
    })),

  setScale: (scale) =>
    set((state) => ({
      settings: { ...state.settings, scale, preset: 'custom' as const },
      tasks: resetStaleTasks(state.tasks),
    })),

  setMode: (mode) =>
    set((state) => ({
      settings: { ...state.settings, mode, preset: 'custom' as const },
      tasks: resetStaleTasks(state.tasks),
    })),

  setPreserveMetadata: (preserve) =>
    set((state) => ({
      settings: { ...state.settings, preserveMetadata: preserve, preset: 'custom' as const },
      tasks: resetStaleTasks(state.tasks),
    })),

  setPreset: (preset) =>
    set((state) => {
      if (preset === 'custom') return { tasks: resetStaleTasks(state.tasks) };
      const config = PRESET_CONFIGS[preset];
      return {
        settings: {
          ...state.settings,
          quality: config.quality,
          mode: config.mode,
          preset,
        },
        tasks: resetStaleTasks(state.tasks),
      };
    }),

  selectTask: (id) => set({ selectedTaskId: id }),

  toggleDark: () =>
    set((state) => {
      const newDark = !state.isDark;
      localStorage.setItem('pixconvert-theme', newDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newDark);
      document.documentElement.classList.toggle('light', !newDark);
      return { isDark: newDark };
    }),

  setDark: (dark) => {
    localStorage.setItem('pixconvert-theme', dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.classList.toggle('light', !dark);
    return { isDark: dark };
  },
}));