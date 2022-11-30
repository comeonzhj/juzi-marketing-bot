export interface TimeConfig {
  morningReport: string,
  morningGasMessage: string,
  newsMessage: string,
  jokeMessage: string,
  afternoonGasMessage:string,
}

export const timeConfig: TimeConfig = {
  // 早报定时发送时间
  morningReport: '19:45',
  // 早上油价定时发送时间
  morningGasMessage: '19:50',
  // 新闻定时发送时间
  newsMessage: '19:55',
  // 开心一刻发送时间
  jokeMessage: '20:00',
  // 下午油价定时发送时间
  afternoonGasMessage: '20:05',
};
