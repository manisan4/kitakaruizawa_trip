import React, { useState } from 'react';
import { CalendarDays, MapPin, Users, Utensils, Waves, Gift, CheckCircle2, Circle, Camera, Heart, Star, Clock, Coffee, Car, Mountain } from 'lucide-react';

function App() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const activities = [
    { icon: Waves, title: 'サウナでリフレッシュ', desc: '宿泊先での極上サウナタイム', color: 'text-blue-500' },
    { icon: Utensils, title: 'BBQパーティー', desc: 'みんなでワイワイバーベキュー', color: 'text-orange-500' },
    { icon: Gift, title: 'ボードゲーム', desc: 'ボードゲームで盛り上がろう', color: 'text-purple-500' }
  ];

  const packingList = [
    '家に余ってるお酒',
    'サウナ用水着'
  ];

  const day1Schedule = [
    { time: '07:30', activity: 'チームA（八千代中央）・チームB（行徳）出発', icon: Car },
    { time: '10:00〜10:30', activity: '途中休憩：横川SA（「峠の釜めし」で朝食やお土産チェック）', icon: Coffee },
    { time: '12:30', activity: '昼食：「軽井沢焙煎所」または「カフェ・ル・プティニット（小諸市）」', icon: Utensils },
    { time: '14:00', activity: '食材買い出し：「ツルヤ軽井沢店」', icon: Gift },
    { time: '15:30', activity: '別荘到着・チェックイン（群馬県嬬恋村）', icon: MapPin },
    { time: '16:00〜', activity: 'フリータイム：庭遊び・ティータイム', icon: Coffee },
    { time: '18:00〜', activity: 'BBQ＆乾杯🍻 信州牛や焼き野菜、クラフトビールを楽しむ', icon: Utensils },
    { time: '21:00〜', activity: '星空＆焚き火風の演出でまったりトーク（大人は晩酌タイム）', icon: Star }
  ];

  const day2Schedule = [
    { time: '07:30〜', activity: '朝食（パン・ヨーグルト・コーヒー）', icon: Coffee },
    { time: '09:00', activity: 'チェックアウト・出発', icon: Car },
    { time: '10:00〜', activity: '観光：鬼押出し園（火山岩の絶景・自然散策）', icon: Mountain },
    { time: '12:00', activity: '昼食：高原野菜たっぷりのランチ（「ラ・テラ」など）', icon: Utensils },
    { time: '13:30', activity: '出発（帰路へ）', icon: Car },
    { time: '17:30頃', activity: '各地帰着予定（渋滞がなければ）', icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with North Karuizawa Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - North Karuizawa Landscape */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/kitakaruizawa.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              スタバ@北軽井沢
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 opacity-90">
              みんなで作る、最高の思い出
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-lg">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3">
                <CalendarDays size={16} className="sm:w-5 sm:h-5" />
                <span>7月20日-21日</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3">
                <MapPin size={16} className="sm:w-5 sm:h-5" />
                <span>北軽井沢</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={16} />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-800">北軽井沢 2025</span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-600">
              <a href="#schedule" className="hover:text-green-600 transition-colors">スケジュール</a>
              <a href="#activities" className="hover:text-green-600 transition-colors">アクティビティ</a>
              <a href="#accommodation" className="hover:text-green-600 transition-colors">宿泊先</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-24">
        {/* Trip Overview */}
        <section className="text-center space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              特別な2日間の旅
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              北軽井沢の美しい自然に囲まれて、仲間たちと過ごす忘れられない時間。
              サウナで心も体もリフレッシュし、BBQで笑顔を分かち合い、ゲームで絆を深める。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CalendarDays className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">1泊2日</h3>
              <p className="text-gray-600 text-sm sm:text-base">7月20日から21日まで、夏の北軽井沢を満喫する特別な週末</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">北軽井沢</h3>
              <p className="text-gray-600 text-sm sm:text-base">標高1000mの高原リゾート、澄んだ空気と豊かな自然</p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">旅のスケジュール</h2>
            <p className="text-lg sm:text-xl text-gray-600">充実した2日間のタイムテーブル</p>
          </div>

          {/* Day 1 */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">Day 1 - 7月20日（土）</h3>
              <p className="text-gray-600 text-sm sm:text-base">出発から別荘での楽しい夜まで</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg">
              <div className="space-y-4 sm:space-y-6">
                {day1Schedule.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <item.icon className="text-green-600" size={20} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col space-y-2">
                        <span className="inline-block bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold w-fit">
                          {item.time}
                        </span>
                        <p className="text-gray-800 font-medium text-sm sm:text-lg leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">Day 2 - 7月21日（日）</h3>
              <p className="text-gray-600 text-sm sm:text-base">朝食から観光、そして帰路へ</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg">
              <div className="space-y-4 sm:space-y-6">
                {day2Schedule.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <item.icon className="text-blue-600" size={20} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col space-y-2">
                        <span className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold w-fit">
                          {item.time}
                        </span>
                        <p className="text-gray-800 font-medium text-sm sm:text-lg leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section with Custom Images */}
        <section id="activities" className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">楽しいアクティビティ</h2>
            <p className="text-lg sm:text-xl text-gray-600">心に残る特別な体験</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Sauna Activity */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div 
                className="h-48 sm:h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/SAUNA.png)'
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 text-white">
                <Waves className="mb-2 sm:mb-4 text-blue-400" size={32} />
                <h4 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">サウナでリフレッシュ</h4>
                <p className="text-sm sm:text-lg opacity-90">宿泊先での極上サウナタイム</p>
              </div>
            </div>

            {/* BBQ Activity */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div 
                className="h-48 sm:h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/BBQ.png)'
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 text-white">
                <Utensils className="mb-2 sm:mb-4 text-orange-400" size={32} />
                <h4 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">BBQパーティー</h4>
                <p className="text-sm sm:text-lg opacity-90">みんなでワイワイバーベキュー</p>
              </div>
            </div>

            {/* Board Game Activity */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div 
                className="h-48 sm:h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 text-white">
                <Gift className="mb-2 sm:mb-4 text-purple-400" size={32} />
                <h4 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">ボードゲーム</h4>
                <p className="text-sm sm:text-lg opacity-90">ボードゲームで盛り上がろう</p>
              </div>
            </div>
          </div>
        </section>

        {/* Friends Section with Custom Image */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">みんなで楽しむ時間</h2>
            <p className="text-lg sm:text-xl text-gray-600">最高の仲間との特別なひととき</p>
          </div>
          
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div 
              className="h-64 sm:h-96 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/friends_trip.png)'
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-8">
                <h3 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">友情と笑顔に満ちた旅</h3>
                <p className="text-base sm:text-xl opacity-90 max-w-2xl leading-relaxed">
                  みんなで過ごす時間は何にも代えがたい宝物。
                  笑い声が響く北軽井沢で、一生の思い出を作ろう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section id="accommodation" className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">宿泊先</h2>
            <p className="text-lg sm:text-xl text-gray-600">プライベート感溢れる贅沢な空間</p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div 
                className="h-64 sm:h-80 md:h-96 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/ScHNEEL_kitakaruizawa.png)'
                }}
              ></div>
              <div className="p-6 sm:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">シュネール北軽井沢</h3>
                <p className="text-sm sm:text-lg mb-6 sm:mb-8 opacity-90 leading-relaxed">
                  北軽井沢の自然に囲まれた贅沢なプライベートヴィラ。
                  サウナ、BBQ設備完備で、仲間との特別な時間を演出します。
                </p>
                <a 
                  href="https://schneel-kitakaru.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 w-fit text-sm sm:text-base"
                >
                  <span>公式サイトを見る</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Packing List */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">持ち物チェックリスト</h2>
            <p className="text-lg sm:text-xl text-gray-600">忘れ物がないように確認しよう</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                {packingList.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => toggleItem(index)}
                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200 border border-gray-100 hover:border-green-200"
                  >
                    {checkedItems[index] ? (
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                    ) : (
                      <Circle className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                    <span className={`text-base sm:text-lg font-medium ${checkedItems[index] ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action with Friends Image */}
        <section className="text-center space-y-6 sm:space-y-8">
          <div 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=1200&h=601&fit=crop)'
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-12 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                最高の思い出を作ろう！
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
                北軽井沢で過ごす特別な2日間
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                  <Star className="text-yellow-400" size={16} />
                  <span>素敵な仲間</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                  <Heart className="text-red-400" size={16} />
                  <span>忘れられない体験</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                  <Clock className="text-blue-400" size={16} />
                  <span>充実のスケジュール</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Heart size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">北軽井沢の旅 2025</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              みんなで作る最高の思い出。この特別な旅が、私たちの絆をさらに深めてくれることでしょう。
            </p>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 北軽井沢の旅. Made with ❤️ for amazing friends.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;