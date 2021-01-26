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
    import: "导入账户",
    password: "密码",
    checkPassword: "确认密码",
    oldPassword: "原密码",
    newAddress: "新建账户",
    copy: "复制",
    network: "网络",
    createError: "创建账户异常，请稍后重试",
    txType: "交易类型",
  },

  type: {
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
    login5: "已有账户, ",
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
    home7: "链内转账",
    home8: "跨链转账",
    home9: "资产",
    home10: "交易记录",
    home11: "隐藏小额资产",
    home12: "资产总览",
    home13: "当前已连接应用",
    home14: "断开",
    home15: "连接当前网站"
  },

  innerTransfer: {
    innerTransfer1: "内部转账",
    innerTransfer2: "Nabox的划转功能是通过跨链交易实现，因此需消耗交易手续费，划转到账的时间取决于进行跨链交易的两条链上的交易确认时间。",
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
    transfer22: "token资产需先授权，才可跨链转入NerveNetwork",
    transfer23: "点击授权",
    transfer24: "该资产无法跨链到",
    transfer25: "授权成功，请稍后刷新重试",
    transfer26: "该两个网络之间的交易暂不支持",
    transfer27: "未查询到转账资产信息，请在插件中手动添加或稍后重试",
  },

  transferConfirm: {
    transferConfirm1: "转账确认",
    transferConfirm2: "发送者",
    transferConfirm3: "接收者",
  },

  crossTxList: {
    crossTxList1: "交易记录",
    crossTxList2: "网络",
    crossTxList3: "币种",
    crossTxList4: "查询"
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
    addAsset2: "请输入Token名称或合约地址",
  },

  assetInfo: {
    // assetInfo1:: ""
  },

  authorization: {
    authorization1: "请求获取钱包地址",
    authorization2: "该网站将获得以下权限",
    authorization3: "读取账户信息",
    authorization4: "确认授权",
    authorization5: "请选择需要连接的网络",
  },

  statusType: {
    1: "已确认",
    0: "未确认"
  },

  crossStatusType: {
    0: "跨链交易本链未确认",
    1: "跨链交易本链已确认",
    2: "跨链交易NERVE链已广播交易待确认",
    3: "跨链交易NERVE链广播失败",
    4: "跨链交易目标链已确认",
    5: "跨链交易失败",
  },
  ...zhLocale
};
export default cn;
