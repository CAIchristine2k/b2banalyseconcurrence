/* ============================================================
   ODY B2B — Analyse concurrentielle
   Language toggle (FR/ZH) · Reveal on scroll · Nav · Filters
============================================================ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     I18N — French default, Chinese via selector
  ───────────────────────────────────────────────────────── */
  const I18N = {
    zh: {
      /* Page */
      'page.title': 'ODY B2B — 深度竞争分析 · 2026年7月',
      'page.desc': '餐厅 SaaS 平台市场战略分析 — 欧洲、美国、亚洲。ODY B2B 定位、定价与路线图。',

      /* Nav */
      'nav.findings': '执行摘要',
      'nav.market': '市场',
      'nav.competitors': '竞争对手',
      'nav.models': '经济模型',
      'nav.pricing': 'ODY 定价',
      'nav.positioning': '定位',
      'nav.roadmap': '路线图',
      'nav.synthesis': '综合',

      /* Hero */
      'hero.meta': '内部战略文件 · 2026年7月7日',
      'hero.title': '一个<em>正在重塑</em>的市场分析。',
      'hero.sub': '20 多家竞争对手。三大洲。留给 ODY B2B 的窗口期为 12 至 24 个月——唯一一款既提供固定价格又能带来客户的 SaaS 平台。',
      'hero.s1': '已研究的竞争对手',
      'hero.s2': '正在形成的全球集团',
      'hero.s3': 'Amex 收购 TheFork',
      'hero.s4': 'DoorDash 收购 SevenRooms',
      'hero.scroll': '向下滚动',

      /* Findings */
      'findings.eyebrow': '执行摘要',
      'findings.title': '需牢记的十大结论',
      'findings.sub': '在阅读接下来 50 页内容之前的十大要点 —— 对餐厅 SaaS 平台市场的战略解读。',

      'f1.h': '市场以极快的速度整合',
      'f1.p': '12 个月内：Amex 收购 TheFork（7 亿美元），DoorDash 收购 SevenRooms（12 亿美元），Zenchef 吸收 CoverManager/Guestonline。三大全球集团正在形成。',
      'f2.h': '功能已达到平价',
      'f2.p': '订位、餐桌管理、防爽约、CRM、评论、活动：所有严肃的参与者都提供相同的功能。功能只是入场券，不再是差异化因素。',
      'f3.h': '两种经济模式对立',
      'f3.p': '按佣金计费的市场平台（TheFork 每位就餐者 2.60 欧元，每年高达 38,000 欧元）对比固定价格的 SaaS（Zenchef 每月 69–249 欧元）——后者保护利润但不带来客户。',
      'f4.h': '一个空位仍然开放：固定价格 + 客流',
      'f4.p': '这正是 ODY 凭借其 B2C 应用可以占据的位置。Zenchef 正朝着这个方向前进（其自有大众应用）。窗口期为 12 至 24 个月。',
      'f5.h': '法国商业话语已经标准化',
      'f5.p': '零佣金、固定价格、数据所有权、语音 AI、免费迁移、无合约。一大批微型挑战者已经饱和了「TheFork 替代方案」的 SEO。',
      'f6.h': '行业单位经济要求严苛',
      'f6.p': 'ARPU 每月 100–160 欧元，CAC 1,000–2,500 欧元，年流失率 15–25%（其中约 10 个百分点为关店），回本期 10–18 个月。盈利来自扩展而非基础订阅。',
      'f7.h': '获胜的市场进入策略已被记录',
      'f7.p': '超本地的实地销售，一个城市接一个城市地渗透直至临界密度（Toast、OpenTable、TheFork 的剧本），结合反佣金的 SEO 内容（Zenchef 剧本）。',
      'f8.h': '支付是隐藏的杠杆',
      'f8.p': 'Toast 的主要收入来自支付（2025 年 GPV 达 1,951 亿美元）。OpenTable 在 2026 年引入 2% 费率。ODY 必须在第一年就将支付纳入路线图。',
      'f9.h': '忠诚度是普遍的薄弱环节',
      'f9.p': 'TheFork 的 Yums 和 OpenTable 的积分把顾客绑定到平台，而不是餐厅。ODY 的 XP/奖励系统如果能将顾客绑定到餐厅，将是可防御的差异化优势。',
      'f10.h': 'ODY 的现实目标',
      'f10.p': '6-10 个月内 100 家餐厅，18-30 个月内 500 家，30-48 个月内 1,000 家。定价 49 / 99 / 149-179 欧元/月，零佣金，B2C 首先在一个城市启动。',

      /* Market */
      'market.eyebrow': '市场全景',
      'market.title': '2023-2026 年的整合浪潮',
      'market.sub': '主导事实：三大全球集团通过连续收购形成。没有中型独立参与者能保持独立。',

      'tl.2019.h': 'American Express 收购 Resy（美国）',
      'tl.2019.p': 'Amex 将高端订位与其信用卡持有人绑定 —— Amex 集团的第一块基石。',
      'tl.2021.h': 'SumUp 收购 Tiller（法国）',
      'tl.2021.p': '支付吸收了独立商户的 POS —— 「免费软件、支付变现」的模式在欧洲确立。',
      'tl.2023.h': 'Zenchef 与 Formitable 在 PSG Equity 旗下合并',
      'tl.2023.p': '欧洲零佣金 SaaS 领导者诞生。',
      'tl.2023b.h': 'Guestonline（法国）与 CoverManager（西班牙）联盟',
      'tl.2023b.p': '整合法国和西班牙的先驱。2024 年底统一为 CoverManager 品牌。',
      'tl.2024.h': 'American Express 收购 Tock',
      'tl.2024.p': 'Amex 在其订位生态中加入活动和预付功能。',
      'tl.2025.h': 'DoorDash 收购 SevenRooms',
      'tl.2025.p': '外卖抓住了高端餐厅 CRM。DoorDash 还收购了 Deliveroo（39 亿美元）。',
      'tl.2025b.h': 'CoverManager/Guestonline 与 Zenchef 合并',
      'tl.2025b.p': '欧洲唯一的「零佣金」冠军：Zenchef，约 35,000 家餐厅。',
      'tl.2026.h': 'American Express 从 Tripadvisor 手中收购 TheFork',
      'tl.2026.p': 'Amex 现在拥有 TheFork + Resy + Tock：高端订位的全球集团。',

      /* Segments */
      'segments.eyebrow': '细分市场',
      'segments.title': '四个细分市场，四种需求',
      'seg1.tag': '入门级',
      'seg1.h': '独立小店 < 30 个座位',
      'seg1.p': '小酒馆、咖啡店。优先事项：价格、简单性、替代电话。',
      'seg1.fit': '第一年核心目标',
      'seg2.tag': '主要目标',
      'seg2.h': '结构化独立餐厅（30-80 座）',
      'seg2.p': '啤酒屋、精致餐厅。优先事项：防爽约、上座率、评论、忠诚度。',
      'seg2.fit': '高可及性',
      'seg3.tag': '高端',
      'seg3.h': '米其林 / 高端餐厅',
      'seg3.p': '大型餐厅。优先事项：预付款、丰富 CRM、多渠道形象。',
      'seg3.fit': '需要 3-5 家参考客户',
      'seg4.tag': '企业级',
      'seg4.h': '集团、连锁店、酒店餐饮',
      'seg4.p': '10-500 家店。优先事项：多站点、API、中央报告、集成。',
      'seg4.fit': '第一年较低 — 周期长',

      /* Competitors */
      'comp.eyebrow': '竞争分析',
      'comp.title': '详细的竞争对手档案',
      'comp.sub': '分为三个家族：订位专家、一体化 POS 平台、相邻模型。',
      'filter.all': '全部',
      'filter.res': '订位',
      'filter.pos': 'POS',
      'filter.adj': '相邻',

      'threat.max': '最大威胁',
      'threat.high': '高度威胁',
      'threat.med': '间接竞争',
      'threat.med2': '24-36 个月威胁',
      'threat.low': '法国影响较小',
      'threat.ref': '参考 — 非法国',
      'threat.partner': '集成合作伙伴',
      'threat.saturation': 'SEO 饱和',
      'threat.model': '模型验证',

      'col.strong': '优势',
      'col.weak': '弱点',
      'verdict': 'ODY 判断：',
      'l.sites': '餐厅',
      'l.month': '每月',
      'l.arr': '预计 ARR',
      'l.cover': '每位就餐者（法国）',
      'l.deal': '2026 年 6 月出售',
      'l.covers': '每年就餐者',
      'l.persite': '每个站点（倍数）',
      'l.gpv': '2025 年 GPV',
      'l.raised': '2021 年融资',
      'l.saved': '每桌节省',
      'l.rev': '集团营收',
      'l.kouver': 'Kouver 2 年内',
      'l.commission': '佣金',
      'l.chope': 'Chope 被 Grab 收购',
      'l.tc': 'TableCheck / 酒店业',
      'l.eatapp': 'Eat App / 90+ 国家',

      /* Zenchef */
      'c.zc.owner': 'PSG Equity · + Formitable + CoverManager/Guestonline',
      'c.zc.pitch': '「零佣金。100% 掌握数据。一套系统。」',
      'c.zc.s1': '法国「零佣金」头号品牌',
      'c.zc.s2': '庞大装机量，PSG Equity 背景',
      'c.zc.s3': 'B2C 应用快速增长',
      'c.zc.w1': '前 Guestonline/CoverManager 客户 3 年内 3 次迁移',
      'c.zc.w2': '12 个月合约，可选项不透明',
      'c.zc.w3': '网站/数字菜单历来薄弱',
      'c.zc.v': '最危险最接近的竞争对手。在入门价格、无合约以及 Zenchef 没有的 B2C 奖励循环上击败它。瞄准厌倦迁移的前 Guestonline 客户。',

      /* TheFork */
      'c.tf.owner': 'American Express（前 Tripadvisor）',
      'c.tf.pitch': '「填满您的餐桌。」',
      'c.tf.s1': '欧洲第一大 B2C 受众（4000 万+ 下载）',
      'c.tf.s2': '入门无风险模式：没有客户 = 没有佣金',
      'c.tf.s3': 'Amex 火力 + Tripadvisor/米其林合作伙伴关系',
      'c.tf.w1': '可变成本爆炸：每年 19,000-38,000 欧元',
      'c.tf.w2': '蚕食老顾客 —— 佣金永不停止',
      'c.tf.w3': 'Yums 忠诚度指向平台而非餐厅',
      'c.tf.v': '与其说是竞争对手不如说是商业反面教材：整代挑战者的销售建立在「TheFork 每年花你多少钱？」上。ODY 应做同样的事，同时提供任何挑战者都没有的：真实客流带来。',

      /* OpenTable */
      'c.ot.owner': 'Booking Holdings',
      'c.ot.pitch': '「世界上最大的就餐者网络。」',
      'c.ot.s1': '全球品牌，无与伦比的美国网络',
      'c.ot.s2': '成熟产品，仅入座就餐者收费',
      'c.ot.s3': '强大的 POS 集成（Toast、POSitouch）',
      'c.ot.w1': '2026 年 1 月引入 2% 交易费（低调）',
      'c.ot.w2': '成本高且上升，在法国相关性低',
      'c.ot.w3': '失去对直接客户关系的控制',
      'c.ot.v': '在法国是间接竞争对手，但是重要参考：订阅 + 每位 + 交易百分比展示了领导者能够多深入货币化。ODY 采取相反立场：完全透明的、公开的、可比较的定价。',

      /* SevenRooms */
      'c.sr.owner': 'DoorDash · 2025 年 6 月收购',
      'c.sr.pitch': '「拥有您的客户数据。」',
      'c.sr.s1': '市场上最好的 CRM，营销自动化',
      'c.sr.s2': '无与伦比的参考：Marriott、MGM、Nobu、Harrods',
      'c.sr.s3': '依托 DoorDash 的全球资源',
      'c.sr.w1': '昂贵、复杂，对独立餐厅规模过大',
      'c.sr.w2': '「直接」话语与外送市场所有者之间的张力',
      'c.sr.w3': 'DoorDash 集成仍在进行中',
      'c.sr.v': '第一年不是直接竞争对手，但如果 DoorDash 在欧洲 SMB 民主化 SevenRooms，则在 24-36 个月内构成结构性威胁。这也是 ODY 简化版 CRM 的最佳产品学校。',

      /* Toast */
      'c.to.owner': 'NYSE 上市 · 世界执行标杆',
      'c.to.pitch': '「为餐厅而生。」',
      'c.to.s1': '经过验证的城市密度剧本',
      'c.to.s2': '82% 的收入来自金融解决方案',
      'c.to.s3': 'Toast IQ：每周 40,000 家餐厅使用 AI',
      'c.to.w1': '不在法国运营',
      'c.to.w2': '即使规模化 CAC 也高（负回本期被股市惩罚）',
      'c.to.w3': '硬件亏本销售：财务纪律不可或缺',
      'c.to.v': '不是竞争对手 —— 而是执行手册。本地密度、立即可见的价值、通过支付变现、通过模块扩展。绝对要模仿的模型。',

      /* Resy/Tock */
      'c.rt.owner': 'American Express · 美国高端集团',
      'c.rt.pitch': '「高端订位和预付体验。」',
      'c.rt.s1': 'Amex 集成：Platinum/Centurion 持卡人优先访问',
      'c.rt.s2': 'Tock：预付和票据式订位先驱',
      'c.rt.s3': '简单的固定定价，对抗 OpenTable 的武器',
      'c.rt.w1': '缺席法国核心市场',
      'c.rt.w2': '仅针对高端',
      'c.rt.w3': '企业销售周期',
      'c.rt.v': '短期内都不针对 ODY 核心。宝贵教训：简单固定定价（Resy）和作为收入来源的预付体验（Tock）—— 需要整合的「体验」模块。',

      /* Lightspeed */
      'c.ls.owner': '加拿大 · NYSE/TSX 上市',
      'c.ls.pitch': '「完整的云 POS，通过合作伙伴订位。」',
      'c.ls.s1': 'POS 深度、多站点、生态系统',
      'c.ls.s2': '通过 iKentoo + Gastrofix 拥有稳固欧洲基础',
      'c.ls.s3': '开放的集成市场',
      'c.ls.w1': '没有 B2C 市场，营销/忠诚度较弱',
      'c.ls.w2': '没有原生订位（依赖 Zenchef 等集成）',
      'c.ls.w3': '股市压力下，重新聚焦盈利',
      'c.ls.v': '争夺「软件」预算的间接竞争对手，但更重要的是第 1 大集成合作伙伴。ODY 必须尽快登上 Lightspeed 市场。',

      /* French challengers */
      'c.ch.name': '法国挑战者',
      'c.ch.owner': 'Kouver、Yumcall、TwinTable、Resaclick、Omany、HappyChef',
      'c.ch.pitch': '「TheFork 每年花你 X 欧元。」 —— 到处都有节省计算器。',
      'c.ch.s1': '激进价格，稳定的 24/7 语音 AI',
      'c.ch.s2': '透明度典范，TheFork 迁移陪同',
      'c.ch.s3': '饱和「TheFork 替代方案」SEO',
      'c.ch.w1': '没有一家带来客户（无 B2C 受众）',
      'c.ch.w2': '深度有限：忠诚度、CRM、订单、网站',
      'c.ch.w3': '极小结构的可持续性存疑',
      'c.ch.v': '价格和目标最接近的竞争对手，资源最弱。与其标准对齐，在深度上超越他们，在 B2C 客流上让他们过时。',

      /* sunday */
      'c.su.owner': 'Big Mamma · 2021 年 1.24 亿美元融资',
      'c.su.pitch': '「二维码桌边支付 —— 几秒钟。」',
      'c.su.s1': '参考级 UX，创纪录采用',
      'c.su.s2': '证明提升小费和 Google 评论',
      'c.su.s3': '通过 Big Mamma 初期分发',
      'c.su.w1': '单一功能产品（支付是功能）',
      'c.su.w2': '2022 年中因全球扩张过快而剧烈收缩',
      'c.su.w3': '没有订位或深度 CRM',
      'c.su.v': '教训：(1) 首次服务可见价值加速采用；(2) 单独支付不是平台；(3) 在全球承诺上过早融资 = 痛苦的收缩。本地密度优先。',

      /* Asia */
      'c.as.name': '亚洲基准',
      'c.as.owner': 'Chope × Grab · TableCheck · inline · Eat App',
      'c.as.pitch': '「Chope × Grab：集成到奖励型超级应用中的订位。」',
      'c.as.s1': 'TableCheck：「亚洲 SevenRooms」，无佣金',
      'c.as.s2': 'Chope × Grab：验证超级应用 + 订位模型',
      'c.as.s3': 'Eat App：无商业电话的免费层级',
      'c.as.w1': '缺席 ODY 欧洲市场',
      'c.as.w2': '本地生态系统封闭（LINE、Grab）',
      'c.as.w3': '没有超级应用难以复制的模型',
      'c.as.v': '亚洲比欧洲更能验证「消费者生态系统 + 商家 SaaS」模型。对 ODY 投资者的关键论点：目标模型存在并有效 —— Chope 于 2024 年被 Grab 收购。',

      /* Models */
      'models.eyebrow': '比较分析',
      'models.title': '经济模型对比',
      'models.sub': '每月 800 个市场平台就餐者的餐厅年度模拟成本。只共存三种逻辑：与成功挂钩的佣金、固定订阅、流量抽成。',
      'th.actor': '参与者',
      'th.model': '模式',
      'th.sub': '订阅',
      'th.var': '佣金/可变费用',
      'th.year': '典型年度成本',
      'm.zc.model': 'SaaS 订阅',
      'm.zc.var': '0 欧元 · 支付按需',
      'm.tf.model': '市场平台',
      'm.ot.model': '市场平台 + SaaS',
      'm.ot.var': '每位 1-2.50 美元 + 2% 交易',
      'm.sr.model': 'SaaS 企业级',
      'm.sr.var': '0',
      'm.rs.model': 'SaaS 订阅',
      'm.to.model': 'POS + 支付',
      'm.to.var': '收单营收 ~2.5-3% 的交易额',
      'm.to.year': '数千美元（视 GPV 而定）',
      'm.ls.model': 'POS + 支付',
      'm.ls.var': '支付费用',
      'm.ch.actor': '法国挑战者',
      'm.ody.model': 'SaaS + B2C 生态系统',
      'm.ody.var': '订位 0 · 支付变现',
      'm.reco': '— 推荐',
      'lg.v': '[V] 已验证',
      'lg.e': '[E] 估计',
      'lg.h': '[H] 假设',

      /* Pricing */
      'pricing.eyebrow': '推荐定价',
      'pricing.title': 'ODY 定价架构',
      'pricing.sub': '低于 Zenchef，高于微型挑战者。「先落地再扩展」逻辑 —— 打破入门门槛，通过模块提高 ARPU。',
      't.month': '/月 不含税',
      't.best': '畅销 · 60% 基础',
      't1.h': 'ODY Starter',
      't1.desc': '打破入门门槛。在价值上击败 Resaclick / TwinTable。',
      't1.note': '无限订位',
      't1.l1': '网站小工具 + 原生 Google Reserve',
      't1.l2': '实时餐桌规划',
      't1.l3': '基础防爽约（短信、信用卡预授权）',
      't1.l4': '在 ODY 应用中列出',
      't1.l5': '订位零佣金',
      't2.h': 'ODY Pro',
      't2.desc': '与 Yumcall/Kouver 平价 —— 加上 B2C 客流。',
      't2.note': '包括所有 Starter，加上：',
      't2.l1': '完整可导出 CRM',
      't2.l2': 'Google/TripAdvisor 评论管理',
      't2.l3': '数字菜单/二维码 + 简单网站',
      't2.l4': '一键邮件营销',
      't2.l5': '在 ODY 应用中本地推荐',
      't2.l6': '「ODY 带来的就餐者」仪表板',
      't3.h': 'ODY Growth',
      't3.desc': '与 Zenchef Manage/Grow 竞争。提升 ARPU。',
      't3.note': '包括所有 Pro，加上：',
      't3.l1': '联名 XP/奖励忠诚度',
      't3.l2': '营销自动化',
      't3.l3': '24/7 语音 AI 订位',
      't3.l4': 'Click & collect + 体验模块',
      't3.l5': '多站点、API、高级分析',
      'pn.strong': '所有层级通用：',
      'pn.body': ' 订位 0% 佣金 · 支付以银行卡结算价变现 · 仅对 ODY 应用带来的 click & collect 营收收取适度佣金（5-8%）· 年付 -20% · 免费设置和迁移 · 30 天试用 · 无合约。完全公开的透明度 = 对抗 TheFork 不透明性和 Zenchef 未定价选项的武器。',

      /* Positioning */
      'pos.eyebrow': '推荐定位',
      'pos.title': '可防御的位置',
      'pos.claim': '「唯一一款既提供固定价格又<em>带来客户</em>的工具。」',
      'pr1.h': '数字化证据',
      'pr1.p': '每月「ODY 带来的就餐者与营收」仪表板，以欧元计量，首月账单起即可查看。20 年无法验证承诺的反面。',
      'pr2.h': '本地密度',
      'pr2.p': '一个 ODY 应用对消费者真正有用的饱和城市。Toast/TheFork 剧本：任何 B2C 启动前 100-150 家活跃餐厅。',
      'pr3.h': '反向忠诚度',
      'pr3.p': 'XP/奖励计划实际将顾客带回合作伙伴场所。TheFork Yums 的完全反面。',
      'vs.tf': '对抗 TheFork',
      'vs.tf.h': '「有客流，无永不停止的佣金」',
      'vs.tf.p': '如果您愿意，把 TheFork 保留用于发现 —— 但每个通过应用重新预订的老顾客都要花您一杯咖啡的钱。使用 ODY，第二次访问免费归您。',
      'vs.zc': '对抗 Zenchef',
      'vs.zc.h': '「相同理念，加上客户」',
      'vs.zc.p': '像他们一样零佣金，无合约，公开的一价全包，48 小时内安装 —— 加上一个奖励客户回到您店里的应用，而不仅仅是名录。',
      'vs.ch': '对抗挑战者',
      'vs.ch.h': '「同价，谁能填满您的餐桌」',
      'vs.ch.p': 'Kouver、Yumcall、TwinTable 有语音 AI 和透明度。没有一个带来就餐者。每个月，您的 ODY 仪表板显示我们带来的就餐者和欧元数。',
      'vs.pos': '对抗 POS',
      'vs.pos.h': '「不替换您的收银台 —— 帮它装满」',
      'vs.pos.p': 'Lightspeed、Zelty、L\'Addition、Tiller：经认证的集成合作伙伴。ODY 接入并处理客户就座前和离开后的一切。',

      /* Roadmap */
      'rd.eyebrow': '12 个月 GTM 计划',
      'rd.title': '四阶段路线图',
      'rd.sub': '本地密度，首选一个城市。实地销售 + 入站 SEO。B2C 启动按信号而非日历。',
      'ph1.h': '设计合作伙伴',
      'ph1.p': '仅一个密集城市。创始人现场销售。瞄准每月支付 > 500 欧元 TheFork 佣金的餐厅和厌倦迁移的前 Guestonline 客户。',
      'ph1.m1': '20 家活跃客户',
      'ph1.m2': '3 个视频推荐',
      'ph1.m3': 'NPS > 50，零流失',
      'ph2.h': '销售机器',
      'ph2.p': '1-2 名现场销售。在线节省计算器。反佣金 SEO。首批 POS 合作伙伴（Zelty、L\'Addition、Tiller）、餐饮网站代理、CHR 会计师。',
      'ph2.m1': '100 家客户',
      'ph2.m2': 'CAC < 1,200 欧元',
      'ph2.m3': '2 家 POS 集成上线',
      'ph3.h': 'B2C 启动',
      'ph3.p': '仅在第 1 号城市启动 B2C 应用（密度 ≥ 100-150 家餐厅）。美食微网红、启动活动、欢迎 XP。首个「ODY 带来的就餐者」仪表板投产。',
      'ph3.m1': '每月 5,000-15,000 活跃用户',
      'ph3.m2': '每家餐厅每月 ≥ 5 位 ODY 就餐者',
      'ph3.m3': 'M1 应用留存 > 25%',
      'ph4.h': '复制',
      'ph4.p': '使用记录剧本开设第 2 号城市。展会（Food Hotel Tech、Sirha）。Meta/Google 本地广告。谈判分发合作伙伴（专业银行、供应商、酒商）。',
      'ph4.m1': '350+ 家客户',
      'ph4.m2': '月流失 < 1.5%',
      'ph4.m3': 'LTV/CAC > 3 · 准备融资',

      /* Projections */
      'pj.eyebrow': '指示性财务计划',
      'pj.title': '3 年轨迹',
      'pj.sub': '基于推荐定价（加权 ARPU 每月 95-110 欧元）和行业单位经济基准构建的谨慎预测。',
      'pj.y1': '第 1 年末',
      'pj.y2': '第 2 年末',
      'pj.y3': '第 3 年末',
      'pj.k1': '活跃餐厅',
      'pj.k2': '开设的城市',
      'pj.k3': '月度 ARPU',
      'pj.k4': '结束 MRR',
      'pj.k5': '结束 ARR',
      'pj.k6': '员工数',
      'pj.k7': '月度客户流失',
      'pj.k8': '融资',
      'pj.f1': '种子前/种子 100-150 万欧元',
      'pj.f2': '种子/A 轮 300-500 万欧元',
      'pj.f3': 'A/B 轮视野心而定',
      'pj.ctrl': '三个财务控制点：',
      'pj.ctrl.p': ' (1) CAC 回本期 ≤ 12 个月 —— Toast 2026 年初的制裁提醒即使是领导者也无权在获客上过度支出；(2) 非订阅收入份额（支付、click & collect、体验）第 3 年必须超过 20%；(3) 客户侧「带来营收/支付订阅」比率，是流失的最佳先行指标。',

      /* Synthesis */
      'sy.eyebrow': '战略综合',
      'sy.title': '战斗将在三个纪律上取胜',
      'sy.p1': '在三巨头通过收购形成（Amex、DoorDash、Zenchef/PSG）、法国挑战者群将价格拉至每月 29-99 欧元的格局中，ODY 既不能在功能上获胜（可实现的平价但不差异化），也不能仅在价格上获胜。',
      'sy.p2': '唯一可防御且仍开放的位置是真正带来客户的固定价格 SaaS，由 ODY B2C 生态系统赋予可信度。Zenchef 通过其大众应用正在接近这一点。执行窗口期为 12 至 24 个月。',
      'sy.p3': '赢家的三个纪律：<strong>本地密度</strong>（Toast/TheFork 剧本）、<strong>数字化证据</strong>（「ODY 带来的就餐者」仪表板，20 年无法验证承诺的反面），以及<strong>无可挑剔的执行 + 支持</strong>（真正的流失原因不是缺失功能，而是失望的信任）。',
      'sy.final': '复制 Zenchef 的经济、Toast 的密度、简化版的 SevenRooms CRM、挑战者的反佣金说教 —— 并通过奖励型 B2C 循环不被任何一方复制，逐城市、逐欧元证明。',

      /* Footer */
      'ft.doc': '深度竞争分析 · 餐厅、咖啡馆、酒吧和食品商 SaaS 平台市场。',
      'ft.scope': '欧洲 · 法国 · 英国 · 美国 · 亚洲',
      'ft.date': '2026 年 7 月',
      'ft.internal': '内部战略文件'
    }
  };

  const FR_CACHE = new WeakMap();

  function cacheFR() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!FR_CACHE.has(el)) FR_CACHE.set(el, el.textContent);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      if (!FR_CACHE.has(el)) FR_CACHE.set(el, el.innerHTML);
    });
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'fr');
    const dict = I18N[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (lang === 'fr') {
        const fr = FR_CACHE.get(el);
        if (fr != null) el.textContent = fr;
      } else if (dict && dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (lang === 'fr') {
        const fr = FR_CACHE.get(el);
        if (fr != null) el.innerHTML = fr;
      } else if (dict && dict[key] != null) {
        el.innerHTML = dict[key];
      }
    });

    const titleEl = document.querySelector('title');
    if (titleEl) {
      if (lang === 'fr') {
        const fr = FR_CACHE.get(titleEl);
        if (fr) titleEl.textContent = fr;
      } else if (dict && dict['page.title']) {
        titleEl.textContent = dict['page.title'];
      }
    }
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      const key = descEl.getAttribute('data-i18n');
      if (!descEl.getAttribute('data-fr-content')) {
        descEl.setAttribute('data-fr-content', descEl.getAttribute('content'));
      }
      if (lang === 'fr') {
        descEl.setAttribute('content', descEl.getAttribute('data-fr-content'));
      } else if (dict && dict[key]) {
        descEl.setAttribute('content', dict[key]);
      }
    }

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try { localStorage.setItem('ody-lang', lang); } catch (e) {}
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  function initFilters() {
    const tabs = document.querySelectorAll('.comp-tab');
    const cards = document.querySelectorAll('#compGrid .comp');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const f = tab.getAttribute('data-filter');
        cards.forEach(c => {
          c.hidden = !(f === 'all' || c.getAttribute('data-cat') === f);
        });
      });
    });
  }

  function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));
    document.querySelectorAll('.nav__links a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  function init() {
    cacheFR();
    initNav();
    initReveal();
    initFilters();

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
    });

    let lang = 'fr';
    try {
      const saved = localStorage.getItem('ody-lang');
      if (saved === 'fr' || saved === 'zh') lang = saved;
    } catch (e) {}
    if (lang !== 'fr') applyLang(lang);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
