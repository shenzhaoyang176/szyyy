import { Personality, Question } from '../types';

export const PERSONALITIES: Record<string, Personality> = {
  sofa: {
    id: 'sofa',
    name: '沙发人格',
    titleName: '沙发',
    englishTitle: 'SOFA PERSONALITY',
    themeColor: '#2d8259', // Rich Nordic poster green
    accentColor: '#1d5e3f',
    textColor: '#ffffff',
    paperBg: '#e8eedf',
    keywords: ['实用', '随遇而安', '节能摆烂', '情绪稳定'],
    descriptionLines: [
      '看起来松弛，实际上已经融进生活模式。',
      '主打一个“能躺绝不坐”。',
      '谁累了都可以来找你，承受了很多，却懒得开口。',
      '你不是没有目标，只是更喜欢舒服地前进。',
      '偶尔收拾一下，也只是抬抬表面。人生没有远大目标，只希望遥控器别掉进缝里。'
    ],
    quote: '能躺着拯救世界，就绝不站着打发时间。',
    matchRate: '98.5%',
    compatibilityBest: '落地灯人格',
    compatibilityWorst: '折叠椅人格',
    badgeCode: 'DAL 1950 - ART NO. 804.101.99'
  },
  nightstand: {
    id: 'nightstand',
    name: '床头柜人格',
    titleName: '床头柜',
    englishTitle: 'NIGHTSTAND PERSONALITY',
    themeColor: '#e0a92d', // Warm amber yellow
    accentColor: '#b88319',
    textColor: '#1a1a1a',
    paperBg: '#fef3d6',
    keywords: ['可靠', '藏事', '陪伴型', '深夜清醒'],
    descriptionLines: [
      '知道别人最多的秘密，却永远安静地待在旁边。',
      '抽屉里藏着药、充电线和过期愿望，表面只摆了一盏灯。',
      '内心已经塞到拉不开，别人睡着以后你还在值班。',
      '你的存在意义就是告诉大家：伸手够不到的东西可以先放在你这里。'
    ],
    quote: '夜晚属于深思者，你的秘密在我这里最安全。',
    matchRate: '94.2%',
    compatibilityBest: '沙发人格',
    compatibilityWorst: '衣柜人格',
    badgeCode: 'OSTE 1974 - ART NO. 201.402.10'
  },
  floor_lamp: {
    id: 'floor_lamp',
    name: '落地灯人格',
    titleName: '落地灯',
    englishTitle: 'FLOOR LAMP PERSONALITY',
    themeColor: '#d66a85', // Trendy Nord blush pink/magenta
    accentColor: '#aa4760',
    textColor: '#ffffff',
    paperBg: '#fbe2e8',
    keywords: ['氛围感', '表现型努力', '间歇发光', '快乐优先'],
    descriptionLines: [
      '本体没有多大作用，但特别擅长制造气氛。',
      '平时安静站着，一到晚上突然开始发光。',
      '看起来很有生活情调，实际上只是照亮了满屋子的混乱。',
      '情绪开关掌握在别人手里，没人按你，你就原地待机。'
    ],
    quote: '我或许不一定实用，但没有我氛围立刻少一半。',
    matchRate: '96.8%',
    compatibilityBest: '折叠椅人格',
    compatibilityWorst: '抽屉人格',
    badgeCode: 'LYSA 1982 - ART NO. 403.992.01'
  },
  folding_chair: {
    id: 'folding_chair',
    name: '折叠椅人格',
    titleName: '折叠椅',
    englishTitle: 'FOLDING CHAIR PERSONALITY',
    themeColor: '#3a6fa0', // Muted Swedish industrial blue
    accentColor: '#264f78',
    textColor: '#ffffff',
    paperBg: '#dce8f5',
    keywords: ['临时救场', '低存在感', '能屈能伸', '工具人'],
    descriptionLines: [
      '平时缩在角落降低存在感，一有事情就被临时叫来顶上。',
      '不占地方，不提要求，打开以后勉强也能撑住场面。',
      '看起来随时可能散架，实际上比很多正式家具都耐用。',
      '你不是没有能力，只是长期处于“用完请收回”状态。'
    ],
    quote: '需要我时召之即来，不需要时我优雅隐身。',
    matchRate: '91.4%',
    compatibilityBest: '衣柜人格',
    compatibilityWorst: '沙发人格',
    badgeCode: 'KLAP 1991 - ART NO. 102.304.88'
  },
  wardrobe: {
    id: 'wardrobe',
    name: '衣柜人格',
    titleName: '衣柜',
    englishTitle: 'WARDROBE PERSONALITY',
    themeColor: '#cf533b', // Terracotta orange red
    accentColor: '#9e3520',
    textColor: '#ffffff',
    paperBg: '#fce4de',
    keywords: ['内耗', '念旧', '选择困难', '隐藏式混乱'],
    descriptionLines: [
      '外表关得严严实实，里面塞满了不能见人的东西。',
      '旧事舍不得扔，新东西又不断往里放。',
      '别人以为你非常能装，其实再塞一件就要当场爆炸。',
      '经常在深夜整理情绪，整理到最后，只是换了个地方乱。'
    ],
    quote: '我表面井井有条，只是因为柜门关得足够紧。',
    matchRate: '95.1%',
    compatibilityBest: '折叠椅人格',
    compatibilityWorst: '床头柜人格',
    badgeCode: 'SKAP 1968 - ART NO. 601.882.33'
  },
  drawer: {
    id: 'drawer',
    name: '抽屉人格',
    titleName: '抽屉',
    englishTitle: 'DRAWER PERSONALITY',
    themeColor: '#7a5299', // Poster violet purple
    accentColor: '#53326e',
    textColor: '#ffffff',
    paperBg: '#ebdcf5',
    keywords: ['念旧', '混乱', '秘密很多', '断舍离失败'],
    descriptionLines: [
      '外表看起来四四方方，拉开以后什么都有。',
      '找东西时永远找不到，不找的时候却不断冒出来。',
      '旧票据、坏耳机和钥匙圈都舍不得扔，你不是杂乱，只是给每段没用的回忆提供了永久居留权。'
    ],
    quote: '拉开我，你会发现一个混乱却温热的宇宙。',
    matchRate: '93.7%',
    compatibilityBest: '沙发人格',
    compatibilityWorst: '落地灯人格',
    badgeCode: 'LADA 2003 - ART NO. 902.115.42'
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    code: 'Q1',
    questionText: '凌晨三点，你听见客厅的沙发突然叹了一口气，你会？',
    subtitle: '凌晨三点 · 客厅异响',
    options: [
      {
        label: 'A',
        text: '给它盖条毯子，谁还没有累的时候',
        personality: 'nightstand',
        colorTag: 'yellow'
      },
      {
        label: 'B',
        text: '立刻坐上去，看看它是不是在提示加班',
        personality: 'floor_lamp',
        colorTag: 'green'
      },
      {
        label: 'C',
        text: '隔着门问：你叹气归叹气，别坐我位置',
        personality: 'folding_chair',
        colorTag: 'blue'
      },
      {
        label: 'D',
        text: '坐到它旁边，两个人一起叹到天亮',
        personality: 'sofa',
        colorTag: 'red'
      }
    ]
  },
  {
    id: 2,
    code: 'Q2',
    questionText: '你发现家里的衣柜正在偷偷穿你的衣服，你的第一反应是？',
    subtitle: '卧室惊魂 · 偷穿时装',
    options: [
      {
        label: 'A',
        text: '算了，它平时光着也挺不容易',
        personality: 'sofa',
        colorTag: 'yellow'
      },
      {
        label: 'B',
        text: '让它拍张照片，看看谁穿得比较好看',
        personality: 'floor_lamp',
        colorTag: 'green'
      },
      {
        label: 'C',
        text: '质问它：你能穿可以，为什么偏穿我最贵的那件？',
        personality: 'wardrobe',
        colorTag: 'blue'
      },
      {
        label: 'D',
        text: '把自己也推进衣柜，体验一下它的工作环境',
        personality: 'drawer',
        colorTag: 'red'
      }
    ]
  },
  {
    id: 3,
    code: 'Q3',
    questionText: '家里突然断网，你会？',
    subtitle: '突发事件 · 网络中断',
    options: [
      {
        label: 'A',
        text: '重启路由器，并用眼神威胁它施压',
        personality: 'folding_chair',
        colorTag: 'yellow'
      },
      {
        label: 'B',
        text: '切换发呆，拍地和现实世界直接接触',
        personality: 'sofa',
        colorTag: 'green'
      },
      {
        label: 'C',
        text: '在房间里走来走去，第一次观察自己的住所',
        personality: 'wardrobe',
        colorTag: 'blue'
      },
      {
        label: 'D',
        text: '立刻睡觉，没有网络的人生不值得清醒',
        personality: 'nightstand',
        colorTag: 'red'
      }
    ]
  },
  {
    id: 4,
    code: 'Q4',
    questionText: '卫生纸只剩最后一点，而新的还没拆，你会？',
    subtitle: '生存极限 · 浴室危机',
    options: [
      {
        label: 'A',
        text: '精准计算用量，挑战人体极限',
        personality: 'folding_chair',
        colorTag: 'yellow'
      },
      {
        label: 'B',
        text: '伸长手臂够新纸，完成浴室高难度动作',
        personality: 'floor_lamp',
        colorTag: 'green'
      },
      {
        label: 'C',
        text: '早就发现了，但一直假装问题不会发生',
        personality: 'wardrobe',
        colorTag: 'blue'
      },
      {
        label: 'D',
        text: '呼叫家人救援，没有人就呼叫命运',
        personality: 'drawer',
        colorTag: 'red'
      }
    ]
  },
  {
    id: 5,
    code: 'Q5',
    questionText: '如果今天所有家务都必须完成，你会先做什么？',
    subtitle: '家务日 · 决策时刻',
    options: [
      {
        label: 'A',
        text: '列一张非常完整，但不会执行的计划',
        personality: 'wardrobe',
        colorTag: 'yellow'
      },
      {
        label: 'B',
        text: '从最简单的开始，然后奖励自己休息三小时',
        personality: 'sofa',
        colorTag: 'green'
      },
      {
        label: 'C',
        text: '同时开始五件，成功让房间更加混乱',
        personality: 'drawer',
        colorTag: 'blue'
      },
      {
        label: 'D',
        text: '判断今天不适合劳动，择吉日再处理',
        personality: 'nightstand',
        colorTag: 'red'
      }
    ]
  },
  {
    id: 6,
    code: 'Q6',
    questionText: '家里的灯突然问你：“你为什么每天都这么晚才关我？”，你会说？',
    subtitle: '深夜长谈 · 灵魂发问',
    options: [
      {
        label: 'A',
        text: '因为我熬夜，你只算到下半场',
        personality: 'nightstand',
        colorTag: 'yellow'
      },
      {
        label: 'B',
        text: '别催，我还没刷到真正有意思的视频',
        personality: 'floor_lamp',
        colorTag: 'green'
      },
      {
        label: 'C',
        text: '你先关，我有点害怕，但我不说',
        personality: 'drawer',
        colorTag: 'blue'
      },
      {
        label: 'D',
        text: '脑细胞都不亮多久了，互相体谅一下',
        personality: 'folding_chair',
        colorTag: 'red'
      }
    ]
  }
];
