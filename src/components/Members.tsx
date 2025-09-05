import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Users, User, Crown, Star } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  nameNepali: string;
  position?: string;
  isFoundingMember: boolean;
}

const Members: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';
  const [searchTerm, setSearchTerm] = useState('');

  // Complete list of 41 members with correct names
//   const members: Member[] = [
//     // Founding Members (10)
//     { id: 1, name: 'Ishwari Prasad Bhattarai', nameNepali: 'ईश्वरी प्रसाद भट्टराई', position: 'Chairman', isFoundingMember: true },
//     { id: 2, name: 'Suraj Koirala', nameNepali: 'सुरज कोइराला', isFoundingMember: true },
//     { id: 3, name: 'Sujan Koirala', nameNepali: 'सुजन कोइराला', isFoundingMember: true },
//     { id: 4, name: 'Mukunda Nepal', nameNepali: 'मुकुन्द नेपाल', isFoundingMember: true },
//     { id: 5, name: 'Pitambar Koirala', nameNepali: 'पितम्बर कोइराला', isFoundingMember: true },
//     { id: 6, name: 'Deekshya Khanal', nameNepali: 'दीक्षा खनाल', isFoundingMember: true },
//     { id: 7, name: 'Sanjib Badal', nameNepali: 'संजीब बादल', isFoundingMember: true },
//     { id: 8, name: 'Ranjib Badal', nameNepali: 'रंजीब बादल', isFoundingMember: true },
//     { id: 9, name: 'Utsav Chalise', nameNepali: 'उत्सव चालिसे', isFoundingMember: true },
//     { id: 10, name: 'Chandika Koirala', nameNepali: 'चन्दिका कोइराला', isFoundingMember: true },
    
//     // New/Normal Members (22)
//     { id: 11, name: 'Suravi Koirala', nameNepali: 'सुरवि कोइराला', isFoundingMember: false },
//     { id: 12, name: 'Dibyan Koirala', nameNepali: 'दिब्यान कोइराला', isFoundingMember: false },
//     { id: 13, name: 'Laxmi Bhattarai', nameNepali: 'लक्ष्मी भट्टराई', isFoundingMember: false },
//     { id: 14, name: 'Archana Koirala', nameNepali: 'अर्चना कोइराला', isFoundingMember: false },
//     { id: 15, name: 'Sita Koirala', nameNepali: 'सीता कोइराला', isFoundingMember: false },
//     { id: 16, name: 'Debaki Koirala', nameNepali: 'देवकी कोइराला', isFoundingMember: false },
//     { id: 17, name: 'Bandana Dahal', nameNepali: 'बन्दना दाहाल', isFoundingMember: false },
//     { id: 18, name: 'Chanda Subedi', nameNepali: 'चन्दा सुवेदी', isFoundingMember: false },
//     { id: 19, name: 'Gyanu Acharya', nameNepali: 'ज्ञानु आचार्य', isFoundingMember: false },
//     { id: 20, name: 'Nanu Dhungana', nameNepali: 'नानु ढुंगाना', isFoundingMember: false },
//     { id: 21, name: 'Yogesh Adhikari', nameNepali: 'योगेश अधिकारी', isFoundingMember: false },
//     { id: 22, name: 'Muna Acharya', nameNepali: 'मुना आचार्य', isFoundingMember: false },
//     { id: 23, name: 'Bibek Acharya', nameNepali: 'बिबेक आचार्य', isFoundingMember: false },
//     { id: 24, name: 'Kritika Subedi', nameNepali: 'कृतिका सुवेदी', isFoundingMember: false },
//     { id: 25, name: 'Bimal Rai', nameNepali: 'बिमल राई', isFoundingMember: false },
//     { id: 26, name: 'Chaturman Shrestha', nameNepali: 'चतुरमान श्रेष्ठ', isFoundingMember: false },
//     { id: 27, name: 'Sarandevi Shrestha', nameNepali: 'सरनदेवी श्रेष्ठ', isFoundingMember: false },
//     { id: 28, name: 'Sarsoti Shrestha', nameNepali: 'सरसोती श्रेष्ठ', isFoundingMember: false },
//     { id: 29, name: 'Samjana Dahal', nameNepali: 'समजना दाहाल', isFoundingMember: false },
//     { id: 30, name: 'Tejaswi Koirala', nameNepali: 'तेजस्वी कोइराला', isFoundingMember: false },
//     { id: 31, name: 'Abhusan Nepal', nameNepali: 'अभुषण नेपाल', isFoundingMember: false },
//     { id: 32, name: 'Kritika Nepal', nameNepali: 'कृतिका नेपाल', isFoundingMember: false },
    
