/**
 * Official WhatsApp Configuration for Tappo.id
 */
export const WA_PHONE_NUMBER = '6285159746119';
export const WA_DISPLAY_NUMBER = '+62 851-5974-6119';

export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const DEFAULT_ORDER_MESSAGE = 
  'Halo Admin tappo.id! 👋 Saya ingin pesan Smart NFC & QR Review untuk bisnis saya. Mohon info katalog & cara pemesanannya ya.';
