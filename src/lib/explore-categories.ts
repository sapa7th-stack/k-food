export const exploreCategories = [
  { title: 'Rice', ko: '밥·죽', emoji: '🍚' },
  { title: 'Noodles', ko: '면', emoji: '🍜' },
  { title: 'Soup & Stew', ko: '국·찌개', emoji: '🍲' },
  { title: 'Korean BBQ', ko: '고기·구이', emoji: '🥩' },
  { title: 'Kimchi', ko: '김치', emoji: '🥬' },
  { title: 'Banchan', ko: '반찬', emoji: '🥢' },
  { title: 'Street Food', ko: '분식', emoji: '🌶️' },
  { title: 'Dessert', ko: '디저트', emoji: '🍡' },
];
export function classifyCandidate(row: { name_ko: string; source_category: string }) {
  const n = row.name_ko.replace(/\s/g, '');
  if (/약식|약과|한과|양갱|푸딩|쿠키|케이크|아이스크림|화채|정과|다식|경단/.test(n)) return 'Dessert';
  if (/국수|냉면|우동|라면|파스타|스파게티|잡채|수제비|소바|볶음면|쫄면/.test(n)) return 'Noodles';
  if (row.source_category === '국&찌개' || (!/그라탕/.test(n) && /찌개|전골|국$|탕$|냉국/.test(n))) return 'Soup & Stew';
  if (row.source_category === '밥' || /볶음밥|덮밥|비빔밥|쌈밥|주먹밥|초밥|리조또|김밥|죽$/.test(n)) return 'Rice';
  if (/김치|깍두기|소박이/.test(n)) return 'Kimchi';
  if (/떡볶이|만두|핫도그|크로켓|고로케|피자|토스트|샌드위치|버거|어묵|꼬치|튀김/.test(n)) return 'Street Food';
  if (/불고기|갈비|스테이크|너비아니|떡갈비|삼겹|보쌈|수육|닭.*구이|오리.*구이|돼지.*구이|소고기.*구이|쇠고기.*구이|차돌.*구이/.test(n)) return 'Korean BBQ';
  return 'Banchan';
}
