import { useCallback } from 'react';
import Dexie from 'dexie';
import type { HistoryEntry } from '@/types';

const db = new Dexie('PixConvertDB');
db.version(1).stores({
  history: '++id, timestamp, originalFormat, outputFormat',
});

const historyTable = db.table<HistoryEntry, number>('history');

export function useHistory() {
  const addEntry = useCallback(async (entry: HistoryEntry) => {
    await historyTable.add(entry);
  }, []);

  const getEntries = useCallback(async (limit = 50): Promise<HistoryEntry[]> => {
    return await historyTable.orderBy('timestamp').reverse().limit(limit).toArray();
  }, []);

  const clearHistory = useCallback(async () => {
    await historyTable.clear();
  }, []);

  return { addEntry, getEntries, clearHistory };
}