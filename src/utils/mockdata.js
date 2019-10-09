import Mock from 'mockjs';

const goodLists = [
  {
    id: 1,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569046888130&di=90d8eaa6657cc07c03ab24d1c44162d3&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20160822%2F765923058c7d466bba29a3675bc62b62_th.jpeg', // 加载的动画 && 加载完没有图片的，给个默认图片
    title: '苏州吴中文体中心',
    rate: 9.8,
    comment: 198,
    address: '江苏省苏州市吴中区宝带东路345号',
    price: 70,
    phone: '13813622998',
    intro: '吴中区现代文体中心，即吴中区体育中心，地处吴中区宝带东路345号。其职能是:丰富和活跃市民体育健身与文化娱乐的需求,为单位开展群众性体育竞赛活动及文化转播活动提供场所和服务，为政府为举办各类大型演出活动、产品展销会、中外企业年会提供场所和服务。',
  },
  {
    id: 2,
    img: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/lbsugc/pic/item/fd039245d688d43fba26238f761ed21b0ef43b3b.jpg',
    title: '广西南宁玖悦健身会所',
    rate: 9.7,
    comment: 61,
    address: '广西壮族自治区南宁市江南区那洪大道37号',
    price: 35,
    phone: '13813622998',
    intro: '吴中区现代文体中心，即吴中区体育中心，地处吴中区宝带东路345号。其职能是:丰富和活跃市民体育健身与文化娱乐的需求,为单位开展群众性体育竞赛活动及文化转播活动提供场所和服务，为政府为举办各类大型演出活动、产品展销会、中外企业年会提供场所和服务。',
  },
  {
    id: 3,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569055600115&di=331ee831f78ad1d7a40adba4591af8c1&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_201903%2F04%2FdeQ5-di3hZ14T1kSgo-7n.jpg',
    title: '上海宝山体育馆',
    rate: 9.6,
    comment: 120,
    address: '上海市宝山区永清路700号',
    price: 85,
    phone: '13813622998',
    intro: '吴中区现代文体中心，即吴中区体育中心，地处吴中区宝带东路345号。其职能是:丰富和活跃市民体育健身与文化娱乐的需求,为单位开展群众性体育竞赛活动及文化转播活动提供场所和服务，为政府为举办各类大型演出活动、产品展销会、中外企业年会提供场所和服务。',
  },
  {
    id: 4,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569055524632&di=e09b3db1a06bf5d11e6bc7653cc402cc&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2Fc38d1c8669d26930.jpg',
    title: '昆山市游泳馆',
    rate: 9.3,
    comment: 221,
    address: '苏州市昆山市珠江北路128号',
    price: 35,
    phone: '13813622998',
    intro: '吴中区现代文体中心，即吴中区体育中心，地处吴中区宝带东路345号。其职能是:丰富和活跃市民体育健身与文化娱乐的需求,为单位开展群众性体育竞赛活动及文化转播活动提供场所和服务，为政府为举办各类大型演出活动、产品展销会、中外企业年会提供场所和服务。',
  },
  {
    id: 5,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569055764637&di=bace26a811c6ae7082012c037e863b08&imgtype=0&src=http%3A%2F%2F11871172.s21i-11.faiusr.com%2F2%2FABUIABACGAAgi42VwQUoipDV-AcwkAM4igI.jpg',
    title: '甘肃兰州二热游泳馆',
    rate: 9.7,
    comment: 61,
    address: '江苏省南通市崇川区青年路与世伦路交汇处南200米',
    price: 55,
    phone: '13813622998',
    intro: '吴中区现代文体中心，即吴中区体育中心，地处吴中区宝带东路345号。其职能是:丰富和活跃市民体育健身与文化娱乐的需求,为单位开展群众性体育竞赛活动及文化转播活动提供场所和服务，为政府为举办各类大型演出活动、产品展销会、中外企业年会提供场所和服务。',
  },
  {
    id: 6,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569650130&di=25073292d0b3e46f2d2ebc32132bc79c&imgtype=jpg&er=1&src=http%3A%2F%2Fhns5j.com%2FUpload%2F2007-6%2F2007062608500586694.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
    title: '厦门市同安区体育馆',
    rate: 9.7,
    comment: 145,
    address: '厦门市同安区银湖路2号',
    price: 95,
    phone: '13813622998',
    intro: '吴中区现代文体中心，即吴中区体育中心，地处吴中区宝带东路345号。其职能是:丰富和活跃市民体育健身与文化娱乐的需求,为单位开展群众性体育竞赛活动及文化转播活动提供场所和服务，为政府为举办各类大型演出活动、产品展销会、中外企业年会提供场所和服务。',
  },
];

