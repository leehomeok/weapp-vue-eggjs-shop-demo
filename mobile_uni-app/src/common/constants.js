// 常量

export default {
  // 用户信息
  PLATFORM: 'mobile',
  USER_IDENTITY: 'customer',
  NICK_NAME: 'userName',
  SESSION: '3rd_session',
  MERCHANT_UUID: '9ff57530-6afb-11e9-96c7-852592cbf8e8', //根据不同商家手动配置

  // 订单
  ORDER_TABS: [
    { id: 'all', title: '全部' },
    { id: 'initial', title: '待付款' },
    { id: 'audited', title: '已接单' },
    { id: 'dispatching', title: '配送中' },
    { id: 'completed', title: '已完成' },
    { id: 'canceled', title: '已取消' }
  ],
  ORDER_STATUS_LABELS: {
    initial: '等待付款',
    audited: '商家已确认',
    dispatching: '正在配送',
    completed: '已完成',
    canceled: '已取消',
  },

  // 长度相关
  INPUT_LENGTH: 200,
  TEXTAREA_LENGTH: 200,

  // 正则
  CELLPHONE_REGEX: /(^(0|86|17951)?1[0-9]{10}$)/,
  TELEPHONE_CELLPHONE_REGEX: /(^(0[0-9]{2,3}\\-)([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?$)|((400|800)([0-9\\-]{7,10}))|(^(0|86|17951)?1[0-9]{10}$)/,
  PASSWORD_REGEX: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,

  // 错误提示
  SERVICE_ERROR_TIP: '网络连接中断，请检查网络后重试或者联系客服',
};