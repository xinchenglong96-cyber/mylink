export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050507] font-sans text-zinc-400 selection:bg-cyan-500/30">
      {/* Matrix/VFX Inspired Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,30,1),rgba(5,5,7,1))]" />
        <div className="absolute top-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-cyan-900/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-purple-900/10 blur-[150px]" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:py-40">
        
        {/* Hero Section: The Creator */}
        <section className="mb-32">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              VFX & Real-time Engine Creator
            </span>
          </div>

          <h1 className="mb-6 text-6xl font-black tracking-tighter text-white sm:text-8xl">
            신승룡 <span className="text-zinc-700">/</span> <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SHIN</span>
          </h1>
          
          <div className="max-w-3xl space-y-6 text-xl leading-relaxed text-zinc-300 sm:text-2xl font-light">
            <p>
              상명대학교 융합공과대학 <span className="text-white font-medium underline decoration-cyan-500/50 underline-offset-8">애니메이션학과</span> 재학 중.
            </p>
            <p>
              영상 연출과 <span className="text-cyan-400">미장센(mise-en-scène)</span>을 중심으로 단순한 기술 구현을 넘어, 
              서사와 분위기가 결합된 강렬한 시각적 경험을 설계합니다.
            </p>
          </div>
        </section>

        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Main Content: Philosophy & Projects */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* About Me Section */}
            <section className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">01. Creative Vision</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Unreal Engine과 Blender를 활용하여 기술과 인간성의 관계를 탐구합니다. 
                  사이버펑크 세계관 속의 자유, 혹은 기후 재난과 같은 사회적 문제를 시각화하는 방식에 깊은 관심을 두고 있습니다.
                </p>
                <div className="rounded-2xl border-l-4 border-cyan-500 bg-white/5 p-6 italic text-zinc-200 shadow-xl">
                  "나의 모든 창작적 호기심은 《매트릭스》와 같은 작품이 던진 철학적 질문에서 출발했습니다."
                </div>
              </div>
            </section>

            {/* Experimental Works Section */}
            <section className="space-y-8">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">02. Experimental Lab</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Found Footage VFX", desc: "실제 기록물 스타일의 현실감 있는 특수효과" },
                  { title: "Aerial Combat CF", desc: "항공전의 속도감과 연출을 담은 시네마틱" },
                  { title: "Cyberpunk Short", desc: "네온과 고뇌가 공존하는 단편 영상" },
                  { title: "Disaster Level Design", desc: "환경 재난을 주제로 한 인터랙티브 레벨" }
                ].map((project) => (
                  <div key={project.title} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05]">
                    <div className="mb-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</div>
                    <div className="text-xs text-zinc-500">{project.desc}</div>
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-cyan-500">↗</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Tech & Tools */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Tool Stack */}
            <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-10">
              <h3 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-cyan-500">Tech Stack</h3>
              <div className="space-y-8">
                <div>
                  <div className="mb-2 flex justify-between text-xs font-bold text-zinc-300">
                    <span>Unreal Engine / Blender</span>
                    <span>Main Tools</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-zinc-800">
                    <div className="h-full w-[95%] rounded-full bg-cyan-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-xs font-bold text-zinc-300">
                    <span>3D Scan / AI Animation</span>
                    <span>Experimental</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-zinc-800">
                    <div className="h-full w-[80%] rounded-full bg-purple-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-xs font-bold text-zinc-300">
                    <span>Live-action & CG Compositing</span>
                    <span>Core Skill</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-zinc-800">
                    <div className="h-full w-[88%] rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
              
              <div className="mt-12 space-y-4">
                <p className="text-sm leading-relaxed text-zinc-500">
                  새로운 제작 도구를 적극적으로 탐구하며 더 효과적인 스토리텔링과 영상 연출을 연구합니다.
                </p>
              </div>
            </section>

            {/* Vision Quote */}
            <div className="p-6 text-center">
              <p className="text-sm font-medium italic text-zinc-600">
                "관객에게 강렬한 경험을 전달하는<br/>작품을 만드는 것이 저의 목표입니다."
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-40 border-t border-white/5 pt-20">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700">
              Shin Seung Ryong © 2026 Portfolio
            </div>
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <span>Sangmyung Univ</span>
              <span>VFX Artist</span>
              <span>Director</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
