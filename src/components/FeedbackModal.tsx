import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useConverterStore } from '@/store/useConverterStore';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const isDark = useConverterStore((s) => s.isDark);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const mailtoLink = `mailto:mdvrinsider@gmail.com?subject=${encodeURIComponent(`[PixConvert] ${formData.subject || 'Feedback'}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/40'}`}
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`relative w-full max-w-lg rounded-2xl border overflow-hidden ${isDark ? 'bg-surface-0 border-surface-3' : 'bg-white border-light-border shadow-2xl'}`}
          >
            <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-surface-3' : 'border-light-border'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-surface-2' : 'bg-gray-100'}`}>
                  <MessageSquare className="w-5 h-5 text-neon" />
                </div>
                <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('feedback.title')}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className={`p-2 rounded-lg hover:bg-surface-3 transition-colors ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${isDark ? 'bg-neon/10' : 'bg-neon/5'}`}>
                    <Send className="w-8 h-8 text-neon" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('feedback.sent')}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('feedback.thankYou')}
                  </p>
                  <button
                    onClick={handleClose}
                    className={`mt-6 px-6 py-2 rounded-xl font-medium bg-neon text-surface-0 hover:bg-neon-light transition-colors`}
                  >
                    {t('feedback.close')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('feedback.name')}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border transition-colors ${isDark ? 'bg-surface-2 border-surface-4 text-white placeholder-gray-600 focus:border-neon' : 'bg-gray-50 border-light-border text-gray-900 placeholder-gray-400 focus:border-neon'} focus:outline-none`}
                        placeholder={t('feedback.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('feedback.email')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border transition-colors ${isDark ? 'bg-surface-2 border-surface-4 text-white placeholder-gray-600 focus:border-neon' : 'bg-gray-50 border-light-border text-gray-900 placeholder-gray-400 focus:border-neon'} focus:outline-none`}
                        placeholder={t('feedback.emailPlaceholder')}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t('feedback.subject')}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border transition-colors appearance-none bg-no-repeat bg-right cursor-pointer ${isDark ? 'bg-surface-2 border-surface-4 text-white focus:border-neon' : 'bg-gray-50 border-light-border text-gray-900 focus:border-neon'} focus:outline-none`}
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">{t('feedback.selectSubject')}</option>
                      <option value="Feature Request">{t('feedback.subjectFeature')}</option>
                      <option value="Bug Report">{t('feedback.subjectBug')}</option>
                      <option value="Question">{t('feedback.subjectQuestion')}</option>
                      <option value="Other">{t('feedback.subjectOther')}</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t('feedback.message')}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className={`w-full px-4 py-2.5 rounded-xl border transition-colors resize-none ${isDark ? 'bg-surface-2 border-surface-4 text-white placeholder-gray-600 focus:border-neon' : 'bg-gray-50 border-light-border text-gray-900 placeholder-gray-400 focus:border-neon'} focus:outline-none`}
                      placeholder={t('feedback.messagePlaceholder')}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                      isSubmitting
                        ? 'bg-neon/50 text-surface-0 cursor-not-allowed'
                        : 'bg-neon text-surface-0 hover:bg-neon-light'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-surface-0/30 border-t-surface-0 rounded-full"
                        />
                        {t('feedback.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('feedback.send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}