//     // Unknown Members (9) - To be added later
//     { id: 33, name: 'Utsav Bhattarai', nameNepali: 'उत्सव भट्टराई', isFoundingMember: false },
//     { id: 34, name: 'Smriti Bhattarai', nameNepali: 'स्मृति भट्टराई', isFoundingMember: false },
//     { id: 35, name: 'Gobinda Badal', nameNepali: 'गोबिन्द बडाल', isFoundingMember: false },
//     { id: 36, name: 'Indira Badal', nameNepali: 'इन्दिरा बडाल', isFoundingMember: false },
//     { id: 37, name: 'Aabida Dahal', nameNepali: 'आबिदा दाहाल', isFoundingMember: false },
//     { id: 38, name: 'Abishek Dahal', nameNepali: 'अभिषेक दाहाल', isFoundingMember: false },
//     { id: 39, name: 'Subham Koirala', nameNepali: 'शुभम कोइराला', isFoundingMember: false },
//     { id: 40, name: 'Subhamsha Koirala', nameNepali: 'शुभम्शा कोइराला', isFoundingMember: false },
//     { id: 41, name: 'Urmila Koirala', nameNepali: 'उर्मिला कोइराला', isFoundingMember: false },
//   ];


const members: Member[] = [
  // Founding Members (10)
  { id: 1, name: 'Ishwari Prasad Bhattarai', nameNepali: 'ईश्वरी प्रसाद भट्टराई', position: 'Chairman', isFoundingMember: true },
  { id: 2, name: 'Suraj Koirala', nameNepali: 'सुरज कोइराला', position: 'Founder Advisor', isFoundingMember: true },
  { id: 3, name: 'Sujan Koirala', nameNepali: 'सुजन कोइराला', position: 'Loan Department', isFoundingMember: true },
  { id: 4, name: 'Mukunda Nepal', nameNepali: 'मुकुन्द नेपाल', isFoundingMember: true },
  { id: 5, name: 'Pitambar Koirala', nameNepali: 'पितम्बर कोइराला', position: 'Loan Department', isFoundingMember: true },
  { id: 6, name: 'Deekshya Khanal', nameNepali: 'दीक्षा खनाल', position: 'Treasurer', isFoundingMember: true },
  { id: 7, name: 'Sanjib Badal', nameNepali: 'संजीब बादल', isFoundingMember: true },
  { id: 8, name: 'Ranjib Badal', nameNepali: 'रंजीब बादल', isFoundingMember: true },
  { id: 9, name: 'Utsav Chalise', nameNepali: 'उत्सव चालिसे', isFoundingMember: true },
  { id: 10, name: 'Chandika Koirala', nameNepali: 'चन्दिका कोइराला', position: 'Secretary (सचिव)', isFoundingMember: true },

  // New/Normal Members (22)
  { id: 11, name: 'Suravi Koirala', nameNepali: 'सुरवि कोइराला', isFoundingMember: false },
  { id: 12, name: 'Dibyan Koirala', nameNepali: 'दिब्यान कोइराला', isFoundingMember: false },
  { id: 13, name: 'Laxmi Bhattarai', nameNepali: 'लक्ष्मी भट्टराई', isFoundingMember: false },
  { id: 14, name: 'Archana Koirala', nameNepali: 'अर्चना कोइराला', isFoundingMember: false },
  { id: 15, name: 'Sita Koirala', nameNepali: 'सीता कोइराला', isFoundingMember: false },
  { id: 16, name: 'Debaki Koirala', nameNepali: 'देवकी कोइराला', isFoundingMember: false },
  { id: 17, name: 'Bandana Dahal', nameNepali: 'बन्दना दाहाल', isFoundingMember: false },
  { id: 18, name: 'Chanda Subedi', nameNepali: 'चन्दा सुवेदी', isFoundingMember: false },
  { id: 19, name: 'Gyanu Acharya', nameNepali: 'ज्ञानु आचार्य', isFoundingMember: false },
  { id: 20, name: 'Nanu Dhungana', nameNepali: 'नानु ढुंगाना', isFoundingMember: false },
  { id: 21, name: 'Yogesh Adhikari', nameNepali: 'योगेश अधिकारी', isFoundingMember: false },
  { id: 22, name: 'Muna Acharya', nameNepali: 'मुना आचार्य', isFoundingMember: false },
  { id: 23, name: 'Bibek Acharya', nameNepali: 'बिबेक आचार्य', isFoundingMember: false },
  { id: 24, name: 'Kritika Subedi', nameNepali: 'कृतिका सुवेदी', isFoundingMember: false },
  { id: 25, name: 'Bimal Rai', nameNepali: 'बिमल राई', isFoundingMember: false },
  { id: 26, name: 'Chaturman Shrestha', nameNepali: 'चतुरमान श्रेष्ठ', isFoundingMember: false },
  { id: 27, name: 'Sarandevi Shrestha', nameNepali: 'सरनदेवी श्रेष्ठ', isFoundingMember: false },
  { id: 28, name: 'Sarsoti Shrestha', nameNepali: 'सरसोती श्रेष्ठ', isFoundingMember: false },
  { id: 29, name: 'Samjana Dahal', nameNepali: 'समजना दाहाल', isFoundingMember: false },
  { id: 30, name: 'Tejaswi Koirala', nameNepali: 'तेजस्वी कोइराला', isFoundingMember: false },
  { id: 31, name: 'Abhusan Nepal', nameNepali: 'अभुषण नेपाल', isFoundingMember: false },
  { id: 32, name: 'Kritika Nepal', nameNepali: 'कृतिका नेपाल', isFoundingMember: false },

  // Special Role / Contribution (you)
  { id: 33, name: 'Utsav Bhattarai', nameNepali: 'उत्सव भट्टराई', position: 'Accounts & Technical Lead', isFoundingMember: false },
  { id: 34, name: 'Smriti Bhattarai', nameNepali: 'स्मृति भट्टराई', isFoundingMember: false },
  { id: 35, name: 'Gobinda Badal', nameNepali: 'गोबिन्द बडाल', isFoundingMember: false },
  { id: 36, name: 'Indira Badal', nameNepali: 'इन्दिरा बडाल', isFoundingMember: false },
  { id: 37, name: 'Aabida Dahal', nameNepali: 'आबिदा दाहाल', isFoundingMember: false },
  { id: 38, name: 'Abishek Dahal', nameNepali: 'अभिषेक दाहाल', isFoundingMember: false },
  { id: 39, name: 'Subham Koirala', nameNepali: 'शुभम कोइराला', isFoundingMember: false },
  { id: 40, name: 'Subhamsha Koirala', nameNepali: 'शुभम्शा कोइराला', isFoundingMember: false },
  { id: 41, name: 'Urmila Koirala', nameNepali: 'उर्मिला कोइराला', isFoundingMember: false },
];


  // Filter members based on search term
  const filteredMembers = members.filter(member => {
    const searchLower = searchTerm.toLowerCase();
    return (
      member.name.toLowerCase().includes(searchLower) ||
      member.nameNepali.includes(searchTerm) ||
      (member.position && member.position.toLowerCase().includes(searchLower))
    );
  });

  const foundingMembersCount = members.filter(m => m.isFoundingMember).length; // 10
  const normalMembersCount = members.filter(m => !m.isFoundingMember).length; // 31

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('members.title')}
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 ${isNepali ? 'nepali-text' : ''}`}>
            {t('members.subtitle')}
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="text-blue-600" size={32} />
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{members.length}</div>
              <div className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.totalMembers')}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Crown className="text-green-600" size={32} />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{foundingMembersCount}</div>
              <div className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.foundingMembers')}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Star className="text-purple-600" size={32} />
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{normalMembersCount}</div>
              <div className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.normalMembers')}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('members.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg ${isNepali ? 'nepali-text' : ''}`}
              />
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6 relative overflow-hidden group border border-gray-100"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Member Info */}
              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`rounded-full p-3 ${member.isFoundingMember ? 'bg-gradient-to-r from-yellow-100 to-orange-100' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}>
                    <User className={`${member.isFoundingMember ? 'text-orange-600' : 'text-blue-600'}`} size={28} />
                  </div>
                  {member.isFoundingMember && (
                    <Crown className="text-yellow-500 absolute ml-8 -mt-2" size={16} />
                  )}
                </div>

                {/* Name */}
                <div className="text-center mb-3">
                  <h3 className={`font-semibold text-gray-800 mb-1 ${isNepali ? 'text-sm' : 'text-base'}`}>
                    {isNepali ? member.nameNepali : member.name}
                  </h3>
                  {!isNepali && (
                    <p className="text-xs text-gray-500 nepali-text">
                      {member.nameNepali}
                    </p>
                  )}
                </div>

                {/* Position Badge */}
                {member.position && (
                  <div className="text-center mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      member.position === 'Chairman' ? 'bg-yellow-100 text-yellow-800' :
                      member.position === 'Secretary' ? 'bg-blue-100 text-blue-800' :
                      member.position === 'Treasurer' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    } ${isNepali ? 'nepali-text' : ''}`}>
                      {isNepali ? 
                        (member.position === 'Chairman' ? 'अध्यक्ष' :
                         member.position === 'Secretary' ? 'सचिव' :
                         member.position === 'Treasurer' ? 'कोषाध्यक्ष' : member.position)
                        : member.position}
                    </span>
                  </div>
                )}

                {/* Member Type */}
                <div className="text-center">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    member.isFoundingMember 
                      ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800' 
                      : 'bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800'
                  } ${isNepali ? 'nepali-text' : ''}`}>
                    {member.isFoundingMember ? (
                      <>
                        <Crown size={12} />
                        {isNepali ? 'संस्थापक सदस्य' : 'Founding Member'}
                      </>
                    ) : (
                      <>
                        <Star size={12} />
                        {isNepali ? 'पारिवारिक सदस्य' : 'Family Member'}
                      </>
                    )}
                  </span>
                </div>

                {/* Member ID */}
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-400 font-mono">
                    #{member.id.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <Search className="text-gray-400 mx-auto mb-4" size={48} />
              <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.noResults')}
              </h3>
              <p className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.noResultsDesc')}
              </p>
            </div>
          </div>
        )}

        {/* Footer Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 text-center ${isNepali ? 'nepali-text' : ''}`}>
            {t('members.membershipStats')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {((foundingMembersCount / members.length) * 100).toFixed(1)}%
              </div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.foundingPercentage')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {new Date().getFullYear() - 2024 + 1}
              </div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.yearsActive')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                NPR {(7196529 / members.length).toLocaleString()}
              </div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.avgCapitalPerMember')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                {t('members.activeParticipation')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;