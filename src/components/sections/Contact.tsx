import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData(initialFormData);
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          subtitle="Kontakt" 
          title="Skontaktuj się z nami" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Informacje kontaktowe</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">Adres</h4>
                  <p className="text-gray-700 mt-1">ul. Budowlana 123, 00-001 Warszawa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">Telefon</h4>
                  <p className="text-gray-700 mt-1">
                    <a href="tel:+48123456789" className="hover:text-primary transition-colors">
                      +48 123 456 789
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">Email</h4>
                  <p className="text-gray-700 mt-1">
                    <a href="mailto:kontakt@budeksperts.pl" className="hover:text-primary transition-colors">
                      kontakt@budeksperts.pl
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">Godziny pracy</h4>
                  <div className="text-gray-700 mt-1">
                    <p>Poniedziałek - Piątek: 8:00 - 17:00</p>
                    <p>Sobota: 9:00 - 13:00</p>
                    <p>Niedziela: zamknięte</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-base font-medium text-gray-900 mb-2">Obszar działania</h4>
              <p className="text-gray-700">
                Realizujemy projekty na terenie całej Polski, ze szczególnym uwzględnieniem województwa mazowieckiego.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Wyślij wiadomość</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Dziękujemy!</strong>
                <span className="block sm:inline"> Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Temat *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Wybierz temat</option>
                      <option value="wycena">Prośba o wycenę</option>
                      <option value="informacja">Prośba o informację</option>
                      <option value="współpraca">Propozycja współpracy</option>
                      <option value="reklamacja">Reklamacja</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex items-center"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <span>Wysyłanie...</span>
                    ) : (
                      <>
                        <span>Wyślij wiadomość</span>
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438500356!2d20.92111155!3d52.233035499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1652455840000!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Lokalizacja firmy"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Contact;