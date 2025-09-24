export const openWhatsAppOrder = (productName: string) => {
  const phoneNumber = '918072361484'; // WhatsApp format without + and spaces
  const message = `Hi Soul Sip Malts, I would like to order: ${productName}. Please assist me.`;
  const encodedMessage = encodeURIComponent(message);
  
  // Check if user is on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  let whatsappUrl;
  if (isMobile) {
    // Mobile WhatsApp app
    whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  } else {
    // WhatsApp Web
    whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }
  
  window.open(whatsappUrl, '_blank');
};