window.siteContent = {
  profile: {
    name: "Jiangyue Chen",
    initials: "JC",
    role: "M.S. Student",
    affiliation: "Southeast University",
    location: "Nanjing, China",
    email: "cjy020805@seu.edu.cn",
    avatar: "assets/images/avatar.png",
    github: "https://github.com/YUEcjy13",
    cv: "assets/docs/jiangyue-chen-cv-chinese.pdf",
    interests: [
      "Agent Harness",
      "LLM",
      "Multimodal Retrieval"
    ]
  },
  about: [
    "Hello! I am currently an M.S. student at <a href=\"https://www.seu.edu.cn/\" target=\"_blank\" rel=\"noreferrer\">Southeast University</a>, supervised by <a href=\"https://cs.seu.edu.cn/yaoli/main.htm\" target=\"_blank\" rel=\"noreferrer\">Prof. Li Yao</a>. If you are interested in our research topics or would like to discuss ideas, please feel free to contact me via <a href=\"mailto:cjy020805@seu.edu.cn\">email</a> or <a href=\"assets/images/contact/wechat-qr.jpg\" target=\"_blank\" rel=\"noreferrer\">WeChat</a>."
  ],
  news: [
    {
      date: "Aug. 2026",
      text: "🎉 Two papers accepted by CIKM 2026!"
    },
    {
      date: "Sep. 2025",
      text: "Started my M.S. program at Southeast University."
    }
  ],
  publications: [
    {
      key: "bifocus",
      venue: "CIKM 2026",
      status: "Poster Presentation",
      title: "BiFocus: Evidence-Grounded Patch and Query-Token Calibration for Visual Document Retrieval",
      authors: "Jiangyue Chen, Li Yao, Yuanyang Zhang, Xinwei Li",
      summary: "BiFocus calibrates both page-side visual evidence and query-token contribution in late-interaction visual document retrieval using explicit evidence boxes during training, while keeping inference free of boxes, OCR regions, and teacher attention.",
      metric: "ViDoRe V2: +6.15 nDCG@1 / +3.80 nDCG@5 over ColPali-v1.3; +7.12 nDCG@1 / +4.72 nDCG@5 over ColQwen2.5-v0.2.",
      image: "assets/images/research/bifocus-method.png",
      imageAlt: "BiFocus method diagram showing the shared late-interaction backbone, bbox-to-patch grounding, and evidence-grounded query-token weighting.",
      links: [
        { label: "Paper", href: "assets/docs/bifocus-cikm-2026.pdf" },
        { label: "Code", href: "https://github.com/YUEcjy13/BiFocus", external: true },
        { label: "DOI", href: "https://doi.org/10.1145/3799682.3840605", external: true }
      ]
    },
    {
      key: "tgr-net",
      venue: "CIKM 2026",
      status: "Oral Presentation",
      title: "Prompt Contamination in Realistic Universal Cross-Domain Retrieval: Diagnosis and Text-Guided Rectification",
      authors: "Jiangyue Chen, Li Yao, Yuanyang Zhang, Xinwei Li",
      summary: "TGR-Net introduces DomainCOCO, a realistic universal cross-domain retrieval benchmark with cluttered multi-object scenes, and rectifies distractor-dominated visual evidence before prompt generation for label-free retrieval.",
      metric: "On DomainCOCO unseen-gallery retrieval, TGR-Net improves over DePro by +3.2 nDCG@200, +2.5 mAP@200, and +2.5 Prec@200.",
      image: "assets/images/research/tgr-net-architecture.png",
      imageAlt: "TGR-Net architecture showing text-guided rectification, candidate prompt purification, and multi-scale retrieval inference.",
      links: [
        { label: "Paper", href: "assets/docs/tgr-net-cikm-2026.pdf" },
        { label: "Code", href: "https://github.com/YUEcjy13/TGR-Net", external: true },
        { label: "DOI", href: "https://doi.org/10.1145/3799682.3840693", external: true }
      ]
    }
  ],
  project: {
    tag: "Selected Project",
    title: "Nanobot+",
    subtitle: "Reflective execution supervision for long-horizon agent systems",
    summary: "A secondary development of Nanobot that closes the loop between structured goal state, trajectory tracing, execution verification, reflection memory, and gated replanning.",
    highlights: [
      "Makes long-horizon execution diagnosable through goal-state and trajectory telemetry.",
      "Detects repeated failures and stalled steps, then reuses reflections to avoid unproductive retries.",
      "Evaluated with live stress tasks beyond final success rate, including trajectory completeness and tool-use cost."
    ],
    metrics: [
      { value: "100%", label: "success on 4 stress tasks" },
      { value: "60% → 100%", label: "trajectory completeness" },
      { value: "11.75 → 9.50", label: "average tool calls" }
    ],
    repo: "https://github.com/YUEcjy13/nanobot-long-horizon-agent"
  },
  education: [
    {
      period: "2025 - present",
      school: "Southeast University",
      degree: "M.S. in Software Engineering",
      detail: "School of Computer Science and Engineering · Nanjing, China",
      logo: "assets/images/education/seu-logo.png",
      logoAlt: "Southeast University emblem"
    },
    {
      period: "2021 - 2025",
      school: "Nanjing University of Science and Technology",
      degree: "B.Eng. in Computer Science and Technology",
      detail: "Qian Xuesen College · Nanjing, China",
      logo: "assets/images/education/njust-logo.png",
      logoAlt: "Nanjing University of Science and Technology emblem"
    }
  ],
  honors: [
    "🥈 National Second Prize, Huawei Cup China Graduate Mathematical Contest in Modeling",
    "🥇 National First Prize, National English Competition for College Students (Category C)",
    "🥇 National First Prize, National College Student Physics Competition (Works Competition)",
    "🥇 National First Prize, MathorCup University Mathematical Modeling Challenge",
    "🏅 Special Scholarship, Nanjing University of Science and Technology"
  ]
};
