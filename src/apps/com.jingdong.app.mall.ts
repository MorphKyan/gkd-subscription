import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      enable: false,
      key: 1,
      name: '弹窗-开启消息通知',
      desc: '自动点击正下方的【x】',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '[id="com.jingdong.app.mall:id/be8"]',
          snapshotUrls: 'https://i.gkd.li/import/181818',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '购物车界面-支付成功广告弹窗',
      desc: '自动点击正下方的【x】',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          snapshotUrls: 'https://i.gkd.li/import/13446362',
        },
      ],
    },
  ],
});
