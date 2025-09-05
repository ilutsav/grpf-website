import { useTranslation } from 'react-i18next';
import { Users, Target, Award, TrendingUp, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';

  const features = [
    {
      icon: Users,
      title: t('about.totalMembers'),
      value: '41',
      description: t('about.membersDesc'),
    },
    {
      icon: Target,
      title: t('about.mission'),
      description: t('about.missionDesc'),
    },
    {
      icon: Award,
      title: t('about.establishment'),
      value: '2076 B.S.',
      description: t('about.establishmentDesc'),
    },
    {
      icon: TrendingUp,
      title: t('about.growth'),
      description: t('about.growthDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('about.title')}
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isNepali ? 'nepali-text' : ''}`}>
            {t('about.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className={`text-lg font-semibold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                  {feature.title}
                </h3>
                {feature.value && (
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {feature.value}
                  </div>
                )}
                <p className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed About Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className={`text-3xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
                {t('about.ourStory')}
              </h2>
              <div className={`space-y-4 text-gray-600 leading-relaxed ${isNepali ? 'nepali-text' : ''}`}>
                <p>{t('about.storyParagraph1')}</p>
                <p>{t('about.storyParagraph2')}</p>
                <p>{t('about.storyParagraph3')}</p>
              </div>

              {/* Key Statistics */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">41</div>
                  <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                    {t('about.activeMembers')}
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">7.2M</div>
                  <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                    {t('about.totalCapital')}
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">162K</div>
                  <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                    {t('about.perPersonSaving')}
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">2076</div>
                  <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                    {t('about.established')}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Info & Founder */}
            <div className="space-y-6">
              {/* Founder Contact Card */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="text-blue-600" size={40} />
                  </div>
                  <h3 className={`text-xl font-bold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                    {isNepali ? 'सम्पर्क' : 'Contact'}
                  </h3>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 text-lg">Utsav Bhattarai</h4>
                    <p className="text-blue-600 font-medium">Manager</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-500" />
                      <span>9860435973</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-500" />
                      <span>ilutsav@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Fund Info */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6 text-center">
                <div className="mb-4">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="text-green-600" size={32} />
                  </div>
                  <h3 className={`text-xl font-bold text-gray-800 mb-2 ${isNepali ? 'nepali-text' : ''}`}>
                    {t('about.communityFund')}
                  </h3>
                  <p className={`text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                    {t('about.communityDesc')}
                  </p>
                </div>
                
                {/* Member Distribution */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className={`font-semibold text-gray-800 mb-3 ${isNepali ? 'nepali-text' : ''}`}>
                    {t('about.memberBreakdown')}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={isNepali ? 'nepali-text' : ''}>{t('about.foundingMembers')}</span>
                      <span className="font-semibold">10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isNepali ? 'nepali-text' : ''}>{t('about.normalMembers')}</span>
                      <span className="font-semibold">31</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span className={isNepali ? 'nepali-text' : ''}>{t('about.totalMembers')}</span>
                      <span>41</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;