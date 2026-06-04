window.siteData = {
  profile: {
    nameZh: "陈江悦",
    nameEn: "Jiangyue Chen",
    titleZh: "东南大学软件工程硕士 · 多模态检索 / Agentic RAG 研究者",
    titleEn: "M.S. Student in Software Engineering at Southeast University",
    subtitle:
      "Research and projects spanning multimodal retrieval, visual document understanding, and long-horizon agent systems.",
    email: "cjy020805@163.com",
    resume: "assets/docs/resume.pdf",
    avatar: "assets/images/avatar.png",
    github: "https://github.com/YUEcjy13",
    focus: [
      "Multimodal Retrieval",
      "Visual Document Retrieval",
      "RAG & Agent Systems",
      "Long-horizon Execution"
    ],
    heroStats: [
      {
        value: "Research",
        label: "Visual retrieval and multimodal search",
        note: "聚焦视觉文档检索、跨域检索与检索增强建模"
      },
      {
        value: "Systems",
        label: "RAG and long-horizon agent execution",
        note: "关注 memory、diagnosis、reflection 与 replanning"
      },
      {
        value: "Background",
        label: "SEU M.S. · NJUST B.Eng.",
        note: "保研至东南大学，本科阶段获特等奖学金"
      }
    ],
    quickLinks: [
      { label: "Email", href: "mailto:cjy020805@163.com", style: "primary" },
      { label: "Website", href: "https://personal-website.vercel.app/", style: "secondary" },
      { label: "GitHub", href: "https://github.com/YUEcjy13", style: "secondary" },
      { label: "Resume", href: "assets/docs/resume.pdf", style: "secondary" }
    ],
    summaryPoints: [
      "我的工作通常从检索问题出发，再逐步延伸到训练信号设计、系统闭环和实验验证。",
      "我擅长把“模型想法”推进成“可跑、可测、可解释”的工程实现，尤其关注 evidence grounding、memory、replanning 和 evaluation。",
      "目前重点寻找大模型算法、多模态检索、RAG / Agent 相关实习，希望进入既重研究深度也重系统落地的团队。"
    ]
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Project", href: "#project" },
    { label: "Education", href: "#education" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" }
  ],
  deployment: {
    liveSite: "https://personal-website.vercel.app/",
    mirrorSite: "https://YUEcjy13.github.io/personal-website/",
    githubRepo: "https://github.com/YUEcjy13/personal-website"
  },
  pillars: [
    {
      title: "Evidence-grounded Retrieval",
      body: "从视觉文档检索到跨域图像检索，我更关心监督信号如何真正对齐检索决策。"
    },
    {
      title: "Agent Execution Loops",
      body: "不仅关注 agent 是否完成任务，也关注失败检测、诊断、反思复用与重规划恢复。"
    },
    {
      title: "Benchmark-driven Engineering",
      body: "更关注可复现的实验设计、可追踪的系统行为，以及长期可维护的项目表达。"
    }
  ],
  education: [
    {
      period: "2025.09 - Present",
      school: "东南大学计算机科学与工程学院",
      degree: "软件工程 · 学术型硕士",
      details:
        "研究方向包括多模态检索、视觉文档检索、大模型检索增强与 Agentic RAG。"
    },
    {
      period: "2021.09 - 2025.06",
      school: "南京理工大学钱学森学院",
      degree: "计算机科学与技术 · 本科",
      details:
        "综合排名专业前 8%，四级 621、六级 597，曾获校级特等奖学金并保研至东南大学。"
    }
  ],
  experience: [
    {
      period: "2023.08",
      org: "中科南京人工智能创新研究院",
      role: "实习生",
      title: "YOLOv8 长尾目标检测与模型压缩",
      bullets: [
        "负责长尾目标检测与剪枝压缩实验，调研并复现主流剪枝方法。",
        "分析剪枝比例对检测精度与推理速度的影响，完成训练、调参和实验报告。",
        "沉淀了目标检测、模型压缩、实验复现与性能权衡的工程经验。"
      ]
    }
  ],
  research: [
    {
      slug: "bifocus",
      href: "research/bifocus.html",
      title: "BiFocus",
      subtitle: "Evidence-grounded Patch and Query-token Calibration for Visual Document Retrieval",
      status: "First Author · CIKM 2026 Submission",
      problem:
        "ColPali / ColQwen 这类 late-interaction 模型能学习页面侧证据区域，但 query-token 对最终 MaxSim 聚合的贡献缺乏显式监督。",
      summary:
        "BiFocus 将 BBox-DocVQA 的 evidence boxes 同时用于 patch grounding 与 query-token weighting，对 late-interaction 视觉文档检索做双侧校准。",
      highlights: [
        "提出 bbox-to-patch soft grounding，把 evidence boxes 映射到 32×32 patch grid。",
        "定义 evidence-induced query-token credits，并训练轻量 token scorer。",
        "推理阶段无需 bbox / OCR / teacher attention，保持原始页面检索接口。"
      ],
      metrics: [
        { label: "ColPali-v1.3", value: "+6.15 nDCG@1 / +3.80 nDCG@5" },
        { label: "ColQwen2.5-v0.2", value: "+7.12 nDCG@1 / +4.72 nDCG@5" }
      ],
      keywords: [
        "Visual Document Retrieval",
        "ColPali",
        "ColQwen",
        "Patch Grounding",
        "Query-token Weighting",
        "Multimodal RAG"
      ],
      detail: {
        challenge:
          "视觉文档检索的 late interaction 本质上按 query token 聚合页面证据，但已有监督大多只告诉模型“这页相关”或“这一块重要”，没有进一步约束哪些 query token 应该主导匹配。",
        approach:
          "BiFocus 复用 BBox-DocVQA 的显式 evidence boxes，先校准页面侧 patch 证据，再根据 token-patch alignment 诱导 query-token credits，最终实现 evidence-aware weighted late interaction。",
        whyItMatters:
          "这项工作不是单纯提高分数，而是补上了 late-interaction 视觉检索里 query-side supervision 的缺口，使训练信号更接近真实打分机制。",
        sections: [
          {
            title: "Public Summary",
            items: [
              "识别并明确提出 late-interaction VDR 中的 supervision asymmetry。",
              "将显式文档证据区域转成 soft patch targets，而不是依赖 teacher attention。",
              "用同一份页面证据进一步推导 token contribution，避免 patch-only supervision 的信息浪费。"
            ]
          },
          {
            title: "Interview Angles",
            items: [
              "为什么 query token 监督是 late interaction 的关键薄弱点。",
              "如何把文档 QA 的局部标注迁移到检索训练中。",
              "为什么 inference 阶段仍能保持无 bbox / OCR 的轻量部署形态。"
            ]
          }
        ],
        resultNotes: [
          "ViDoRe V2 上对 ColPali 与 ColQwen backbone 都有稳定增益。",
          "在更饱和、extractive 倾向更强的 ViDoRe V1 上保持强基线表现。"
        ]
      }
    },
    {
      slug: "tgr-net",
      href: "research/tgr-net.html",
      title: "TGR-Net",
      subtitle: "Prompt Contamination Diagnosis and Text-guided Rectification for Realistic UCDR",
      status: "First Author · CIKM 2026 Submission",
      problem:
        "传统 UCDR benchmark 偏单目标、低干扰，难以暴露 candidate-token prompt learning 在真实多目标场景中的视觉漂移问题。",
      summary:
        "TGR-Net 围绕 prompt contamination 提出诊断基准 DomainCOCO，并通过 Text-Guided Rectification 与 Candidate Prompt Purification 修正 distractor-dominated visual evidence。",
      highlights: [
        "构建 DomainCOCO：一个带主目标与上下文干扰物的 realistic UCDR benchmark。",
        "定义 prompt contamination，解释自适应提示为何会被显著干扰物带偏。",
        "提出 CPP、teacher-student distillation 与 learnable null token，实现无标签推理。"
      ],
      metrics: [
        { label: "Unseen Gallery", value: "+3.2 nDCG@200 / +2.5 mAP@200" },
        { label: "Prec@200", value: "+2.5 over DePro baseline" }
      ],
      keywords: [
        "Universal Cross-Domain Retrieval",
        "CLIP",
        "Prompt Learning",
        "Benchmark Construction",
        "Token Rectification"
      ],
      detail: {
        challenge:
          "当图像里同时有主目标和高显著性干扰物时，candidate-token 驱动的 prompt learner 很容易被 distractor 主导，导致 retrieval representation 向错误对象漂移。",
        approach:
          "TGR-Net 先用文本语义作为 guidance 信号，重加权 patch-level visual evidence，再把更干净的候选 token 送入 prompt generator；训练时有 teacher，部署时由 student + null token 完成 label-free inference。",
        whyItMatters:
          "这项工作更关注 benchmark 是否真实覆盖了问题场景，以及模型为什么会失效，而不只是最终分数的变化。",
        sections: [
          {
            title: "Public Summary",
            items: [
              "构造 DomainCOCO，用多目标构图与 SDXL 风格域偏移 stress-test UCDR 模型。",
              "把 prompt contamination 定义为一个可解释、可观察的失败模式。",
              "通过 rectification + purification，降低 distractor-dominated prompt synthesis。"
            ]
          },
          {
            title: "Interview Angles",
            items: [
              "为什么 object-centric benchmark 会误导模型能力判断。",
              "如何从 benchmark construction 反推模型的真实失效点。",
              "为什么 text guidance 在这里比无约束 candidate aggregation 更稳。"
            ]
          }
        ],
        resultNotes: [
          "在更 cluttered 的 DomainCOCO 上提升更明显，验证问题定义成立。",
          "注意力可视化与 retrieval case study 支撑“视觉漂移被缓解”的解释。"
        ]
      }
    }
  ],
  projects: [
    {
      slug: "nanobot-plus",
      href: "projects/nanobot.html",
      title: "Nanobot+",
      subtitle: "Reflective Execution Supervisor for Long-horizon Agent Execution",
      status: "Core Developer · Open-source Secondary Development",
      summary:
        "围绕通用 agent 在长时任务里容易目标漂移、失败重试、过程不可诊断的问题，构建 goal state → tracing → verifier → reflection memory → replanning 的闭环执行系统。",
      repo: "https://github.com/YUEcjy13/nanobot-long-horizon-agent",
      painPoints: [
        "长时任务中目标状态不透明，难以判断 agent 是否偏离原计划。",
        "失败后容易重复尝试同一路径，缺乏 failure-aware recovery。",
        "执行过程和关键异常信号缺少可观测性，benchmark 很难解释。"
      ],
      loop: [
        "Structured Goal State",
        "Trajectory Tracing",
        "Execution Verifier",
        "Reflection Memory",
        "Gated Replanning"
      ],
      engineering: [
        "实现 task-focused episodic execution memory 与可追踪轨迹日志。",
        "通过 WebSocket 将计划步骤、失败信号与重规划状态同步到 WebUI。",
        "引入 rule-based verifier 与 reflection memory，在 repeated failure / stalled step 下自动生成 reflection 并驱动恢复。"
      ],
      spotlightPoints: [
        {
          label: "Execution Anchor",
          value: "Structured goal state"
        },
        {
          label: "Tracing",
          value: "Trajectory and failure signals"
        },
        {
          label: "Recovery",
          value: "Reflection-guided replanning"
        },
        {
          label: "Interface",
          value: "Realtime WebUI telemetry"
        }
      ],
      metrics: [
        { label: "Success Rate", value: "100% on 4 stress tasks" },
        { label: "Trajectory Completeness", value: "60% → 100%" },
        { label: "Reflection Reuse", value: "100%" },
        { label: "Average Tool Calls", value: "11.75 → 9.50" },
        { label: "Average Latency", value: "63,186 ms → 52,658 ms" }
      ],
      detail: {
        challenge:
          "单纯把模型接上工具并不能得到稳定的长时任务系统，真正困难的是：如何在多轮执行里维持任务状态、识别失败类型、避免无意义重试，并留下足够可解释的轨迹。",
        approach:
          "Nanobot+ 以结构化 goal state 作为执行锚点，以 trajectory tracing 和 verifier 发现异常，再通过 reflection memory 与 gated replanning 恢复路径，把监督从“最后成功没”提前到“执行中发生了什么”。",
        whyItMatters:
          "这个项目比较集中地体现了我在 agent loop、memory、diagnosis、telemetry 和 benchmark design 上的系统实现能力。",
        sections: [
          {
            title: "System Loop",
            items: [
              "Goal state 保存当前计划与进展锚点，减少目标漂移。",
              "Trajectory tracing 记录关键动作、结果、失败信号与上下文。",
              "Verifier 识别 repeated failure / stalled step 并触发反思。",
              "Reflection memory 复用已有失败经验，避免重复踩坑。",
              "Gated replanning 控制何时重规划、何时继续原路线。"
            ]
          },
          {
            title: "Benchmark Design",
            items: [
              "构建 baseline、nanobot_plus、reflective_supervisor 三组 live benchmark。",
              "不仅看 success，还跟踪 replan、reflection、reuse、trajectory completeness 和工具调用成本。",
              "让“系统为什么更稳”可以被量化，而不是只看单次演示。"
            ]
          }
        ],
        resultNotes: [
          "reflective_supervisor 在 4 个 stress tasks 上全部成功。",
          "replan、reflection 与 reuse 指标共同说明 supervisor 的价值不是偶然成功。"
        ]
      }
    }
  ],
  awards: {
    featured: [
      {
        name: "“华为杯”中国研究生数学建模竞赛全国二等奖",
        note: "研究生阶段国家级高含金量竞赛，体现建模与科研表达能力。",
        href: "assets/docs/awards/huawei-cup-national-second-prize.pdf",
        tag: "National Award"
      },
      {
        name: "全国大学生英语竞赛 C 类国家一等奖",
        note: "前 5‰，证明英文阅读与写作能力，利于阅读论文与国际交流。",
        href: "assets/docs/awards/nec-national-first-prize.pdf",
        tag: "National 1st Prize"
      },
      {
        name: "南京理工大学特等奖学金",
        note: "校级前 1%，与保研背景一起构成稳定学业信号。",
        href: "assets/docs/awards/special-scholarship.pdf",
        tag: "Scholarship"
      }
    ],
    all: [
      {
        name: "“华为杯”第二十二届中国研究生数学建模竞赛全国二等奖",
        href: "assets/docs/awards/huawei-cup-national-second-prize.pdf",
        preview: "assets/images/award-cupt.jpg",
        type: "PDF"
      },
      {
        name: "全国大学生英语竞赛 C 类国家一等奖",
        href: "assets/docs/awards/nec-national-first-prize.pdf",
        type: "PDF"
      },
      {
        name: "第十四届全国大学生物理竞赛（作品赛）全国一等奖",
        href: "assets/docs/awards/physics-competition-national-first-prize.pdf",
        type: "PDF"
      },
      {
        name: "第十三届 MathorCup 高校数学建模挑战赛全国一等奖",
        href: "assets/docs/awards/mathorcup-national-first-prize.pdf",
        type: "PDF"
      },
      {
        name: "南京理工大学校级特等奖学金",
        href: "assets/docs/awards/special-scholarship.pdf",
        type: "PDF"
      },
      {
        name: "全国大学生英语竞赛二等奖",
        href: "assets/docs/awards/nec-second-prize.pdf",
        type: "PDF"
      },
      {
        name: "蓝桥杯省赛三等奖",
        href: "assets/docs/awards/lanqiao-provincial-third-prize.pdf",
        type: "PDF"
      },
      {
        name: "智能网联汽车设计二等奖",
        href: "assets/docs/awards/intelligent-vehicle-design-second-prize.pdf",
        preview: "assets/images/award-vehicle.jpg",
        type: "PDF"
      },
      {
        name: "CATTI 杯一等奖",
        href: "assets/docs/awards/catti-cup-first-prize.png",
        preview: "assets/images/award-catti.png",
        type: "IMG"
      },
      {
        name: "优秀学生干部",
        href: "assets/docs/awards/outstanding-student-cadre.pdf",
        type: "PDF"
      }
    ]
  }
};
