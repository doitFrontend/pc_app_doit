const goodLists = [
  {
    id: 1,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569046888130&di=90d8eaa6657cc07c03ab24d1c44162d3&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20160822%2F765923058c7d466bba29a3675bc62b62_th.jpeg', // 加载的动画 && 加载完没有图片的，给个默认图片
    title: '苏州吴中文体中心',
    rate: 9.8,
    comment: 198,
    address: '苏州吴中文体中心',
    price: 70,
  },
  {
    id: 2,
    img: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/lbsugc/pic/item/fd039245d688d43fba26238f761ed21b0ef43b3b.jpg',
    title: '广西南宁玖悦健身会所',
    rate: 9.7,
    comment: 61,
    address: '广西南宁玖悦健身会所',
    price: 55,
  },
  {
    id: 3,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569055600115&di=331ee831f78ad1d7a40adba4591af8c1&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_201903%2F04%2FdeQ5-di3hZ14T1kSgo-7n.jpg',
    title: '上海宝山体育馆',
    rate: 9.6,
    comment: 120,
    address: '上海市宝山区永清路700号',
    price: 85,
  },
  {
    id: 4,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569055524632&di=e09b3db1a06bf5d11e6bc7653cc402cc&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2Fc38d1c8669d26930.jpg',
    title: '昆山市游泳馆',
    rate: 9.3,
    comment: 221,
    address: '苏州市昆山市珠江北路128号',
    price: 35,
  },
  {
    id: 5,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569055764637&di=bace26a811c6ae7082012c037e863b08&imgtype=0&src=http%3A%2F%2F11871172.s21i-11.faiusr.com%2F2%2FABUIABACGAAgi42VwQUoipDV-AcwkAM4igI.jpg',
    title: '甘肃兰州二热游泳馆',
    rate: 9.7,
    comment: 61,
    address: '江苏省南通市崇川区青年路与世伦路交汇处南200米',
    price: 55,
  },
  {
    id: 6,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569650130&di=25073292d0b3e46f2d2ebc32132bc79c&imgtype=jpg&er=1&src=http%3A%2F%2Fhns5j.com%2FUpload%2F2007-6%2F2007062608500586694.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
    title: '厦门市同安区体育馆',
    rate: 9.7,
    comment: 145,
    address: '厦门市同安区银湖路2号',
    price: 95,
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

export {
  goodLists,
  hotGameLists,
};
