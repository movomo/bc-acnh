export const statList = [
  {
    groupName: "gender",
    colName: ["여성", "남성"],
    value: [208, 244],
  },
  {
    groupName: "species",
    colName: [
      "개",
      "개구리",
      "개미핥기",
      "고릴라",
      "고양이",
      "곰",
      "꼬마곰",
      "늑대",
      "다람쥐",
      "닭",
      "독수리",
      "돼지",
      "말",
      "문어",
      "사슴",
      "사자",
      "새",
      "수소",
      "악어",
      "암소",
      "양",
      "염소",
      "오리",
      "원숭이",
      "쥐",
      "캥거루",
      "코끼리",
      "코뿔소",
      "코알라",
      "타조",
      "토끼",
      "펭귄",
      "하마",
      "햄스터",
      "호랑이",
    ],
    value: [
      16, 18, 7, 9, 23, 15, 16, 11, 18, 9, 9, 15, 15, 3, 10, 7, 13, 6, 7, 4, 13,
      8, 17, 8, 15, 8, 11, 6, 9, 10, 20, 13, 7, 8, 7,
    ],
  },
  {
    groupName: "personality",
    colName: [
      "느끼함",
      "단순 활발",
      "먹보",
      "무뚝뚝",
      "성숙함",
      "아이돌",
      "운동광",
      "친절함",
    ],
    value: [34, 24, 60, 55, 55, 49, 55, 59],
  },
  {
    groupName: "hobby",
    data: [
      { name: "교육", 여성: 32, 남성: 32 },
      { name: "놀이", 여성: 16, 남성: 49 },
      { name: "운동", 여성: 12, 남성: 54 },
      { name: "음악", 여성: 34, 남성: 30 },
      { name: "자연", 여성: 27, 남성: 39 },
      { name: "패션", 여성: 66, 남성: 0 },
    ],
    colName: ["교육", "놀이", "운동", "음악", "자연", "패션"],
    value: [64, 65, 66, 64, 66, 66],
    female: [32, 16, 12, 34, 27, 66],
    male: [32, 49, 54, 30, 39, 0],
  },
  {
    groupName: "style",
    colName: ["고져스", "액티브", "엘레강스", "큐트", "쿨", "심플"],
    value: [38, 50, 54, 63, 68, 118],
  },
  {
    groupName: "popularity-by-species",
    xLabels: [
      "문어",
      "사슴",
      "고양이",
      "꼬마곰",
      "늑대",
      "코뿔소",
      "양",
      "개",
      "염소",
      "오리",
      "다람쥐",
      "독수리",
      "타조",
      "펭귄",
      "말",
      "개구리",
      "토끼",
      "햄스터",
      "코알라",
      "코끼리",
      "호랑이",
      "악어",
      "곰",
      "사자",
      "원숭이",
      "돼지",
      "쥐",
      "암소",
      "닭",
      "개미핥기",
      "캥거루",
      "수소",
      "하마",
      "새",
      "고릴라",
    ],
    yLabels: [1, 2, 3, 4, 5, 6],
    // data: [
    //   [66.67, 0.0, 33.33, 0.0, 0.0, 0.0],
    //   [10.0, 30.0, 30.0, 30.0, 0.0, 0.0],
    //   [8.7, 26.09, 17.39, 17.39, 21.74, 8.7],
    //   [18.75, 6.25, 6.25, 12.5, 31.25, 25.0],
    //   [0.0, 18.18, 36.36, 27.27, 18.18, 0.0],
    //   [16.67, 0.0, 0.0, 16.67, 50.0, 16.67],
    //   [0.0, 15.38, 0.0, 7.69, 38.46, 38.46],
    //   [0.0, 12.5, 18.75, 25.0, 25.0, 18.75],
    //   [12.5, 0.0, 25.0, 25.0, 0.0, 37.5],
    //   [0.0, 11.76, 0.0, 17.65, 17.65, 52.94],
    //   [5.56, 5.56, 11.11, 22.22, 33.33, 22.22],
    //   [0.0, 11.11, 0.0, 0.0, 33.33, 55.56],
    //   [0.0, 10.0, 0.0, 20.0, 40.0, 30.0],
    //   [0.0, 7.69, 0.0, 30.77, 30.77, 30.77],
    //   [0.0, 6.67, 6.67, 6.67, 26.67, 53.33],
    //   [0.0, 5.56, 5.56, 5.56, 44.44, 38.89],
    //   [5.0, 0.0, 10.0, 15.0, 50.0, 20.0],
    //   [0.0, 0.0, 37.5, 12.5, 25.0, 25.0],
    //   [0.0, 0.0, 11.11, 33.33, 55.56, 0.0],
    //   [0.0, 0.0, 9.09, 18.18, 27.27, 45.45],
    //   [0.0, 0.0, 0.0, 28.57, 28.57, 42.86],
    //   [0.0, 0.0, 0.0, 28.57, 14.29, 57.14],
    //   [0.0, 0.0, 0.0, 20.0, 20.0, 60.0],
    //   [0.0, 0.0, 0.0, 14.29, 14.29, 71.43],
    //   [0.0, 0.0, 0.0, 12.5, 50.0, 37.5],
    //   [0.0, 0.0, 0.0, 7.14, 7.14, 85.71],
    //   [0.0, 0.0, 0.0, 6.67, 26.67, 66.67],
    //   [0.0, 0.0, 0.0, 0.0, 75.0, 25.0],
    //   [0.0, 0.0, 0.0, 0.0, 44.44, 55.56],
    //   [0.0, 0.0, 0.0, 0.0, 42.86, 57.14],
    //   [0.0, 0.0, 0.0, 0.0, 37.5, 62.5],
    //   [0.0, 0.0, 0.0, 0.0, 33.33, 66.67],
    //   [0.0, 0.0, 0.0, 0.0, 28.57, 71.43],
    //   [0.0, 0.0, 0.0, 0.0, 23.08, 76.92],
    //   [0.0, 0.0, 0.0, 0.0, 11.11, 88.89],
    // ],
    data: [
      [
        66.67, 10.0, 8.7, 18.75, 0.0, 16.67, 0.0, 0.0, 12.5, 0.0, 5.56, 0.0,
        0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        0.0, 30.0, 26.09, 6.25, 18.18, 0.0, 15.38, 12.5, 0.0, 11.76, 5.56,
        11.11, 10.0, 7.69, 6.67, 5.56, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        33.33, 30.0, 17.39, 6.25, 36.36, 0.0, 0.0, 18.75, 25.0, 0.0, 11.11, 0.0,
        0.0, 0.0, 6.67, 5.56, 10.0, 37.5, 11.11, 9.09, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        0.0, 30.0, 17.39, 12.5, 27.27, 16.67, 7.69, 25.0, 25.0, 17.65, 22.22,
        0.0, 20.0, 30.77, 6.67, 5.56, 15.0, 12.5, 33.33, 18.18, 28.57, 28.57,
        20.0, 14.29, 12.5, 7.14, 6.67, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        0.0, 0.0, 21.74, 31.25, 18.18, 50.0, 38.46, 25.0, 0.0, 17.65, 33.33,
        33.33, 40.0, 30.77, 26.67, 44.44, 50.0, 25.0, 55.56, 27.27, 28.57,
        14.29, 20.0, 14.29, 50.0, 7.14, 26.67, 75.0, 44.44, 42.86, 37.5, 33.33,
        28.57, 23.08, 11.11,
      ],
      [
        0.0, 0.0, 8.7, 25.0, 0.0, 16.67, 38.46, 18.75, 37.5, 52.94, 22.22,
        55.56, 30.0, 30.77, 53.33, 38.89, 20.0, 25.0, 0.0, 45.45, 42.86, 57.14,
        60.0, 71.43, 37.5, 85.71, 66.67, 25.0, 55.56, 57.14, 62.5, 66.67, 71.43,
        76.92, 88.89,
      ],
    ],
    comment: `\
대체로 귀엽거나 친숙한 동물일수록 인기가 많은 경향이 미약하게 있습니다.
하지만 일반적으로 귀엽다고 여겨지는 동물이더라도 게임에서의 종족 디자인이나
개별 캐릭터의 디자인에 따라 생김새가 천차만별이기 때문에
일반화하기에는 무리가 있습니다.
`,
  },
];
