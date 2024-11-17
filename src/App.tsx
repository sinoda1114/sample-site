import { useState } from 'react';
import { Menu, X, Building2, Users2, Newspaper, Mail, ChevronRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">テックコープ</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">企業情報</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">サービス</a>
              <a href="#news" className="text-gray-600 hover:text-blue-600 transition-colors">ニュース</a>
              <Button variant="default">お問い合わせ</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">企業情報</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">サービス</a>
              <a href="#news" className="block px-3 py-2 text-gray-600 hover:text-blue-600">ニュース</a>
              <Button className="w-full mt-2" variant="default">お問い合わせ</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              テクノロジーで創る<br />
              <span className="text-blue-600">より良い未来</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              私たちは、革新的なソリューションで企業のデジタル変革を支援し、<br />
              人々の暮らしを豊かにします。
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">サービスを見る <ChevronRight className="ml-2 h-4 w-4" /></Button>
              <Button size="lg" variant="outline">詳しく知る</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">企業情報</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              創業以来10年以上にわたり、テクノロジーの最前線で企業のデジタル化を支援し、
              ビジネスの成長に貢献してきました。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Users2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">専門家チーム</h3>
              <p className="text-gray-600">多様な専門知識を持つプロフェッショナルが、お客様のニーズに応えます。</p>
            </Card>
            <Card className="p-6">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">グローバル展開</h3>
              <p className="text-gray-600">世界各地でサービスを展開し、グローバルな視点でソリューションを提供します。</p>
            </Card>
            <Card className="p-6">
              <Newspaper className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">技術革新</h3>
              <p className="text-gray-600">最新技術を活用し、革新的なソリューションで課題解決を実現します。</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">サービス</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              お客様のビジネスニーズに合わせた包括的なソリューションを提供します。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">デジタルトランスフォーメーション</h3>
              <p className="text-gray-600 mb-4">
                ビジネスプロセスの最適化から、デジタル戦略の策定まで、包括的な支援を提供します。
              </p>
              <Button variant="outline">詳細を見る</Button>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">クラウドソリューション</h3>
              <p className="text-gray-600 mb-4">
                安全で拡張性の高いクラウドインフラストラクチャを構築し、運用を支援します。
              </p>
              <Button variant="outline">詳細を見る</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ニュース</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              最新の企業情報や技術動向をお届けします。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-167${item}586754-c77c8c3d${item}a?auto=format&fit=crop&w=800`}
                  alt="ニュース画像"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">最新技術の導入事例</h3>
                  <p className="text-gray-600 mb-4">
                    テクノロジーの活用で実現した業務改善の成功事例をご紹介します。
                  </p>
                  <Button variant="link" className="p-0">続きを読む</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            ビジネスの変革についてご相談ください。専門スタッフが対応いたします。
          </p>
          <Button size="lg" variant="secondary">
            <Mail className="mr-2 h-4 w-4" />
            お問い合わせはこちら
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">テックコープ</span>
              </div>
              <p className="text-sm">
                テクノロジーを通じて、より良い未来を創造します。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">企業情報</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">サービス</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">ニュース</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <ul className="space-y-2">
                <li>contact@techcorp.co.jp</li>
                <li>03-1234-5678</li>
                <li>〒100-0004<br />東京都千代田区大手町1-1-1</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">ソーシャルメディア</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 テックコープ株式会社 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;