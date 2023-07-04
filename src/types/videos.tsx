export type DownloadChipsType = 'xls' | 'doc' | 'ppt' | 'zip';

type DownloadChips = {
  name: string;
  type: DownloadChipsType;
};

type VideoInfoType = 'agencias' | 'chatbot' | 'marketing-digital' | 'geracao-de-leads' | 'midia-paga';

export type VideoInfo = {
  title: string;
  description: string;
  downloads: Array<DownloadChips>;
  created_at: Date;
  type: VideoInfoType;
};
