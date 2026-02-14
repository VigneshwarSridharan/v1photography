/** WhatsApp contact: +91 98842 41937 */
const WHATSAPP_PHONE = "919884241937";
const ENQUIRY_MESSAGE =
  "Hello, I would like to enquire about booking a photography session with V1 Photography.";

export const WHATSAPP_BOOK_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(ENQUIRY_MESSAGE)}`;
