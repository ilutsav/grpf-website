import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Users, Send } from 'lucide-react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t('contact.thankYou'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: t('contact.phone'),
//       details: ['+977-1-XXXXXXX', '+977-98XXXXXXXX'],
//     },
//     {
//       icon: Mail,
//       title: t('contact.email'),
//       details: ['info@grpf.org.np', 'contact@grpf.org.np'],
//     },
//     {
//       icon: MapPin,
//       title: t('contact.address'),
//       details: [t('contact.addressLine1'), t('contact.addressLine2')],
//     },
//     {
//       icon: Clock,
//       title: t('contact.officeHours'),
//       details: [t('contact.weekdays'), t('contact.weekends')],
//     },
//   ];

const managementTeam = [
  {
    name: 'श्री ईश्वरी प्रसाद भट्टराई',
    position: 'Chairman',
    phone: '+977-98XXXXXXXX',
  },
  {
    name: 'श्री सुरज कोइराला',
    position: 'Founder Advisor',
    phone: '+977-98XXXXXXXX',
  },
  {
    name: 'श्री सुजन कोइराला',
    position: 'Loan Department',
    phone: '+977-98XXXXXXXX',
  },
  {
    name: 'श्री पितम्बर कोइराला',
    position: 'Loan Department',
    phone: '+977-98XXXXXXXX',
  },
  {
    name: 'श्रीमती दीक्षा खनाल',
    position: 'Treasurer',
    phone: '+977-98XXXXXXXX',
  },
  {
    name: 'श्रीमती चन्दिका कोइराला',
    position: 'Secretary (सचिव)',
    phone: '+977-98XXXXXXXX',
  },
  {
    name: 'श्री उत्सव भट्टराई',
    position: 'Manager',
    phone: '+977-9860435973',
  },
];
//changes


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('contact.title')}
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isNepali ? 'nepali-text' : ''}`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className=" gap-12 mb-12">
          {/* Contact Information */}
          <div>
            {/* <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
              {t('contact.getInTouch')}
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
              {t('contact.sendMessage')}
            </h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium ${isNepali ? 'nepali-text' : ''}`}
              >
                <Send size={20} />
                {t('contact.sendButton')}
              </button>
            </form>
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 text-center ${isNepali ? 'nepali-text' : ''}`}>
            {t('contact.managementTeam')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 nepali-text">
                  {member.name}
                </h3>
                <p className={`text-blue-600 font-medium mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.phone}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className={`text-2xl font-bold text-gray-800 mb-4 ${isNepali ? 'nepali-text' : ''}`}>
              {t('contact.meetingInfo')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className={`font-semibold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                {t('contact.regularMeetings')}
              </h3>
              <p className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('contact.meetingSchedule')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-green-600" size={32} />
              </div>
              <h3 className={`font-semibold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                {t('contact.meetingLocation')}
              </h3>
              <p className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('contact.meetingAddress')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className={`font-semibold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                {t('contact.membershipInfo')}
              </h3>
              <p className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('contact.membershipDetails')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;