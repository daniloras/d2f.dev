const phoneRaw = '11954426650'
const whatsappMessage = 'Olá D2F, Gostaria de informações.'

export const contactInfo = {
  phoneRaw,
  phoneFormatted: '(11) 9-5442-6650',
  whatsappUrl: `https://api.whatsapp.com/send/?phone=${phoneRaw}&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`,
  email: 'contato@d2f.dev',
  address: 'Av. Paulista, 1636 - sala 1504, Cerqueira César - São Paulo - SP, 01310-200.',
}
