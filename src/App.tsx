import { useState, useEffect } from "react";
import { Github, Moon, Sun, Search, FileText, Share2, MessageSquare, Database, Mic, ArrowRight, BookOpen, Check, Play, Square, Sparkles, Sliders, Volume2, HardDrive, Link, Lock, Eye, Calendar, Bold, Italic, Underline, Strikethrough, Heading1, Heading2, List, ListOrdered, CheckSquare, Quote, Code, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

function NotisightLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img src="/logo.png" alt="Notisight" className={`object-contain ${className}`} />
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMode, setActiveMode] = useState<"standard" | "sight">("sight");
  
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 150);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans selection:bg-emerald-500/30 radial-bg-light dark:radial-bg pb-12">
      {/* 1. Navbar */}
      <nav className="fixed top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500 glass-panel-light dark:glass-panel rounded-full shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 shrink-0 rounded-[14px] bg-emerald-500 flex items-center justify-center text-white glow-emerald relative z-10 transition-transform duration-300 hover:scale-105 cursor-default overflow-hidden">
              <NotisightLogo className="w-full h-full object-cover scale-110" />
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${isScrolled ? 'max-w-0 opacity-0 -translate-x-8' : 'max-w-[120px] opacity-100 translate-x-0'}`}>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-[#F1F5F9] whitespace-nowrap pl-3">Notisight</span>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://github.com/semhtemiz/NotisightApp" target="_blank" rel="noreferrer" className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/5" id="github-nav-link">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://app.notisight.dev" target="_blank" rel="noreferrer" className="hidden sm:flex ml-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-5 py-2 rounded-full font-semibold transition-all text-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]" id="demo-nav-link">
              Hemen Dene
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Minimalist Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900 dark:text-[#F1F5F9]">
            Senin Verin. <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text text-emerald-500 dark:text-emerald-400">Senin Zekan.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed opacity-90">
            Notlarını, PDF belgelerini ve ses kayıtlarını tek bir akıllı bilgi alanında birleştir. Notisight ile aradığın bilgilere dosyalar arasında kaybolmadan, sadece soru sorarak ulaş.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://app.notisight.dev" target="_blank" rel="noreferrer" className="group bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 text-lg" id="get-started-btn">
              Hemen Dene <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/semhtemiz/NotisightApp" target="_blank" rel="noreferrer" className="glass-panel-light dark:glass-panel hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-900 dark:text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-lg" id="examine-github-btn">
              <Github className="w-5 h-5" /> GitHub'da İncele
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3. Canlı & İnteraktif Uygulama Görseli (Showcase) */}
      <motion.section {...fadeIn} className="px-4 sm:px-6 lg:px-8 pb-32 max-w-5xl mx-auto relative z-10 group flex justify-center" id="live-showcase-section">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] md:rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 hidden md:block scale-95 origin-bottom"></div>
          <div className="relative rounded-xl md:rounded-[1.5rem] overflow-hidden shadow-2xl">
            <img src="/header.png" alt="Notisight App Interface" className="block w-full h-auto object-cover" />
          </div>
        </div>
      </motion.section>

      {/* 4. Temel Felsefeler (3 Sütunlu Grid) */}
      <section className="glass-panel-light dark:glass-panel border-x-0 border-t-0 p-10 md:p-14 mb-24 max-w-6xl mx-auto rounded-3xl" id="philosophy-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.1}} className="flex gap-4 items-start">
            <div className="w-12 h-12 shrink-0 rounded-xl glass-panel-light dark:glass-panel flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-md">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Çoklu Format</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Metin, PDF ve ses kayıtlarını tek bir merkezde topla. Ders notlarından toplantı kayıtlarına, kişisel fikirlerden uzun belgelere kadar tüm bilgilerini daha sonra kolayca bulabileceğin hale getir.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.2}} className="flex gap-4 items-start">
            <div className="w-12 h-12 shrink-0 rounded-xl glass-panel-light dark:glass-panel flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-md">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Akıllı Arama</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Sadece yazdığın kelimeleri değil, ne aradığını da anlamaya çalışan bir arama deneyimi. Notisight, benzer anlamları yakalayarak ihtiyacın olan bilgiye daha hızlı ulaşmanı sağlar.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.3}} className="flex gap-4 items-start">
            <div className="w-12 h-12 shrink-0 rounded-xl glass-panel-light dark:glass-panel flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-md">
              <Share2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Açık ve Esnek</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Açık kaynaklı ve kendi ihtiyaçlarına göre yapılandırılabilir. Notisight’ı kendi sunucunda çalıştırabilir, tercih ettiğin yapay zekâ sağlayıcılarıyla kullanabilirsin.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Özellik Detayları (Zikzak Bloklar) */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto space-y-32" id="features-detail-section">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Yapay Zekâ Etkileşimi</h2>
        </div>

        {/* Block 1 */}
        <motion.div {...fadeIn} className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">İki Farklı AI Modu</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Ne zaman genel bir yapay zekaya, ne zaman kendi kişisel bilgi havuzuna ihtiyaç duyduğuna sen karar ver. Bu ayrım, kontrolü tamamen sana bırakır.
            </p>
            <div className="space-y-4 pt-4">
               <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
                 <div className="mt-1 bg-slate-200 dark:bg-white/10 p-2 rounded-xl text-slate-600 dark:text-slate-300">
                   <MessageSquare className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 dark:text-white mb-1">Standard Mode</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Genel AI sohbeti için kullanılır. Kullanıcının not havuzu taranmaz.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                 <div className="mt-1 bg-emerald-500/20 p-2 rounded-xl text-emerald-600 dark:text-emerald-400">
                   <Eye className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 dark:text-white mb-1">Sight Mode</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Kullanıcının notları, PDF’leri ve ses transkriptleri üzerinden kaynaklı cevap üretir.</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="h-auto min-h-[340px] sm:min-h-[380px] md:aspect-[4/3] rounded-[2rem] glass-panel-light dark:glass-panel shadow-2xl flex flex-col p-6 sm:p-8 overflow-hidden relative group border border-slate-200/50 dark:border-white/5 justify-center items-center">
              
              <div className="w-full max-w-sm space-y-5 relative z-10 select-none">
                 
                 <div className="glass-panel-light dark:glass-panel bg-white/60 dark:bg-[#030303]/90 rounded-2xl p-2 flex gap-2 border border-slate-200 dark:border-white/10 relative shadow-sm">
                   <div 
                     onClick={() => setActiveMode("standard")}
                     className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer ${activeMode === 'standard' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]' : 'bg-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                   >
                      <MessageSquare className="w-4 h-4" /> Standard
                   </div>
                   
                   <div 
                     onClick={() => setActiveMode("sight")}
                     className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer ${activeMode === 'sight' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]' : 'bg-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                   >
                      <Eye className="w-4 h-4" /> Sight Mode
                   </div>
                 </div>

                 <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-5 text-sm text-emerald-700 dark:text-emerald-400/80 leading-relaxed font-medium text-center min-h-[104px] flex items-center justify-center">
                    {activeMode === "sight" ? (
                      <span>Şu an <strong className="text-emerald-600 dark:text-emerald-400">Sight Mode</strong> aktif. Sorularınız, kişisel bilgi havuzunuz temel alınarak kaynaklı bir şekilde cevaplanacaktır.</span>
                    ) : (
                      <span>Şu an <strong className="text-emerald-600 dark:text-emerald-400">Standard Mode</strong> aktif. Genel yapay zeka ile sohbet ediyorsunuz, not havuzunuz taranmaz.</span>
                    )}
                 </div>

              </div>

              <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
            </div>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div {...fadeIn} className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">Kaynaklı Cevaplar</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Bir cevabın nereden geldiğini görmek önemlidir. Notisight, yanıt üretirken kullandığı notu, belgeyi veya içerik bölümünü gösterebilir. Böylece cevabı kontrol edebilir, kaynağına hızlıca dönebilirsin.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="h-auto min-h-[420px] sm:min-h-[460px] rounded-[2rem] glass-panel-light dark:glass-panel shadow-2xl flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden relative group border border-slate-200/50 dark:border-white/5 justify-center">
              <div className="w-full space-y-4 relative z-10 select-none flex flex-col">
                <div className="self-end bg-[#202425] text-[#e0e0e0] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-[18px] sm:rounded-[20px] text-xs sm:text-sm font-medium shadow-sm border border-white/5 max-w-[92%]">
                  ci cd sürecindeki hata neydi neler yapmışım
                </div>
                <div className="self-start glass-panel-light dark:glass-panel !bg-[#0f1512] text-slate-200 p-4 sm:p-5 rounded-2xl rounded-tl-sm text-xs sm:text-sm font-medium w-full shadow-sm border border-emerald-500/30 flex flex-col gap-2.5 sm:gap-3">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold w-max uppercase tracking-wider">
                    <Eye className="w-3 h-3" /> Sight
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2 font-medium">
                    <p>Ah, o CI/CD kabusu! 😅</p>
                    <p className="leading-relaxed">
                      Prod'da uygulama 500 dönüyordu çünkü <code className="text-emerald-300">`DB_CONNECTION`</code> ortam değişkeni eksikti — staging'de varken prod'da hiç tanımlı değilmiş <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] border border-emerald-500/30 ml-0.5 relative -top-1">1</span>.
                    </p>
                    <p>
                      Pipeline başarılı gibi görünüyordu ama env yoktu &rarr; app ayağa kalktı ama DB'ye bağlanamadı 🤯
                    </p>
                    <p>
                      Sonra variable eklendi, redeploy yapıldı ve her şey düzeldi ✅ <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] border border-emerald-500/30 ml-0.5 relative -top-1">1</span>
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-white/10 flex flex-col gap-2.5 sm:gap-3">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                       <FileText className="w-3 h-3" /> Kaynaklar
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer w-max">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">1</div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-200 leading-none mb-1">ci</span>
                          <span className="text-[10px] text-slate-500 leading-none">Belge</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 -left-32 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-teal-500/20 transition-colors duration-700"></div>
            </div>
          </div>
        </motion.div>

        {/* Block 3 */}
        <motion.div {...fadeIn} className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">Zengin Metin Editörü</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Gelişmiş metin editörü ile notlarınızı düzenleyin. Kendi yazdıklarınız veya sisteme yüklediğiniz belgeler üzerinde yapay zeka araçlarıyla içeriklerinizi yeniden yazın, dilbilgisi hatalarını düzeltin veya karmaşık konuları saniyeler içinde açıklatın.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="h-auto min-h-[460px] sm:min-h-[500px] rounded-[2rem] glass-panel-light dark:glass-panel shadow-2xl flex flex-col justify-start p-4 sm:p-6 md:p-8 overflow-hidden relative group border border-slate-200/50 dark:border-white/5 bg-[#0a0a0a]">
              
              <div className="w-full relative z-10 select-none flex flex-col h-full">
                {/* Breadcrumb */}
                <div className="text-[10px] font-medium text-slate-500 mb-4 flex flex-wrap items-center gap-1.5">
                  Genel Notlar <span className="text-slate-600">/</span> <span className="text-slate-300 flex items-center gap-1"><Calendar className="w-3 h-3" /> 2026-03-18 | Günlük Çalışma Notu</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2 mb-4">
                  <span>📅</span> 2026-03-18 | Günlük Çalışma Notu
                </h3>
                
                {/* Main Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-1.5 rounded-lg border border-white/10 bg-[#141414] mb-6 w-full sm:w-max max-w-full">
                  <div className="p-1.5 rounded text-slate-400"><Bold className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 rounded text-slate-400"><Italic className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 rounded text-slate-400"><Underline className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 rounded text-slate-400"><Strikethrough className="w-3.5 h-3.5" /></div>
                  <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
                  <div className="p-1.5 rounded text-slate-400"><Heading1 className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 rounded text-slate-400"><Heading2 className="w-3.5 h-3.5" /></div>
                  <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
                  <div className="p-1.5 rounded text-slate-400"><List className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 rounded text-slate-400"><ListOrdered className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 rounded text-slate-400"><CheckSquare className="w-3.5 h-3.5" /></div>
                </div>
                
                {/* Content Area */}
                <div className="space-y-4 flex-1">
                  <h4 className="text-base font-bold text-white flex items-center gap-2"><span>🧠</span> Genel Durum</h4>
                  
                  <div className="relative mt-5 sm:mt-4">
                    {/* Floating Toolbar */}
                    <div className="absolute -top-10 left-1 sm:left-4 flex items-center gap-1 p-1 rounded-lg border border-white/10 bg-[#1f1f1f] shadow-xl z-20 max-w-[95%] overflow-x-auto">
                       <div className="flex items-center gap-0.5 pr-2 border-r border-white/10 hidden sm:flex">
                         <div className="p-1 rounded text-slate-300"><Bold className="w-3 h-3" /></div>
                         <div className="p-1 rounded text-slate-300"><Italic className="w-3 h-3" /></div>
                         <div className="p-1 rounded text-slate-300"><Underline className="w-3 h-3" /></div>
                       </div>
                       <div className="px-2 py-1 flex items-center gap-1.5 rounded text-emerald-400 text-[10px] font-medium shrink-0">
                         <Sparkles className="w-3 h-3" /> Yeniden Yaz
                       </div>
                       <div className="px-2 py-1 flex items-center gap-1.5 rounded text-slate-200 text-[10px] font-medium shrink-0">
                         <HelpCircle className="w-3 h-3" /> Açıkla
                       </div>
                    </div>
                    
                    {/* Highlighted text */}
                    <p className="text-xs sm:text-sm text-slate-200 bg-blue-500/30 pt-4 pb-2.5 px-2.5 sm:p-2 -mx-1 rounded leading-relaxed border-b-2 border-blue-500/50 relative z-10 mt-6 sm:mt-4">
                      Bugün odak biraz dağınıktı. Sabah toplantıları arka arkaya geldiği için derin işe (deep work) yeterince zaman ayıramadım. Özellikle dashboard performans konusu hâlâ çözülmedi, bu hafta kapanması gerekiyor.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/5 mt-4">
                    <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3"><span>📁</span> Yapılacaklar (Güncel)</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 shrink-0 rounded-full bg-slate-500"></div> Günlük standup toplantısına katıl</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 shrink-0 rounded-full bg-slate-500"></div> Dashboard latency issue için backend ile follow-up</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 shrink-0 rounded-full bg-slate-500"></div> Yeni onboarding flow için metrikleri incele</li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
            </div>
          </div>
        </motion.div>

        {/* Block 4 */}
        <motion.div {...fadeIn} className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">PDF ve Ses Çözümleme</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              PDF belgelerinden uzun toplantı kayıtlarına kadar farklı formatları tek bir yere yükle. Notisight, PDF'lerdeki bilgileri çıkarır ve ses kayıtlarını yazıya döküp özetleyerek aranabilir bilgi alanına dahil eder.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="h-auto min-h-[340px] sm:min-h-[380px] md:min-h-[420px] rounded-[2rem] glass-panel-light dark:glass-panel shadow-2xl flex flex-col items-center justify-center p-5 sm:p-6 md:p-8 overflow-hidden relative group border border-slate-200/50 dark:border-white/5">
              
              <div className="relative z-10 w-full max-w-sm space-y-4 select-none">
                 {/* PDF Processing */}
                 <div className="p-4 rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-50/80 dark:bg-black/40 flex items-start gap-4 shadow-sm">
                   <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                     <FileText className="w-5 h-5 text-red-500" />
                   </div>
                   <div className="flex-1 space-y-2.5">
                     <div className="flex items-center justify-between">
                       <div className="text-xs font-bold text-slate-700 dark:text-slate-200">2026_Strateji_Raporu.pdf</div>
                       <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">OKUNDU</div>
                     </div>
                     <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 italic">
                       "...özellikle yapay zeka entegrasyonu pazar payımızı artırmada kritik rol oynayacak."
                     </div>
                   </div>
                 </div>

                 {/* Audio Processing */}
                 <div className="p-4 rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-50/80 dark:bg-black/40 flex items-start gap-4 shadow-sm">
                   <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                     <Mic className="w-5 h-5 text-emerald-500" />
                   </div>
                   <div className="flex-1 space-y-2.5">
                     <div className="flex items-center justify-between">
                       <div className="text-xs font-bold text-slate-700 dark:text-slate-200">Q3_Degerlendirme.mp3</div>
                       <div className="text-[10px] font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded animate-pulse">DEŞİFRE EDİLİYOR</div>
                     </div>
                     
                     <div className="flex items-center gap-1.5 h-3">
                        <span className="w-0.5 h-full bg-emerald-500 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                        <span className="w-0.5 h-2/3 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-0.5 h-full bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        <span className="w-0.5 h-1/2 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                        <span className="w-0.5 h-3/4 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.5s]"></span>
                        <span className="w-0.5 h-full bg-emerald-500 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                        <span className="w-0.5 h-1/2 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.6s]"></span>
                     </div>
                     
                     <div className="text-[10px] text-slate-500 dark:text-slate-400 italic line-clamp-1">"...lansman tarihi planlandığı üzere..."</div>
                   </div>
                 </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. Bottom CTA (Kapanış) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-200/50 dark:border-white/5 relative overflow-hidden glass-panel-light dark:glass-panel !border-x-0 !border-b-0 rounded-none bg-transparent dark:bg-transparent" id="cta-section">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-emerald-500/5 blur-[100px] rounded-[100%] pointer-events-none"></div>
        
        <motion.div {...fadeIn} className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-slate-900 dark:text-white tracking-tight">Notisight'ı Hemen Keşfedin.</h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Kendi notlarını, belgelerini ve ses kayıtlarını daha kullanışlı hale getiren açık ve esnek bilgi asistanınla bugün tanış.
          </p>
          <a href="https://app.notisight.dev" target="_blank" rel="noreferrer" className="inline-flex text-lg items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-10 py-5 rounded-full font-bold transition-all glow-emerald hover:-translate-y-1 hover:shadow-[0_0_40px_-5px_var(--color-emerald-400)]" id="bottom-cta-btn">
            Hemen Dene <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-slate-200/50 dark:border-white/5 flex items-center justify-center px-4 sm:px-6 lg:px-10 text-[10px] text-slate-500 font-medium uppercase tracking-widest glass-panel-light dark:glass-panel !border-x-0 !border-b-0 rounded-none bg-transparent dark:bg-transparent py-6" id="app-footer">
        <div className="text-center">&copy; 2026 NOTISIGHT.</div>
      </footer>
    </div>
  );
}

