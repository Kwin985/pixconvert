import { motion } from 'framer-motion';
import { Settings2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';
import type { OutputFormat, Preset, ConversionMode } from '@/types';
import { trackFormatSelect, trackSettingChange } from '@/lib/gtag';

interface SettingsPanelProps {
  lockedFormat?: OutputFormat;
}

export default function SettingsPanel({ lockedFormat }: SettingsPanelProps) {
  const { settings, setOutputFormat, setQuality, setScale, setMode, setPreserveMetadata, setPreset, tasks } = useConverterStore();
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const hasTasks = tasks.length > 0;

  const allFormatOptions: { value: OutputFormat; label: string; desc: string }[] = [
    { value: 'webp', label: 'WebP', desc: t('converter.settings.formatDesc.webp') },
    { value: 'avif', label: 'AVIF', desc: t('converter.settings.formatDesc.avif') },
    { value: 'jpg', label: 'JPG', desc: t('converter.settings.formatDesc.jpg') },
    { value: 'png', label: 'PNG', desc: t('converter.settings.formatDesc.png') },
    { value: 'heic', label: 'HEIC', desc: t('converter.settings.formatDesc.heic') },
    { value: 'svg', label: 'SVG', desc: t('converter.settings.formatDesc.svg') },
  ];

  const formatOptions = lockedFormat
    ? allFormatOptions.filter((f) => f.value === lockedFormat)
    : allFormatOptions.filter((f) => f.value === 'webp' || f.value === 'avif');

  const presetOptions: { value: Preset; label: string }[] = [
    { value: 'extreme', label: t('converter.settings.presets.extreme') },
    { value: 'balanced', label: t('converter.settings.presets.balanced') },
    { value: 'maxQuality', label: t('converter.settings.presets.maxQuality') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`rounded-2xl border p-6 ${isDark ? 'bg-surface-1 border-surface-3' : 'bg-white border-light-border shadow-sm'}`}
    >
      <div className="flex items-center gap-2 mb-5">
        <Settings2 className="w-5 h-5 text-neon" />
        <h3 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{t('converter.settings.title')}</h3>
      </div>

      {/* Output format */}
      <div className="mb-5">
        <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {t('converter.settings.outputFormat')}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {formatOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setOutputFormat(opt.value);
                trackFormatSelect(opt.value);
              }}
              className={`p-3 rounded-xl text-left transition-all duration-200 border ${
                settings.outputFormat === opt.value
                  ? 'border-neon bg-neon/10'
                  : isDark
                    ? 'border-surface-4 hover:border-surface-4 bg-surface-2'
                    : 'border-light-border hover:border-gray-300 bg-gray-50'
              }`}
            >
              <span className={`text-sm font-semibold ${settings.outputFormat === opt.value ? 'text-neon' : isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                {opt.label}
              </span>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{opt.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Preset */}
      <div className="mb-5">
        <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {t('converter.settings.preset')}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {presetOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setPreset(opt.value);
                trackSettingChange('preset', opt.value);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                settings.preset === opt.value
                  ? 'border-neon bg-neon/10 text-neon'
                  : isDark
                    ? 'border-surface-4 text-gray-400 hover:text-gray-300'
                    : 'border-light-border text-gray-500 hover:text-gray-600'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quality slider */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('converter.settings.quality')}
          </label>
          <span className={`text-sm font-mono font-semibold ${isDark ? 'text-neon' : 'text-neon-dark'}`}>
            {settings.quality}%
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={settings.quality}
          onChange={(e) => {
              setQuality(Number(e.target.value));
              trackSettingChange('quality', Number(e.target.value));
            }}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #00F5A0 0%, #00F5A0 ${settings.quality}%, ${isDark ? '#2E2E2E' : '#E5E7EB'} ${settings.quality}%, ${isDark ? '#2E2E2E' : '#E5E7EB'} 100%)`,
          }}
        />
        <div className="flex justify-between text-xs mt-1">
          <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>1</span>
          <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>100</span>
        </div>
      </div>

      {/* Size scale */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('converter.settings.size')}
          </label>
          <span className={`text-sm font-mono font-semibold ${isDark ? 'text-neon' : 'text-neon-dark'}`}>
            {settings.scale}x
          </span>
        </div>
        <input
          type="range"
          min="0.1"
          max="4"
          step="0.1"
          value={settings.scale}
          onChange={(e) => {
              setScale(Number(e.target.value));
              trackSettingChange('scale', Number(e.target.value));
            }}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((settings.scale - 0.1) / 3.9) * 100}%, ${isDark ? '#2E2E2E' : '#E5E7EB'} ${((settings.scale - 0.1) / 3.9) * 100}%, ${isDark ? '#2E2E2E' : '#E5E7EB'} 100%)`,
          }}
        />
        <div className="flex justify-between text-xs mt-1">
          <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>0.1x</span>
          <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>4x</span>
        </div>
      </div>

      {/* Advanced options toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className={`flex items-center gap-1 text-sm transition-colors ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
        {t('converter.settings.advanced')}
      </button>

      {showAdvanced && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-4 space-y-4 pt-4 border-t border-surface-3"
        >
          <div>
            <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('converter.settings.mode')}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['lossy', 'lossless'] as ConversionMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    setMode(mode);
                    trackSettingChange('mode', mode);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
                    settings.mode === mode
                      ? 'border-neon bg-neon/10 text-neon'
                      : isDark
                        ? 'border-surface-4 text-gray-400'
                        : 'border-light-border text-gray-500'
                  }`}
                >
                  {mode === 'lossy' ? t('converter.settings.lossy') : t('converter.settings.lossless')}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t('converter.settings.metadata')}</span>
            <button
              onClick={() => {
              setPreserveMetadata(!settings.preserveMetadata);
              trackSettingChange('preserveMetadata', String(!settings.preserveMetadata));
            }}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                settings.preserveMetadata ? 'bg-neon' : (isDark ? 'bg-surface-4' : 'bg-gray-300')
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                  settings.preserveMetadata ? 'translate-x-6 left-0.5' : 'left-1'
                }`}
              />
            </button>
          </div>
        </motion.div>
      )}

      {!hasTasks && (
        <p className={`text-xs text-center mt-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          {t('converter.settings.addFilesFirst')}
        </p>
      )}
    </motion.div>
  );
}