const hotGameLists = [
  {
    id: 1,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569058933604&di=9b65fa2cdc178b27cbf4b83a15513dd9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011c2b5aa783a6a80121246df09cec.jpg%401280w_1l_2o_100sh.jpg',
    title: '深圳宝安体育场',
    event: '2019赛季重庆斯威足球队 重庆当代力帆足球俱乐部',
    time: '2019-10-01-10-07',
    price: 50,
  },
  {
    id: 2,
    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1312179485,1421283770&fm=26&gp=0.jpg',
    title: '点拓体育中心',
    event: '第26届大运会羽毛球混合团体测试赛',
    time: '2019-10-02-10-22',
    price: 30,
  },
  {
    id: 3,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569059236769&di=d3aafa1d51f49481cf6b01ae20d362f3&imgtype=0&src=http%3A%2F%2Fi0.sinaimg.cn%2Fty%2Ft%2F2014-09-23%2FU5995P6T12D7343731F44DT20140923131001.jpg',
    title: '上海体育局',
    event: '2014马桥 网球公开赛',
    time: '2019-10-01-10-07',
    price: 50,
  },
  {
    id: 4,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569059236770&di=906dcb12c41b7cbf3d1ba9c149058b1b&imgtype=0&src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F0%2F11%2F64%2F96%2F11649655_433918.jpg',
    title: '水立方',
    event: '2011赛季 花样游泳公开赛',
    time: '2019-10-11-10-15',
    price: 60,
  },
];

const hotSaleLists = [
  {
    id: 1,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569211030059&di=722cc4c67712913ed198d4845eb72bf2&imgtype=0&src=http%3A%2F%2Fimg1.99114.com%2Fgroup10%2FM00%2F6F%2F50%2FrBADs1oU2veAeN7eAAEpg0ZLgT8078.jpg',
    title: '运动背包',
    rate: 9.8,
    price: 248,
  },
  {
    id: 2,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569211114875&di=880b0bae8e59e45b56dddab2f67fa30c&imgtype=0&src=http%3A%2F%2Ftu.ossfiles.cn%3A9186%2Fgroup1%2FM00%2F12%2FB7%2FrBgIBlxzhcnbEzipAAIKGAoSuDs184.jpg',
    title: '护膝',
    rate: 9.7,
    price: 58,
  },
  {
    id: 3,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569211181082&di=70109ef0a0716293a98cdb0e1fe26dde&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft2908%2F119%2F2906106948%2F201334%2F1c71c9b%2F5777840eNeb4db9ec.jpg%2521q70.jpg',
    title: '泳镜',
    rate: 9.2,
    price: 110,
  },
  {
    id: 4,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569805987&di=3794af2944d5c607eff346cf05404383&imgtype=jpg&er=1&src=http%3A%2F%2Fdpic.tiankong.com%2Feg%2Ffs%2FQJ8370787322.jpg',
    title: '游泳漂浮板',
    rate: 9.0,
    price: 70,
  },
  {
    id: 5,
    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3185268517,2013168197&fm=26&gp=0.jpg',
    title: '手臂浮圈',
    rate: 9.9,
    price: 48,
  },
  {
    id: 6,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569806135&di=c46f07495956fa2320d929f5d8cc70c6&imgtype=jpg&er=1&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft1801%2F42%2F1457800378%2F277548%2F2865dc00%2F55ee48e4N4651e100.jpg%21q70.jpg',
    title: '泳衣',
    rate: 9.4,
    price: 315,
  },
];

const ticketLists = Mock.mock({
  'ticketLists|6': [{
    'id|+1': 1,
    'icon': '#icon-youyong',
    'title|1': ['游泳票', '器械健身', '羽毛球票', '篮球票'],
    'price|1': [12, 32, 20, 40, 28],
    'time|1': ['2019-11-20', '2019-11-23', '2019-11-29'],
    'num': 0,
  }],
  'cardLists|6': [{
    'id|+1': 1,
    'icon': '#icon-youyong',
    'title|1': ['游泳卡', '器械健身卡', '羽毛球卡', '篮球卡'],
    'price|1': [12, 32, 20, 40, 28],
    'time|1': ['2019-11-20', '2019-11-23', '2019-11-29'],
    'num': 0,
  }],
});

export {
  goodLists,
  hotGameLists,
  hotSaleLists,
  ticketLists,
};
