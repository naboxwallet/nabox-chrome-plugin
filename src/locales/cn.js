import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const cn = {

  header: {
    header1: "主网",
    header2: "测试网",
    header3: "Switch To English",
    header4: "切换账户",
    header5: "创建账户",
    header6: "导入账户",
    header7: "当前版本："
  },

  public: {
    confirm: "确认",
    cancel: "取消",
    symbol: "币种",
    chain: "链",
    amount: "金额",
    total: "总量",
    available: "可用",
    lock: "锁定",
    unlock: "解锁",
    all: "全部",
    next: "下一步",
    fee: "手续费",
    remark: "备注",
    createTime: "时间",
    status: "状态",
    percent: "占比",
    copySuccess: "复制成功",
    create: "创建账户",
    setPassword: "设置密码",
    import: "导入账户",
    password: "密码",
    checkPassword: "确认密码",
    oldPassword: "原密码",
    newAddress: "新建账户",
    copy: "复制",
    network: "网络",
    createError: "创建账户异常，请稍后重试",
    txType: "交易类型",
    accountOverview: "账户总览",
    onTheView: "展开视图",
    loading: "加载中...",
    noMore: "没有更多了",
    low: "低",
    centre: "中",
    high: "高",
    custom: "自定义",
    feedback: "问题反馈",
    confirmHeight: "确认高度",
    know: "请认真阅读已知晓",
    recipientNetwork: "接受者网络",
    send: "发送地址",
    to: "接受地址",
    toResend: "重新发送",
    managementAccounts :"管理当前账户",
    contractAddress:"合约地址",
    contractMethod:"合约方法",
    contractParameters:"合约参数"
  },

  type: {
    "undefined": '',
    0: "全部交易",
    1: "共识奖励",
    2: "转账交易",
    3: "设置别名",
    4: "创建节点",
    5: "加入 Staking",
    6: "退出 Staking",
    7: "黄牌惩罚",
    8: "红牌惩罚",
    9: "注销节点",
    10: "跨链交易",
    11: "注册跨链",
    12: "注销跨链",
    13: "新增跨链资产",
    14: "注销跨链资产",
    15: "创建合约",
    16: "调用合约",
    17: "删除合约",
    18: "合约转账",
    19: "合约返还",
    20: "合约创建节点",
    21: "合约参与共识",
    22: "合约退出共识",
    23: "合约注销节点",
    24: "验证人变更",
    25: "验证人初始化",
    26: "Token跨链转账",
    27: "资产注册登记",
    28: "追加保证金",
    29: "撤销保证金",
    30: "喂价交易",
    31: "最终喂价交易",
    32: "批量退出 Staking",
    33: "合并交易",
    228: "创建交易对",
    229: "挂单委托",
    230: "挂单撤销",
    231: "挂单成交",
    232: "修改交易对",
    233: "撤单交易确认",
    40: "确认虚拟银行变更",
    41: "虚拟银行变更",
    42: "跨链转入",
    43: "跨链转出",
    44: "确认提现成功",
    45: "发起提案",
    46: "提案投票",
    47: "异构链交易手续费补贴",
    48: "虚拟银行初始化异构链",
    49: "异构链合约资产注册",
    50: "异构链合约资产注册完成",
    51: "确认提案执行交易",
    52: "重置异构链(合约)虚拟银行",
    53: "确认重置异构链(合约)虚拟银行",
    56: "追加手续费",
    60: "已注册跨链的链信息变更",
  },

  login: {
    login1: "请输入密码",
    login2: "请输入由字母和数字组合的8-20位密码",
    login3: "请再次输入密码",
    login4: "两次输入密码不一致",
    login5: "使用私钥重置, ",
    login6: "点击导入",
    login7: "新建账户",
    login8: "请输入私钥",
    login9: "私钥格式错误",
    login10: "账户名称",
    login11: "密码错误"
  },

  home: {
    home1: "应用",
    home2: "跨链划转",
    home3: "跨链交易",
    home4: "资产总览",
    home5: "账户设置",
    home6: "总资产",
    home7: "跨链",
    home8: "转账",
    home9: "资产",
    home91: "资产(网络)",
    home10: "交易记录",
    home11: "隐藏小额资产",
    home12: "资产总览",
    home13: "当前已连接应用",
    home14: "断开",
    home15: "连接当前网站",
    home16: "使用支持",
    home17: "官网",
    home18: "提交Token",
    home19: "Bug提交",
    home20: "该网络休眠中，请待会儿再回来看看",
    home21: "其余网络正常运转，请放心使用",
  },

  innerTransfer: {
    innerTransfer1: "跨链",
    innerTransfer2: "Nabox的跨链划转功能是通过Nerve跨链交易实现，因此需消耗链上交易手续费，划转到账的时间取决于进行跨链交易的两条链上的交易确认时间",
    innerTransfer3: "从",
    innerTransfer4: "到"
  },

  transfer: {
    transfer1: "请输入正确的地址",
    transfer2: "请输入交易数量",
    transfer3: "金额必须为数字并且小数点后最多位数为",
    transfer4: "最大转出金额为",
    transfer5: "请输入gas",
    transfer6: "Gag Limit范围;1~10000000",
    transfer7: "请输入price",
    transfer8: "Price必须大于1",
    transfer9: "高级选项",
    transfer10: "验证调用合约交易异常",
    transfer11: "高级选项",
    transfer12: "预估调用合约交易的gas异常",
    transfer13: "交易已发出，等待区块确认",
    transfer14: "加速",
    transfer15: "请输入正确的转出地址",
    transfer16: "请选择跨链网络",
    transfer17: "慢",
    transfer18: "中",
    transfer19: "快",
    transfer20: "自定义",
    transfer21: "手续费不足",
    transfer22: "token资产需先授权 ",
    transfer23: "点击授权",
    transfer24: "该资产无法跨链到",
    transfer25: "授权成功，请稍后刷新重试",
    transfer26: "该两个网络之间的交易暂不支持",
    transfer27: "未查询到转账资产信息，请在插件中手动添加或稍后重试",
  },

  transferConfirm: {
    transferConfirm1: "交易确认",
    transferConfirm2: "发送者",
    transferConfirm3: "接收者",
  },

  crossTxList: {
    crossTxList1: "交易记录",
    crossTxList2: "网络",
    crossTxList3: "币种",
    crossTxList4: "查询",
    crossTxList5: "Nerve账户没有NVT？兑换"
  },

  transferInfo: {
    transferInfo1: "交易详情"
  },

  accountManage: {
    accountManage1: "账户设置",
    accountManage2: "Keystore备份",
    accountManage3: "私钥备份",
    accountManage4: "修改密码",
    accountManage5: "移除账户",
    accountManage6: "修改密码成功",
    accountManage7: "请输入密码",
    accountManage8: "密码错误",
    accountManage9: "移除成功后，账户信息将被彻底删除，请确认已备份好账户私钥",
    accountManage10: "移除账户成功",
  },

  addAsset: {
    addAsset1: "管理资产",
    addAsset2: "请输入Token合约地址",
    addAsset3: "请输入Token名称",
  },

  assetInfo: {
    // assetInfo1:: ""
  },

  authorization: {
    authorization1: "请求获取钱包地址",
    authorization2: "该网站将获得以下权限",
    authorization3: "读取账户信息",
    authorization4: "确认授权",
    authorization5: "请勾选可连接的账户",
    authorization6: "插件当前网络为: ",
    authorization7: "申请连接地址为: ",
  },
  notification: {
    notification1: "账户: ",
    notification2: "来源: ",
    notification3: "正在签名",
    notification4: "签名",
    notification5: "请求签名账户未连接插件",
    notification6: "请求签名",
    notification7: "发送交易的账户不是插件当前默认账户",
    notification8: "燃料价格(GWEI)",
    notification9: "燃料限制",
  },

  statusType: {
    'undefined': '',
    '-1': '失败',
    1: "已确认",
    0: "未确认"
  },

  tips: {
    tip0: "请输入转账地址",
    tip1: "请输入转账金额",
    tip2: "选择资产",
    tip3: "我已知晓，直接向交易所地址跨链充值将造成资产丢失",
    tip4: "请输入转账金额!",
    tip5: "您最多可以用: ",
    tip6: "跨链交易签名失败",
    tip7: "链内转账（ETH BSC Heco）组装交易失败",
    tip8: "跨链交易签名失败",
    tip9: "请输入接受地址",
    tip10: "请输入正确接受地址!",
    tip11: "暂不支持，接受地址为多签地址!",
    tip12: "交易广播中...",
    tip13: "交易组装中...",
    tip14: "跨链交易，请勾选我已知晓!",
    tip15: "该资产暂不支持跨链到",
    tip16: "请选择网络",
    tip17: "确认交易",
    tip18: "请选择授权账户",
    tip19: "我已知晓，直接往交易所地址充值可能造成资产丢失",
  },

  crossStatusType: {
    0: "跨链交易发起链未确认",
    1: "跨链交易发起链已确认",
    2: "跨链交易NERVE链已广播交易待确认",
    3: "跨链交易NERVE链广播失败",
    4: "目标链已确认",
    5: "跨链交易失败",
  },
  ...zhLocale
};
export default cn;
