const PowerSwapStateColor = {
  '空闲': 'free',
  '充电中': 'hint',
  '正在放电': 'hint',
  '换电中': 'charging',
  '充电完成': 'success',
  '其他': 'success',
  '未知': 'hint',
  '未检测到电池': 'error',

}

const EMeterColor = {
  '连通': 'charging',
  '断开': 'warning'
}

const WaterCoolingColor = {
  '运行中': 'charging',
  '空闲': 'free'

}

const WorkingStatusColor = {
  '自动': 'hint',
  '半自动': 'charging',
  '人工': 'success',
  '待机': 'free',
  '中止': 'error',
  '未知': 'warning'
}

const BasicInfoColor = {
  '空闲': 'free',
  '换电中': 'hint'
}

export { PowerSwapStateColor,EMeterColor,WaterCoolingColor,WorkingStatusColor,BasicInfoColor };

